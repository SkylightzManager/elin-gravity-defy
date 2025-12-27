// Import logo images from media folder
import mediacorpLogo from "@/media/Mediacorp.png";
import cnaLogo from "@/media/CNA.svg";
import asiaOneLogo from "@/media/ASIAONE.svg";
import shinMinLogo from "@/media/shin min.png";
import confirmGoodLogo from "@/media/Confirm_Good_Logo.webp";
import timeOutLogo from "@/media/timeout.png";
import world8Logo from "@/media/8 world.svg";
import m8Logo from "@/media/M8.png";
import theIndependentLogo from "@/media/the independent.png";
import presidentStarCharityLogo from "@/media/image.png";

const FeaturedMedia = () => {
  const mediaLogos = [
    { 
      name: "Mediacorp", 
      image: mediacorpLogo,
      color: "from-purple-500 to-pink-500",
      hasImage: true,
      url: "https://instagram.com/p/Cj-P9OcvlDP/"
    },
    { 
      name: "CNA", 
      image: cnaLogo,
      color: "from-red-600 to-red-700",
      hasImage: true,
      url: "https://www.channelnewsasia.com/singapore/5-unusual-workouts-indoor-bungee-puppy-yoga-climbing-aquaspin-2973981"
    },
    { 
      name: "AsiaOne", 
      image: asiaOneLogo,
      color: "from-orange-500 to-orange-600",
      hasImage: true,
      url: "https://www.asiaone.com/lifestyle/fun-workouts-singapore-give-you-head-start-healthier-new-year"
    },
    { 
      name: "Shin Min Daily", 
      image: shinMinLogo,
      color: "from-red-500 to-pink-500",
      hasImage: true,
      url: "http://facebook.com/shinmindailynewsxinmingribao/posts/pfbid0LqLu8zteAxTjWHgE5sL7mHCDxSDeaWcYg4gFXnExr1A5kjCLMfVzSm5PF2o697jDl"
    },
    { 
      name: "ConfirmGood", 
      image: confirmGoodLogo,
      color: "from-green-500 to-green-600",
      hasImage: true,
      url: "https://confirmgood.com/post/elin-dance-studio-bungee-yoga/"
    },
    { 
      name: "TimeOut", 
      image: timeOutLogo,
      color: "from-gray-700 to-gray-800",
      hasImage: true,
      url: "https://www.timeout.com/singapore/sport-and-fitness/elin-dance-studio"
    },
    { 
      name: "8World", 
      image: world8Logo,
      color: "from-blue-500 to-blue-600",
      hasImage: true,
      url: "https://www.8world.com/stories/morning-express/trending-indoor-bungee-and-aerial-yoga-2166421"
    },
    { 
      name: "M8", 
      image: m8Logo,
      color: "from-yellow-500 to-orange-500",
      hasImage: true,
      url: "https://www.youtube.com/watch?v=cTCrEP-0M_k"
    },
    { 
      name: "The Independent", 
      image: theIndependentLogo,
      color: "from-gray-600 to-gray-700",
      hasImage: true,
      url: "https://theindependent.sg/video-tay-yings-bungee-dance-performance-at-the-presidents-star-charity-2022-amazes-audience/"
    },
    { 
      name: "President's Star Charity", 
      image: presidentStarCharityLogo,
      color: "from-blue-600 to-purple-600",
      hasImage: true,
      url: "https://www.mediacorp.sg/psc2022"
    },
  ];

  return (
    <section className="py-10 sm:py-12 lg:py-16 bg-gradient-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-10 text-foreground">
          As featured by:
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 lg:gap-12">
          {mediaLogos.map((media, index) => (
            <a
              key={index}
              href={media.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group cursor-pointer transition-all duration-300 hover:scale-110 flex items-center justify-center"
            >
              {media.hasImage && media.image ? (
                <div className="bg-white/90 dark:bg-gray-800/90 p-3 sm:p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <img 
                    src={media.image} 
                    alt={`${media.name} logo`}
                    className="h-10 sm:h-12 lg:h-16 w-auto object-contain max-w-[120px] sm:max-w-[150px]"
                    style={
                      media.name === "The Independent"
                        ? {
                            filter: "drop-shadow(-1px -1px 0 #000) drop-shadow(1px -1px 0 #000) drop-shadow(-1px 1px 0 #000) drop-shadow(1px 1px 0 #000) drop-shadow(0 -1px 0 #000) drop-shadow(0 1px 0 #000) drop-shadow(-1px 0 0 #000) drop-shadow(1px 0 0 #000) drop-shadow(0 0 2px #000)",
                            WebkitFilter: "drop-shadow(-1px -1px 0 #000) drop-shadow(1px -1px 0 #000) drop-shadow(-1px 1px 0 #000) drop-shadow(1px 1px 0 #000) drop-shadow(0 -1px 0 #000) drop-shadow(0 1px 0 #000) drop-shadow(-1px 0 0 #000) drop-shadow(1px 0 0 #000) drop-shadow(0 0 2px #000)"
                          }
                        : undefined
                    }
                    onError={(e) => {
                      // Fallback to text if image fails to load
                      e.currentTarget.style.display = 'none';
                      const parent = e.currentTarget.parentElement;
                      if (parent) {
                        parent.innerHTML = `<div class="bg-gradient-to-br ${media.color} px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-lg"><span class="text-white font-bold text-xs sm:text-sm lg:text-base whitespace-nowrap">${media.name}</span></div>`;
                      }
                    }}
                  />
                </div>
              ) : (
                <div className={`bg-gradient-to-br ${media.color} px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-lg`}>
                  <span className="text-white font-bold text-xs sm:text-sm lg:text-base whitespace-nowrap">
                    {media.name}
                  </span>
                </div>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedMedia;
