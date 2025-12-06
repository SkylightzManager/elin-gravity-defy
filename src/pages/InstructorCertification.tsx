import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Award, BookOpen, Users, CheckCircle } from "lucide-react";
import instructorImg from "@/assets/instructor.jpg";

const InstructorCertification = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-secondary via-background to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Award className="w-20 h-20 text-primary mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Bungee Instructor <span className="text-gradient-cyan">Certification</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Become a certified bungee fitness instructor with Singapore's premier training program. Transform your passion into a rewarding career.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">Certification Overview</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our comprehensive Bungee Instructor Certification program equips you with the knowledge, skills, and confidence to lead safe, effective, and inspiring bungee fitness classes. Recognized throughout Singapore and internationally, this certification opens doors to exciting career opportunities.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The program combines theoretical knowledge with hands-on practice, covering anatomy, safety protocols, class choreography, and teaching methodology. You'll learn from experienced master trainers who have trained hundreds of successful instructors.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Why Train with Elin Dance Studio</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, title: "Recognized Certification", desc: "Industry-standard qualification" },
              { icon: BookOpen, title: "Comprehensive Curriculum", desc: "Theory + practical training" },
              { icon: Users, title: "Expert Instructors", desc: "Learn from the best in Singapore" },
              { icon: CheckCircle, title: "Job Placement Support", desc: "Career guidance included" }
            ].map((item, i) => (
              <div key={i} className="glass-card p-6 rounded-xl hover-lift">
                <item.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Can Become a Trainer */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">Who Can Become a Bungee Trainer?</h2>
          <div className="glass-card p-8 rounded-2xl">
            <ul className="space-y-4 text-lg">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span>Fitness enthusiasts looking to start a new career</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span>Current fitness instructors wanting to diversify their skills</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span>Dance teachers exploring aerial fitness</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span>Anyone passionate about health and helping others (no prior experience required)</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Lead Instructor */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-4xl font-bold text-center mb-12">Meet Your Lead Instructor</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img src={instructorImg} alt="Lead Instructor" className="rounded-2xl shadow-2xl" />
            <div>
              <h3 className="text-2xl font-bold mb-4">Master Trainer & Founder</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                With over 10 years of experience in fitness and dance education, our lead instructor has trained hundreds of successful bungee fitness instructors across Singapore and Asia. Certified in multiple fitness disciplines, she brings unparalleled expertise and passion to every training session.
              </p>
              <div className="space-y-2">
                <p className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="font-semibold">10+ years teaching experience</span>
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="font-semibold">500+ instructors trained</span>
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="font-semibold">International certifications</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
          <h2 className="text-4xl font-bold text-center mb-12">Apply for Certification</h2>
          <form action="https://formsubmit.co/imperialgamerop@gmail.com" method="POST" className="glass-card p-8 rounded-2xl space-y-6">
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_subject" value="New Instructor Certification Enquiry - Elin Dance Studio" />
            <input type="hidden" name="_next" value={`${window.location.origin}/?submitted=true`} />
            
            <Input type="text" name="name" placeholder="Your Name" required className="bg-background" />
            <Input type="email" name="email" placeholder="Your Email" required className="bg-background" />
            <Input type="tel" name="phone" placeholder="Phone Number" required className="bg-background" />
            <Input type="text" name="experience" placeholder="Your Fitness/Dance Background" className="bg-background" />
            <Textarea name="message" placeholder="Why do you want to become a bungee instructor?" rows={4} required className="bg-background" />
            <Button type="submit" className="w-full bg-gradient-cyan hover:glow-cyan text-white">
              Submit Application
            </Button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default InstructorCertification;
