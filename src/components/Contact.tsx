"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Clock, ArrowRight, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 relative bg-surface">
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/5 blur-[150px] rounded-full pointer-events-none" />

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
            Let&apos;s Talk
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Start Your <span className="gradient-text">Project</span>
          </h2>
          <p className="text-muted text-base md:text-lg max-w-2xl mx-auto text-center">
            Have an idea? Let&apos;s turn it into reality. Tell us about your
            project and we&apos;ll get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6">
                Ready to build something extraordinary?
              </h3>
              <p className="text-muted leading-relaxed">
                Whether you need a full product build, a specialized AI system,
                or a team augmentation for your existing project — we&apos;re
                here to help.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                  <Mail size={16} className="text-accent" />
                </div>
                <div>
                  <div className="text-sm text-muted mb-1">Email us</div>
                  <div className="text-foreground">hello@obsidianlabs.dev</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                  <MapPin size={16} className="text-accent" />
                </div>
                <div>
                  <div className="text-sm text-muted mb-1">Based in</div>
                  <div className="text-foreground">Global — Remote First</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                  <Clock size={16} className="text-accent" />
                </div>
                <div>
                  <div className="text-sm text-muted mb-1">Response time</div>
                  <div className="text-foreground">Within 24 hours</div>
                </div>
              </div>
            </div>

            {/* Quick project types */}
            <div className="pt-6 border-t border-border-color">
              <div className="text-sm text-muted mb-3">Common requests:</div>
              <div className="flex flex-wrap gap-2">
                {[
                  "MVP Development",
                  "AI Integration",
                  "Mobile App",
                  "E-Commerce",
                  "Web3 DApp",
                  "SaaS Platform",
                  "Team Augmentation",
                ].map((type) => (
                  <span
                    key={type}
                    className="text-xs px-3 py-1.5 rounded-full bg-background border border-border-color text-muted hover:border-accent/30 hover:text-accent transition-all duration-300 cursor-pointer"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className=""
          >
            <form className="bg-background rounded-2xl border border-border-color p-8 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm text-muted block mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-surface border border-border-color rounded-lg text-foreground text-sm focus:outline-none focus:border-accent/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-sm text-muted block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 bg-surface border border-border-color rounded-lg text-foreground text-sm focus:outline-none focus:border-accent/50 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm text-muted block mb-2">
                  Project Type
                </label>
                <select className="w-full px-4 py-3 bg-surface border border-border-color rounded-lg text-muted text-sm focus:outline-none focus:border-accent/50 transition-colors appearance-none">
                  <option>Select a service</option>
                  <option>Web Application</option>
                  <option>Mobile App</option>
                  <option>AI / Machine Learning</option>
                  <option>E-Commerce Platform</option>
                  <option>Web3 / Blockchain</option>
                  <option>Cloud & DevOps</option>
                  <option>UI/UX Design</option>
                  <option>FinTech Solution</option>
                  <option>Team Augmentation</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="text-sm text-muted block mb-2">Budget</label>
                <select className="w-full px-4 py-3 bg-surface border border-border-color rounded-lg text-muted text-sm focus:outline-none focus:border-accent/50 transition-colors appearance-none">
                  <option>Select budget range</option>
                  <option>$5K - $15K</option>
                  <option>$15K - $50K</option>
                  <option>$50K - $100K</option>
                  <option>$100K+</option>
                  <option>Ongoing Retainer</option>
                </select>
              </div>

              <div>
                <label className="text-sm text-muted block mb-2">
                  Tell us about your project
                </label>
                <textarea
                  rows={5}
                  placeholder="Describe your project, goals, timeline, and any specific requirements..."
                  className="w-full px-4 py-3 bg-surface border border-border-color rounded-lg text-foreground text-sm focus:outline-none focus:border-accent/50 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="group w-full px-6 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300 hover:shadow-[0_0_40px_rgba(108,92,231,0.3)] flex items-center justify-center gap-2"
              >
                Send Message
                <Send
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
