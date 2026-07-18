"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { heroSlides } from "@/lib/data";

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % heroSlides.length);
  }, []);

  const prev = () => {
    setIndex((i) => (i - 1 + heroSlides.length) % heroSlides.length);
  };

  useEffect(() => {
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [next]);

  const slide = heroSlides[index];

  return (
    <div className="relative h-[46vh] min-h-[320px] w-full overflow-hidden bg-brand-dark md:h-[62vh]">
      <Image
        key={slide.image}
        src={slide.image}
        alt={slide.title || "Mother Language Lovers of the World Society"}
        fill
        priority
        className="object-cover opacity-90"
      />
      <div className="absolute inset-0 bg-black/35" />

      {slide.title && (
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
          <h1 className="max-w-3xl text-2xl font-bold drop-shadow-lg sm:text-4xl">
            {slide.title}
          </h1>
          {slide.subtitle && (
            <p className="mt-3 max-w-xl text-sm font-medium text-white/90 sm:text-lg">
              {slide.subtitle}
            </p>
          )}
        </div>
      )}

      <button
        aria-label="Previous slide"
        onClick={prev}
        className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur hover:bg-white/40"
      >
        ‹
      </button>
      <button
        aria-label="Next slide"
        onClick={next}
        className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur hover:bg-white/40"
      >
        ›
      </button>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {heroSlides.map((s, i) => (
          <button
            key={s.image}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full ${i === index ? "bg-accent" : "bg-white/60"}`}
          />
        ))}
      </div>
    </div>
  );
}
