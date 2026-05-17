"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const aiTools = [
  {
    name: "Claude Code",
    description: "AI编程助手，代码编写与调试",
    status: "活跃使用",
    statusColor: "bg-[#10b981]",
  },
  {
    name: "GPT-4",
    description: "通用对话与内容生成",
    status: "活跃使用",
    statusColor: "bg-[#10b981]",
  },
  {
    name: "Kimi",
    description: "长文本分析与多模态",
    status: "活跃使用",
    statusColor: "bg-[#10b981]",
  },
  {
    name: "Cursor",
    description: "AI代码编辑器",
    status: "探索中",
    statusColor: "bg-[#f59e0b]",
  },
  {
    name: "Perplexity",
    description: "AI搜索与研究",
    status: "活跃使用",
    statusColor: "bg-[#10b981]",
  },
  {
    name: "Notion AI",
    description: "文档与知识管理",
    status: "活跃使用",
    statusColor: "bg-[#10b981]",
  },
];

const workflows = [
  {
    title: "内容创作流",
    description: "选题 → 大纲 → 草稿 → 润色 → 发布",
    efficiency: "效率提升 300%",
  },
  {
    title: "数据分析流",
    description: "采集 → 清洗 → 分析 → 可视化 → 报告",
    efficiency: "效率提升 500%",
  },
  {
    title: "用户运营流",
    description: "分层 → 触达 → 互动 → 转化 → 复盘",
    efficiency: "效率提升 200%",
  },
];

export function AILab() {
  const [mounted, setMounted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const createParticle = () => ({
      x: Math.random() * canvas.width,
      y: canvas.height + 10,
      vx: (Math.random() - 0.5) * 0.5,
      vy: -Math.random() * 1 - 0.5,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.1,
    });

    const initParticles = () => {
      for (let i = 0; i < 50; i++) {
        particles.push(createParticle());
      }
    };

    const drawLines = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(212, 175, 55, ${0.1 * (1 - distance / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw particles
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.y < -10) {
          particles[i] = createParticle();
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 175, 55, ${p.opacity})`;
        ctx.fill();
      });

      drawLines();
      animationId = requestAnimationFrame(animate);
    };

    resize();
    initParticles();
    animate();

    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <section id="ai-lab" className="relative py-32 px-6 overflow-hidden">
      {/* Canvas background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-30"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/80 to-[#0a0a0a]" />

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
            <span className="text-xs tracking-[0.2em] text-[#737373] uppercase">AI Lab</span>
            <div className="w-8 h-[1px] bg-[#d4af37]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">
            AI实验室
          </h2>
          <p className="text-[#737373] max-w-2xl mx-auto">
            持续探索AI工具与工作流的融合实践，用技术赋能内容与商业效率
          </p>
        </motion.div>

        {/* AI Tools Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-lg font-light text-[#ededed] mb-6 flex items-center gap-3">
            <span className="w-1 h-4 bg-[#d4af37]" />
            AI工具矩阵
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {aiTools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group p-4 rounded-xl bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.06)] hover:border-[rgba(212,175,55,0.3)] transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className={`w-2 h-2 rounded-full ${tool.statusColor}`} />
                  <span className="text-xs text-[#737373]">{tool.status}</span>
                </div>
                <h4 className="text-sm font-medium text-[#ededed] mb-1 group-hover:text-white transition-colors">
                  {tool.name}
                </h4>
                <p className="text-xs text-[#737373]">{tool.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Workflows */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-lg font-light text-[#ededed] mb-6 flex items-center gap-3">
            <span className="w-1 h-4 bg-[#d4af37]" />
            AI工作流实践
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {workflows.map((flow, index) => (
              <motion.div
                key={flow.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative p-6 rounded-2xl bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.06)] overflow-hidden group hover:border-[rgba(212,175,55,0.2)] transition-all duration-500"
              >
                {/* Animated border */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 rounded-2xl border border-[#d4af37]/30 animate-pulse" />
                </div>

                <div className="relative z-10">
                  <h4 className="text-lg font-medium text-[#ededed] mb-2 group-hover:text-white transition-colors">
                    {flow.title}
                  </h4>
                  <p className="text-sm text-[#737373] mb-4">{flow.description}</p>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[rgba(16,185,129,0.1)] border border-[rgba(16,185,129,0.2)]">
                    <svg className="w-4 h-4 text-[#10b981]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    <span className="text-xs text-[#10b981]">{flow.efficiency}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Prompt Engineering Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 p-8 rounded-2xl bg-gradient-to-br from-[rgba(212,175,55,0.05)] to-transparent border border-[rgba(212,175,55,0.1)]"
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-[rgba(212,175,55,0.1)] border border-[rgba(212,175,55,0.2)] flex items-center justify-center">
              <svg className="w-6 h-6 text-[#d4af37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-light text-[#ededed] mb-2">Prompt Engineering</h3>
              <p className="text-sm text-[#737373]">
                用好AI的核心在于提问方式。通过大量实践，总结出一套AI交互方法论。
              </p>
            </div>
          </div>

          {/* Example prompts */}
          <div className="space-y-3">
            {[
              "角色设定 + 任务描述 + 输出格式 = 清晰指令",
              "上下文注入 + 示例学习 + 迭代优化 = 精准输出",
              "思维链引导 + 分解步骤 + 验证机制 = 复杂任务",
            ].map((prompt, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-3 rounded-lg bg-[rgba(0,0,0,0.2)] border border-[rgba(255,255,255,0.03)]"
              >
                <span className="text-xs text-[#d4af37] font-mono">{i + 1}</span>
                <span className="text-sm text-[#a3a3a3]">{prompt}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}