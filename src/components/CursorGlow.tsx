import { useEffect, useRef } from "react";

export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    let x = -100, y = -100;
    const positions = Array.from({ length: 6 }, () => ({ x: -100, y: -100 }));

    const move = (e: MouseEvent) => { x = e.clientX; y = e.clientY; };
    window.addEventListener("mousemove", move);

    let raf = 0;
    const tick = () => {
      if (ref.current) {
        ref.current.style.left = `${x}px`;
        ref.current.style.top = `${y}px`;
      }
      // trail follows
      let px = x, py = y;
      positions.forEach((p, i) => {
        p.x += (px - p.x) * 0.25;
        p.y += (py - p.y) * 0.25;
        const el = trailRefs.current[i];
        if (el) {
          el.style.left = `${p.x}px`;
          el.style.top = `${p.y}px`;
          el.style.opacity = `${1 - i / positions.length}`;
        }
        px = p.x; py = p.y;
      });
      raf = requestAnimationFrame(tick);
    };
    tick();
    return () => { window.removeEventListener("mousemove", move); cancelAnimationFrame(raf); };
  }, []);

  return (
    <>
      <div ref={ref} className="cursor-glow hidden md:block" />
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          ref={(el) => { if (el) trailRefs.current[i] = el; }}
          className="cursor-glow hidden md:block"
          style={{ width: `${14 - i}px`, height: `${14 - i}px` }}
        />
      ))}
    </>
  );
}
