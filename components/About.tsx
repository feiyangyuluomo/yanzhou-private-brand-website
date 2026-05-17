"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export function About() {
  const [mounted, setMounted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0d0d0d] to-[#0a0a0a]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center"
        >
          {/* Left: Visual element */}
          <motion.div variants={itemVariants} className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden relative">
              {/* Abstract representation - no actual image */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]" />
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Geometric pattern */}
                <div className="relative w-48 h-48">
                  <div className="absolute inset-0 border border-[rgba(212,175,55,0.2)] rounded-full animate-spin" style={{ animationDuration: "30s" }} />
                  <div className="absolute inset-4 border border-[rgba(212,175,55,0.15)] rounded-full animate-spin" style={{ animationDuration: "25s", animationDirection: "reverse" }} />
                  <div className="absolute inset-8 border border-[rgba(212,175,55,0.1)] rounded-full animate-spin" style={{ animationDuration: "20s" }} />
                  <div className="absolute inset-12 border border-[rgba(212,175,55,0.05)] rounded-full animate-spin" style={{ animationDuration: "15s", animationDirection: "reverse" }} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-4 h-4 bg-[#d4af37] rounded-full shadow-[0_0_30px_rgba(212,175,55,0.5)]" />
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute top-6 left-6 px-4 py-2 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-full backdrop-blur-sm">
                <span className="text-xs text-[#737373]">多年深耕</span>
              </div>
              <div className="absolute bottom-6 right-6 px-4 py-2 bg-[rgba(212,175,55,0.1)] border border-[rgba(212,175,55,0.2)] rounded-full backdrop-blur-sm">
                <span className="text-xs text-[#d4af37]">AI实践者</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Section label */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-[1px] bg-[#d4af37]" />
              <span className="text-xs tracking-[0.2em] text-[#737373] uppercase">About Me</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-light tracking-tight">
              在内容与商业的交界处，
              <br />
              <span className="gradient-text">寻找AI时代的效率密码</span>
            </h2>

            {/* Description */}
            <div className="space-y-4 text-[#a3a3a3] leading-relaxed">
              <p>
                多年内容运营与品牌增长操盘经验，深耕珠宝B2B行业数字化转型。对内容生态建设、用户转化路径设计、品牌数字化运营有深入理解与实战积累。
              </p>
              <p>
                近年来专注于AI工作流与商业场景的融合实践，探索如何用AI工具重构内容生产流程、提升运营效率、实现商业增长。持续跟踪AI Agent、Prompt Engineering、大语言模型应用等前沿领域。
              </p>
              <p>
                相信AI不会取代人，但会用AI的人会取代不会用AI的人。致力于成为那个「既懂商业、又懂内容、真正理解AI」的跨界实践者。
              </p>
            </div>

            {/* Key points */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { label: "行业经验", value: "8+年" },
                { label: "操盘项目", value: "50+" },
                { label: "AI工具", value: "30+" },
                { label: "内容产能", value: "10x" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-4 bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] rounded-xl"
                >
                  <div className="text-2xl font-light gradient-text mb-1">{stat.value}</div>
                  <div className="text-xs text-[#737373]">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}