"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Code2,
  Palette,
  Brain,
  ShoppingCart,
  Boxes,
  Users,
  ArrowRight,
  Globe,
  Smartphone,
  Cloud,
  Shield,
  BarChart3,
  Cpu,
  Workflow,
} from "lucide-react";

const categories = [
  {
    id: "engineering",
    title: "Software Engineering",
    icon: Code2,
    color: "#7c6ef0",
    description:
      "Full-cycle development from architecture to deployment. We build scalable, maintainable systems that grow with your business.",
    services: [
      {
        icon: Globe,
        name: "Web Applications",
        detail: "SaaS platforms, portals, dashboards, and enterprise systems with React, Next.js, Angular, Vue",
      },
      {
        icon: Smartphone,
        name: "Mobile Development",
        detail: "Cross-platform and native apps with React Native, Flutter, iOS, and Android",
      },
      {
        icon: Cloud,
        name: "Cloud & DevOps",
        detail: "AWS, Azure, GCP architecture, CI/CD pipelines, Docker, Kubernetes, infrastructure as code",
      },
      {
        icon: Shield,
        name: "Cybersecurity",
        detail: "Security audits, penetration testing, zero-trust architecture, SOC2 & HIPAA compliance",
      },
      {
        icon: Workflow,
        name: "API & Integration",
        detail: "RESTful APIs, GraphQL, microservices, third-party integrations, and system orchestration",
      },
      {
        icon: Code2,
        name: "Legacy Modernization",
        detail: "Monolith to microservices migration, tech stack upgrades, performance optimization",
      },
    ],
  },
  {
    id: "design",
    title: "Product Design",
    icon: Palette,
    color: "#f472b6",
    description:
      "User-centered design that converts. We combine research, strategy, and creativity to craft products people love.",
    services: [
      {
        icon: Palette,
        name: "UI/UX Design",
        detail: "User research, wireframes, high-fidelity mockups, design systems, and usability testing",
      },
      {
        icon: Smartphone,
        name: "Mobile UX",
        detail: "Platform-native design patterns, gesture-driven interfaces, and accessibility compliance",
      },
      {
        icon: Globe,
        name: "Web Design",
        detail: "Responsive layouts, interactive prototypes, motion design, and brand-consistent experiences",
      },
      {
        icon: Users,
        name: "Product Strategy",
        detail: "Market research, competitive analysis, user personas, journey mapping, and product roadmaps",
      },
    ],
  },
  {
    id: "ai",
    title: "Data Science & AI",
    icon: Brain,
    color: "#38bdf8",
    description:
      "Intelligent systems that learn and adapt. From LLM integrations to custom ML models, we bring AI from concept to production.",
    services: [
      {
        icon: Brain,
        name: "Agentic AI Systems",
        detail: "Autonomous agents, multi-agent orchestration, LLM integrations, and RAG pipelines",
      },
      {
        icon: Cpu,
        name: "Machine Learning",
        detail: "Custom ML models, computer vision, NLP, predictive analytics, and recommendation engines",
      },
      {
        icon: BarChart3,
        name: "Data Engineering",
        detail: "Data pipelines, ETL processes, real-time streaming, data warehousing, and visualization",
      },
      {
        icon: Workflow,
        name: "AI Automation",
        detail: "Business process automation with AI, intelligent document processing, and workflow optimization",
      },
    ],
  },
  {
    id: "ecommerce",
    title: "E-Commerce",
    icon: ShoppingCart,
    color: "#22d3ee",
    description:
      "Revenue-driving commerce platforms. Headless architecture, payment integration, and conversion optimization at scale.",
    services: [
      {
        icon: ShoppingCart,
        name: "Custom Storefronts",
        detail: "Headless commerce with Shopify, custom builds, multi-currency, and internationalization",
      },
      {
        icon: BarChart3,
        name: "Conversion Optimization",
        detail: "A/B testing, checkout optimization, personalization engines, and analytics dashboards",
      },
      {
        icon: Workflow,
        name: "Payment & Fulfillment",
        detail: "Stripe, PayPal, crypto payments, inventory management, and logistics integration",
      },
    ],
  },
  {
    id: "web3",
    title: "Web3 & Blockchain",
    icon: Boxes,
    color: "#a78bfa",
    description:
      "Decentralized applications and protocols. Smart contracts, DeFi, NFTs, and DAO governance systems built to last.",
    services: [
      {
        icon: Boxes,
        name: "Smart Contracts",
        detail: "Solidity, Rust, audited contracts on Ethereum, Solana, Polygon, and Layer 2 networks",
      },
      {
        icon: Globe,
        name: "DApps & DeFi",
        detail: "Decentralized exchanges, lending protocols, yield aggregators, and bridge integrations",
      },
      {
        icon: Shield,
        name: "Security & Audit",
        detail: "Smart contract audits, formal verification, bug bounty programs, and security consulting",
      },
    ],
  },
  {
    id: "consulting",
    title: "Consulting",
    icon: Users,
    color: "#fbbf24",
    description:
      "Strategic guidance from senior engineers. Technical audits, architecture reviews, team augmentation, and CTO-as-a-service.",
    services: [
      {
        icon: Users,
        name: "Team Augmentation",
        detail: "Embed our senior engineers in your team — full-time or part-time, onshore or remote",
      },
      {
        icon: BarChart3,
        name: "Technical Audits",
        detail: "Code quality reviews, architecture assessments, performance profiling, and security evaluations",
      },
      {
        icon: Brain,
        name: "AI Readiness",
        detail: "Evaluate your organization's AI maturity, identify automation opportunities, and build roadmaps",
      },
    ],
  },
];

export default function Services() {
  const [activeCategory, setActiveCategory] = useState("engineering");
  const active = categories.find((c) => c.id === activeCategory)!;

  return (
    <section id="services" className="py-24 relative">
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
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Full-Spectrum <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted text-base md:text-lg max-w-2xl mx-auto">
            From concept to scale. Six core disciplines, one integrated team.
          </p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-14"
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`group flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300 border ${
                  isActive
                    ? "bg-accent text-white border-accent shadow-[0_0_30px_rgba(124,110,240,0.2)]"
                    : "bg-surface border-border-color text-muted hover:text-foreground hover:border-accent/30"
                }`}
              >
                <cat.icon size={16} />
                {cat.title}
              </button>
            );
          })}
        </motion.div>

        {/* Active category content */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-3 gap-8"
        >
          {/* Left: description */}
          <div className="lg:col-span-1">
            <div className="sticky top-28">
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                style={{
                  backgroundColor: `${active.color}15`,
                  border: `1px solid ${active.color}30`,
                }}
              >
                <active.icon size={26} style={{ color: active.color }} />
              </div>
              <h3 className="text-2xl font-bold mb-4">{active.title}</h3>
              <p className="text-muted leading-relaxed mb-6">
                {active.description}
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-accent text-sm font-medium hover:gap-3 transition-all"
              >
                Discuss your project
                <ArrowRight size={14} />
              </a>
            </div>
          </div>

          {/* Right: service cards */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
            {active.services.map((service, i) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group bg-surface rounded-xl border border-border-color p-6 hover:border-accent/30 transition-all duration-400 card-lift cursor-pointer"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{
                    backgroundColor: `${active.color}10`,
                    border: `1px solid ${active.color}20`,
                  }}
                >
                  <service.icon size={18} style={{ color: active.color }} />
                </div>
                <h4 className="text-base font-semibold mb-2 group-hover:text-accent transition-colors">
                  {service.name}
                </h4>
                <p className="text-sm text-muted leading-relaxed">
                  {service.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
