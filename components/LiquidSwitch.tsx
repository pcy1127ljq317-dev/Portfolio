import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LiquidSwitchProps {
  isOn?: boolean;
  onToggle?: (newState: boolean) => void;
}

const LiquidSwitch: React.FC<LiquidSwitchProps> = ({ isOn: externalIsOn, onToggle }) => {
  const [internalIsOn, setInternalIsOn] = useState(false);
  
  const isControlled = externalIsOn !== undefined;
  const isOn = isControlled ? externalIsOn : internalIsOn;

  const handleToggle = () => {
    if (isControlled) {
      onToggle?.(!isOn);
    } else {
      setInternalIsOn(!internalIsOn);
    }
  };

  return (
    <motion.div
      className="relative inline-flex items-center justify-start w-[1.5em] h-[0.75em] align-middle select-none cursor-pointer z-50 rounded-full"
      onClick={handleToggle}
      initial={false}
      animate={isOn ? "on" : "off"}
      whileHover="hover"
      whileTap="tap"
      style={{ verticalAlign: 'middle' }}
    >
      {/* Container Body - Frosted (Off) to Green Glass (On) */}
      <motion.div
        className="absolute inset-0 rounded-full overflow-hidden border transition-all duration-500 ease-out"
        variants={{
          off: { 
            backgroundColor: "rgba(255, 255, 255, 0.1)", 
            backdropFilter: "blur(12px)", 
            borderColor: "rgba(255, 255, 255, 0.2)",
            boxShadow: "inset 0 2px 4px rgba(255,255,255,0.05), 0 4px 10px rgba(0,0,0,0.1)"
          },
          on: { 
            backgroundColor: "rgba(74, 222, 128, 0.2)", 
            backdropFilter: "blur(8px)", 
            borderColor: "#4ade80",
            boxShadow: "0 0 20px rgba(74, 222, 128, 0.3), inset 0 0 10px rgba(74, 222, 128, 0.1)"
          }
        }}
      >
        {/* Surface Gloss Flow (Hover) */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg]"
          variants={{
            hover: { 
              x: ["-100%", "200%"],
              transition: { duration: 1.5, repeat: Infinity, ease: "linear", repeatDelay: 0.5 } 
            },
            off: { x: "-100%" }
          }}
        />

        {/* Breathing Edge Glow (Hover) */}
        <motion.div
          className="absolute inset-0 rounded-full border border-white/40"
          variants={{
            hover: { 
              opacity: [0, 0.6, 0], 
              scale: [1, 1.05, 1],
              transition: { duration: 2, repeat: Infinity, ease: "easeInOut" } 
            }
          }}
        />

        {/* Internal Ripple Effect (Follows Knob) */}
        <motion.div
           className="absolute top-0 bottom-0 w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"
           animate={{
             x: isOn ? ["-50%", "50%"] : ["50%", "-50%"]
           }}
           transition={{ duration: 0.6, ease: "easeInOut" }}
        />

        {/* Particle Dispersion (On State) */}
        <AnimatePresence>
          {isOn && (
            <>
              {/* Aura */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-transparent to-purple-500/20 mix-blend-screen"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
              
              {/* Floating Particles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full blur-[0.5px]"
                  initial={{ 
                    opacity: 0, 
                    scale: 0,
                    x: "50%",
                    y: "50%" 
                  }}
                  animate={{ 
                    opacity: [0, 0.8, 0],
                    scale: [0.5, 1.2, 0.5],
                    x: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
                    y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
                  }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ 
                    duration: 2 + Math.random() * 2, 
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.1
                  }}
                  style={{
                    backgroundColor: i % 2 === 0 ? '#FFD700' : '#818cf8', // Gold & Blue/Purple
                    width: Math.random() * 4 + 2 + 'px',
                    height: Math.random() * 4 + 2 + 'px',
                  }}
                />
              ))}
            </>
          )}
        </AnimatePresence>
      </motion.div>

      {/* The Knob (Slider) */}
      <motion.div
        className="absolute top-[10%] bottom-[10%] aspect-square rounded-full shadow-lg z-10"
        variants={{
          off: { left: "5%", background: "radial-gradient(circle at 30% 30%, #ffffff, #d1d5db)" },
          on: { left: "55%", background: "radial-gradient(circle at 30% 30%, #FFD700, #B8860B)" }
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        whileTap={{ scale: 0.9 }}
      >
        {/* Specular Highlight (Wet Look) */}
        <div className="absolute top-[15%] left-[15%] w-[40%] h-[40%] bg-white rounded-full blur-[0.5px] opacity-90" />
        
        {/* Shadow Ring */}
        <div className="absolute inset-0 rounded-full shadow-[inset_0_-2px_4px_rgba(0,0,0,0.2)]" />
      </motion.div>

      {/* Levitation Shadow (Hover) */}
      <motion.div
         className="absolute inset-0 rounded-full"
         variants={{
            hover: { y: -2, boxShadow: "0 15px 25px -5px rgba(0,0,0,0.3)" },
            off: { y: 0, boxShadow: "none" }
         }}
         transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default LiquidSwitch;