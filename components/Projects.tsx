"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const projects = [
  {
    id: 1,
    title: "B2B电商内容平台运营体系",
    category: "内容运营",
    description: "从0到1构建完整的内容生态体系，打通内容创作、分发、转化全链路。",
    tags: ["内容生态", "商城转化", "B2B内容", "用户活跃"],
    metrics: [
      { label: "内容产能提升", value: "300%" },
      { label: "用户停留时长", value: "+120%" },
    ],
    gradient: "from-[#d4af37]/20 to-[#d4af37]/5",
    details: [
      "建立选题策划、内容生产、审核发布的标准化流程",
      "设计内容与商城打通的转化闭环，提升下单转化率",
      "构建B2B行业内容体系，覆盖供应商与采购商双端",
      "通过用户分层运营，提升活跃度与复购率",
    ],
  },
  {
    id: 2,
    title: "珠宝B2B数字化运营",
    category: "商业运营",
    description: "深度参与珠宝行业B2B平台数字化转型，推动SaaS服务市场拓展。",
    tags: ["SaaS推广", "用户运营", "内容驱动", "数字化"],
    metrics: [
      { label: "SaaS客户增长", value: "200%" },
      { label: "续费率", value: "85%+" },
    ],
    gradient: "from-[#d4af37]/15 to-transparent",
    details: [
      "搭建商城内容体系，实现商品内容的标准化输出",
      "设计用户生命周期运营体系，提升用户粘性",
      "推动SaaS服务在珠宝行业的推广与应用",
      "通过内容驱动下单，实现商业转化提升",
    ],
  },
  {
    id: 3,
    title: "AI工作流实践",
    category: "AI实践",
    description: "深入探索AI在工作场景中的应用，构建自动化智能工作流。",
    tags: ["Claude Code", "AI Agent", "自动化", "Prompt Engineering"],
    metrics: [
      { label: "效率提升", value: "10x" },
      { label: "月均节省工时", value: "80h" },
    ],
    gradient: "from-[#6366f1]/20 to-[#6366f1]/5",
    details: [
      "Claude Code在工作流中的深度应用实践",
      "AI Agent场景设计与自动化执行",
      "Prompt Engineering与AI交互优化",
      "构建AI效率系统，赋能内容与运营工作",
    ],
  },
  {
    id: 4,
    title: "AI工具项目",
    category: "产品探索",
    description: "基于AI能力的产品探索与开发，将AI技术转化为实际工具。",
    tags: ["AI面试助手", "英语学习", "内容系统", "运营辅助"],
    metrics: [
      { label: "工具数量", value: "4+" },
      { label: "用户反馈", value: "Positive" },
    ],
    gradient: "from-[#10b981]/20 to-[#10b981]/5",
    details: [
      "AI面试助手 - 智能面试问题生成与模拟",
      "AI英语学习工具 - 个性化学习路径规划",
      "AI内容系统 - 自动化内容创作与分析",
      "AI运营辅助工具 - 数据分析与策略建议",
    ],
  },
];

export function Projects() {
  const [mounted, setMounted] = useState(false);
  const [activeProject, setActiveProject] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section id="projects" className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0d0d0d] to-[#0a0a0a]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-[#d4af37]" />
            <span className="text-xs tracking-[0.2em] text-[#737373] uppercase">Projects</span>
            <div className="w-8 h-[1px] bg-[#d4af37]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">
            代表性项目
          </h2>
          <p className="text-[#737373] max-w-2xl mx-auto">
            多年实战积累，涵盖内容运营、品牌增长、AI工作流等多个领域
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div
                className={`relative p-8 rounded-2xl bg-gradient-to-br ${project.gradient} border border-[rgba(255,255,255,0.06)] hover:border-[rgba(212,175,55,0.2)] transition-all duration-500 cursor-pointer overflow-hidden`}
                onClick={() => setActiveProject(activeProject === project.id ? null : project.id)}
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle,rgba(212,175,55,0.05)_0%,transparent_70%)] -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="text-xs text-[#d4af37] tracking-wider uppercase">{project.category}</span>
                      <h3 className="text-xl font-medium text-[#ededed] mt-1 group-hover:text-white transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <motion.div
                      animate={{ rotate: activeProject === project.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-8 h-8 rounded-full border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-[#737373] group-hover:border-[#d4af37] group-hover:text-[#d4af37] transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </motion.div>
                  </div>

                  {/* Description */}
                  <p className="text-[#a3a3a3] text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs text-[#737373] bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Metrics */}
                  <div className="flex gap-6">
                    {project.metrics.map((metric) => (
                      <div key={metric.label}>
                        <div className="text-2xl font-light gradient-text">{metric.value}</div>
                        <div className="text-xs text-[#737373]">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Expanded details */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: activeProject === project.id ? "auto" : 0,
                      opacity: activeProject === project.id ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-6 mt-6 border-t border-[rgba(255,255,255,0.06)]">
                      <ul className="space-y-3">
                        {project.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-[#a3a3a3]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] mt-1.5 flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}