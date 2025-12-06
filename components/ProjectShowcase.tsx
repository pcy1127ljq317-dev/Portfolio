
import React from 'react';
import GlassCard from './GlassCard';
import { Project } from '../types';
import { motion } from 'framer-motion';

const projects: Project[] = [
  {
    id: "hivebox",
    title: "京东 x 丰巢618",
    category: "运营设计",
    description: "借用618电商大战热点，通过色彩策略与信息层级重构，平衡强促销冲击力与用户沉浸式体验。打造“专业洗护”的心智。",
    tags: ["3D设计", "运营活动", "品牌视觉"],
    image: "https://i.postimg.cc/Pvm14mRK/618-1.png",
    color: "#4ade80",
    role: "主视觉设计 / 延展设计",
    year: "2024",
    background: "京东是丰巢的重要公域平台之一。借用618电商大战热点，如何通过色彩策略与信息层级重构，达到平衡618强促销冲击力与用户沉浸式浏览体验，传递给用户20+品类复杂优惠信息，是此次项目的难点。",
    solution: "视觉策略：\n1. 视觉降噪：兼顾“促销感”和“清爽感”。\n2. 色彩运用：在京东红海中契合业务主推洗护产品，用“夏日蓝+京东红+清爽绿”打造差异化。\n3. 构图与元素布局：主体突出，信息分层，元素搭配。\n\n设计执行：\n构建信息层级与信任符号，将视觉元素分为三大层次（核心利益层、服务标识层、氛围营造层）。字体兼具大促感与亲和力，选择圆润友好的字体家族。",
    result: "通过“阶梯式组件串联”，培养“丰巢洗护”在用户心中从“陌生品牌”变成“洗护首选”的心智，同时沉淀一些可复用的设计组件供团队提高设计效率。\n\n点击率提升 30% ↑\nPV提升 90% ↑\nUV提升 60% ↑",
    detailImages: [
      "https://picsum.photos/1200/600?random=101", 
      "https://picsum.photos/800/800?random=102",
      "https://picsum.photos/800/800?random=103",
      "https://picsum.photos/1200/600?random=104"
    ]
  },
  {
    id: "hivebox_promo",
    title: "丰巢寄件全国推广",
    category: "运营活动",
    description: "为丰巢App的寄件业务进行全国推广，设计拉新促活的H5，承接“拉新用户、激活老用户、提升寄件营收”三大核心需求。",
    tags: ["用户体验", "业务表达", "运营活动"],
    image: "https://i.postimg.cc/30TjM4Xx/7.jpg", // Using one of the provided portfolio images that fits the vibe
    color: "#fbbf24", // Warm Yellow
    role: "运营设计师",
    year: "2024",
    layout: "promo", // Custom layout flag
    background: "为丰巢App的寄件业务进行全国推广，设计“拉新促活”的H5。承接“拉新用户、激活老用户、提升寄件营收”三大核心需求。如何通过视觉来传递核心利益点，同时平衡视觉上的良好表现是此次作为设计的难点。",
    solution: "目标用户画像分析：\n1. 新用户：关注入门优惠与操作便捷，痛点是有寄件需求但门槛高。\n2. 老用户：关注性价比与长期优惠，需强化复购动力。\n3. 潜在分享用户：关注双方获利，需要简化分享路径。\n\n信息优先级校准：\n按“用户决策路径+业务价值”排序信息层级，突出业务重点（新人专享、领券立减、邀友裂变）。",
    result: "视觉关键词：亲和力、共情、年轻化、轻盈趣味。\n\n设计产出：\n主视觉合成：背景层+中景修饰+中景主体+前景信息。\n活动运营界面：整体采用轻量卡通插画风格，通过圆润的图形、柔和的色彩与微质感处理，塑造出友好、有趣的视觉氛围。",
    detailImages: [
      "https://picsum.photos/1200/600?random=401", 
      "https://picsum.photos/800/800?random=402",
      "https://picsum.photos/800/800?random=403",
      "https://picsum.photos/1200/600?random=404"
    ]
  },
  {
    id: "stardust",
    title: "Stardust TV",
    category: "UI/UX 设计",
    description: "针对海外短剧市场，优化订阅页布局与弹窗交互逻辑，提升用户订阅转化率。通过结构化的信息归位，降低用户决策成本。",
    tags: ["UI设计", "用户增长", "交互优化"],
    image: "https://picsum.photos/1200/800?random=2",
    color: "#a855f7",
    role: "UI设计师",
    year: "2024",
    background: "Stardust TV是一款面向海外用户的短剧APP。在内容竞争激烈的市场环境下，提升用户付费转化率与参与度至关重要。订阅页作为引导用户订阅会员获取更多权益的关键页面，以及弹窗作为向用户传达重要信息、引导关键行为的交互元素，其设计的优劣直接影响用户的操作意愿和APP的业务指标。",
    solution: "设计方案：\n1. 优化订阅页布局与交互流程，简化操作步骤，提升用户订阅转化率。\n2. 设计弹窗的视觉效果与交互逻辑，突出关键信息，吸引用户注意力，提高弹窗点击率和用户参与度。\n3. 尝试更结构化的套餐信息架构，达成界面层级的清晰梳理和用户体验的优化。",
    result: "新用户点击率提升至 30% 左右。\n老用户续订提升至 70%。\n\n优化后的订阅页能让用户更轻松地找到所需套餐，清晰了解权益和价格，减少决策时间和认知成本，提升使用体验，增强对APP的信任和好感度。",
    detailImages: [
      "https://picsum.photos/1200/600?random=201",
      "https://picsum.photos/800/800?random=202",
      "https://picsum.photos/800/800?random=203",
      "https://picsum.photos/1200/600?random=204"
    ]
  },
  {
    id: "shopline",
    title: "SHOPLINE Shipping",
    category: "网页设计",
    description: "负责GTM设计及网页视觉改版，通过清晰的信息层级传递物流解决方案的专业与信任感。",
    tags: ["B2B", "网页设计", "品牌重塑"],
    image: "https://picsum.photos/1200/800?random=3",
    color: "#3b82f6",
    role: "品牌视觉设计师",
    year: "2023",
    background: "Shopline需要对其物流服务Shipping进行全新的GTM（Go-to-market）推广，旧版网页视觉风格陈旧，信息传递效率低，无法有效传递“高效、专业、全球化”的品牌形象。",
    solution: "1. 视觉风格：采用简洁、现代的B2B科技风格，使用品牌蓝作为主色调，强调信任感。\n2. 信息架构：重构落地页逻辑，突出核心卖点（时效、覆盖范围、价格优势）。\n3. 动态交互：增加微交互提升浏览体验。",
    result: "成功上线新版Landing Page，提升了品牌专业度感知，页面停留时长增加，线索获取率有所提升。",
    detailImages: [
      "https://picsum.photos/1200/600?random=301",
      "https://picsum.photos/800/800?random=302",
      "https://picsum.photos/800/800?random=303",
      "https://picsum.photos/1200/600?random=304"
    ]
  }
];

