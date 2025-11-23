const FeaturedMedia = () => {
  const mediaLogos = [
    { name: "Mediacorp", color: "from-purple-500 to-pink-500" },
    { name: "CNA", color: "from-red-600 to-red-700" },
    { name: "AsiaOne", color: "from-orange-500 to-orange-600" },
    { name: "Shin Min Daily", color: "from-red-500 to-pink-500" },
    { name: "ConfirmGood", color: "from-green-500 to-green-600" },
    { name: "TimeOut", color: "from-gray-700 to-gray-800" },
    { name: "The Straits Times", color: "from-blue-900 to-blue-950" },
    { name: "8World", color: "from-blue-500 to-blue-600" },
    { name: "TheSmartLocal", color: "from-pink-500 to-purple-500" },
    { name: "M8", color: "from-yellow-500 to-orange-500" },
  ];

  return (
    <section className="py-16 bg-gradient-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-foreground">
          As featured by:
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12">
          {mediaLogos.map((media, index) => (
            <div
              key={index}
              className="group cursor-pointer transition-transform hover:scale-110"
            >
              <div className={`bg-gradient-to-br ${media.color} px-6 py-3 rounded-lg shadow-lg`}>
                <span className="text-white font-bold text-sm sm:text-base whitespace-nowrap">
                  {media.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedMedia;
