import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { Instagram, Facebook, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border bg-gradient-soft">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo size={48} />
            <p className="mt-6 max-w-md font-serif text-lg text-muted-foreground">
              Crafting unforgettable luxury experiences across India and the world — from intimate yacht surprises to royal celebrity weddings.
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Facebook, Mail].map((Icon, i) => (
                <a key={i} href="#" className="grid h-10 w-10 place-items-center rounded-full border border-gold text-gold hover:bg-gradient-gold hover:text-background transition-colors">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase text-foreground/80">Explore</h4>
            <ul className="mt-5 space-y-3 font-serif text-base text-muted-foreground">
              <li><Link to="/services" className="hover:text-gold">Services</Link></li>
              <li><Link to="/events" className="hover:text-gold">Events</Link></li>
              <li><Link to="/gallery" className="hover:text-gold">Gallery</Link></li>
              <li><Link to="/blog" className="hover:text-gold">Journal</Link></li>
              <li><Link to="/about" className="hover:text-gold">About</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase text-foreground/80">Atelier</h4>
            <ul className="mt-5 space-y-3 font-serif text-base text-muted-foreground">
              <li className="flex items-center gap-2"><Phone className="h-3.5 w-3.5 text-gold" /> +91 98000 00000</li>
              <li className="flex items-center gap-2"><Mail className="h-3.5 w-3.5 text-gold" /> hello@skevents.in</li>
              <li>Chennai · Mumbai · Goa</li>
            </ul>
          </div>
        </div>
        <div className="divider-gold mt-14" />
        <div className="mt-6 flex flex-col items-center justify-between gap-3 text-xs tracking-[0.25em] uppercase text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} SK Events & Management</p>
          <p>Designed with devotion · Crafted with gold</p>
        </div>
      </div>
    </footer>
  );
}
