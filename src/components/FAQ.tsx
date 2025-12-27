import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is bungee fitness and how does it work in Singapore?",
    answer: "Bungee fitness is a low-impact, high-intensity workout that uses bungee cords to support your body weight while you perform cardio and strength exercises. At Elin Dance Studio in Singapore near Alexandra and Labrador Park MRT, we're the only dedicated bungee fitness training centre offering this unique aerial workout experience. The bungee cord allows you to defy gravity, making it easier on your joints while providing an incredible full-body workout suitable for ages 4 to 66."
  },
  {
    question: "Is bungee workout suitable for beginners in Singapore?",
    answer: "Absolutely! Bungee fitness classes at Elin Dance Studio Singapore are perfect for beginners. Our certified instructors provide personalized guidance in small class sizes, ensuring you learn proper technique safely. The bungee system supports your body weight, making it low-impact and gentle on joints - ideal if you're new to fitness or returning after a break. We welcome complete beginners to our bungee workout classes near Alexandra."
  },
  {
    question: "What are the benefits of bungee fitness compared to regular gym workouts?",
    answer: "Bungee fitness in Singapore offers unique advantages: it's low-impact (gentle on joints), high-intensity (burns calories fast), builds core strength, improves cardiovascular fitness, tones arms and legs, enhances flexibility, and is incredibly fun! Unlike traditional gym workouts, bungee training at Elin Dance Studio lets you experience the sensation of flying while getting fit. It's perfect for family fitness as we accept ages 4-66, making it Singapore's most inclusive aerial fitness option."
  },
  {
    question: "Where is Elin Dance Studio located in Singapore?",
    answer: "Elin Dance Studio is conveniently located near Alexandra Road and Labrador Park MRT station in Singapore. We're easily accessible by public transport and car, making us the most convenient bungee fitness studio for residents in the Alexandra, Queenstown, Buona Vista, and surrounding areas. Visit our contact section for detailed directions and to book your first bungee workout class in Singapore."
  },
  {
    question: "Do you offer bungee fitness classes for kids and families in Singapore?",
    answer: "Yes! Elin Dance Studio is Singapore's family-friendly bungee fitness centre, welcoming participants from ages 4 to 66 years old. We offer specialized kids fitness classes, family bungee workout sessions, and programs designed for different age groups and fitness levels. Our bungee fitness classes in Singapore are perfect for family bonding while staying active together. Book a trial class to experience Singapore's most exciting family fitness activity!"
  },
  {
    question: "How do I book a bungee fitness trial class at Elin Dance Studio Singapore?",
    answer: "Booking your first bungee fitness class in Singapore is easy! Click the 'Book Your Flight' button on our website, or contact us directly through our booking form. We recommend starting with a trial class to experience our bungee workout firsthand. Our studio near Alexandra and Labrador Park MRT offers flexible class schedules including evenings and weekends. Don't miss Singapore's #1 bungee fitness experience - book your trial today!"
  },
  {
    question: "What should I wear to a bungee fitness class in Singapore?",
    answer: "For bungee workout classes at Elin Dance Studio Singapore, wear comfortable athletic clothing that allows full range of motion - fitted sports leggings or shorts and a fitted top work best. Avoid loose clothing that might get tangled in the bungee cords. Bring a water bottle and towel. We provide all bungee equipment and harnesses. First-timers to our Singapore bungee fitness classes receive a full orientation on equipment and safety before starting."
  },
  {
    question: "Is bungee fitness safe? What safety measures does Elin Dance Studio have?",
    answer: "Safety is our top priority at Singapore's premier bungee fitness studio. Elin Dance Studio maintains a 100% safety track record since 2019. All our instructors are internationally certified in bungee fitness safety protocols, we use state-of-the-art equipment with regular maintenance, conduct thorough safety briefings before every class, and maintain small class sizes for personalized attention. Our bungee workout classes in Singapore follow the highest international safety standards."
  }
];

const FAQ = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="text-gradient-cyan">Frequently Asked Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to know about bungee fitness classes in Singapore
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="glass-card rounded-xl px-6 border-primary/20 hover:glow-cyan transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-10 sm:mt-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <p className="text-lg text-muted-foreground mb-4">
            Ready to experience Singapore's best bungee fitness workout?
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-gradient-cyan hover:glow-cyan-strong text-white font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Book Your Bungee Fitness Trial in Singapore Today!
          </a>
        </div>
      </div>

      {/* FAQ Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        })}
      </script>
    </section>
  );
};

export default FAQ;
