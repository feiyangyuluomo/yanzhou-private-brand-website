"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const navItems = [
  { id: "about", label: "关于" },
  { id: "skills", label: "能力" },
  { id: "projects", label: "项目" },
  { id: "insights", label: "洞察" },
  { id: "ai-lab", label: "AI实验室" },
  { id: "contact", label: "联系" },
];

export function Navigation() {
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-4 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-[rgba(255,255,255,0.05)]"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-lg font-medium tracking-tight hover:text-[#d4af37] transition-colors"
          >
            <span className="gradient-text">颜周</span>
          </button>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm text-[#737373] hover:text-[#ededed] transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#d4af37] group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          >
            <span
              className={`w-6 h-[1px] bg-[#ededed] transition-all duration-300 ${
                mobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-6 h-[1px] bg-[#ededed] transition-all duration-300 ${
                mobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-6 h-[1px] bg-[#ededed] transition-all duration-300 ${
                mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          height: mobileMenuOpen ? "auto" : 0,
          opacity: mobileMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-[72px] left-0 right-0 z-40 bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-[rgba(255,255,255,0.05)] md:hidden overflow-hidden"
      >
        <div className="px-6 py-8 flex flex-col gap-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-left text-lg text-[#a3a3a3] hover:text-[#ededed] transition-colors py-2"
            >
              {item.label}
            </button>
          ))}
        </div>
      </motion.div>
    </>
  );
}