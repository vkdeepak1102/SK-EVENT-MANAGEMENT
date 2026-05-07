import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { SectionTitle } from "@/components/SectionTitle";
import { Reveal } from "@/components/Reveal";
import wedding from "@/assets/event-wedding.jpg";
import yacht from "@/assets/event-yacht.jpg";
import birthday from "@/assets/event-birthday.jpg";
import celeb from "@/assets/event-celebrity.jpg";
import villa from "@/assets/event-villa.jpg";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/blog")({
  component: BlogPage,
  head: () => ({
    meta: [
      { title: "Journal — SK Events & Management" },
      { name: "description", content: "The SK Journal — wedding ideas, surprise planning, luxury decor trends and event craft." },
    ],
  }),
});

const featured = { img: wedding, tag: "Weddings", title: "On the slow art of the gold-thread mandap", excerpt: "Why we still hand-embroider every drape — and what it means for the bride who waits.", date: "April 2026" };

const posts = [
  { img: yacht, tag: "Surprises", title: "Five sunset proposals we'll never forget", date: "March 2026" },
  { img: birthday, tag: "Decor", title: "Champagne, candle, ceiling — the new birthday triad", date: "March 2026" },
  { img: celeb, tag: "Trends", title: "Quiet luxury: why guests now whisper, never shout", date: "February 2026" },
  { img: villa, tag: "Planning", title: "The villa weekend: a guide for slow celebrations", date: "February 2026" },
  { img: wedding, tag: "Weddings", title: "Heirloom florals — orchids, hydrangeas, devotion", date: "January 2026" },
  { img: birthday, tag: "Tips", title: "How to surprise someone who has everything", date: "January 2026" },
];

function BlogPage() {
  return (
    <PageShell>
      <section className="pt-40 pb-12 mx-auto max-w-7xl px-6">
        <SectionTitle eyebrow="The Journal" title="Notes from the atelier" subtitle="Reflections, rituals and recipes from a house devoted to celebration." />
      </section>

      {/* Featured */}
      <section className="mx-auto max-w-7xl px-6">
        <Reveal>
          <Link to="/blog" className="group grid lg:grid-cols-2 gap-10 items-center rounded-3xl bg-card border border-border overflow-hidden hover-lift">
            <div className="img-zoom h-[460px]">
              <img src={featured.img} alt={featured.title} loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div className="p-10 lg:p-14">
              <span className="text-[10px] tracking-[0.4em] uppercase text-gold">Featured · {featured.tag}</span>
              <h2 className="mt-5 font-display text-4xl md:text-5xl leading-tight">{featured.title}</h2>
              <p className="mt-6 font-serif text-lg italic text-muted-foreground">{featured.excerpt}</p>
              <div className="mt-8 flex items-center justify-between text-xs tracking-[0.3em] uppercase">
                <span className="text-muted-foreground">{featured.date}</span>
                <span className="inline-flex items-center gap-2 text-gold">Read essay <ArrowRight className="h-3 w-3" /></span>
              </div>
            </div>
          </Link>
        </Reveal>
      </section>

      {/* Grid */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <article className="group rounded-2xl border border-border bg-card overflow-hidden hover-lift">
                <div className="img-zoom h-56 overflow-hidden">
                  <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover" />
                </div>
                <div className="p-7">
                  <span className="text-[10px] tracking-[0.35em] uppercase text-gold">{p.tag}</span>
                  <h3 className="mt-3 font-display text-2xl leading-snug">{p.title}</h3>
                  <div className="mt-6 flex items-center justify-between text-xs tracking-[0.25em] uppercase text-muted-foreground">
                    <span>{p.date}</span>
                    <ArrowRight className="h-3 w-3 text-gold" />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
