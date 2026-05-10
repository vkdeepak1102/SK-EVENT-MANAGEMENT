import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef } from "react";
import { PageShell } from "@/components/PageShell";
import { SectionTitle } from "@/components/SectionTitle";
import { Reveal } from "@/components/Reveal";
import villa from "@/assets/event-villa.jpg";
import { Phone, Mail, MapPin, MessageCircle, Instagram, Facebook, Youtube, Loader2, CheckCircle2, XCircle } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — SK Events & Management" },
      { name: "description", content: "Begin the journey. Reach the SK atelier to plan your luxury wedding, yacht surprise or celebrity event." },
    ],
  }),
});

type Status = "idle" | "loading" | "success" | "error";

function ContactPage() {
  const [status, setStatus] = useState<Status>("idle");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = {
      access_key: "eada38f8-5793-4a14-98c6-f4fd36ef2d81",
      subject: "✨ New Enquiry — SK Events & Management",
      from_name: "SK Events Website",
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      event_date: (form.elements.namedItem("event_date") as HTMLInputElement).value,
      event_type: (form.elements.namedItem("event_type") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      botcheck: "",
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        formRef.current?.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <PageShell>
      <section className="pt-40 pb-12 mx-auto max-w-7xl px-6">
        <SectionTitle eyebrow="Begin the Journey" title="Whisper your dream" subtitle="Tell us when, where, and for whom — we'll compose the rest." />
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="glass rounded-3xl p-8 md:p-12 border-gold/40"
            >
              <h3 className="font-display text-3xl">Plan your event</h3>
              <p className="mt-2 font-serif text-muted-foreground italic">A member of our atelier replies within 24 hours.</p>

              <div className="mt-8 grid gap-5">
                {/* Name */}
                <label className="block">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-foreground/70">Your Name</span>
                  <input name="name" type="text" required className="mt-2 w-full rounded-lg border border-border bg-background/60 px-4 py-3 font-serif text-base outline-none transition-all focus:border-gold focus:shadow-glow" />
                </label>

                {/* Email */}
                <label className="block">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-foreground/70">Email</span>
                  <input name="email" type="email" required className="mt-2 w-full rounded-lg border border-border bg-background/60 px-4 py-3 font-serif text-base outline-none transition-all focus:border-gold focus:shadow-glow" />
                </label>

                {/* Phone */}
                <label className="block">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-foreground/70">Phone</span>
                  <input name="phone" type="tel" required className="mt-2 w-full rounded-lg border border-border bg-background/60 px-4 py-3 font-serif text-base outline-none transition-all focus:border-gold focus:shadow-glow" />
                </label>

                {/* Event Date */}
                <label className="block">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-foreground/70">Event Date</span>
                  <input name="event_date" type="date" className="mt-2 w-full rounded-lg border border-border bg-background/60 px-4 py-3 font-serif text-base outline-none transition-all focus:border-gold focus:shadow-glow" />
                </label>

                {/* Event Type */}
                <label className="block">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-foreground/70">Type of Event</span>
                  <select name="event_type" className="mt-2 w-full rounded-lg border border-border bg-background/60 px-4 py-3 font-serif text-base outline-none focus:border-gold focus:shadow-glow">
                    <option>Wedding</option>
                    <option>Birthday</option>
                    <option>Yacht Surprise</option>
                    <option>Celebrity Event</option>
                    <option>Corporate</option>
                    <option>Other</option>
                  </select>
                </label>

                {/* Message */}
                <label className="block">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-foreground/70">Tell us your dream</span>
                  <textarea name="message" rows={4} className="mt-2 w-full rounded-lg border border-border bg-background/60 px-4 py-3 font-serif text-base outline-none focus:border-gold focus:shadow-glow" />
                </label>

                {/* Honeypot spam field */}
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  className="shimmer mt-2 w-full rounded-full bg-gradient-gold px-6 py-4 text-xs tracking-[0.35em] uppercase text-background shadow-gold disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 transition-all"
                >
                  {status === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}
                  {status === "idle" && "Send Whisper"}
                  {status === "loading" && "Sending…"}
                  {status === "success" && "✦ We'll be in touch ✦"}
                  {status === "error" && "Try Again"}
                </button>

                {/* Success Message */}
                {status === "success" && (
                  <div className="flex items-start gap-3 rounded-2xl border border-green-500/30 bg-green-500/10 px-5 py-4">
                    <CheckCircle2 className="h-5 w-5 text-green-400 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-green-400">Enquiry received!</p>
                      <p className="mt-1 text-xs text-green-400/80 font-serif">Your message has been sent to the SK atelier. We'll reply within 24 hours.</p>
                    </div>
                  </div>
                )}

                {/* Error Message */}
                {status === "error" && (
                  <div className="flex items-start gap-3 rounded-2xl border border-red-500/30 bg-red-500/10 px-5 py-4">
                    <XCircle className="h-5 w-5 text-red-400 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-red-400">Something went wrong</p>
                      <p className="mt-1 text-xs text-red-400/80 font-serif">Please try again or reach us directly via WhatsApp.</p>
                    </div>
                  </div>
                )}

                {/* WhatsApp */}
                <a href="https://wa.me/917904315874" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-gold px-6 py-3 text-xs tracking-[0.3em] uppercase text-foreground hover:bg-gradient-gold hover:text-background transition-all">
                  <MessageCircle className="h-4 w-4" /> WhatsApp the atelier
                </a>
              </div>
            </form>
          </Reveal>

          <Reveal delay={150}>
            <div className="space-y-8">
              <div className="img-zoom relative h-80 overflow-hidden rounded-3xl shadow-soft">
                <img src={villa} alt="" loading="lazy" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <div className="absolute bottom-6 left-6 text-background">
                  <p className="text-[10px] tracking-[0.5em] uppercase">Atelier Houses</p>
                  <h4 className="mt-2 font-display text-3xl">Chennai · Mumbai · Goa</h4>
                </div>
              </div>

              <div className="rounded-3xl bg-card border border-border p-8 grid gap-5">
                {[
                  { I: Phone, l: "Call", v: "+91 7904315874", href: "tel:+917904315874" },
                  { I: Mail, l: "Write", v: "skeventsmanagement28@gmail.com", href: "mailto:skeventsmanagement28@gmail.com" },
                  { I: MapPin, l: "Visit", v: "12, Boat Club Road, Chennai 600028", href: "#" },
                ].map((c) => (
                  <a key={c.l} href={c.href} className="flex items-start gap-4 group">
                    <div className="grid h-11 w-11 place-items-center rounded-full bg-gradient-gold text-background shrink-0"><c.I className="h-4 w-4" /></div>
                    <div>
                      <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">{c.l}</div>
                      <div className="mt-1 font-serif text-lg group-hover:text-gold transition-colors">{c.v}</div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="rounded-3xl bg-card border border-border p-8">
                <h4 className="text-[10px] tracking-[0.35em] uppercase text-gold mb-5">Follow Us</h4>
                <div className="flex flex-wrap gap-3">
                  <a href="https://www.instagram.com/sk___events22?igsh=M3VtYXZ4ZmxzMDEy&utm_source=qr" target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full border border-gold px-4 py-2 text-xs tracking-[0.25em] uppercase text-gold hover:bg-gradient-gold hover:text-background transition-all">
                    <Instagram className="h-4 w-4" /> Instagram
                  </a>
                  <a href="https://www.facebook.com/share/18qb8AjujQ/?mibextid=wwXIfr" target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full border border-gold px-4 py-2 text-xs tracking-[0.25em] uppercase text-gold hover:bg-gradient-gold hover:text-background transition-all">
                    <Facebook className="h-4 w-4" /> Facebook
                  </a>
                  <a href="https://youtube.com/@sk_22-x7q?si=54eJ1Tb5NiUPzrRL" target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full border border-gold px-4 py-2 text-xs tracking-[0.25em] uppercase text-gold hover:bg-gradient-gold hover:text-background transition-all">
                    <Youtube className="h-4 w-4" /> YouTube
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
