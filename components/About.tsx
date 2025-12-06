
import React, { useState, useEffect } from 'react';
import GlassCard from './GlassCard';
import { motion, AnimatePresence } from 'framer-motion';

const skills = [
  "Figma", "Stable Diffusion", "Midjourney", "Comfy UI", "ProtoPie", "Adobe Suite"
];

const aboutImages = [
  "https://i.postimg.cc/GTxFbLKF/1.jpg",
  "https://i.postimg.cc/vxtrGYhS/3.jpg",
  "https://i.postimg.cc/30FX381Z/5.jpg",
  "https://i.postimg.cc/vxs7Rgrg/6.jpg",
  "https://i.postimg.cc/30TjM4Xx/7.jpg"
];

const KeywordCircle: React.FC<{ 
  text: string; 
  label: string; 
  color: string; 
  shadowColor: string 
}> = ({ text, label, color, shadowColor }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="text-center group interactive relative flex flex-col items-center justify-center w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={`w-24 h-24 lg:w-32 lg:h-32 rounded-full border border-white/20 flex items-center justify-center text-base lg:text-xl font-bold bg-white/5 transition-all duration-300 backdrop-blur-md relative z-10`}
        style={{
           boxShadow: isHovered ? `0 0 30px ${shadowColor}` : 'none',
           backgroundColor: isHovered ? color : 'rgba(255,255,255,0.05)'
        }}
      >
        {text}
      </div>
      
      {/* Particle Emission on Hover */}
      <AnimatePresence>
        {isHovered && (
          <div className="absolute inset-0 z-0 pointer-events-none">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute left-1/2 top-1/2 w-1 h-1 rounded-full"
                style={{ backgroundColor: shadowColor }}
                initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                animate={{
                  x: (Math.random() - 0.5) * 150,
                  y: (Math.random() - 0.5) * 150,
                  opacity: 0,
                  scale: 0
                }}
                transition={{
                  duration: 1 + Math.random(),
                  ease: "easeOut",
                  repeat: Infinity,
                  repeatDelay: Math.random() * 0.5
                }}
              />
            ))}
          </div>
        )}
      </AnimatePresence>

      <p className="mt-3 text-sm text-gray-400">{label}</p>
    </div>
  );
};

const About: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % aboutImages.length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 px-4 md:px-12 relative max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Profile Card (Left) - Expanded Height */}
        <div className="lg:col-span-5 h-full">
          <GlassCard className="h-full p-8 flex flex-col min-h-[600px]">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">ABOUT <span className="font-serif italic text-[#4ade80]">MYSELF</span></h2>
            </div>

            {/* Carousel Container - Flex grow to fill space and align with right side */}
            <div className="w-full flex-1 min-h-[300px] rounded-xl overflow-hidden mb-6 bg-gray-800 relative group shadow-2xl border border-white/5">
                 <AnimatePresence mode="wait">
                   <motion.img 
                    key={currentImageIndex}
                    src={aboutImages[currentImageIndex]} 
                    alt={`Luo Jiaqi Portfolio ${currentImageIndex}`}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                 </AnimatePresence>
                 
                 {/* Overlay Gradient */}
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                 
                 {/* Progress Indicators */}
                 <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                    {aboutImages.map((_, idx) => (
                      <div 
                        key={idx}
                        className={`h-1 rounded-full transition-all duration-300 ${idx === currentImageIndex ? 'w-6 bg-white' : 'w-2 bg-white/30'}`}
                      />
                    ))}
                 </div>
            </div>

            <p className="text-gray-300 leading-relaxed text-sm lg:text-base text-justify font-light">
              26届视觉传达设计专业，我有着较强的团队合作精神，乐于与不同专业背景的人交流协作，善于倾听他人的意见，共同为实现出色的设计成果而努力；同时我对于新技术、新趋势充满探索欲，积极学AIGC等先进技术，提高设计效率的同时也为设计注入新的活力，开拓创新的设计路径
            </p>
          </GlassCard>
        </div>

        {/* Info Grid (Right) */}
        <div className="lg:col-span-7 flex flex-col gap-6 h-full">
          
          {/* Keywords Circle - Grid Layout for Alignment */}
          <GlassCard className="p-8">
            <div className="grid grid-cols-3 gap-4 items-start justify-items-center w-full">
              <KeywordCircle 
                text="Efficient" 
                label="高效的" 
                color="rgba(74, 222, 128, 0.2)" 
                shadowColor="#4ade80" 
              />
              <KeywordCircle 
                text="Sincere" 
                label="真诚的" 
                color="rgba(96, 165, 250, 0.2)" 
                shadowColor="#60a5fa" 
              />
              <KeywordCircle 
                text="Colorful" 
                label="多彩的" 
                color="rgba(192, 132, 252, 0.2)" 
                shadowColor="#c084fc" 
              />
            </div>
          </GlassCard>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
            {/* Experience */}
            <GlassCard className="p-8 h-full" delay={0.2}>
              <h3 className="text-xl font-bold mb-6 border-b border-white/10 pb-2">实习经历</h3>
              <ul className="space-y-6">
                <li className="relative pl-6 border-l-2 border-white/20">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-black"></div>
                  <h4 className="font-bold">Shopline UED</h4>
                  <p className="text-sm text-gray-400">品牌视觉实习生</p>
                </li>
                <li className="relative pl-6 border-l-2 border-white/20">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gray-600 border-4 border-black"></div>
                  <h4 className="font-bold">丰巢 (Hive Box)</h4>
                  <p className="text-sm text-gray-400">创意视觉实习生</p>
                </li>
                <li className="relative pl-6 border-l-2 border-white/20">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gray-600 border-4 border-black"></div>
                  <h4 className="font-bold">百词斩</h4>
                  <p className="text-sm text-gray-400">平面设计实习生</p>
                </li>
              </ul>
            </GlassCard>

            {/* Skills */}
            <GlassCard className="p-8 h-full flex flex-col" delay={0.3}>
              <h3 className="text-xl font-bold mb-6 border-b border-white/10 pb-2">软件技能</h3>
              <div className="flex flex-wrap content-start gap-3">
                {skills.map((skill, i) => (
                  <span key={i} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm hover:bg-white/20 transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </GlassCard>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