interface ProjectShowcaseProps {
  onProjectSelect: (project: Project) => void;
}

const ProjectCard: React.FC<{ project: Project; index: number; onSelect: () => void }> = ({ project, index, onSelect }) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 mb-32 items-center`}>
      {/* Image Side */}
      <motion.div 
        className="w-full lg:w-3/5 cursor-pointer"
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-10%" }}
        onClick={onSelect}
      >
        <div className="relative group interactive rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-video">
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
          />
          {/* Overlay Tag */}
          <div className="absolute top-4 left-4 z-20">
            <span 
              className="px-3 py-1 text-xs font-bold text-black rounded-full"
              style={{ backgroundColor: project.color }}
            >
              {project.category}
            </span>
          </div>
        </div>
      </motion.div>

      {/* Content Side */}
      <motion.div 
        className="w-full lg:w-2/5"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <GlassCard className="p-8 lg:p-10 hover:border-opacity-50 transition-all duration-300">
          <h2 className="text-5xl font-bold mb-4 opacity-20 absolute -top-6 -right-6 select-none font-serif italic">
            0{index + 1}
          </h2>
          <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
          <p className="text-gray-400 mb-6 leading-relaxed text-justify">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map(tag => (
              <span key={tag} className="text-xs uppercase tracking-wider border border-white/20 px-3 py-1 rounded-sm text-gray-300">
                {tag}
              </span>
            ))}
          </div>
          <button 
            onClick={onSelect}
            className="interactive group flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-[#4ade80] transition-colors"
          >
            Read Case Study
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </GlassCard>
      </motion.div>
    </div>
  );
};

const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ onProjectSelect }) => {
  return (
    <section className="py-24 px-4 md:px-12 max-w-7xl mx-auto relative z-10">
      <div className="mb-20 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          SELECTED <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">PROJECTS</span>
        </motion.h2>
        <div className="w-24 h-1 bg-white/10 mx-auto rounded-full" />
      </div>

      {projects.map((project, index) => (
        <ProjectCard 
          key={project.id} 
          project={project} 
          index={index} 
          onSelect={() => onProjectSelect(project)} 
        />
      ))}
    </section>
  );
};

export default ProjectShowcase;
