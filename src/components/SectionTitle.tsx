import { Reveal } from "./Reveal";

export function SectionTitle({ eyebrow, title, subtitle, align = "center" }: { eyebrow?: string; title: string; subtitle?: string; align?: "center" | "left" }) {
  const a = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-3xl ${a}`}>
      {eyebrow && (
        <Reveal>
          <div className="flex items-center gap-3 justify-center">
            {align === "center" && <span className="h-px w-10 bg-gold" />}
            <span className="text-[11px] tracking-[0.4em] uppercase shimmer-text">{eyebrow}</span>
            {align === "center" && <span className="h-px w-10 bg-gold" />}
          </div>
        </Reveal>
      )}
      <Reveal delay={120}>
        <h2 className="mt-5 font-display text-4xl md:text-6xl leading-[1.05]">{title}</h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={220}>
          <p className="mt-5 font-serif text-lg md:text-xl text-muted-foreground italic">{subtitle}</p>
        </Reveal>
      )}
    </div>
  );
}
