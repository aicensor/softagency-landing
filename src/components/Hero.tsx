"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { ArrowRight, Star, Users } from "lucide-react";

const SLIDE_DURATION = 8000;
const TRANSITION_MS = 900;

const slides = [
  {
    id: "engineering",
    tag: "Software Engineering",
    headingJSX: (
      <>
        Building digital <span className="gradient-text">products</span> that
        drive real business <span className="gradient-text">growth</span>
      </>
    ),
    description:
      "From web & mobile apps to AI systems and cloud infrastructure — we engineer scalable solutions with obsessive attention to quality.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
  },
  {
    id: "design",
    tag: "Product Design",
    headingJSX: (
      <>
        Crafting <span className="gradient-text">user-centered</span> experiences
        that <span className="gradient-text">stand out</span>
      </>
    ),
    description:
      "Our design team combines research, business analysis, testing, and creativity to craft products people love and businesses rely on.",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&q=80",
  },
  {
    id: "ai",
    tag: "Data Science & AI",
    headingJSX: (
      <>
        Offering real-time <span className="gradient-text">visibility</span> into
        your data by integrating <span className="gradient-text">AI</span>
      </>
    ),
    description:
      "Leverage predictive models, generative AI, and intelligent automation to gain deeper insights, accelerate decisions, and boost value.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
  },
  {
    id: "consulting",
    tag: "IT Consulting",
    headingJSX: (
      <>
        Strategic <span className="gradient-text">technology</span> guidance for{" "}
        <span className="gradient-text">ambitious</span> businesses
      </>
    ),
    description:
      "We help you define product strategy, validate ideas, and select the right architecture — ensuring your investments drive long-term growth.",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
  },
];

// For infinite loop: [clone-last, ...originals, clone-first]
// Index 0 = clone of slide 4 (consulting)
// Index 1-4 = real slides
// Index 5 = clone of slide 1 (engineering)
const totalSlides = slides.length;

function SlideContent({ slide }: { slide: (typeof slides)[0] }) {
  return (
    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center h-full px-2">
      {/* Left: Text */}
      <div className="flex flex-col justify-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border-color bg-surface/50 backdrop-blur-sm mb-8 w-fit">
          <span className="text-accent text-xs">✦</span>
          <span className="text-sm font-medium text-foreground">
            {slide.tag}
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-[4rem] font-bold leading-[1.1] tracking-tight mb-6">
          {slide.headingJSX}
        </h1>

        <p className="text-muted text-base md:text-lg leading-relaxed max-w-lg mb-10">
          {slide.description}
        </p>

        <a
          href="#contact"
          className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-white text-sm font-bold tracking-wider rounded-full hover:bg-accent/90 transition-all duration-300 hover:shadow-[0_0_40px_rgba(124,110,240,0.3)] group w-fit"
          onMouseDown={(e) => e.stopPropagation()}
          onClick={(e) => e.stopPropagation()}
        >
          Get Started
          <ArrowRight
            size={16}
            className="group-hover:translate-x-1 transition-transform"
          />
        </a>
      </div>

      {/* Right: Image */}
      <div className="relative flex items-center justify-center">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-accent/5 border border-border-color">
          <img
            src={slide.image}
            alt={slide.tag}
            className="w-full h-[360px] md:h-[440px] object-cover pointer-events-none"
            draggable={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#08081a]/40 via-transparent to-transparent" />
        </div>

        {/* Floating badge: Ratings */}
        <div className="absolute -right-2 top-1/3 bg-white text-black rounded-xl px-4 py-3 shadow-xl flex items-center gap-2 z-20">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className="text-amber-400 fill-amber-400"
              />
            ))}
          </div>
          <span className="text-xs font-medium text-gray-500">|</span>
          <span className="text-sm font-bold">4.9 Ratings</span>
        </div>

        {/* Floating badge: Clients */}
        <div className="absolute -left-2 bottom-8 bg-white text-black rounded-xl px-5 py-3 shadow-xl flex items-center gap-3 z-20">
          <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
            <Users size={18} className="text-accent" />
          </div>
          <div>
            <div className="text-[11px] text-gray-500 leading-none">
              Trusted By
            </div>
            <div className="text-lg font-black leading-tight">
              900+ Clients
            </div>
          </div>
        </div>

        {/* Ambient glow */}
        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/5 blur-[100px] rounded-full" />
      </div>
    </div>
  );
}

