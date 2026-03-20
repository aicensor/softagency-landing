"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const SLIDE_DURATION = 10000;

const slides = [
  {
    id: "engineering",
    title: "SOFTWARE\nENGINEERING",
    shortTitle: "SOFTWARE\nENGINEERING",
    description:
      "From cloud computing and embedded systems to legacy modernization and enterprise platforms, we deliver scalable industry-specific solutions that meet the highest quality standards.",
    cta: { label: "LEARN MORE", href: "#services" },
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1400&q=80",
  },
  {
    id: "design",
    title: "PRODUCT\nDESIGN",
    shortTitle: "PRODUCT\nDESIGN",
    description:
      "Our design team combines research, business analysis, testing, and creativity to craft user-centered products that drive engagement and stand out in the market.",
    cta: { label: "LEARN MORE", href: "#services" },
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1400&q=80",
  },
  {
    id: "ai",
    title: "DATA\nSCIENCE & AI",
    shortTitle: "DATA\nSCIENCE & AI",
    description:
      "Leverage predictive models, generative AI, and intelligent automation to gain deeper insights, accelerate decisions, and boost your business value.",
    cta: { label: "LEARN MORE", href: "#services" },
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1400&q=80",
  },
  {
    id: "consulting",
    title: "CONSULTING",
    shortTitle: "CONSULTING",
    description:
      "We help you define product strategy, validate ideas, and select the right architecture and tools — ensuring your investments are aligned with long-term growth.",
    cta: { label: "LEARN MORE", href: "#services" },
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1400&q=80",
  },
];

