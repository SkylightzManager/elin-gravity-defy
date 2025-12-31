import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, User, Bot, Mail, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface Message {
  type: 'user' | 'bot';
  text: string;
  time: string;
  showInquiryButton?: boolean;
}

const ChatbotComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      type: 'bot',
      text: "Hi! 👋 I'm here to help you learn about Bungee Fitness. Ask me anything!",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      showInquiryButton: true
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showInquiryForm, setShowInquiryForm] = useState(false);
  const [inquiryFormData, setInquiryFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    subject: 'Chatbot Inquiry'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  // Enhanced bot responses with more keywords and smarter matching
  const botResponses: Record<string, string> = {
    // Bungee workout related
    "what is bungee workout": "Bungee Workout is a low-impact, high-intensity cardio workout where you're attached to a bungee cord! You'll experience the sensation of flying while getting a full-body workout. It combines cardio, strength training, and tons of fun! 🦋",
    "bungee workout": "Bungee Workout is a low-impact, high-intensity cardio workout where you're attached to a bungee cord! You'll experience the sensation of flying while getting a full-body workout. It combines cardio, strength training, and tons of fun! 🦋",
    "what is bungee": "Bungee fitness is an innovative workout that uses bungee cords attached to the ceiling. It's perfect for all fitness levels and provides a unique flying experience while burning calories! 🚀",
    "bungee fitness": "Bungee Fitness is our signature class! It's a 45-minute full-body workout that combines cardio, strength, and flexibility. Perfect for beginners and advanced fitness enthusiasts alike! 💪",
    "bungee yoga": "Bungee Yoga combines traditional yoga poses with bungee support, making it easier to achieve deeper stretches and maintain balance. It's a 60-minute class perfect for flexibility and relaxation! 🧘",
    "sling bungee": "Sling Bungee is a 50-minute class using sling equipment for suspension training. It targets core strength, balance, and flexibility while being gentle on joints! 🎯",
    "family bungee": "Family Bungee is a 40-minute fun-filled class for families! Kids and parents can enjoy bungee fitness together. Perfect for ages 4-66! 👨‍👩‍👧‍👦",
    "kids bungee": "Kids Bungee classes are specially designed for children! They're safe, fun, and help develop coordination, strength, and confidence. Perfect for active kids! 🎈",
    
    // Beginner related
    "beginner": "Absolutely! We welcome all fitness levels. Our instructors will guide you through every move safely. We offer Bungee Fitness, Bungee Yoga, Sling Bungee, and Family Bungee classes. 💪",
    "beginners": "Absolutely! We welcome all fitness levels. Our instructors will guide you through every move safely. We offer Bungee Fitness, Bungee Yoga, Sling Bungee, and Family Bungee classes. 💪",
    "new to bungee": "No worries! All our classes are beginner-friendly. Our certified instructors provide step-by-step guidance and ensure proper harness fitting. Your first class will be amazing! ✨",
    "first time": "Welcome! First-timers are always welcome. We offer trial classes so you can experience bungee fitness risk-free. Our instructors will make sure you feel comfortable and safe! 🎉",
    "never done": "That's perfectly fine! Many of our members started as complete beginners. Our instructors are experts at making first-timers feel comfortable and confident! 🌟",
    
    // Booking related
    "book": "You can book directly through our website! Check our Classes section for available time slots, or click the 'Book Now' button. Limited spots available! ⚡",
    "booking": "You can book directly through our website! Check our Classes section for available time slots, or click the 'Book Now' button. Limited spots available! ⚡",
    "reserve": "You can reserve your spot through our website! Visit the Classes section to see available slots and book your preferred time. Don't wait - spots fill up quickly! 📅",
    "appointment": "You can schedule your class through our website! Check the Classes section for available time slots and book online. We also offer walk-ins if space is available! 🗓️",
    
    // Pricing related
    "price": "Our pricing varies by class type. Please check our Classes section or contact us directly for detailed pricing information. We offer trial classes for first-timers! 💰",
    "pricing": "Our pricing varies by class type. Please check our Classes section or contact us directly for detailed pricing information. We offer trial classes for first-timers! 💰",
    "cost": "Our pricing varies by class type. Please check our Classes section or contact us directly for detailed pricing information. We offer trial classes for first-timers! 💰",
    "how much": "Pricing depends on the class type and package you choose. We offer single classes, packages, and memberships. Check our Classes section for details or contact us for personalized pricing! 💵",
    "expensive": "We offer competitive pricing with various packages to suit different budgets. We also have trial classes and special promotions. Contact us to find the best option for you! 💎",
    
    // Location related
    "location": "We're located in Singapore! We're Singapore's only Bungee Fitness Studio. Contact us for exact location details and directions. 📍",
    "where": "We're located in Singapore! We're Singapore's only Bungee Fitness Studio. Contact us for exact location details and directions. 📍",
    "address": "We're in Singapore! For our exact address and directions, please contact us directly or check our Contact section. We're easily accessible by public transport! 🗺️",
    "near": "We're located in Singapore, near Alexandra & Labrador Park MRT stations. Contact us for exact location and directions! 🚇",
    "singapore": "Yes! We're Singapore's premier Bungee Fitness Studio. We're conveniently located near Alexandra & Labrador Park MRT stations. Contact us for exact address! 🇸🇬",
    
    // Safety related
    "safe": "Yes! Safety is our top priority. All equipment is professionally installed and regularly inspected. Our certified instructors ensure proper harness fitting and technique. You're in good hands! ✅",
    "safety": "Yes! Safety is our top priority. All equipment is professionally installed and regularly inspected. Our certified instructors ensure proper harness fitting and technique. You're in good hands! ✅",
    "dangerous": "Not at all! Bungee fitness is very safe when done with proper instruction. All our equipment is certified and regularly maintained. Our instructors are trained to ensure your safety! 🛡️",
    "injuries": "Safety is our #1 priority! We use professional-grade equipment, provide proper harness fitting, and our certified instructors guide you through every move. Injuries are extremely rare! 🏥",
    "equipment": "All our bungee equipment is professionally installed, certified, and regularly inspected. We use industry-standard harnesses and safety systems. Your safety is guaranteed! 🔒",
    
    // Schedule related
    "class schedule": "We offer 20+ classes weekly! Our classes include Bungee Fitness (45 mins), Bungee Yoga (60 mins), Sling Bungee (50 mins), and Family Bungee (40 mins). Check our Classes section for the full schedule! 📅",
    "schedule": "We offer 20+ classes weekly! Our classes include Bungee Fitness (45 mins), Bungee Yoga (60 mins), Sling Bungee (50 mins), and Family Bungee (40 mins). Check our Classes section for the full schedule! 📅",
    "classes": "We offer Bungee Fitness, Bungee Yoga, Sling Bungee, and Family Bungee classes. Each class is designed to give you a full-body workout with different intensity levels. Perfect for everyone! 🎯",
    "hours": "Our class schedules vary throughout the week. Please check our Classes section or contact us for specific timings. We have morning, afternoon, and evening slots available! ⏰",
    "when": "We have classes throughout the week! Check our Classes section for the complete schedule. We offer morning, afternoon, and evening sessions to fit your schedule! 🕐",
    "timing": "We have flexible class timings throughout the week. Morning, afternoon, and evening slots are available. Check our Classes section for the complete schedule! ⏱️",
    
    // Contact related
    "contact": "Here's how to reach us:\n📞 Phone: +65 1234 5678\n📧 Email: hello@elindance.sg\n📍 Location: Near Alexandra & Labrador Park MRT, Singapore\n\nYou can also use our contact form on the website or send an inquiry through this chat! We'd love to hear from you! 📧",
    "contact us": "Here's how to reach us:\n📞 Phone: +65 1234 5678\n📧 Email: hello@elindance.sg\n📍 Location: Near Alexandra & Labrador Park MRT, Singapore\n\nYou can also use our contact form on the website or send an inquiry through this chat! We'd love to hear from you! 📧",
    "email": "Our email address is: hello@elindance.sg 📧\n\nYou can email us directly or use the contact form on our website. We typically respond within 24 hours! You can also send an inquiry through this chat! ✉️",
    "phone": "Our phone number is: +65 1234 5678 📞\n\nYou can call us during our operating hours (Mon-Sun: 8am - 10pm). You can also reach us through email (hello@elindance.sg) or send an inquiry through this chat! We're here to help! 📞",
    "phone number": "Our phone number is: +65 1234 5678 📞\n\nCall us anytime during our operating hours (Mon-Sun: 8am - 10pm). You can also email us at hello@elindance.sg or send an inquiry through this chat! 📞",
    "call": "You can call us at: +65 1234 5678 📞\n\nOur operating hours are Mon-Sun: 8am - 10pm. You can also email us at hello@elindance.sg or send an inquiry through this chat! 📞",
    
    // Greetings
    "hi": "Hello! 👋 How can I help you today? Feel free to ask about our classes, pricing, or anything else!",
    "hello": "Hi there! 👋 Welcome to Elin Dance Studio. What would you like to know about Bungee Fitness?",
    "hey": "Hey! 👋 Ready to defy gravity? Ask me anything about our bungee workout classes!",
    "good morning": "Good morning! ☀️ How can I help you learn about Bungee Fitness today?",
    "good afternoon": "Good afternoon! 🌤️ What would you like to know about our classes?",
    "good evening": "Good evening! 🌙 Ready to explore Bungee Fitness? Ask me anything!",
    
    // Thanks
    "thanks": "You're welcome! 😊 If you have any other questions, I'm here to help!",
    "thank you": "Happy to help! 😊 Feel free to book a class or reach out if you need anything else!",
    "thank": "You're very welcome! 😊 Feel free to ask more questions or book a class anytime!",
    
    // Benefits
    "benefits": "Bungee fitness offers amazing benefits: low-impact on joints, full-body workout, improved balance, increased flexibility, calorie burning, and most importantly - it's super fun! 🎉",
    "benefit": "Bungee fitness offers amazing benefits: low-impact on joints, full-body workout, improved balance, increased flexibility, calorie burning, and most importantly - it's super fun! 🎉",
    "why": "Bungee fitness is unique because it's low-impact yet high-intensity, fun, and suitable for all fitness levels. It helps with weight loss, strength building, and flexibility - all while feeling like you're flying! 🚀",
    "good for": "Bungee fitness is great for weight loss, building strength, improving flexibility, reducing joint stress, and having fun! It's perfect for people of all ages and fitness levels! 💪",
    
    // Age/Requirements
    "age": "Our classes are suitable for ages 4-66! We have classes for kids, adults, and families. Everyone is welcome regardless of age or fitness level! 👶👴",
    "old": "Age is just a number! We welcome participants from 4 to 66 years old. Our classes are designed to be safe and enjoyable for everyone! 🎂",
    "requirements": "No special requirements! Just come with comfortable workout clothes and a positive attitude. We provide all equipment including harnesses. No prior experience needed! 🎽",
    "what to bring": "Just bring yourself and comfortable workout clothes! We provide all the bungee equipment including harnesses. Water is recommended to stay hydrated! 💧",
    
    // Corporate
    "corporate": "Yes! We offer Corporate Teambuilding sessions. Perfect for team bonding, stress relief, and fun activities. Contact us for group bookings and customized packages! 🏢",
    "teambuilding": "We offer amazing Corporate Teambuilding sessions! Great for team bonding and fun. Contact us for group bookings and we'll customize a session for your team! 👔",
    "group": "We welcome group bookings! Perfect for corporate events, birthday parties, or just friends wanting to try something new together. Contact us for group rates! 🎉",
  };

  const getBotResponse = (userMessage: string): { response: string; showForm: boolean } => {
    const lowerMessage = userMessage.toLowerCase().trim();
    
    // Check for exact matches first
    for (const [key, response] of Object.entries(botResponses)) {
      if (lowerMessage === key || lowerMessage.includes(key)) {
        return { response, showForm: false };
      }
    }
    
    // If no match found, show form option
    return {
      response: "I'm not sure about that, but I'd love to help! Would you like to send us an inquiry? Our team will get back to you with detailed information! 😊",
      showForm: true
    };
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;

    const userMessage: Message = {
      type: 'user',
      text: inputValue,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    const userInput = inputValue;
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const { response, showForm } = getBotResponse(userInput);
      const botResponse: Message = {
        type: 'bot',
        text: response,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        showInquiryButton: true // Always show inquiry button on all bot messages
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
      
      // If bot couldn't help, automatically suggest the form
      if (showForm) {
        setTimeout(() => {
          setShowInquiryForm(true);
        }, 500);
      }
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

  const handleSendInquiry = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create a hidden form and submit it
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'https://formsubmit.co/skylightzmanager@gmail.com';
    form.style.display = 'none';

    // Add form fields
    const fields = {
      _captcha: 'false',
      _template: 'table',
      _subject: `Chatbot Inquiry: ${inquiryFormData.subject} - Elin Dance Studio`,
      name: inquiryFormData.name,
      email: inquiryFormData.email,
      phone: inquiryFormData.phone,
      message: inquiryFormData.message,
      source: 'Chatbot',
      timestamp: new Date().toISOString()
    };

    Object.entries(fields).forEach(([key, value]) => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = value;
      form.appendChild(input);
    });

    document.body.appendChild(form);
    form.submit();

    // Show success message
    const successMessage: Message = {
      type: 'bot',
      text: "Great! Your inquiry has been sent! 📧 Our team will get back to you soon. Is there anything else I can help you with?",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      showInquiryButton: true
    };
    setMessages(prev => [...prev, successMessage]);
    setShowInquiryForm(false);
    setInquiryFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      subject: 'Chatbot Inquiry'
    });
    setIsSubmitting(false);
  };

  const handleShowInquiryForm = (message?: string) => {
    if (message) {
      setInquiryFormData(prev => ({ ...prev, message }));
    }
    setShowInquiryForm(true);
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
              <div key={index} className="space-y-2">
                <div
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
                        <p className="text-sm whitespace-pre-line">{message.text}</p>
                      </div>
                      <p className={`text-xs text-muted-foreground mt-1 ${message.type === 'user' ? 'text-right' : 'text-left'}`}>
                        {message.time}
                      </p>
                    </div>
                  </div>
                </div>
                {/* Send Inquiry Button for bot messages - Always show for all bot messages */}
                {message.type === 'bot' && (
                  <div className="flex justify-start ml-10">
                    <button
                      onClick={() => handleShowInquiryForm()}
                      className="flex items-center gap-2 px-3 py-1.5 bg-primary/10 hover:bg-primary/20 text-primary rounded-full text-xs font-medium transition-all duration-300 border border-primary/20"
                    >
                      <Mail size={14} />
                      Send Inquiry
                    </button>
                  </div>
                )}
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

      {/* Inquiry Form Modal */}
      {showInquiryForm && (
        <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4">
          <div className="bg-background rounded-2xl shadow-2xl w-full max-w-md border-2 border-primary/20 animate-fade-in">
            <div className="bg-gradient-cyan p-4 rounded-t-2xl flex items-center justify-between">
              <h3 className="text-white font-bold text-lg">Send Us an Inquiry</h3>
              <button
                onClick={() => setShowInquiryForm(false)}
                className="text-white hover:bg-white/20 rounded-full p-1 transition-all duration-300"
                aria-label="Close form"
              >
                <X size={20} />
              </button>
            </div>
            <form onSubmit={handleSendInquiry} className="p-6 space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="Your Name *"
                  required
                  value={inquiryFormData.name}
                  onChange={(e) => setInquiryFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="bg-card"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email *"
                  required
                  value={inquiryFormData.email}
                  onChange={(e) => setInquiryFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="bg-card"
                />
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder="Phone Number *"
                  required
                  value={inquiryFormData.phone}
                  onChange={(e) => setInquiryFormData(prev => ({ ...prev, phone: e.target.value }))}
                  className="bg-card"
                />
              </div>
              <div>
                <Input
                  type="text"
                  placeholder="Subject"
                  value={inquiryFormData.subject}
                  onChange={(e) => setInquiryFormData(prev => ({ ...prev, subject: e.target.value }))}
                  className="bg-card"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message *"
                  required
                  value={inquiryFormData.message}
                  onChange={(e) => setInquiryFormData(prev => ({ ...prev, message: e.target.value }))}
                  rows={4}
                  className="w-full px-4 py-2 border-2 border-border rounded-lg focus:border-primary focus:outline-none text-sm bg-card text-foreground resize-none"
                />
              </div>
              <div className="flex gap-3 pt-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setShowInquiryForm(false)}
                  className="flex-1"
                  disabled={isSubmitting}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="flex-1 bg-gradient-cyan hover:glow-cyan text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} className="mr-2" />
                      Send Inquiry
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatbotComponent;
