
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';
import GlassCard from './GlassCard';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

const PromoLayout: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 pb-24">
      {/* Promo Specific Header - Vibrant Yellow Theme */}
      <div className="py-20 text-center relative overflow-hidden rounded-3xl bg-gradient-to-br from-yellow-400/20 via-orange-500/10 to-transparent border border-white/10 mb-16">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 animate-pulse"></div>
        
        <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", duration: 1 }}
            className="relative z-10 flex flex-col items-center"
        >
            <span className="inline-block px-6 py-2 rounded-full bg-yellow-400 text-black font-bold text-sm tracking-widest mb-6 shadow-[0_0_20px_rgba(250,204,21,0.5)]">
                运营活动
            </span>
            <h1 className="text-4xl md:text-6xl font-black mb-4 text-white drop-shadow-xl">
                {project.title}
            </h1>
            <h2 className="text-2xl font-serif italic text-yellow-200">
                “5元起寄，领券更优惠”
            </h2>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Core Needs - Bubbles */}
        <div className="lg:col-span-12 mb-12">
            <h3 className="text-2xl font-bold mb-8 text-center text-yellow-400">三大核心需求</h3>
            <div className="flex flex-wrap justify-center gap-8">
                {['拉新用户', '激活老用户', '提升寄件营收'].map((need, i) => (
                    <motion.div 
                        key={i}
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="w-48 h-48 rounded-full border-2 border-yellow-500/30 flex items-center justify-center bg-yellow-500/5 backdrop-blur-sm relative group cursor-default"
                    >
                        <div className="absolute inset-0 bg-yellow-400/10 rounded-full blur-xl group-hover:bg-yellow-400/30 transition-all duration-500 scale-75 group-hover:scale-100"></div>
                        <span className="text-xl font-bold relative z-10 text-white">{need}</span>
                    </motion.div>
                ))}
            </div>
        </div>

        {/* Left Column: Personas */}
        <div className="lg:col-span-5 space-y-8">
            <GlassCard className="p-8 bg-gradient-to-br from-orange-900/30 to-black border-orange-500/20 h-full">
                <h3 className="text-xl font-bold mb-6 text-orange-300 flex items-center gap-2">
                   🎯 目标用户画像
                </h3>
                <div className="space-y-6">
                    <div className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-yellow-400/50 transition-colors">
                        <h4 className="font-bold text-yellow-100 mb-2">新用户</h4>
                        <p className="text-sm text-gray-400 leading-relaxed">
                           <span className="text-white/60 block mb-1">目标：</span>关注“入门优惠”与“操作便捷”。<br/>
                           <span className="text-white/60 block mt-2 mb-1">痛点：</span>有寄件需求但门槛高，想降低尝试成本。
                        </p>
                    </div>
                    <div className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-yellow-400/50 transition-colors">
                        <h4 className="font-bold text-yellow-100 mb-2">老用户</h4>
                        <p className="text-sm text-gray-400 leading-relaxed">
                           <span className="text-white/60 block mb-1">目标：</span>关注“性价比”与“长期优惠”。<br/>
                           <span className="text-white/60 block mt-2 mb-1">痛点：</span>需强化复购动力。
                        </p>
                    </div>
                    <div className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-yellow-400/50 transition-colors">
                        <h4 className="font-bold text-yellow-100 mb-2">潜在分享用户</h4>
                        <p className="text-sm text-gray-400 leading-relaxed">
                           <span className="text-white/60 block mb-1">目标：</span>关注“双方获利”。<br/>
                           <span className="text-white/60 block mt-2 mb-1">痛点：</span>需要简化分享路径。
                        </p>
                    </div>
                </div>
            </GlassCard>
        </div>

        {/* Right Column: Visual Strategy & Execution */}
        <div className="lg:col-span-7 space-y-8">
            <div className="prose prose-invert max-w-none">
                <h3 className="text-3xl font-bold text-white mb-6">设计策略</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                   承接核心业务目标，我们摒弃了原有的中性化、工具风格，打造了一个以
                   <span className="text-yellow-400 font-bold mx-2">“亲和力、共情、年轻化”</span>
                   为核心的全新视觉系统。
                </p>
                
                <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/5 p-6 rounded-xl border border-white/10 text-center hover:bg-white/10 transition-colors">
                        <span className="block text-4xl mb-4">🎨</span>
                        <h4 className="font-bold mb-2 text-white">色彩氛围</h4>
                        <p className="text-sm text-gray-400">使用高饱和的暖黄主色调，营造轻盈活泼的促销氛围，建立“丰巢=专业洗护”的温暖联想。</p>
                    </div>
                    <div className="bg-white/5 p-6 rounded-xl border border-white/10 text-center hover:bg-white/10 transition-colors">
                        <span className="block text-4xl mb-4">✏️</span>
                        <h4 className="font-bold mb-2 text-white">插画风格</h4>
                        <p className="text-sm text-gray-400">采用3D与扁平结合的微质感图形，通过圆润的线条增加视觉亲和力与趣味性。</p>
                    </div>
                </div>

                <div className="p-6 rounded-xl bg-gradient-to-r from-yellow-900/20 to-transparent border-l-4 border-yellow-500">
                    <h4 className="text-xl font-bold text-white mb-4">信息优先级校准</h4>
                    <ul className="space-y-4 text-gray-300">
                        <li className="flex items-start gap-3">
                            <span className="bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded">P0</span>
                            <div>
                                <strong className="text-white block">新人专享 (拉新核心)</strong> 
                                <span className="text-sm">置于首屏最显眼处，利用“0元起”强利益点吸引点击。</span>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="bg-yellow-500/70 text-black text-xs font-bold px-2 py-1 rounded">P1</span>
                            <div>
                                <strong className="text-white block">领券立减 (即时促活)</strong>
                                <span className="text-sm">降低决策门槛，促进首单转化。</span>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="bg-yellow-500/40 text-black text-xs font-bold px-2 py-1 rounded">P2</span>
                            <div>
                                <strong className="text-white block">邀友裂变 (低成本拉新)</strong>
                                <span className="text-sm">通过双方获利的机制引导用户自发分享。</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
      
      {/* Visual Showcase */}
      <div className="mt-24 space-y-12">
        <h3 className="text-3xl font-bold text-center mb-12">界面视觉呈现</h3>
        {project.detailImages && project.detailImages.map((img, idx) => (
             <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
             >
                <img src={img} alt={`Visual ${idx}`} className="w-full h-auto" />
             </motion.div>
        ))}
      </div>
    </div>
  );
};

