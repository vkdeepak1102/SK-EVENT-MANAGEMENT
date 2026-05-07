import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { CalendarRange, Users, Image as ImageIcon, FileText, BarChart3, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/admin")({
  component: Admin,
  head: () => ({ meta: [{ title: "Admin — SK Atelier" }, { name: "description", content: "SK admin control panel." }] }),
});

const tiles = [
  { I: CalendarRange, l: "Manage Events", c: "24 active" },
  { I: Users, l: "Manage Users", c: "1,284 members" },
  { I: ImageIcon, l: "Gallery Uploads", c: "142 pending" },
  { I: FileText, l: "Blog Control", c: "8 drafts" },
];

function Bar({ h, l }: { h: number; l: string }) {
  return (
    <div className="flex flex-col items-center gap-2 flex-1">
      <div className="w-full bg-gradient-soft rounded-t-md relative overflow-hidden" style={{ height: `${h}%` }}>
        <div className="absolute inset-0 bg-gradient-gold opacity-80" />
      </div>
      <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">{l}</span>
    </div>
  );
}

function Admin() {
  return (
    <PageShell>
      <section className="pt-40 pb-10 mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="text-[11px] tracking-[0.5em] uppercase text-gold">Atelier Control</p>
          <h1 className="mt-3 font-display text-5xl md:text-6xl">Admin Panel</h1>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-12">
        {tiles.map((t, i) => (
          <Reveal key={t.l} delay={i * 60}>
            <button className="text-left rounded-2xl border border-border bg-card p-7 hover-lift w-full">
              <t.I className="h-7 w-7 text-gold" />
              <div className="mt-5 font-display text-2xl">{t.l}</div>
              <div className="mt-1 text-[11px] tracking-[0.3em] uppercase text-muted-foreground">{t.c}</div>
            </button>
          </Reveal>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-6 grid gap-8 lg:grid-cols-3 pb-24">
        <div className="lg:col-span-2 rounded-3xl border border-border bg-card p-8">
          <div className="flex items-center justify-between">
            <h3 className="font-display text-3xl">Revenue · last 8 months</h3>
            <div className="flex items-center gap-2 text-gold text-sm"><TrendingUp className="h-4 w-4" /> +28%</div>
          </div>
          <div className="mt-10 flex items-end gap-3 h-64">
            {[
              { h: 35, l: "Sep" }, { h: 48, l: "Oct" }, { h: 60, l: "Nov" }, { h: 52, l: "Dec" },
              { h: 70, l: "Jan" }, { h: 85, l: "Feb" }, { h: 78, l: "Mar" }, { h: 95, l: "Apr" },
            ].map((b) => <Bar key={b.l} {...b} />)}
          </div>
        </div>

        <div className="rounded-3xl border border-border bg-card p-8">
          <BarChart3 className="h-6 w-6 text-gold" />
          <h3 className="mt-4 font-display text-3xl">Analytics</h3>
          <div className="mt-6 space-y-5">
            {[
              { l: "Bookings", v: "184", g: "+12%" },
              { l: "Avg. ticket", v: "₹4.8L", g: "+6%" },
              { l: "Repeat clients", v: "62%", g: "+9%" },
              { l: "Conversion", v: "11.4%", g: "+2.1%" },
            ].map((m) => (
              <div key={m.l} className="flex items-end justify-between border-b border-border pb-3">
                <div>
                  <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">{m.l}</div>
                  <div className="font-display text-2xl text-gradient-gold mt-1">{m.v}</div>
                </div>
                <div className="text-xs text-gold">{m.g}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
