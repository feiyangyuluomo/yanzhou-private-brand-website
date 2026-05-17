import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Insights } from "@/components/Insights";
import { AILab } from "@/components/AILab";
import { Timeline } from "@/components/Timeline";
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Insights />
      <AILab />
      <Timeline />
      <Contact />
    </main>
  );
}