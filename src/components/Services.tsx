"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

const AUTO_SCROLL_DELAY = 6000;

const categories = [
  {
    id: "webmobile",
    title: "Web & Mobile App Development",
    description:
      "Enterprise-grade web applications and cross-platform mobile apps. React, Next.js, Flutter, React Native — we choose the right tools for your product and scale.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80",
    subServices: [
      "Web Applications",
      "Mobile Apps",
      "Progressive Web Apps",
      "API Development",
      "Cross-Platform Solutions",
    ],
  },
  {
    id: "product",
    title: "Digital Product Engineering",
    description:
      "End-to-end product development from ideation to launch. We combine UX research, design systems, and agile engineering to build products people love and businesses rely on.",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=600&q=80",
    subServices: [
      "UI/UX Design",
      "MVP Development",
      "SaaS Platforms",
      "Product Roadmapping",
      "Usability Testing",
    ],
  },
  {
    id: "devops",
    title: "DevOps & Cloud",
    description:
      "Cloud architecture, CI/CD pipelines, containerization, and infrastructure as code. We build reliable, scalable infrastructure that keeps your applications running at peak performance.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80",
    subServices: [
      "AWS / Azure / GCP",
      "Kubernetes & Docker",
      "CI/CD Pipelines",
      "Infrastructure as Code",
      "Cloud Migration",
    ],
  },
  {
    id: "ecommerce",
    title: "E-Commerce & Web3",
    description:
      "Headless commerce platforms, custom storefronts, smart contracts, DApps, and DeFi protocols. We build the future of digital transactions and decentralized applications.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
    subServices: [
      "Headless Commerce",
      "Smart Contracts",
      "DeFi & DApps",
      "NFT Platforms",
      "Payment Integration",
    ],
  },
  {
    id: "data",
    title: "Data Engineering",
    description:
      "Build robust data pipelines, warehouses, and analytics platforms. Transform raw data into actionable insights that drive smarter business decisions at scale.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    subServices: [
      "Data Pipelines",
      "Analytics Dashboards",
      "Real-time Streaming",
      "Data Lake Architecture",
      "Business Intelligence",
    ],
  },
  {
    id: "aiml",
    title: "AI/ML Services",
    description:
      "Agentic AI systems, LLM integrations, RAG pipelines, computer vision, and predictive analytics. We bring AI from concept to production with measurable business impact.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80",
    subServices: [
      "Agentic AI Systems",
      "LLM Integration",
      "Custom ML Models",
      "Computer Vision",
      "Predictive Analytics",
    ],
  },
  {
    id: "consulting",
    title: "IT Consulting",
    description:
      "Strategic technology guidance for ambitious businesses. We help you define product strategy, validate ideas, and select the right architecture — ensuring your investments drive long-term growth.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80",
    subServices: [
      "Technical Audits",
      "AI Readiness Assessment",
      "CTO-as-a-Service",
      "Architecture Review",
      "Digital Transformation Strategy",
    ],
  },
  {
    id: "talent",
    title: "Talent Solution",
    description:
      "Access top-tier talent for seamless project execution. Dedicated engineering teams, staff augmentation, and senior developer hiring — onshore or remote.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80",
    subServices: [
      "Build Your Team",
      "Hire Developer",
      "Staff Augmentation",
      "Dedicated Teams",
      "Remote Engineering",
    ],
  },
];

export default function Services() {
  const [current, setCurrent] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (isHovering) return;
    const timer = setInterval(() => {
      setCurrent((p) => (p + 1) % categories.length);
    }, AUTO_SCROLL_DELAY);
    return () => clearInterval(timer);
  }, [isHovering, current]);

  const active = categories[current];

  return (
    <section id="services" className="py-24 relative">
      <div
        className="max-w-7xl mx-auto px-6"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">
            Our services
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Our end-to-end engineering{" "}
            <span className="gradient-text">capabilities</span>
          </h2>
          <p className="text-muted text-base md:text-lg max-w-4xl leading-relaxed">
            Whether you need enterprise software solutions or digital
            transformation, we help you move from ideas to action with 14+ tech
            stacks, senior engineers, and a relentless focus on shipping.
          </p>
        </motion.div>

        {/* Main content: 5-col grid — 4 tile cols + 1 detail col, 2 rows */}
        <div
          className="grid gap-5"
          style={{
            gridTemplateColumns: "repeat(4, 1fr) minmax(340px, 420px)",
            gridTemplateRows: "280px 280px",
          }}
        >
          {/* Tiles: 8 items placed in a 4×2 sub-grid (cols 1-4, rows 1-2) */}
          {categories.map((cat, i) => {
            const isActive = current === i;
            const col = (i % 4) + 1;
            const row = Math.floor(i / 4) + 1;
            return (
              <button
                key={cat.id}
                onClick={() => setCurrent(i)}
                style={{ gridColumn: col, gridRow: row }}
                className={`group relative rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ${
                  isActive
                    ? "ring-2 ring-accent ring-offset-2 ring-offset-[#08081a]"
                    : ""
                }`}
              >
                <img
                  src={cat.image}
                  alt={cat.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
                    isActive ? "scale-105" : "group-hover:scale-105"
                  }`}
                />
                <div
                  className={`absolute inset-0 transition-all duration-300 ${
                    isActive
                      ? "bg-accent/60"
                      : "bg-black/50 group-hover:bg-black/40"
                  }`}
                />
                <div className="absolute inset-0 flex items-center justify-center p-3 z-10">
                  <span className="text-white text-xs sm:text-sm font-bold text-center leading-tight">
                    {cat.title}
                  </span>
                </div>
              </button>
            );
          })}

          {/* RIGHT: Detail panel spanning both rows */}
          <div
            className="bg-surface rounded-2xl border border-border-color p-8 lg:p-10 flex flex-col overflow-hidden"
            style={{ gridColumn: 5, gridRow: "1 / 3" }}
          >
            <AnimatePresence mode="popLayout">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col flex-1"
              >
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    {active.title}
                  </h3>
                  <p className="text-muted leading-relaxed mb-8">
                    {active.description}
                  </p>

                  {/* Sub-service links */}
                  <ul className="space-y-3">
                    {active.subServices.map((sub) => (
                      <li key={sub}>
                        <a
                          href="#contact"
                          className="group flex items-center gap-3 text-foreground hover:text-accent transition-colors duration-200"
                        >
                          <ArrowRight
                            size={14}
                            className="text-accent shrink-0 group-hover:translate-x-1 transition-transform"
                          />
                          <span className="text-sm md:text-base">{sub}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 w-full px-7 py-3 mt-8 bg-accent text-white text-sm font-bold tracking-wider rounded-full hover:bg-accent/90 transition-all duration-300 hover:shadow-[0_0_30px_rgba(124,110,240,0.3)]"
                >
                  LEARN MORE
                  <ArrowRight size={14} />
                </a>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
