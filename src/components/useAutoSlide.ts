"use client";

import { useEffect, useRef, useState } from 'react';

/**
 * Auto-slides a horizontal .scroll-row: advances one card every
 * `intervalMs`, loops back to the start at the end, pauses while the
 * user hovers/touches it or scrolls it manually, runs only while the
 * row is on screen, and stays off for reduced-motion users.
 */
export function useAutoSlide(intervalMs = 3000) {
  const ref = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const autoScrollingRef = useRef(false);
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = setInterval(() => {
      const el = ref.current;
      if (!el || pausedRef.current || document.hidden) return;
      const card = el.firstElementChild as HTMLElement | null;
      const step = card ? card.offsetWidth + 24 : el.clientWidth * 0.85;
      // Mark this scroll as programmatic so onScroll doesn't pause us.
      autoScrollingRef.current = true;
      setTimeout(() => { autoScrollingRef.current = false; }, 700);
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 10) {
        el.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        el.scrollBy({ left: step, behavior: 'smooth' });
      }
    }, intervalMs);
    return () => clearInterval(id);
  }, [visible, intervalMs]);

  useEffect(() => () => {
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
  }, []);

  const pauseForAWhile = () => {
    if (autoScrollingRef.current) return;
    pausedRef.current = true;
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      pausedRef.current = false;
    }, 5000);
  };

  return {
    ref,
    handlers: {
      onMouseEnter: () => { pausedRef.current = true; },
      onMouseLeave: () => { pausedRef.current = false; },
      onTouchStart: () => { pausedRef.current = true; },
      onTouchEnd: pauseForAWhile,
      onScroll: pauseForAWhile,
    },
  };
}
