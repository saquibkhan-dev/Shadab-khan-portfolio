import { useEffect, useRef, useState } from 'react';

/**
 * Animates a number from 0 up to `target` once the element scrolls into view.
 */
export default function useCountUp(target, steps = 30, intervalMs = 35) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let cur = 0;
            const inc = target / steps;
            const timer = setInterval(() => {
              cur += inc;
              if (cur >= target) {
                setValue(target);
                clearInterval(timer);
              } else {
                setValue(Math.floor(cur));
              }
            }, intervalMs);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target, steps, intervalMs]);

  return [ref, value];
}
