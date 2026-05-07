import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell } from "@/components/PageShell";
import { SectionTitle } from "@/components/SectionTitle";
import { Reveal } from "@/components/Reveal";
import wedding from "@/assets/event-wedding.jpg";
import yacht from "@/assets/event-yacht.jpg";
import birthday from "@/assets/event-birthday.jpg";
import celeb from "@/assets/event-celebrity.jpg";
import corp from "@/assets/event-corporate.jpg";
import villa from "@/assets/event-villa.jpg";
import { MapPin, Calendar } from "lucide-react";

export const Route = createFileRoute("/events")({
  component: EventsPage,
  head: () => ({
    meta: [
      { title: "Events — SK Events & Management" },
      { name: "description", content: "Browse upcoming and signature SK celebrations — weddings, yacht parties, celebrity galas and more." },
    ],
  }),
});

const events = [
  { img: wedding, cat: "Wedding", title: "The Marwari Royal Reception", date: "12 Feb 2026", loc: "Udaipur", price: "₹18,00,000" },
  { img: yacht, cat: "Yacht", title: "Sunset Surprise on the Arabian", date: "28 Jan 2026", loc: "Mumbai", price: "₹4,50,000" },
  { img: birthday, cat: "Birthday", title: "Twenty-One in Champagne", date: "05 Mar 2026", loc: "Bengaluru", price: "₹2,80,000" },
  { img: celeb, cat: "Celebrity", title: "Brand Launch · Fashion Week", date: "20 Mar 2026", loc: "Delhi", price: "On enquiry" },
  { img: corp, cat: "Corporate", title: "Annual Gala — House of Tata", date: "08 Apr 2026", loc: "Mumbai", price: "₹25,00,000" },
  { img: villa, cat: "Villa", title: "Anniversary in Anjuna", date: "14 Feb 2026", loc: "Goa", price: "₹3,20,000" },
  { img: wedding, cat: "Wedding", title: "Tamil Brahmin Sampradaya", date: "30 Apr 2026", loc: "Chennai", price: "₹12,00,000" },
  { img: yacht, cat: "Yacht", title: "Engagement at Sea", date: "11 May 2026", loc: "Goa", price: "₹3,80,000" },
];

const cats = ["All", "Wedding", "Yacht", "Birthday", "Celebrity", "Corporate", "Villa"];

function EventsPage() {
  const [filter, setFilter] = useState("All");
  const list = filter === "All" ? events : events.filter((e) => e.cat === filter);

  return (
    <PageShell>
      <section className="pt-40 pb-12 mx-auto max-w-7xl px-6">
        <SectionTitle eyebrow="The Calendar" title="Signature Celebrations" subtitle="A glance at the season's most coveted SK reveries — open for guest enquiries." />
      </section>

      <section className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap justify-center gap-3">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-full border px-5 py-2 text-[11px] tracking-[0.3em] uppercase transition-all ${
                filter === c ? "bg-gradient-gold border-transparent text-background shadow-gold" : "border-border text-foreground/70 hover:border-gold hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((e, i) => (
            <Reveal key={`${e.title}-${i}`} delay={i * 60}>
              <article className="group rounded-2xl bg-card overflow-hidden hover-lift border border-border">
                <div className="relative img-zoom h-64 overflow-hidden">
                  <img src={e.img} alt={e.title} loading="lazy" className="h-full w-full object-cover" />
                  <div className="absolute top-4 left-4 rounded-full bg-background/90 backdrop-blur px-3 py-1 text-[10px] tracking-[0.3em] uppercase text-gold">{e.cat}</div>
                </div>
                <div className="p-7">
                  <h3 className="font-display text-2xl">{e.title}</h3>
                  <div className="mt-4 flex items-center gap-4 text-xs tracking-[0.2em] uppercase text-muted-foreground">
                    <span className="flex items-center gap-1.5"><Calendar className="h-3 w-3 text-gold" /> {e.date}</span>
                    <span className="flex items-center gap-1.5"><MapPin className="h-3 w-3 text-gold" /> {e.loc}</span>
                  </div>
                  <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
                    <span className="font-display text-xl text-gradient-gold">{e.price}</span>
                    <button className="shimmer rounded-full bg-gradient-gold px-5 py-2 text-[10px] tracking-[0.3em] uppercase text-background">Book Now</button>
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
