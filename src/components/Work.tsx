"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink, ArrowUpRight } from "lucide-react";

const categories = [
  "All",
  "Web",
  "Mobile",
  "AI",
  "E-Commerce",
  "Web3",
  "FinTech",
];

const projects = [
  // --- AI (3) ---
  {
    title: "HealthAI Dashboard",
    category: "AI",
    description:
      "Clinical data management platform with AI diagnostics, HIPAA compliance, and real-time patient monitoring.",
    tags: ["Python", "Django", "TensorFlow", "React"],
    gradient: "from-[#00cec9] to-[#55efc4]",
    image: "/images/projects/healthai.jpg",
    featured: true,
  },
  {
    title: "VisionSense",
    category: "AI",
    description:
      "Computer vision pipeline for manufacturing QA — detects defects in real time with 99.7% accuracy across production lines.",
    tags: ["PyTorch", "OpenCV", "FastAPI", "Edge"],
    gradient: "from-[#a29bfe] to-[#6c5ce7]",
    image: "/images/projects/visionsense.jpg",
    featured: false,
  },
  {
    title: "LegalMind Agent",
    category: "AI",
    description:
      "Agentic RAG system for law firms — reviews contracts, flags risk clauses, and drafts summaries in seconds.",
    tags: ["LangChain", "OpenAI", "Pinecone", "Next.js"],
    gradient: "from-[#636e72] to-[#2d3436]",
    image: "/images/projects/legalmind.jpg",
    featured: false,
  },

  // --- Web (3) ---
  {
    title: "DataForge SaaS",
    category: "Web",
    description:
      "Enterprise data pipeline builder with visual workflow editor, real-time monitoring, and 50+ integrations.",
    tags: ["Vue.js", "Python", "PostgreSQL", "Docker"],
    gradient: "from-[#a29bfe] to-[#6c5ce7]",
    image: "/images/projects/dataforge.jpg",
    featured: true,
  },
  {
    title: "TeamSync Portal",
    category: "Web",
    description:
      "Real-time collaboration platform with Kanban boards, document co-editing, video rooms, and SSO integration.",
    tags: ["Next.js", "Socket.io", "Redis", "AWS"],
    gradient: "from-[#0984e3] to-[#74b9ff]",
    image: "/images/projects/teamsync.jpg",
    featured: false,
  },
  {
    title: "EduVerse LMS",
    category: "Web",
    description:
      "Learning management system with AI-powered course recommendations, live classrooms, and progress analytics.",
    tags: ["React", "Node.js", "MongoDB", "WebRTC"],
    gradient: "from-[#fdcb6e] to-[#f39c12]",
    image: "/images/projects/eduverse.jpg",
    featured: false,
  },

  // --- Mobile (3) ---
  {
    title: "CityPulse App",
    category: "Mobile",
    description:
      "Real-time urban analytics mobile app with AR navigation, event discovery, and community features.",
    tags: ["React Native", "Firebase", "AR", "Maps"],
    gradient: "from-[#74b9ff] to-[#0984e3]",
    image: "/images/projects/citypulse.jpg",
    featured: true,
  },
  {
    title: "FitTrack Pro",
    category: "Mobile",
    description:
      "Fitness coaching app with AI workout plans, wearable sync, nutrition tracking, and social challenges.",
    tags: ["Flutter", "Dart", "HealthKit", "Firebase"],
    gradient: "from-[#e17055] to-[#d63031]",
    image: "/images/projects/fittrack.jpg",
    featured: false,
  },
  {
    title: "QuickDeliver",
    category: "Mobile",
    description:
      "On-demand delivery app with real-time GPS tracking, route optimization, and driver-customer chat.",
    tags: ["React Native", "Node.js", "Maps", "Stripe"],
    gradient: "from-[#00b894] to-[#55efc4]",
    image: "/images/projects/quickdeliver.jpg",
    featured: false,
  },

  // --- E-Commerce (3) ---
  {
    title: "LuxeMarket",
    category: "E-Commerce",
    description:
      "Premium headless commerce platform with 3D product visualization, AI recommendations, and multi-currency support.",
    tags: ["Next.js", "Stripe", "Three.js", "Node"],
    gradient: "from-[#fdcb6e] to-[#e17055]",
    image: "/images/projects/luxemarket.jpg",
    featured: true,
  },
  {
    title: "FreshBox Grocery",
    category: "E-Commerce",
    description:
      "Grocery delivery platform with smart inventory management, subscription boxes, and same-day fulfillment.",
    tags: ["Next.js", "Prisma", "Stripe", "Redis"],
    gradient: "from-[#55efc4] to-[#00b894]",
    image: "/images/projects/freshbox.jpg",
    featured: false,
  },
  {
    title: "ArtVault Marketplace",
    category: "E-Commerce",
    description:
      "Curated digital art marketplace with creator tools, print-on-demand integration, and royalty tracking.",
    tags: ["React", "Node.js", "Stripe Connect", "S3"],
    gradient: "from-[#e84393] to-[#fd79a8]",
    image: "/images/projects/artvault.jpg",
    featured: false,
  },

  // --- Web3 (3) ---
  {
    title: "DeFi Swap Protocol",
    category: "Web3",
    description:
      "Decentralized exchange with automated market making, liquidity pools, and cross-chain bridge integration.",
    tags: ["Solidity", "React", "Ethereum", "GraphQL"],
    gradient: "from-[#fd79a8] to-[#e84393]",
    image: "/images/projects/defiswap.jpg",
    featured: true,
  },
  {
    title: "NFT Launchpad",
    category: "Web3",
    description:
      "No-code NFT collection launcher with generative art engine, whitelist management, and secondary market royalties.",
    tags: ["Solidity", "Next.js", "IPFS", "Ethers.js"],
    gradient: "from-[#6c5ce7] to-[#a29bfe]",
    image: "/images/projects/nftlaunchpad.jpg",
    featured: false,
  },
  {
    title: "ChainGov DAO",
    category: "Web3",
    description:
      "DAO governance toolkit with on-chain voting, treasury management, proposal lifecycle, and delegation system.",
    tags: ["Solana", "Rust", "React", "Anchor"],
    gradient: "from-[#00cec9] to-[#0984e3]",
    image: "/images/projects/chaingov.jpg",
    featured: false,
  },

  // --- FinTech (2) ---
  {
    title: "AgentTrade Platform",
    category: "FinTech",
    description:
      "AI-powered algorithmic trading platform with real-time analytics, ML-driven strategies, and institutional-grade execution.",
    tags: ["Python", "React", "ML", "WebSocket"],
    gradient: "from-[#6c5ce7] to-[#a29bfe]",
    image: "/images/projects/agenttrade.jpg",
    featured: true,
  },
  {
    title: "PayStream",
    category: "FinTech",
    description:
      "B2B payment orchestration platform with multi-rail processing, compliance automation, and real-time reconciliation.",
    tags: ["Node.js", "PostgreSQL", "Stripe", "Plaid"],
    gradient: "from-[#00b894] to-[#00cec9]",
    image: "/images/projects/paystream.jpg",
    featured: false,
  },
];

export default function Work() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="work" className="py-20 relative">
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
          <p className="text-muted text-base md:text-lg max-w-2xl mx-auto text-center">
            A glimpse of what we build. Each project is a testament to our craft
            and commitment to excellence.
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
                  ? "bg-accent text-white"
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
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-surface rounded-2xl border border-border-color overflow-hidden hover:border-accent/30 transition-all duration-500"
            >
              {/* Image header */}
              <div
                className="h-52 relative overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}
                />
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d12] via-transparent to-transparent" />

                {/* Hover link */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <ArrowUpRight size={24} className="text-white" />
                  </div>
                </div>

                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium">
                    Featured
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs text-muted font-mono">
                    {project.category}
                  </span>
                </div>
                <p className="text-sm text-muted leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-md bg-background border border-border-color text-muted"
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
