"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const socialLinks = [
  {
    name: "微信",
    handle: "YanZhou_AI",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    name: "邮箱",
    handle: "yanzhou@example.com",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    name: "小红书",
    handle: "颜周的AI实验室",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    name: "公众号",
    handle: "AI与商业实践",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    ),
  },
];

export function Contact() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0a]" />

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
        <div className="absolute inset-0 rounded-full border border-[rgba(212,175,55,0.05)]" />
        <div className="absolute inset-12 rounded-full border border-[rgba(212,175,55,0.03)]" />
        <div className="absolute inset-24 rounded-full border border-[rgba(212,175,55,0.02)]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-[#d4af37]" />
            <span className="text-xs tracking-[0.2em] text-[#737373] uppercase">Contact</span>
            <div className="w-8 h-[1px] bg-[#d4af37]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">
            建立连接
          </h2>
          <p className="text-[#737373] max-w-xl mx-auto">
            无论你是想探讨AI实践、交流商业洞察，还是寻找合作机会，都欢迎联系我
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <a
            href="mailto:yanzhou@example.com"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-[#d4af37] text-[#0a0a0a] font-medium rounded-full hover:bg-[#e5c04a] transition-all duration-300 hover:shadow-[0_0_40px_rgba(212,175,55,0.3)]"
          >
            <span>yanzhou@example.com</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {socialLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              className="group"
            >
              <div className="p-6 rounded-xl bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.06)] hover:border-[rgba(212,175,55,0.3)] hover:bg-[rgba(212,175,55,0.03)] transition-all duration-300 cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-[rgba(255,255,255,0.05)] flex items-center justify-center text-[#737373] group-hover:text-[#d4af37] group-hover:bg-[rgba(212,175,55,0.1)] transition-colors duration-300 mx-auto mb-3">
                  {link.icon}
                </div>
                <div className="text-sm font-medium text-[#ededed] group-hover:text-white transition-colors mb-1">
                  {link.name}
                </div>
                <div className="text-xs text-[#737373] group-hover:text-[#a3a3a3] transition-colors">
                  {link.handle}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="relative z-10 mt-32 pt-8 border-t border-[rgba(255,255,255,0.05)]"
      >
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-[#737373]">
            © 2026 颜周. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="text-sm text-[#525252]">
              用AI重构内容与商业效率
            </span>
            <div className="w-1 h-1 rounded-full bg-[#525252]" />
            <span className="text-sm text-[#525252]">
              Made with Claude
            </span>
          </div>
        </div>
      </motion.footer>
    </section>
  );
}