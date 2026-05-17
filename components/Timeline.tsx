"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const timelineData = [
  {
    period: "2018-2020",
    phase: "内容运营起步",
    title: "内容生态探索",
    description: "从内容编辑到内容运营，建立内容生产与分发体系。",
    highlight: "从0到1搭建内容团队",
  },
  {
    period: "2020-2022",
    phase: "品牌运营深化",
    title: "品牌增长实践",
    description: "深度参与品牌数字化运营，探索用户增长与转化路径。",
    highlight: "品牌影响力显著提升",
  },
  {
    period: "2022-2024",
    phase: "珠宝行业深耕",
    title: "B2B数字化转型",
    description: "深耕珠宝B2B行业，推动数字化运营与SaaS服务落地。",
    highlight: "SaaS续费率85%+",
  },
  {
    period: "2024-2025",
    phase: "AI探索期",
    title: "AI工作流实践",
    description: "全面拥抱AI工具，探索AI Agent与自动化工作流。",
    highlight: "效率提升10x",
  },
  {
    period: "2025-至今",
    phase: "个人品牌建设",
    title: "AI时代战略人才",
    description: "整合内容、商业与AI能力，打造个人品牌影响力。",
    highlight: "多重身份探索者",
  },
];

export function Timeline() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section id="timeline" className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0d0d0d] to-[#0a0a0a]" />

      {/* Central line decoration */}
      <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[rgba(212,175,55,0.2)] to-transparent hidden lg:block" />

      <div className="relative z-10 max-w-6xl mx-auto">
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
            <span className="text-xs tracking-[0.2em] text-[#737373] uppercase">Timeline</span>
            <div className="w-8 h-[1px] bg-[#d4af37]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">
            成长轨迹
          </h2>
          <p className="text-[#737373] max-w-2xl mx-auto">
            从内容运营到AI实践的持续进化之路
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {timelineData.map((item, index) => (
            <motion.div
              key={item.period}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex items-center gap-8 mb-12 ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              {/* Content */}
              <div className={`flex-1 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                <div className="inline-block px-3 py-1 text-xs text-[#d4af37] bg-[rgba(212,175,55,0.1)] rounded-full border border-[rgba(212,175,55,0.2)] mb-3">
                  {item.period}
                </div>
                <div className="text-xs text-[#737373] uppercase tracking-wider mb-1">
                  {item.phase}
                </div>
                <h3 className="text-xl font-medium text-[#ededed] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#a3a3a3] leading-relaxed mb-3">
                  {item.description}
                </p>
                <div className={`inline-flex items-center gap-2 text-xs text-[#10b981] ${index % 2 === 0 ? "lg:justify-end" : "lg:justify-start"}`}>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item.highlight}
                </div>
              </div>

              {/* Center dot */}
              <div className="relative z-10 w-4 h-4 flex-shrink-0">
                <div className="absolute inset-0 rounded-full bg-[#d4af37] animate-pulse" />
                <div className="absolute inset-1 rounded-full bg-[#0a0a0a]" />
                <div className="absolute inset-2 rounded-full bg-[#d4af37]" />
              </div>

              {/* Spacer for opposite side */}
              <div className="flex-1 hidden lg:block" />
            </motion.div>
          ))}
        </div>

        {/* Bottom decoration */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-8 h-[1px] bg-gradient-to-r from-transparent via-[rgba(212,175,55,0.3)] to-transparent"
        />
      </div>
    </section>
  );
}