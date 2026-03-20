"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Clock, Phone, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 relative bg-surface">
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-stretch">
          {/* Left: heading + image + contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <span className="text-accent text-sm font-medium tracking-widest uppercase mb-3 block">
                Contact Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                Get in Touch with Us
              </h2>
              <p className="text-muted leading-relaxed">
                We help your business grow with the right technology solutions
                and expert engineering teams.
              </p>
            </div>

            {/* Contact image */}
            <div className="rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80"
                alt="Contact us"
                className="w-full h-48 md:h-56 object-cover"
              />
            </div>

            {/* Contact details */}
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-accent" />
                </div>
                <div>
                  <div className="text-sm text-muted mb-0.5">You can email us here</div>
                  <div className="text-foreground font-medium">hello@simplexwork.com</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-accent" />
                </div>
                <div>
                  <div className="text-sm text-muted mb-0.5">You can call us on this</div>
                  <div className="text-foreground font-medium">+1 (555) 123-4567</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-accent" />
                </div>
                <div>
                  <div className="text-sm text-muted mb-0.5">Based in</div>
                  <div className="text-foreground font-medium">Global — Remote First</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                  <Clock size={18} className="text-accent" />
                </div>
                <div>
                  <div className="text-sm text-muted mb-0.5">Response time</div>
                  <div className="text-foreground font-medium">Within 24 hours</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col"
          >
            <form className="bg-background rounded-2xl border border-border-color p-8 space-y-5 h-full flex flex-col">
              <h3 className="text-xl font-bold mb-1">Send Us a Message</h3>
              <p className="text-sm text-muted mb-4">
                Use our contact form to reach out with questions, feedback, or collaboration inquiries.
              </p>

              <div className="grid sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 bg-surface border border-border-color rounded-lg text-foreground text-sm focus:outline-none focus:border-accent/50 transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 bg-surface border border-border-color rounded-lg text-foreground text-sm focus:outline-none focus:border-accent/50 transition-colors"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 bg-surface border border-border-color rounded-lg text-foreground text-sm focus:outline-none focus:border-accent/50 transition-colors"
                />
                <select className="w-full px-4 py-3 bg-surface border border-border-color rounded-lg text-muted text-sm focus:outline-none focus:border-accent/50 transition-colors appearance-none">
                  <option>Budget</option>
                  <option>$5K - $15K</option>
                  <option>$15K - $50K</option>
                  <option>$50K - $100K</option>
                  <option>$100K+</option>
                  <option>Ongoing Retainer</option>
                </select>
              </div>

              <div className="flex-1 flex">
                <textarea
                  placeholder="Project Details"
                  className="w-full px-4 py-3 bg-surface border border-border-color rounded-lg text-foreground text-sm focus:outline-none focus:border-accent/50 transition-colors resize-none min-h-[120px] flex-1"
                />
              </div>

              <button
                type="submit"
                className="group px-8 py-3.5 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300 hover:shadow-[0_0_40px_rgba(108,92,231,0.3)] flex items-center gap-2"
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