function SideTab({
  slide,
  onClick,
  side,
}: {
  slide: (typeof slides)[0];
  onClick: () => void;
  side: "left" | "right";
}) {
  return (
    <button
      onClick={onClick}
      className="group relative w-[90px] xl:w-[110px] rounded-2xl overflow-hidden cursor-pointer transition-all duration-300"
    >
      {/* Blurred bg image */}
      <img
        src={slide.image}
        alt={slide.shortTitle.replace("\n", " ")}
        className="absolute inset-0 w-full h-full object-cover blur-[2px] scale-110 group-hover:blur-0 group-hover:scale-105 transition-all duration-500"
      />
      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300" />

      {/* Arrow icon — top corner */}
      <div
        className={`absolute top-4 ${side === "right" ? "right-4" : "left-4"} w-9 h-9 rounded-full bg-white flex items-center justify-center z-10 group-hover:scale-110 transition-transform`}
      >
        <ArrowRight size={15} className="text-black" />
      </div>

      {/* Vertical text */}
      <div className="relative z-10 h-full flex items-center justify-center px-2">
        <span
          className="text-white font-black text-[13px] xl:text-[15px] tracking-[0.12em] whitespace-pre-line text-center leading-[1.3] uppercase"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          {slide.shortTitle}
        </span>
      </div>
    </button>
  );
}

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const startTimeRef = useRef(Date.now());

  const goTo = useCallback((index: number) => {
    setCurrent(index);
    setProgress(0);
    startTimeRef.current = Date.now();
  }, []);

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length);
  }, [current, goTo]);

  useEffect(() => {
    startTimeRef.current = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current;
      const pct = Math.min((elapsed / SLIDE_DURATION) * 100, 100);
      setProgress(pct);
      if (elapsed >= SLIDE_DURATION) {
        setCurrent((p) => (p + 1) % slides.length);
        startTimeRef.current = Date.now();
        setProgress(0);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [current]);

  const slide = slides[current];

  // Split tabs: slides before current go LEFT, slides after current go RIGHT
  const leftTabs = slides.filter((_, i) => i < current);
  const rightTabs = slides.filter((_, i) => i > current);

  return (
    <section className="pt-28 pb-8 px-4 md:px-8 lg:px-12">
      <div
        className="max-w-[1440px] mx-auto flex gap-3"
        style={{
          height: "calc(100vh - 150px)",
          minHeight: "520px",
          maxHeight: "720px",
        }}
      >
        {/* ===== LEFT TABS ===== */}
        {leftTabs.length > 0 && (
          <div className="hidden lg:flex flex-row gap-3 w-auto">
            {leftTabs.map((s) => {
              const idx = slides.findIndex((sl) => sl.id === s.id);
              return (
                <SideTab
                  key={s.id}
                  slide={s}
                  onClick={() => goTo(idx)}
                  side="left"
                />
              );
            })}
          </div>
        )}

        {/* ===== MAIN SLIDE CARD ===== */}
        <div className="relative flex-1 rounded-2xl overflow-hidden">
          {/* Background image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7 }}
              className="absolute inset-0"
            >
              <img
                src={slide.image}
                alt={slide.title.replace("\n", " ")}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#08081a]/90 via-[#08081a]/50 to-[#08081a]/20" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08081a]/80 via-transparent to-[#08081a]/10" />
            </motion.div>
          </AnimatePresence>

          {/* Progress bar */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-white/10 z-30">
            <div
              className="h-full bg-white/70"
              style={{ width: `${progress}%`, transition: "none" }}
            />
          </div>

          {/* Nav arrows */}
          <div className="absolute top-6 right-6 flex items-center gap-3 z-30">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/25 transition-all"
            >
              <ArrowLeft size={16} />
            </button>
            <button
              onClick={next}
              className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/25 transition-all"
            >
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Content */}
          <div className="relative z-20 h-full flex flex-col justify-between p-8 md:p-10 lg:p-12">
            <div />

            {/* Heading + desc + CTA */}
            <div className="max-w-xl">
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={slide.id + "-text"}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                >
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black italic leading-[1.05] tracking-tight mb-6 text-white whitespace-pre-line">
                    {slide.title}
                  </h1>
                  <p className="text-sm md:text-[15px] text-white/70 max-w-md mb-8 leading-relaxed">
                    {slide.description}
                  </p>
                  <a
                    href={slide.cta.href}
                    className="inline-flex items-center px-8 py-3.5 bg-accent text-white text-sm font-bold tracking-wider rounded-full hover:bg-accent/90 transition-all duration-300 hover:shadow-[0_0_40px_rgba(124,110,240,0.3)]"
                  >
                    {slide.cta.label}
                  </a>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Trust badges */}
            <div className="flex items-center gap-5 md:gap-7 flex-wrap mt-8">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-lg bg-white/10 backdrop-blur-sm border border-white/15 flex flex-col items-center justify-center">
                  <span className="text-[11px] font-bold text-white/90 leading-none">aws</span>
                  <span className="text-[7px] text-white/50 leading-none mt-0.5">PARTNER</span>
                </div>
                <div className="text-[8px] text-white/40 leading-tight uppercase">
                  <div>Advanced Tier</div>
                  <div>Services</div>
                </div>
              </div>

              <div>
                <div className="text-[8px] text-white/40 uppercase tracking-wide">Reviewed on</div>
                <div className="text-lg font-bold text-white/80 leading-none -mt-0.5">Clutch</div>
                <div className="text-[9px] text-amber-400/80">★★★★★ <span className="text-white/40">57 REVIEWS</span></div>
              </div>

              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-black text-white/60 italic leading-none">ISO</span>
                <div className="text-[9px] text-white/50 leading-tight">
                  <div className="font-bold text-white/70">9001:2015</div>
                  <div>UA230630</div>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-black text-white/60 italic leading-none">ISO</span>
                <div className="text-[9px] text-white/50 leading-tight">
                  <div className="font-bold text-white/70">27001:2013</div>
                  <div>IND.22.1314/IS/U</div>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <span className="text-xl font-bold text-white/70 italic tracking-wide" style={{ fontFamily: "Georgia, serif" }}>
                  Forbes
                </span>
                <div className="text-[8px] text-white/40 leading-tight border-l border-white/20 pl-1.5 ml-0.5">
                  <div>Technology</div>
                  <div>Council</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== RIGHT TABS ===== */}
        {rightTabs.length > 0 && (
          <div className="hidden lg:flex flex-row gap-3 w-auto">
            {rightTabs.map((s) => {
              const idx = slides.findIndex((sl) => sl.id === s.id);
              return (
                <SideTab
                  key={s.id}
                  slide={s}
                  onClick={() => goTo(idx)}
                  side="right"
                />
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