const StandardLayout: React.FC<{ project: Project }> = ({ project }) => {
    return (
        <>
            <div className="relative h-[60vh] w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/50 to-[#050505] z-10" />
                <motion.img 
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-20 z-20 max-w-7xl mx-auto">
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <span 
                    className="px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-black mb-6 inline-block"
                    style={{ backgroundColor: project.color }}
                    >
                    {project.category}
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">{project.title}</h1>
                    <div className="flex flex-wrap gap-8 text-sm uppercase tracking-widest text-gray-400">
                    {project.role && <div><span className="block text-gray-600 mb-1">Role</span>{project.role}</div>}
                    {project.year && <div><span className="block text-gray-600 mb-1">Year</span>{project.year}</div>}
                    <div><span className="block text-gray-600 mb-1">Tags</span>{project.tags.join(', ')}</div>
                    </div>
                </motion.div>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-6 md:px-12 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 pb-24">
                
                {/* Left: Sticky Overview */}
                <div className="lg:col-span-4">
                <div className="sticky top-32">
                    <h3 className="text-2xl font-bold mb-6 text-white/90">项目概览</h3>
                    <p className="text-gray-400 leading-relaxed text-justify mb-8">
                    {project.description}
                    </p>
                    <GlassCard className="p-6 bg-white/5 border-white/5">
                        <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Core Tools</h4>
                        <div className="flex flex-wrap gap-2">
                        {["Figma", "Photoshop", "After Effects", "Cinema 4D"].map(tool => (
                            <span key={tool} className="text-xs px-2 py-1 bg-white/10 rounded text-gray-300">{tool}</span>
                        ))}
                        </div>
                    </GlassCard>
                </div>
                </div>

                {/* Right: Detailed Story */}
                <div className="lg:col-span-8 space-y-20">
                {project.background && (
                    <section>
                    <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                        <span className="w-8 h-1 bg-white/20"></span> Background
                    </h3>
                    <p className="text-lg text-gray-300 leading-relaxed whitespace-pre-line">
                        {project.background}
                    </p>
                    </section>
                )}

                {project.solution && (
                    <section>
                    <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                        <span className="w-8 h-1 bg-white/20"></span> Solution
                    </h3>
                    <p className="text-lg text-gray-300 leading-relaxed whitespace-pre-line">
                        {project.solution}
                    </p>
                    </section>
                )}
                
                {/* Gallery of Details */}
                {project.detailImages && (
                    <div className="grid grid-cols-1 gap-8 my-12">
                        {project.detailImages.map((img, idx) => (
                        <img key={idx} src={img} alt={`Detail ${idx}`} className="w-full rounded-lg border border-white/10" />
                        ))}
                    </div>
                )}

                {project.result && (
                    <section>
                    <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                        <span className="w-8 h-1 bg-[#4ade80]"></span> Result
                    </h3>
                    <GlassCard className="p-8 bg-[#4ade80]/5 border-[#4ade80]/20">
                        <p className="text-lg text-gray-200 leading-relaxed whitespace-pre-line">
                        {project.result}
                        </p>
                    </GlassCard>
                    </section>
                )}
                </div>
            </div>
        </>
    );
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const isPromo = project.layout === 'promo';

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#050505] relative z-50 pb-20 overflow-x-hidden"
    >
      {/* Back Button */}
      <div className="fixed top-8 left-8 z-50">
        <button 
          onClick={onBack}
          className="group flex items-center gap-3 px-6 py-3 rounded-full bg-black/50 backdrop-blur-md border border-white/10 hover:border-[#4ade80]/50 transition-all duration-300"
        >
          <span className="text-xl group-hover:-translate-x-1 transition-transform">←</span>
          <span className="text-sm font-bold tracking-widest uppercase text-white/80 group-hover:text-[#4ade80]">Back</span>
        </button>
      </div>

      {isPromo ? (
         <div className="pt-24">
             <PromoLayout project={project} />
         </div>
      ) : (
         <StandardLayout project={project} />
      )}
    </motion.div>
  );
};

export default ProjectDetail;
