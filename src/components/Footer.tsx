"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";

const footerLinks = {
  Services: [
    "Web Development",
    "Mobile Apps",
    "AI & ML",
    "E-Commerce",
    "Web3",
    "Cloud & DevOps",
  ],
  Company: ["About", "Process", "Careers", "Blog", "Contact"],
  Technologies: [
    "React / Next.js",
    "Angular / Vue",
    "Python / Django",
    "Node.js",
    ".NET / C#",
    "React Native",
  ],
};

export default function Footer() {
  return (
    <footer className="py-20 border-t border-border-color relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                <span className="text-accent font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold tracking-tight">
                Soft<span className="text-accent">Agency</span>
              </span>
            </a>
            <p className="text-muted text-sm leading-relaxed max-w-sm mb-6">
              Full-spectrum software lab engineering digital excellence.
              From web to mobile, AI to Web3 — we build the future.
            </p>
            <div className="flex gap-4">
              {[Twitter, Github, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-surface border border-border-color flex items-center justify-center text-muted hover:text-accent hover:border-accent/30 transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-foreground mb-4">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted hover:text-accent transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border-color flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} SoftAgency. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-xs text-muted hover:text-accent transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs text-muted hover:text-accent transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
