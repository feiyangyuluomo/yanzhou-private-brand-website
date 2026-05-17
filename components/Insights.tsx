"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const insights = [
  {
    id: 1,
    title: "AI如何重构内容生产效率：从选题到发布的全流程自动化",
    category: "AI与内容",
    excerpt: "探索AI工具在内容创作各环节的应用，包括选题灵感获取、内容框架生成、标题优化等实际场景。",
    readTime: "8分钟",
    date: "2026.05",
  },
  {
    id: 2,
    title: "B2B行业内容营销的破局之道：从流量思维到留量思维",
    category: "B2B运营",
    excerpt: "传统B2B企业如何通过内容建立信任连接，实现从流量获取到客户留存的价值跃迁。",
    readTime: "6分钟",
    date: "2026.04",
  },
  {
    id: 3,
    title: "珠宝行业数字化转型：内容与体验的双重升级",
    category: "行业观察",
    excerpt: "从珠宝B2B平台实践出发，探讨传统行业如何通过数字化运营实现降本增效。",
    readTime: "10分钟",
    date: "2026.04",
  },
  {
    id: 4,
    title: "Prompt Engineering实战：用好AI的核心在于提问方式",
    category: "AI实践",
    excerpt: "通过大量实践总结出的Prompt设计方法论，让AI真正成为高效的工作助手。",
    readTime: "12分钟",
    date: "2026.03",
  },
  {
    id: 5,
    title: "品牌人格化：在AI时代打造有温度的商业品牌",
    category: "品牌运营",
    excerpt: "当AI能完成大部分工作时，品牌的温度与人格将成为核心差异化竞争力。",
    readTime: "7分钟",
    date: "2026.03",
  },
  {
    id: 6,
    title: "从GEO到AI搜索：内容创作者的新机遇与新挑战",
    category: "AI趋势",
    excerpt: "AI搜索正在重塑内容被发现的方式，内容创作者需要理解GEO（生成式引擎优化）的新规则。",
    readTime: "9分钟",
    date: "2026.02",
  },
];

export function Insights() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section id="insights" className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0a]" />

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[radial-gradient(circle,rgba(212,175,55,0.03)_0%,transparent_70%)] -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[radial-gradient(circle,rgba(212,175,55,0.03)_0%,transparent_70%)] translate-x-1/2" />

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
            <span className="text-xs tracking-[0.2em] text-[#737373] uppercase">Insights</span>
            <div className="w-8 h-[1px] bg-[#d4af37]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">
            行业洞察
          </h2>
          <p className="text-[#737373] max-w-2xl mx-auto">
            关于AI、商业与运营的深度思考
          </p>
        </motion.div>

        {/* Featured article */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-[rgba(212,175,55,0.1)] to-transparent border border-[rgba(212,175,55,0.1)] hover:border-[rgba(212,175,55,0.2)] transition-colors duration-500">
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 text-xs text-[#d4af37] bg-[rgba(212,175,55,0.1)] rounded-full border border-[rgba(212,175,55,0.2)]">
                  {insights[0].category}
                </span>
                <span className="text-xs text-[#737373]">{insights[0].date}</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-light text-[#ededed] mb-4 group-hover:text-white transition-colors leading-relaxed">
                {insights[0].title}
              </h3>
              <p className="text-[#a3a3a3] leading-relaxed mb-6 max-w-3xl">
                {insights[0].excerpt}
              </p>
              <div className="flex items-center gap-6">
                <button className="flex items-center gap-2 text-sm text-[#d4af37] hover:gap-3 transition-all duration-300">
                  <span>阅读全文</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
                <span className="text-xs text-[#737373]">{insights[0].readTime}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Articles grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {insights.slice(1).map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="p-6 rounded-xl bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] hover:border-[rgba(212,175,55,0.2)] transition-all duration-300 h-full flex flex-col">
                {/* Category & Date */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-[#d4af37] tracking-wider uppercase">{article.category}</span>
                  <span className="text-xs text-[#737373]">{article.date}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-light text-[#ededed] mb-3 leading-relaxed group-hover:text-white transition-colors flex-1">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-[#737373] leading-relaxed mb-4 line-clamp-2">
                  {article.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-[rgba(255,255,255,0.05)]">
                  <button className="text-xs text-[#a3a3a3] hover:text-[#d4af37] transition-colors flex items-center gap-1">
                    <span>阅读</span>
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                  <span className="text-xs text-[#737373]">{article.readTime}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}