import { Target, Eye, Users } from "lucide-react";
import aboutUsImage from "@/media/about us.avif";
import elinPhoto from "@/media/instructors/Elin Zhang _ Main Instructor _ Bungee Trainer Programme _ Elin Dance Studio.avif";
import irenePhoto from "@/media/instructors/Irene _ Instructor _ Bungee Trainer Programme _ Elin Dance Studio.avif";
import deliaPhoto from "@/media/instructors/Delia _ Instructor _ Bungee Trainer Programme _ Elin Dance Studio.avif";
import aliciaPhoto from "@/media/instructors/Alicia _ Instructor _ Bungee Trainer Programme _ Elin Dance Studio.avif";
import shenPhoto from "@/media/instructors/Shen _ Instructor _ Bungee Trainer Programme _ Elin Dance Studio.avif";
import rachelPhoto from "@/media/instructors/Rachel _ Instructor _ Bungee Trainer Programme _ Elin Dance Studio.avif";
import luShanPhoto from "@/media/instructors/Lu Shan _ Instructor _ Bungee Trainer Programme _ Elin Dance Studio.avif";
import jiayiPhoto from "@/media/instructors/Jiayi _ Instructor _ Bungee Trainer Programme _ Elin Dance Studio.avif";
import kellyPhoto from "@/media/instructors/Kelly _ Instructor _ Bungee Trainer Programme _ Elin Dance Studio.avif";
import m8Logo from "@/media/M8.png";
import world8Logo from "@/media/8 world.svg";
import timeOutLogo from "@/media/timeout.png";
import cnaLogo from "@/media/CNA.svg";
import presidentStarCharityLogo from "@/media/image.png";
import shinMinLogo from "@/media/shin min.png";
import asiaOneLogo from "@/media/ASIAONE.svg";
import mediacorpLogo from "@/media/Mediacorp.png";
import confirmGoodLogo from "@/media/Confirm_Good_Logo.webp";
import theIndependentLogo from "@/media/the independent.png";
// TODO: Add Made For Families logo when provided
// import madeForFamiliesLogo from "@/media/made-for-families.png";

const instructors = [
  {
    name: "Elin",
    specialties: ["Kids Bungee", "Family Bungee", "Bungee Workout", "Bungee Intensive Training Programme", "Bungee Train The Trainer Programme"],
    photo: elinPhoto,
  },
  {
    name: "Irene",
    specialties: ["Kids Bungee", "Family Bungee", "Bungee Workout", "Bungee Dance"],
    photo: irenePhoto,
  },
  {
    name: "Delia",
    specialties: ["Kids Bungee", "Bungee Workout", "Bungee Dance", "Contemporary Dance"],
    photo: deliaPhoto,
  },
  {
    name: "Alicia",
    specialties: ["Bungee Workout", "Bungee Dance", "Contemporary Dance", "Fitness Class"],
    photo: aliciaPhoto,
  },
  {
    name: "Shen",
    specialties: ["Kids Bungee", "Family Bungee", "Bungee Workout", "Bungee Dance", "Chinese Dance"],
    photo: shenPhoto,
  },
  {
    name: "Rachel",
    specialties: ["Kids Bungee", "Family Bungee", "Bungee Workout"],
    photo: rachelPhoto,
  },
  {
    name: "Lu Shan",
    specialties: ["Kids Bungee", "Family Bungee", "Bungee Workout"],
    photo: luShanPhoto,
  },
  {
    name: "Jia Yi",
    specialties: ["Kids Bungee", "Family Bungee", "Bungee Workout"],
    photo: jiayiPhoto,
  },
  {
    name: "Kelly",
    specialties: ["Yoga", "Wheel Yoga", "Inside Flow Yoga", "Aerial Yoga"],
    photo: kellyPhoto,
  },
];

const mediaFeatures = [
  {
    logo: m8Logo,
    title: "8World News 狮城6点半",
    description: "Elin Dance Studio's Bungee Workout Featuring on 狮城6点半 and also on 8 World Youtube",
  },
  {
    logo: m8Logo,
    title: "8World Website",
    description: "Elin Dance Studio's Bungee Workout Featuring on 潮流解码 and also on 8 World Youtube",
  },
  {
    logo: timeOutLogo,
    title: "TimeOut Singapore",
    description: "Elin Dance Studio's Bungee Workout Featuring on TimeOut Website and TimeOut Instagram",
  },
  {
    logo: cnaLogo,
    title: "Channel News Asia",
    description: "Elin Dance Studio's Bungee Workout Featuring on Channel News Asia Website",
  },
  {
    logo: presidentStarCharityLogo,
    title: "President's Star Charity 2022",
    description: "Elin Dance Studio's Bungee Workout Featuring on Mediacorp Youtube Channel",
  },
  {
    logo: shinMinLogo,
    title: "Shin Min Daily News 新明日报",
    description: "Photo Credit: Shin Min Daily News 新明日报 Facebook",
  },
  {
    logo: asiaOneLogo,
    title: "AsiaOne",
    description: "Elin Dance Studio's Bungee Workout Featuring on AsiaOne website",
  },
  {
    logo: mediacorpLogo,
    title: "Mediacorp",
    description: "President Star Charity x Elin Dance Studio Bungee Workout Featuring on Mediacorp Instagram",
  },
  {
    logo: confirmGoodLogo,
    title: "Confirm Good",
    description: "Elin Dance Studio's Bungee Workout Featuring on ConfirmGood website",
  },
  {
    logo: theIndependentLogo,
    title: "The Independent",
    description: "President Star Charity x Elin Dance Studio Bungee Workout Featuring on The Independent Website",
  },
  {
    logo: null, // TODO: Add Made For Families logo when provided
    title: "Made For Families",
    description: "Elin Dance Studio's Family Bungee Featured on Made for Families Website",
  },
];

