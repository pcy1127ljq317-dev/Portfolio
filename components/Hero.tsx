import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import LiquidSwitch from './LiquidSwitch';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const textY = useTransform(scrollY, [0, 300], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  // Auto toggle switch when scrolling down
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50 && !isSwitchOn) {
      setIsSwitchOn(true);
    } else if (latest < 20 && isSwitchOn) {
      setIsSwitchOn(false);
    }
  });

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 w-full h-full opacity-30 pointer-events-none">
        <motion.div 
          style={{ y: y1 }} 
          className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/40 rounded-full blur-[120px] animate-float" 
        />
        <motion.div 
          style={{ y: y2 }} 
          className="absolute bottom-[10%] right-[-5%] w-[600px] h-[600px] bg-blue-600/30 rounded-full blur-[140px] animate-float-delayed" 
        />
        <motion.div 
           animate={{ 
             opacity: isSwitchOn ? 0.2 : 0,
             scale: isSwitchOn ? 1.2 : 1 
           }}
           transition={{ duration: 2 }}
           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-green/10 rounded-full blur-[100px]"
        />
      </div>

      <div className="relative z-10 text-center px-4 w-full max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ y: textY, opacity }}
          className="flex flex-col items-center justify-center relative"
        >
          {/* Decorative Lines */}
          <div className="absolute top-0 w-[1px] h-32 bg-gradient-to-b from-transparent to-white/20 -mt-20 left-1/2 -translate-x-1/2" />
          
          <div className="mb-12 flex items-center justify-center gap-6">
             <div className="h-[1px] w-12 bg-white/20" />
             <span className="text-gray-400 tracking-[0.4em] text-xs uppercase font-light">Design Portfolio</span>
             <div className="h-[1px] w-12 bg-white/20" />
          </div>

          <div className="relative leading-[0.85] tracking-tighter mix-blend-lighten">
            {/* Top Text - Slightly Offset */}
            <h1 className="text-[14vw] font-serif italic text-white/90 relative z-0 transform -translate-x-8 md:-translate-x-16">
              PORT
            </h1>
            
            {/* Bottom Text + Switch */}
            <div className="flex items-center justify-center -mt-[3vw] relative z-10 ml-8 md:ml-16">
              <h1 className="text-[14vw] font-bold text-white flex items-center gap-[2vw]">
                F
                <div className="relative">
                    {/* Glow behind switch */}
                    <motion.div 
                        animate={{ opacity: isSwitchOn ? 0.6 : 0 }}
                        className="absolute inset-0 bg-neon-green/30 blur-xl rounded-full"
                    />
                   <LiquidSwitch isOn={isSwitchOn} onToggle={setIsSwitchOn} />
                </div>
                LIO
              </h1>
            </div>
            
            {/* Overlay Texture Text for Depth */}
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none opacity-5 mix-blend-overlay">
                <span className="text-[20vw] font-bold">2025</span>
            </div>
          </div>
          
          <motion.div 
            className="mt-16 flex flex-col md:flex-row items-center gap-6 md:gap-12 text-gray-400 font-light tracking-widest text-sm uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span>Luo Jiaqi (Xiao Xi)</span>
            <span className="w-1 h-1 bg-white/40 rounded-full hidden md:block" />
            <span>Visual Design</span>
            <span className="w-1 h-1 bg-white/40 rounded-full hidden md:block" />
            <span>2025</span>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <div className="w-5 h-9 border border-white/20 rounded-full flex justify-center p-1 backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-colors">
          <motion.div 
            className="w-1 h-2 bg-white/80 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]" 
            animate={{ height: [6, 12, 6], opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;