export default function Hero() {
  // Internal index: 0 = clone-last, 1..4 = real, 5 = clone-first
  const [internalIndex, setInternalIndex] = useState(1);
  const [animated, setAnimated] = useState(true);
  const dragStartX = useRef(0);
  const dragCurrentX = useRef(0);
  const isDragging = useRef(false);
  const isJumping = useRef(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [dragOffset, setDragOffset] = useState(0);

  // The extended slides array: [clone-last, slide0, slide1, slide2, slide3, clone-first]
  const extendedSlides = [
    slides[totalSlides - 1],
    ...slides,
    slides[0],
  ];
  const extendedCount = extendedSlides.length; // 6

  // Real slide index (0-3)
  const realIndex =
    internalIndex <= 0
      ? totalSlides - 1
      : internalIndex > totalSlides
      ? 0
      : internalIndex - 1;

  // After transition to a clone, silently jump to the real slide
  const handleTransitionEnd = useCallback(() => {
    if (internalIndex <= 0) {
      // At clone-last → jump to real last
      isJumping.current = true;
      setAnimated(false);
      setInternalIndex(totalSlides);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setAnimated(true);
          isJumping.current = false;
        });
      });
    } else if (internalIndex > totalSlides) {
      // At clone-first → jump to real first
      isJumping.current = true;
      setAnimated(false);
      setInternalIndex(1);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setAnimated(true);
          isJumping.current = false;
        });
      });
    }
  }, [internalIndex]);

  const goNext = useCallback(() => {
    if (isJumping.current) return;
    setAnimated(true);
    setInternalIndex((p) => p + 1);
  }, []);

  const goPrev = useCallback(() => {
    if (isJumping.current) return;
    setAnimated(true);
    setInternalIndex((p) => p - 1);
  }, []);

  const goToReal = useCallback((realIdx: number) => {
    if (isJumping.current) return;
    setAnimated(true);
    setInternalIndex(realIdx + 1);
  }, []);

  // Auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isDragging.current && !isJumping.current) {
        goNext();
      }
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [goNext]);

  // Mouse drag
  const handleMouseDown = (e: React.MouseEvent) => {
    if (isJumping.current) return;
    dragStartX.current = e.clientX;
    dragCurrentX.current = e.clientX;
    isDragging.current = true;
    setAnimated(false);
    setDragOffset(0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    dragCurrentX.current = e.clientX;
    setDragOffset(e.clientX - dragStartX.current);
  };

  const finishDrag = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const diff = dragCurrentX.current - dragStartX.current;
    setDragOffset(0);
    setAnimated(true);
    if (Math.abs(diff) > 80) {
      if (diff < 0) goNext();
      else goPrev();
    }
  };

  // Touch
  const handleTouchStart = (e: React.TouchEvent) => {
    if (isJumping.current) return;
    dragStartX.current = e.touches[0].clientX;
    dragCurrentX.current = e.touches[0].clientX;
    isDragging.current = true;
    setAnimated(false);
    setDragOffset(0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current) return;
    dragCurrentX.current = e.touches[0].clientX;
    setDragOffset(e.touches[0].clientX - dragStartX.current);
  };

  const finishTouch = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const diff = dragCurrentX.current - dragStartX.current;
    setDragOffset(0);
    setAnimated(true);
    if (Math.abs(diff) > 50) {
      if (diff < 0) goNext();
      else goPrev();
    }
  };

  const wrapperWidth = wrapperRef.current?.offsetWidth || 1;
  const slideWidthPercent = 100 / extendedCount;
  const translateX =
    -(internalIndex * slideWidthPercent) +
    (dragOffset / wrapperWidth) * slideWidthPercent;

  return (
    <section
      className="pt-28 pb-16 px-6 md:px-8 lg:px-12 relative overflow-hidden cursor-grab active:cursor-grabbing select-none"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={finishDrag}
      onMouseLeave={() => {
        if (isDragging.current) finishDrag();
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={finishTouch}
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div
          ref={wrapperRef}
          className="overflow-hidden"
          style={{
            height: "calc(100vh - 200px)",
            minHeight: "520px",
            maxHeight: "660px",
          }}
        >
          <div
            className="flex h-full"
            style={{
              width: `${extendedCount * 100}%`,
              transform: `translate3d(${translateX}%, 0, 0)`,
              transition: animated
                ? `transform ${TRANSITION_MS}ms cubic-bezier(0.25, 0.1, 0.25, 1)`
                : "none",
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {extendedSlides.map((slide, i) => (
              <div
                key={`${slide.id}-${i}`}
                className="h-full flex-shrink-0"
                style={{ width: `${100 / extendedCount}%` }}
              >
                <SlideContent slide={slide} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
