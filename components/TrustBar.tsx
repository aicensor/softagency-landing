"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "50+", label: "Projects Shipped" },
  { value: "30+", label: "Happy Clients" },
  { value: "3", label: "Years Building" },
  { value: "14+", label: "Tech Stacks" },
];

export default function TrustBar() {
  return (
    <section className="py-16 border-y border-border-color trust-bar relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