const About = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-light relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Background Image */}
        <div className="relative rounded-3xl overflow-hidden mb-10 sm:mb-12 animate-fade-in min-h-[500px] sm:min-h-[600px]">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src={aboutUsImage} 
              alt="Elin Dance Studio"
              className="w-full h-full object-cover"
            />
            {/* Subtle Gradient Overlay for text readability - much lighter */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
          </div>

          {/* Content */}
          <div className="relative z-10 p-8 sm:p-12 lg:p-16 h-full flex items-center">
            <div className="text-center max-w-4xl mx-auto w-full">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8 text-white drop-shadow-lg">
                All About <span className="text-gradient-cyan">Elin Dance Studio</span>
              </h1>
              <div className="space-y-6 text-lg sm:text-xl text-white/95 leading-relaxed">
                <p className="drop-shadow-lg font-medium">
                  At Elin Dance Studio, we provide a safe space for anyone, regardless of background, age and walks of life, to express their true selves in the name of dance.
                </p>
                <p className="drop-shadow-lg font-medium">
                  We firmly believe that dance is not just a lifestyle, but a way of life that transforms us with grace. We seek to nurture and empower our learners with dance at Elin Dance Studio and ultimately looking to transform their way of life, one learner at a time.
                </p>
                <p className="drop-shadow-lg font-medium">
                  Through a wide spectrum of dance styles including bungee yoga, our expert team of dance instructors utilises not just a structured curriculum but also maintains the flexibility to cater to a wide range of learners.
                </p>
              </div>
            </div>
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
                className="glass-card rounded-xl overflow-hidden hover:glow-cyan transition-all duration-300 transform hover:scale-105"
              >
                {/* Instructor Photo */}
                <div className="relative h-32 sm:h-36 overflow-hidden">
                  <img 
                    src={instructor.photo} 
                    alt={instructor.name}
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                </div>
                
                {/* Instructor Info */}
                <div className="p-6">
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
              </div>
            ))}
          </div>
        </div>

        {/* Media Section */}
        <div className="text-center glass-card p-8 rounded-2xl mb-10 sm:mb-12">
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

        {/* Media Features Section */}
        <div className="mb-10 sm:mb-12">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Media <span className="text-gradient-cyan">Features</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              See where Elin Dance Studio has been featured in the media
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mediaFeatures.map((feature, index) => (
              <div
                key={index}
                className="glass-card rounded-xl overflow-hidden hover:glow-cyan transition-all duration-300 transform hover:scale-105 p-6 flex flex-col"
              >
                {/* Logo */}
                <div className="flex justify-center items-center mb-4 h-20">
                  {feature.logo ? (
                    <img 
                      src={feature.logo} 
                      alt={feature.title}
                      className="max-h-16 max-w-full object-contain"
                      style={
                        feature.title === "Shin Min Daily News 新明日报" || feature.title === "The Independent"
                          ? {
                              filter: "drop-shadow(-1px -1px 0 #000) drop-shadow(1px -1px 0 #000) drop-shadow(-1px 1px 0 #000) drop-shadow(1px 1px 0 #000) drop-shadow(0 -1px 0 #000) drop-shadow(0 1px 0 #000) drop-shadow(-1px 0 0 #000) drop-shadow(1px 0 0 #000) drop-shadow(0 0 2px #000)",
                              WebkitFilter: "drop-shadow(-1px -1px 0 #000) drop-shadow(1px -1px 0 #000) drop-shadow(-1px 1px 0 #000) drop-shadow(1px 1px 0 #000) drop-shadow(0 -1px 0 #000) drop-shadow(0 1px 0 #000) drop-shadow(-1px 0 0 #000) drop-shadow(1px 0 0 #000) drop-shadow(0 0 2px #000)"
                            }
                          : undefined
                      }
                    />
                  ) : (
                    <div className="text-muted-foreground text-sm text-center">
                      Logo coming soon
                    </div>
                  )}
                </div>
                
                {/* Title */}
                <h3 className="text-lg font-bold text-primary mb-3 text-center min-h-[3rem] flex items-center justify-center">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-sm text-muted-foreground text-center flex-grow">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
