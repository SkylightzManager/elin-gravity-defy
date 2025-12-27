import { Target, Eye, Users } from "lucide-react";

const instructors = [
  {
    name: "Elin",
    specialties: ["Kids Bungee", "Family Bungee", "Bungee Workout", "Bungee Intensive Training Programme", "Bungee Train The Trainer Programme"],
  },
  {
    name: "Irene",
    specialties: ["Kids Bungee", "Family Bungee", "Bungee Workout", "Bungee Dance"],
  },
  {
    name: "Delia",
    specialties: ["Kids Bungee", "Bungee Workout", "Bungee Dance", "Contemporary Dance"],
  },
  {
    name: "Alicia",
    specialties: ["Bungee Workout", "Bungee Dance", "Contemporary Dance", "Fitness Class"],
  },
  {
    name: "Shen",
    specialties: ["Kids Bungee", "Family Bungee", "Bungee Workout", "Bungee Dance", "Chinese Dance"],
  },
  {
    name: "Rachel",
    specialties: ["Kids Bungee", "Family Bungee", "Bungee Workout"],
  },
  {
    name: "Lu Shan",
    specialties: ["Kids Bungee", "Family Bungee", "Bungee Workout"],
  },
  {
    name: "Jia Yi",
    specialties: ["Kids Bungee", "Family Bungee", "Bungee Workout"],
  },
  {
    name: "Kelly",
    specialties: ["Yoga", "Wheel Yoga", "Inside Flow Yoga", "Aerial Yoga"],
  },
];

const About = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-light relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
            All About <span className="text-gradient-cyan">Elin Dance Studio</span>
          </h1>
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
            <p>
              At Elin Dance Studio, we provide a safe space for anyone, regardless of background, age and walks of life, to express their true selves in the name of dance.
            </p>
            <p>
              We firmly believe that dance is not just a lifestyle, but a way of life that transforms us with grace. We seek to nurture and empower our learners with dance at Elin Dance Studio and ultimately looking to transform their way of life, one learner at a time.
            </p>
            <p>
              Through a wide spectrum of dance styles including bungee yoga, our expert team of dance instructors utilises not just a structured curriculum but also maintains the flexibility to cater to a wide range of learners.
            </p>
          </div>
        </div>

        {/* Mission, Vision, Team */}
        <div className="grid md:grid-cols-3 gap-8 mb-10 sm:mb-12">
          <div className="glass-card p-8 rounded-2xl text-center hover:glow-cyan transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-cyan rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
            <p className="text-muted-foreground">
              To nurture and empower participants with fitness and elegance as a way of life.
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl text-center hover:glow-cyan transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-cyan rounded-full flex items-center justify-center mx-auto mb-6">
              <Eye className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
            <p className="text-muted-foreground">
              To be at the forefront of Singapore's dance education that caters to learners of any background, age and walks of life.
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl text-center hover:glow-cyan transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-cyan rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Our Team</h3>
            <p className="text-muted-foreground">
              Our expert team of dance instructors are from a wide variety of backgrounds. They have been specially selected to be able to create a safe space for all learners to excel with grace.
            </p>
          </div>
        </div>

        {/* Instructors Section */}
        <div className="mb-10 sm:mb-12">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Our <span className="text-gradient-cyan">Instructors</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Through a wide spectrum of dance styles including bungee yoga, our expert team of dance instructors utilises not just a structured curriculum but also maintains the flexibility to cater to a wide range of learners.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {instructors.map((instructor, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-xl hover:glow-cyan transition-all duration-300 transform hover:scale-105"
              >
                <h4 className="text-xl font-bold text-primary mb-3">{instructor.name}</h4>
                <ul className="space-y-1">
                  {instructor.specialties.map((specialty, idx) => (
                    <li key={idx} className="text-muted-foreground text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {specialty}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Media Section */}
        <div className="text-center glass-card p-8 rounded-2xl">
          <h2 className="text-3xl font-bold mb-4">
            Elin Dance Studio <span className="text-gradient-cyan">Media</span>
          </h2>
          <p className="text-muted-foreground">
            For media enquiries, please email to{" "}
            <a href="mailto:enquiry@elindance.com.sg" className="text-primary hover:underline font-semibold">
              enquiry@elindance.com.sg
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
