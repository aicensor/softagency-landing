"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const categories = ["All", "Web", "Mobile", "AI", "E-Commerce", "Web3", "FinTech"];

const projects = [
  // --- AI (3) ---
  {
    title: "HealthAI Dashboard",
    category: "AI",
    description: "Clinical data management platform with AI diagnostics and real-time patient monitoring.",
    tags: ["Python", "Django", "TensorFlow", "React"],
    gradient: "from-[#0ea5e9] to-[#6366f1]",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
  },
  {
    title: "VisionSense",
    category: "AI",
    description: "Computer vision pipeline for manufacturing QA — detects defects with 99.7% accuracy.",
    tags: ["PyTorch", "OpenCV", "FastAPI", "Edge"],
    gradient: "from-[#8b5cf6] to-[#a78bfa]",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
  },
  {
    title: "LegalMind Agent",
    category: "AI",
    description: "Agentic RAG system for law firms — reviews contracts and flags risk clauses in seconds.",
    tags: ["LangChain", "OpenAI", "Pinecone", "Next.js"],
    gradient: "from-[#64748b] to-[#475569]",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
  },

  // --- Web (3) ---
  {
    title: "DataForge SaaS",
    category: "Web",
    description: "Enterprise data pipeline builder with visual workflow editor and 50+ integrations.",
    tags: ["Vue.js", "Python", "PostgreSQL", "Docker"],
    gradient: "from-[#7c6ef0] to-[#b4a8ff]",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    title: "TeamSync Portal",
    category: "Web",
    description: "Real-time collaboration platform with Kanban boards, document co-editing, and video rooms.",
    tags: ["Next.js", "Socket.io", "Redis", "AWS"],
    gradient: "from-[#0ea5e9] to-[#38bdf8]",
    image: "https://images.unsplash.com/photo-1531498860502-7c67cf02f657?w=800&q=80",
  },
  {
    title: "EduVerse LMS",
    category: "Web",
    description: "Learning management system with AI-powered course recommendations and live classrooms.",
    tags: ["React", "Node.js", "MongoDB", "WebRTC"],
    gradient: "from-[#f59e0b] to-[#fbbf24]",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80",
  },

  // --- Mobile (3) ---
  {
    title: "CityPulse App",
    category: "Mobile",
    description: "Real-time urban analytics app with AR navigation, event discovery, and community features.",
    tags: ["React Native", "Firebase", "AR", "Maps"],
    gradient: "from-[#06b6d4] to-[#22d3ee]",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
  },
  {
    title: "FitTrack Pro",
    category: "Mobile",
    description: "Fitness coaching app with AI workout plans, wearable sync, and social challenges.",
    tags: ["Flutter", "Dart", "HealthKit", "Firebase"],
    gradient: "from-[#ef4444] to-[#f97316]",
    image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=800&q=80",
  },
  {
    title: "QuickDeliver",
    category: "Mobile",
    description: "On-demand delivery app with real-time GPS tracking and route optimization.",
    tags: ["React Native", "Node.js", "Maps", "Stripe"],
    gradient: "from-[#10b981] to-[#34d399]",
    image: "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=800&q=80",
  },

  // --- E-Commerce (3) ---
  {
    title: "LuxeMarket",
    category: "E-Commerce",
    description: "Premium headless commerce with 3D product visualization and AI recommendations.",
    tags: ["Next.js", "Stripe", "Three.js", "Node"],
    gradient: "from-[#f59e0b] to-[#ef4444]",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
  },
  {
    title: "FreshBox Grocery",
    category: "E-Commerce",
    description: "Grocery delivery platform with smart inventory, subscription boxes, and same-day fulfillment.",
    tags: ["Next.js", "Prisma", "Stripe", "Redis"],
    gradient: "from-[#10b981] to-[#059669]",
    image: "https://images.unsplash.com/photo-1534723452862-4c874018d66d?w=800&q=80",
  },
  {
    title: "ArtVault Marketplace",
    category: "E-Commerce",
    description: "Curated digital art marketplace with creator tools and print-on-demand integration.",
    tags: ["React", "Node.js", "Stripe Connect", "S3"],
    gradient: "from-[#ec4899] to-[#f472b6]",
    image: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=800&q=80",
  },

  // --- Web3 (3) ---
  {
    title: "DeFi Swap Protocol",
    category: "Web3",
    description: "Decentralized exchange with automated market making and cross-chain bridge integration.",
    tags: ["Solidity", "React", "Ethereum", "GraphQL"],
    gradient: "from-[#a78bfa] to-[#7c3aed]",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80",
  },
  {
    title: "NFT Launchpad",
    category: "Web3",
    description: "No-code NFT collection launcher with generative art engine and whitelist management.",
    tags: ["Solidity", "Next.js", "IPFS", "Ethers.js"],
    gradient: "from-[#6366f1] to-[#818cf8]",
    image: "https://images.unsplash.com/photo-1644143379190-08a5f055de1d?w=800&q=80",
  },
  {
    title: "ChainGov DAO",
    category: "Web3",
    description: "DAO governance toolkit with on-chain voting, treasury management, and delegation.",
    tags: ["Solana", "Rust", "React", "Anchor"],
    gradient: "from-[#06b6d4] to-[#0284c7]",
    image: "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=800&q=80",
  },

  // --- FinTech (3) ---
  {
    title: "AgentTrade Platform",
    category: "FinTech",
    description: "AI-powered algorithmic trading with real-time analytics and ML-driven strategies.",
    tags: ["Python", "React", "ML", "WebSocket"],
    gradient: "from-[#7c6ef0] to-[#6366f1]",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
  },
  {
    title: "PayStream",
    category: "FinTech",
    description: "B2B payment orchestration with multi-rail processing and real-time reconciliation.",
    tags: ["Node.js", "PostgreSQL", "Stripe", "Plaid"],
    gradient: "from-[#10b981] to-[#06b6d4]",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
  },
  {
    title: "RiskLens Analytics",
    category: "FinTech",
    description: "Real-time risk assessment platform with regulatory compliance automation and reporting.",
    tags: ["Python", "React", "PostgreSQL", "AWS"],
    gradient: "from-[#f59e0b] to-[#d97706]",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
];

export default function Work() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="work" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-medium tracking-widest uppercase mb-4 block">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Selected <span className="gradient-text">Work</span>
          </h2>
          <p className="text-muted text-base md:text-lg max-w-2xl mx-auto">
            Real projects. Real impact. Each one crafted with startup speed and enterprise quality.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeFilter === cat
                  ? "bg-accent text-white shadow-[0_0_20px_rgba(124,110,240,0.2)]"
                  : "bg-surface border border-border-color text-muted hover:text-foreground hover:border-accent/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative rounded-2xl overflow-hidden border border-border-color hover:border-accent/30 transition-all duration-500 card-lift cursor-pointer"
            >
              {/* Background image */}
              <div className="relative h-56 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80`} />
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />

                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-14 h-14 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center border border-white/20">
                    <ArrowUpRight size={22} className="text-white" />
                  </div>
                </div>

                {/* Category badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm text-white text-xs font-medium border border-white/10">
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 bg-surface">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-md bg-background border border-border-color text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
