import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { CalendarHeart, Bookmark, Bell, Wallet, ArrowUpRight } from "lucide-react";
import wedding from "@/assets/event-wedding.jpg";
import yacht from "@/assets/event-yacht.jpg";
import birthday from "@/assets/event-birthday.jpg";

export const Route = createFileRoute("/dashboard")({
  component: Dashboard,
  head: () => ({ meta: [{ title: "My Atelier — SK Events" }, { name: "description", content: "Your private SK dashboard." }] }),
});

const stats = [
  { I: CalendarHeart, l: "Upcoming", v: "3" },
  { I: Bookmark, l: "Saved", v: "12" },
  { I: Bell, l: "Notifications", v: "4" },
  { I: Wallet, l: "Spend YTD", v: "₹6.2L" },
];

const bookings = [
  { img: wedding, t: "Sangeet Night · Jaipur", d: "Feb 14, 2026", s: "Confirmed" },
  { img: yacht, t: "Yacht Surprise · Mumbai", d: "Mar 02, 2026", s: "Planning" },
  { img: birthday, t: "30th Birthday Soirée", d: "Apr 10, 2026", s: "Awaiting Quote" },
];

function Dashboard() {
  return (
    <PageShell>
      <section className="pt-40 pb-10 mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="text-[11px] tracking-[0.5em] uppercase text-gold">Your Atelier</p>
          <h1 className="mt-3 font-display text-5xl md:text-6xl">Welcome back, <span className="text-gradient-gold">Aanya</span></h1>
          <p className="mt-3 font-serif text-lg text-muted-foreground italic">A glance at your celebrations in motion.</p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-12">
        {stats.map((s, i) => (
          <Reveal key={s.l} delay={i * 60}>
            <div className="rounded-2xl border border-border bg-card p-7 hover-lift">
              <div className="flex items-center justify-between">
                <s.I className="h-6 w-6 text-gold" />
                <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="mt-6 font-display text-4xl text-gradient-gold">{s.v}</div>
              <div className="mt-1 text-[11px] tracking-[0.3em] uppercase text-muted-foreground">{s.l}</div>
            </div>
          </Reveal>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 rounded-3xl border border-border bg-card p-8">
          <h3 className="font-display text-3xl">My Bookings</h3>
          <div className="mt-6 divide-y divide-border">
            {bookings.map((b) => (
              <div key={b.t} className="flex items-center gap-5 py-5">
                <img src={b.img} alt="" className="h-16 w-16 rounded-xl object-cover" />
                <div className="flex-1">
                  <div className="font-display text-xl">{b.t}</div>
                  <div className="text-xs tracking-[0.25em] uppercase text-muted-foreground mt-1">{b.d}</div>
                </div>
                <span className={`rounded-full px-3 py-1 text-[10px] tracking-[0.3em] uppercase ${
                  b.s === "Confirmed" ? "bg-gradient-gold text-background" : "border border-gold text-gold"
                }`}>{b.s}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-border bg-card p-8">
          <h3 className="font-display text-3xl">Notifications</h3>
          <ul className="mt-6 space-y-5 font-serif text-base text-foreground/85">
            <li className="border-l-2 border-gold pl-4">Florist confirmed orchids for Feb 14.</li>
            <li className="border-l-2 border-gold pl-4">New invoice ready · ₹1,20,000.</li>
            <li className="border-l-2 border-gold pl-4">Photographer mood-board shared.</li>
            <li className="border-l-2 border-gold pl-4">Tasting menu scheduled · Jan 18.</li>
          </ul>
          <button className="shimmer mt-8 w-full rounded-full border border-gold px-5 py-3 text-[10px] tracking-[0.3em] uppercase">View Payment History</button>
        </div>
      </section>
    </PageShell>
  );
}
