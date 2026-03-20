"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Brain,
  ShoppingCart,
  Boxes,
  Shield,
  Cpu,
  BarChart3,
  Cloud,
  Workflow,
  Palette,
  Code2,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Enterprise-grade web applications, SaaS platforms, portals, and dashboards built with modern frameworks.",
    tags: ["React", "Next.js", "Angular", "Vue", "Nuxt"],
    color: "#6c5ce7",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Cross-platform and native mobile apps with seamless UX, offline-first architecture, and real-time sync.",
    tags: ["React Native", "Flutter", "iOS", "Android"],
    color: "#74b9ff",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "Agentic AI systems, LLM integrations, RAG pipelines, computer vision, NLP, and predictive analytics.",
    tags: ["Python", "TensorFlow", "LangChain", "OpenAI"],
    color: "#a29bfe",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    description:
      "Headless commerce, custom storefronts, payment integrations, inventory management, and conversion optimization.",
    tags: ["Shopify", "Stripe", "Custom", "Headless"],
    color: "#00cec9",
  },
  {
    icon: Boxes,
    title: "Web3 & Blockchain",
    description:
      "Smart contracts, DApps, DeFi protocols, NFT marketplaces, tokenization, and DAO governance systems.",
    tags: ["Solidity", "Ethereum", "Solana", "IPFS"],
    color: "#fd79a8",
  },
  {
    icon: Workflow,
    title: "Automation & Integration",
    description:
      "Business process automation, API development, system integrations, and workflow orchestration.",
    tags: ["Node.js", "n8n", "APIs", "Webhooks"],
    color: "#fdcb6e",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "Cloud architecture, migration, CI/CD pipelines, containerization, and infrastructure as code.",
    tags: ["AWS", "Azure", "Docker", "K8s"],
    color: "#55efc4",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description:
      "Security audits, penetration testing, zero-trust architecture, and compliance implementation.",
    tags: ["OWASP", "SOC2", "HIPAA", "PCI-DSS"],
    color: "#e17055",
  },
  {
    icon: BarChart3,
    title: "FinTech & Trading",
    description:
      "Algorithmic trading systems, risk assessment, regulatory compliance, payment processing, and analytics.",
    tags: ["Python", "ML", "APIs", "Real-time"],
    color: "#00b894",
  },
  {
    icon: Cpu,
    title: "IoT & Edge Computing",
    description:
      "Connected device ecosystems, edge AI, real-time data streaming, and industrial IoT solutions.",
    tags: ["MQTT", "Edge", "Sensors", "C++"],
    color: "#636e72",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "User research, design systems, prototyping, accessibility compliance, and conversion-driven interfaces.",
    tags: ["Figma", "Design Systems", "A11y", "Motion"],
    color: "#e84393",
  },
  {
    icon: Code2,
    title: "Legacy Modernization",
    description:
      "Monolith to microservices, tech stack migration, performance optimization, and technical debt resolution.",
    tags: [".NET", "Java", "Refactor", "Migration"],
    color: "#0984e3",
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="group relative bg-surface rounded-2xl border border-border-color p-6 md:p-8 hover:border-accent/30 transition-all duration-500 shine cursor-pointer hover:bg-surface-light flex flex-col h-full"
    >
      {/* Icon */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
        style={{
          backgroundColor: `${service.color}15`,
          border: `1px solid ${service.color}30`,
        }}
      >
        <service.icon size={22} style={{ color: service.color }} />
      </div>

      {/* Content */}
      <h3 className="text-lg font-semibold mb-3 group-hover:text-accent transition-colors">
        {service.title}
      </h3>
      <p className="text-sm text-muted leading-relaxed mb-5 flex-grow">
        {service.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2.5 py-1 rounded-md bg-background border border-border-color text-muted"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Hover glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(400px at 50% 0%, ${service.color}08, transparent)`,
        }}
      />
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <span className="text-accent text-sm font-medium tracking-widest uppercase mb-4 block">
            What We Build
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Full-Spectrum <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted text-base md:text-lg max-w-2xl mx-auto text-center">
            From concept to scale. We cover every dimension of software
            engineering with specialized expertise in emerging technologies.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
