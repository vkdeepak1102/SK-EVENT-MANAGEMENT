import { useEffect, useRef } from "react";

export function Sparkles({ density = 60 }: { density?: number }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let raf = 0;
    const resize = () => {
      canvas.width = canvas.offsetWidth * devicePixelRatio;
      canvas.height = canvas.offsetHeight * devicePixelRatio;
    };
    resize();
    window.addEventListener("resize", resize);

    type P = { x: number; y: number; r: number; vy: number; vx: number; a: number; tw: number };
    const parts: P[] = Array.from({ length: density }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: (Math.random() * 1.6 + 0.4) * devicePixelRatio,
      vy: -(Math.random() * 0.3 + 0.05) * devicePixelRatio,
      vx: (Math.random() - 0.5) * 0.2 * devicePixelRatio,
      a: Math.random(),
      tw: Math.random() * 0.02 + 0.005,
    }));

    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of parts) {
        p.y += p.vy;
        p.x += p.vx;
        p.a += p.tw;
        if (p.y < -10) { p.y = canvas.height + 10; p.x = Math.random() * canvas.width; }
        const alpha = 0.4 + Math.sin(p.a) * 0.4;
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 6);
        grad.addColorStop(0, `rgba(255, 215, 130, ${alpha})`);
        grad.addColorStop(0.4, `rgba(212, 175, 55, ${alpha * 0.5})`);
        grad.addColorStop(1, `rgba(212, 175, 55, 0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 6, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };
    tick();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, [density]);

  return <canvas ref={ref} className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden />;
}
