"use client";

import { motion } from "framer-motion";
import {
  Search,
  PenTool,
  Code2,
  Rocket,
  RefreshCcw,
  HeadphonesIcon,
} from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Discovery & Strategy",
    description:
      "Deep dive into your vision, market, and users. We define scope, architecture, and success metrics before writing a single line of code.",
    duration: "1-2 weeks",
  },
  {
    icon: PenTool,
    number: "02",
    title: "Design & Prototype",
    description:
      "Interactive wireframes, high-fidelity mockups, and clickable prototypes. Every pixel serves a purpose, every interaction is intentional.",
    duration: "2-3 weeks",
  },
  {
    icon: Code2,
    number: "03",
    title: "Engineering",
    description:
      "Agile sprints with continuous delivery. Clean architecture, comprehensive testing, and rigorous code reviews at every step.",
    duration: "4-16 weeks",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Launch & Deploy",
    description:
      "Zero-downtime deployments, performance optimization, security audits, and monitoring. Your product goes live with confidence.",
    duration: "1-2 weeks",
  },
  {
    icon: RefreshCcw,
    number: "05",
    title: "Iterate & Scale",
    description:
      "Data-driven iterations, feature expansion, and performance scaling. We evolve your product based on real user feedback.",
    duration: "Ongoing",
  },
  {
    icon: HeadphonesIcon,
    number: "06",
    title: "Support & Maintain",
    description:
      "24/7 monitoring, proactive maintenance, security patches, and dedicated support. We treat your product as our own.",
    duration: "Retainer",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20 relative bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-accent text-sm font-medium tracking-widest uppercase mb-4 block">
            How We Work
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our <span className="gradient-text">Process</span>
          </h2>
          <p className="text-muted text-base md:text-lg max-w-2xl mx-auto text-center">
            Lean methodology refined across 50+ projects.
            Transparent, iterative, and relentlessly focused on shipping.
          </p>
        </motion.div>

        {/* Process timeline */}
        <div className="relative">
          {/* Vertical line (desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-border-color" />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`relative lg:grid lg:grid-cols-2 lg:gap-16 lg:py-12 ${
                  i % 2 === 0 ? "" : "lg:direction-rtl"
                }`}
              >
                {/* Timeline dot (desktop) */}
                <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="w-12 h-12 rounded-full bg-accent/10 border-2 border-accent flex items-center justify-center">
                    <span className="text-accent text-xs font-bold">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`${
                    i % 2 === 0
                      ? "lg:text-right lg:pr-16"
                      : "lg:col-start-2 lg:pl-16"
                  }`}
                  style={{ direction: "ltr" }}
                >
                  <div className="bg-background rounded-2xl border border-border-color p-8 hover:border-accent/20 transition-all duration-500 shine">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center lg:hidden">
                        <span className="text-accent text-xs font-bold">
                          {step.number}
                        </span>
                      </div>
                      <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                        <step.icon size={18} className="text-accent" />
                      </div>
                      <span className="text-xs text-muted font-mono">
                        {step.duration}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
