import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
      className={`
        relative overflow-hidden
        backdrop-blur-xl bg-glass-bg 
        border border-glass-border 
        shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]
        rounded-2xl
        group
        interactive
        ${className}
      `}
    >
      {/* Shine effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10 h-full">
        {children}
      </div>
    </motion.div>
  );
};

export default GlassCard;