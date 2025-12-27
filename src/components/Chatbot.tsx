import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, User, Bot } from 'lucide-react';

const ChatbotComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: "Hi! 👋 I'm here to help you learn about Bungee Fitness. Ask me anything!",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const quickReplies = [
    "What is Bungee Workout?",
    "Class Schedule",
    "Pricing",
    "Book a Class",
    "Contact Us"
  ];

  const botResponses: Record<string, string> = {
    "what is bungee workout": "Bungee Workout is a low-impact, high-intensity cardio workout where you're attached to a bungee cord! You'll experience the sensation of flying while getting a full-body workout. It combines cardio, strength training, and tons of fun! 🦋",
    "bungee workout": "Bungee Workout is a low-impact, high-intensity cardio workout where you're attached to a bungee cord! You'll experience the sensation of flying while getting a full-body workout. It combines cardio, strength training, and tons of fun! 🦋",
    "beginner": "Absolutely! We welcome all fitness levels. Our instructors will guide you through every move safely. We offer Bungee Fitness, Bungee Yoga, Sling Bungee, and Family Bungee classes. 💪",
    "beginners": "Absolutely! We welcome all fitness levels. Our instructors will guide you through every move safely. We offer Bungee Fitness, Bungee Yoga, Sling Bungee, and Family Bungee classes. 💪",
    "book": "You can book directly through our website! Check our Classes section for available time slots, or click the 'Book Now' button. Limited spots available! ⚡",
    "booking": "You can book directly through our website! Check our Classes section for available time slots, or click the 'Book Now' button. Limited spots available! ⚡",
    "price": "Our pricing varies by class type. Please check our Classes section or contact us directly for detailed pricing information. We offer trial classes for first-timers! 💰",
    "pricing": "Our pricing varies by class type. Please check our Classes section or contact us directly for detailed pricing information. We offer trial classes for first-timers! 💰",
    "cost": "Our pricing varies by class type. Please check our Classes section or contact us directly for detailed pricing information. We offer trial classes for first-timers! 💰",
    "location": "We're located in Singapore! We're Singapore's only Bungee Fitness Studio. Contact us for exact location details and directions. 📍",
    "where": "We're located in Singapore! We're Singapore's only Bungee Fitness Studio. Contact us for exact location details and directions. 📍",
    "safe": "Yes! Safety is our top priority. All equipment is professionally installed and regularly inspected. Our certified instructors ensure proper harness fitting and technique. You're in good hands! ✅",
    "safety": "Yes! Safety is our top priority. All equipment is professionally installed and regularly inspected. Our certified instructors ensure proper harness fitting and technique. You're in good hands! ✅",
    "class schedule": "We offer 20+ classes weekly! Our classes include Bungee Fitness (45 mins), Bungee Yoga (60 mins), Sling Bungee (50 mins), and Family Bungee (40 mins). Check our Classes section for the full schedule! 📅",
    "classes": "We offer Bungee Fitness, Bungee Yoga, Sling Bungee, and Family Bungee classes. Each class is designed to give you a full-body workout with different intensity levels. Perfect for everyone! 🎯",
    "contact": "You can reach us through our contact form on the website, or scroll down to our Contact section for phone and email details. We'd love to hear from you! 📧",
    "contact us": "You can reach us through our contact form on the website, or scroll down to our Contact section for phone and email details. We'd love to hear from you! 📧",
    "hours": "Our class schedules vary throughout the week. Please check our Classes section or contact us for specific timings. We have morning, afternoon, and evening slots available! ⏰",
    "hi": "Hello! 👋 How can I help you today? Feel free to ask about our classes, pricing, or anything else!",
    "hello": "Hi there! 👋 Welcome to Elin Dance Studio. What would you like to know about Bungee Fitness?",
    "hey": "Hey! 👋 Ready to defy gravity? Ask me anything about our bungee workout classes!",
    "thanks": "You're welcome! 😊 If you have any other questions, I'm here to help!",
    "thank you": "Happy to help! 😊 Feel free to book a class or reach out if you need anything else!"
  };

  const getBotResponse = (userMessage: string) => {
    const lowerMessage = userMessage.toLowerCase();
    
    for (const [key, response] of Object.entries(botResponses)) {
      if (lowerMessage.includes(key)) {
        return response;
      }
    }
    
    return "I'm not sure about that, but I'd love to help! You can ask me about our classes, pricing, location, safety, or booking. Or feel free to contact us directly for more specific questions! 😊";
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;

    const userMessage = {
      type: 'user',
      text: inputValue,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = {
        type: 'bot',
        text: getBotResponse(inputValue),
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleQuickReply = (reply: string) => {
    setInputValue(reply);
    setTimeout(() => {
      handleSendMessage();
    }, 100);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Bubble Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-cyan rounded-full shadow-2xl hover:glow-cyan transition-all duration-300 hover:scale-110 flex items-center justify-center z-50 group"
          aria-label="Open chat"
        >
          <MessageCircle size={28} className="text-white" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-destructive rounded-full animate-pulse"></span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-[350px] md:w-[400px] h-[600px] bg-background rounded-2xl shadow-2xl flex flex-col z-50 animate-slide-in-right border-2 border-primary/20">
          {/* Header */}
          <div className="bg-gradient-cyan p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <Bot size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="text-white font-bold">Elin Assistant</h3>
                <p className="text-white/80 text-xs">Online • Ready to help</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 rounded-full p-2 transition-all duration-300"
              aria-label="Close chat"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-muted/30">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
              >
                <div className={`flex items-end space-x-2 max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${message.type === 'user' ? 'bg-primary/10' : 'bg-background'}`}>
                    {message.type === 'user' ? (
                      <User size={18} className="text-primary" />
                    ) : (
                      <Bot size={18} className="text-primary" />
                    )}
                  </div>
                  <div>
                    <div
                      className={`px-4 py-2 rounded-2xl ${
                        message.type === 'user'
                          ? 'bg-gradient-cyan text-white rounded-br-none'
                          : 'bg-background text-foreground rounded-bl-none shadow-md'
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                    </div>
                    <p className={`text-xs text-muted-foreground mt-1 ${message.type === 'user' ? 'text-right' : 'text-left'}`}>
                      {message.time}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start animate-fade-in">
                <div className="flex items-end space-x-2">
                  <div className="w-8 h-8 rounded-full bg-background flex items-center justify-center">
                    <Bot size={18} className="text-primary" />
                  </div>
                  <div className="bg-background px-4 py-3 rounded-2xl rounded-bl-none shadow-md">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies */}
          {messages.length === 1 && (
            <div className="px-4 py-3 bg-background border-t border-border">
              <p className="text-xs text-muted-foreground mb-2 font-semibold">Quick Questions:</p>
              <div className="flex flex-wrap gap-2">
                {quickReplies.map((reply, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickReply(reply)}
                    className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-medium hover:bg-primary/20 transition-all duration-300 border border-primary/20"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Area */}
          <div className="p-4 bg-background border-t border-border rounded-b-2xl">
            <div className="flex space-x-2">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border-2 border-border rounded-full focus:border-primary focus:outline-none text-sm bg-background text-foreground"
              />
              <button
                onClick={handleSendMessage}
                disabled={inputValue.trim() === ''}
                className="w-10 h-10 bg-gradient-cyan rounded-full flex items-center justify-center hover:glow-cyan transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110"
                aria-label="Send message"
              >
                <Send size={18} className="text-white" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatbotComponent;
