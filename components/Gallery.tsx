import React from 'react';
import { motion } from 'framer-motion';

const galleryImages = [
  "https://picsum.photos/400/600?random=10",
  "https://picsum.photos/400/500?random=11",
  "https://picsum.photos/400/400?random=12",
  "https://picsum.photos/400/550?random=13",
  "https://picsum.photos/400/450?random=14",
  "https://picsum.photos/400/600?random=15",
];

const Gallery: React.FC = () => {
  return (
    <section className="py-24 px-4 overflow-hidden bg-black/50">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-2xl font-bold mb-12 flex items-center gap-4">
          <span className="w-12 h-[1px] bg-white/50 inline-block"></span>
          VISUAL EXPERIMENTS
        </h3>
        
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative group interactive overflow-hidden rounded-xl break-inside-avoid"
            >
              <img 
                src={src} 
                alt={`Gallery ${idx}`} 
                className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                 <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                    <span className="text-xl">↗</span>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;