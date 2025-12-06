const Gallery = () => {
  // Placeholder images for masonry layout
  const galleryItems = [
    { id: 1, height: "h-64" },
    { id: 2, height: "h-80" },
    { id: 3, height: "h-72" },
    { id: 4, height: "h-64" },
    { id: 5, height: "h-80" },
    { id: 6, height: "h-72" },
    { id: 7, height: "h-64" },
    { id: 8, height: "h-80" },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-gradient-cyan">Gallery</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See our studio and classes in action
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {galleryItems.map((item) => (
            <div 
              key={item.id} 
              className={`${item.height} break-inside-avoid rounded-xl bg-muted/50 border border-border overflow-hidden hover-lift`}
            >
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                <span>Image Placeholder {item.id}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
