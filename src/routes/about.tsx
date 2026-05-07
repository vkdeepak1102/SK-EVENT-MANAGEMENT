import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { SectionTitle } from "@/components/SectionTitle";
import { Reveal } from "@/components/Reveal";
import { Sparkles } from "@/components/Sparkles";
import wedding from "@/assets/event-wedding.jpg";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — SK Events & Management" },
      { name: "description", content: "Meet the atelier behind SK Events & Management — a house devoted to crafting India's most luxurious celebrations." },
    ],
  }),
});

const team = [
  { name: "Shanmathi Vijayaragavan", role: "Managing Director", desc: "The visionary force composing every celebration with patience and grace." },
  { name: "Deepak Raj", role: "Venue Manager", desc: "Architect of spaces — turning palaces and pavilions into living poetry." },
  { name: "Padma", role: "Event Marketing Specialist", desc: "Storyteller in chief, weaving narratives that travel further than the night." },
  { name: "Sugirtha Paul Ruban", role: "Trade Manager", desc: "Curates the finest artisans, fabrics and florals from across the world." },
  { name: "Naveen Mariappan", role: "Co-Producer", desc: "The conductor of cinematic moments — lighting, sound, sequence, soul." },
  { name: "Rukhsana Mohammed Jafer Shaikh", role: "Goa Manager", desc: "Mistress of beach soirées, sunset weddings, and yacht reveries." },
  { name: "Vinitha Naresh Sahani", role: "Mumbai Manager", desc: "Champion of skyline glamour and celebrity-grade discretion." },
  { name: "Harsha Gopala Krishnan", role: "Chennai Manager", desc: "Guardian of southern elegance — temple traditions touched by gold." },
];

function Initial({ name }: { name: string }) {
  const i = name.split(" ").map((s) => s[0]).slice(0, 2).join("");
  return <span className="font-display text-4xl text-gradient-gold">{i}</span>;
}

function AboutPage() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[480px] overflow-hidden">
        <img src={wedding} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-background/70" />
        <Sparkles density={50} />
        <div className="relative z-10 mx-auto flex h-full max-w-4xl flex-col items-center justify-center px-6 text-center pt-24">
          <Reveal><p className="text-[11px] tracking-[0.5em] uppercase text-foreground/70">Our Story</p></Reveal>
          <Reveal delay={120}>
            <h1 className="mt-6 font-display text-6xl md:text-8xl"><span className="text-gradient-gold">A House</span> of Celebrations</h1>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-6 font-serif text-xl italic text-foreground/80">Born of devotion. Built on detail. Dressed in gold.</p>
          </Reveal>
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-4xl px-6 py-28 text-center">
        <SectionTitle eyebrow="Our Story" title="Where every moment wears gold" />
        <Reveal delay={200}>
          <div className="mt-12 space-y-6 font-serif text-xl text-foreground/80 leading-relaxed">
            <p>SK Events & Management was born from a singular obsession — that no celebration should ever feel ordinary. From a single intimate engagement in a Chennai garden, we have grown into one of India's most quietly esteemed luxury event houses.</p>
            <p>Today, our atelier of forty artisans composes weddings in Udaipur palaces, sunset proposals on Goa yachts, and red-carpet evenings in Mumbai's most coveted ballrooms.</p>
            <p>Every brief is a love letter. Every event, our reply.</p>
          </div>
        </Reveal>
      </section>

      <div className="mx-auto max-w-3xl divider-gold" />

      {/* Mission Vision */}
      <section className="mx-auto max-w-7xl px-6 py-28 grid gap-12 md:grid-cols-2">
        {[
          { t: "Our Mission", b: "To honour every milestone with craftsmanship so meticulous it borders on devotion — turning gatherings into heirloom memories.", e: "Mission" },
          { t: "Our Vision", b: "To be the most quietly beloved luxury event house in the world — where royalty, celebrity and family alike feel held in the same gold light.", e: "Vision" },
        ].map((c, i) => (
          <Reveal key={c.t} delay={i * 150}>
            <div className="glass rounded-3xl p-12 border-gold/40 hover-lift">
              <p className="text-[11px] tracking-[0.4em] uppercase text-gold">{c.e}</p>
              <h3 className="mt-4 font-display text-4xl">{c.t}</h3>
              <p className="mt-6 font-serif text-lg italic text-foreground/80">{c.b}</p>
            </div>
          </Reveal>
        ))}
      </section>

      {/* Why Choose Us */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle eyebrow="Why SK" title="The art of the irreplaceable" />
        <div className="mt-16 grid gap-6 md:grid-cols-4">
          {[
            { n: "01", t: "Bespoke", d: "No template. Every celebration designed from the first thread." },
            { n: "02", t: "Discreet", d: "Celebrity-grade privacy. NDA-bound artisans. Quiet luxury." },
            { n: "03", t: "Global", d: "Atelier presence across Chennai, Mumbai, Goa & destinations." },
            { n: "04", t: "Unhurried", d: "We refuse more than we accept — to give you our soul." },
          ].map((f, i) => (
            <Reveal key={f.n} delay={i * 100}>
              <div className="rounded-2xl border border-border bg-card p-8 hover-lift">
                <div className="font-display text-5xl text-gradient-gold">{f.n}</div>
                <div className="mt-4 font-display text-2xl">{f.t}</div>
                <p className="mt-3 font-serif text-base text-muted-foreground">{f.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section className="mx-auto max-w-7xl px-6 py-28">
        <SectionTitle eyebrow="The Atelier" title="The hands behind the gold" subtitle="A devoted council of dreamers, planners & masters of celebration." />
        <div className="mt-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 60}>
              <div className="group text-center hover-lift">
                <div className="relative mx-auto h-44 w-44">
                  <div className="absolute inset-0 rounded-full bg-gradient-gold blur-xl opacity-30 group-hover:opacity-70 transition-opacity duration-700" />
                  <div className="absolute inset-0 rounded-full border border-gold animate-spin-slow" style={{ borderStyle: "dashed" }} />
                  <div className="absolute inset-2 rounded-full bg-gradient-soft grid place-items-center ring-gold-glow">
                    <Initial name={m.name} />
                  </div>
                </div>
                <h4 className="mt-6 font-display text-xl leading-tight">{m.name}</h4>
                <p className="mt-1 text-[10px] tracking-[0.35em] uppercase text-gold">{m.role}</p>
                <p className="mt-3 font-serif text-sm text-muted-foreground italic px-2">{m.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
