import React from 'react';
import GlassCard from './GlassCard';

const Contact: React.FC = () => {
  return (
    <footer className="py-20 px-4 relative overflow-hidden">
      {/* Footer Ambient Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#4ade80]/10 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-[10vw] font-bold leading-none opacity-20 select-none">THANK YOU</h2>
        
        <GlassCard className="mt-[-5vw] mx-4 p-8 md:p-12 bg-black/40">
          <h3 className="text-3xl font-serif italic mb-2">Let's work together</h3>
          <p className="text-gray-400 mb-8">Ready to bring your ideas to life?</p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <div className="text-left">
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Phone</p>
              <p className="text-xl interactive hover:text-[#4ade80] transition-colors">181 5284 8378</p>
            </div>
            
            <div className="text-left">
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Email</p>
              <p className="text-xl interactive hover:text-[#4ade80] transition-colors">2955803547@qq.com</p>
            </div>

            <div className="p-2 bg-white rounded-lg">
                {/* QR Code Placeholder */}
                <div className="w-24 h-24 bg-gray-200 flex items-center justify-center">
                    <span className="text-black text-xs font-bold text-center">WeChat<br/>QR</span>
                </div>
            </div>
          </div>
        </GlassCard>

        <div className="mt-12 text-sm text-gray-600 flex justify-between items-center px-4">
          <span>© 2025 Luo Jiaqi</span>
          <span>Designed with React & Tailwind</span>
        </div>
      </div>
    </footer>
  );
};

export default Contact;