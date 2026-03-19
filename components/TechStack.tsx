"use client";

import { motion } from "framer-motion";

const techCategories = [
  {
    category: "Frontend",
    techs: [
      { name: "React", icon: "⚛️" },
      { name: "Next.js", icon: "▲" },
      { name: "Angular", icon: "🅰️" },
      { name: "Vue.js", icon: "💚" },
      { name: "Nuxt", icon: "💚" },
      { name: "TypeScript", icon: "🔷" },
      { name: "Tailwind", icon: "🎨" },
      { name: "Three.js", icon: "🔺" },
    ],
  },
  {
    category: "Backend",
    techs: [
      { name: "Node.js", icon: "🟢" },
      { name: "Python", icon: "🐍" },
      { name: "Django", icon: "🎸" },
      { name: "Flask", icon: "🧪" },
      { name: "C#", icon: "🟣" },
      { name: ".NET", icon: "🟣" },
      { name: "ASP.NET", icon: "🟣" },
      { name: "FastAPI", icon: "⚡" },
    ],
  },
  {
    category: "Mobile",
    techs: [
      { name: "React Native", icon: "📱" },
      { name: "Flutter", icon: "🦋" },
      { name: "Swift", icon: "🍎" },
      { name: "Kotlin", icon: "🤖" },
    ],
  },
  {
    category: "AI & Data",
    techs: [
      { name: "TensorFlow", icon: "🧠" },
      { name: "PyTorch", icon: "🔥" },
      { name: "LangChain", icon: "🔗" },
      { name: "OpenAI", icon: "✨" },
      { name: "Pandas", icon: "🐼" },
      { name: "Scikit-learn", icon: "📊" },
    ],
  },
  {
    category: "Web3",
    techs: [
      { name: "Solidity", icon: "💎" },
      { name: "Ethereum", icon: "⟠" },
      { name: "Solana", icon: "◎" },
      { name: "IPFS", icon: "🌐" },
      { name: "Hardhat", icon: "⛑️" },
    ],
  },
  {
    category: "Cloud & DevOps",
    techs: [
      { name: "AWS", icon: "☁️" },
      { name: "Azure", icon: "🔵" },
      { name: "GCP", icon: "🌩️" },
      { name: "Docker", icon: "🐳" },
      { name: "Kubernetes", icon: "⎈" },
      { name: "Vercel", icon: "▲" },
    ],
  },
];

// Marquee row of all tech names
const allTechNames = techCategories.flatMap((c) =>
  c.techs.map((t) => t.name)
);

export default function TechStack() {
  return (
    <section id="tech" className="py-20 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/3 blur-[200px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-medium tracking-widest uppercase mb-4 block">
            Technology
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our <span className="gradient-text">Arsenal</span>
          </h2>
          <p className="text-muted text-base md:text-lg max-w-2xl mx-auto text-center">
            We master the tools that matter. 14+ frameworks, 6+ languages,
            battle-tested at scale.
          </p>
        </motion.div>

        {/* Tech marquee */}
        <div className="mb-16 overflow-hidden border-y border-border-color py-6">
          <div className="marquee flex gap-8 whitespace-nowrap">
            {[...allTechNames, ...allTechNames].map((name, i) => (
              <span
                key={i}
                className="text-2xl font-bold text-muted/20 hover:text-accent/40 transition-colors duration-300 cursor-default"
              >
                {name}
              </span>
            ))}
          </div>
        </div>

        {/* Tech categories grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((cat, catIndex) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              className="bg-surface rounded-2xl border border-border-color p-6 hover:border-accent/20 transition-all duration-500"
            >
              <h3 className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {cat.techs.map((tech) => (
                  <div
                    key={tech.name}
                    className="group flex items-center gap-2 px-3 py-2 rounded-lg bg-background border border-border-color hover:border-accent/30 hover:bg-surface-light transition-all duration-300 cursor-default"
                  >
                    <span className="text-sm">{tech.icon}</span>
                    <span className="text-sm text-muted group-hover:text-foreground transition-colors">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
