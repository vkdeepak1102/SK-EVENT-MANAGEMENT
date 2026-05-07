import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/events", label: "Events" },
  { to: "/gallery", label: "Gallery" },
  { to: "/blog", label: "Journal" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "py-2" : "py-5"}`}>
      <div className={`mx-auto max-w-7xl px-6 transition-all duration-500 ${scrolled ? "glass rounded-full shadow-soft" : ""}`}>
        <nav className="flex items-center justify-between py-2">
          <Link to="/" className="flex items-center"><Logo size={42} /></Link>
          <div className="hidden lg:flex items-center gap-9">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="relative text-[12px] tracking-[0.3em] uppercase text-foreground/80 hover:text-foreground transition-colors"
                activeProps={{ className: "text-foreground" }}
              >
                {l.label}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex items-center gap-3">
            <Link to="/dashboard" className="text-[12px] tracking-[0.3em] uppercase text-foreground/70 hover:text-foreground">Sign In</Link>
            <Link to="/contact" className="shimmer rounded-full bg-gradient-gold px-5 py-2.5 text-[11px] tracking-[0.3em] uppercase text-background shadow-gold">
              Plan Event
            </Link>
          </div>
          <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </nav>
      </div>
      {open && (
        <div className="lg:hidden mt-2 mx-4 glass rounded-2xl p-6 shadow-soft animate-fade-up">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="text-sm tracking-[0.25em] uppercase">{l.label}</Link>
            ))}
            <Link to="/dashboard" onClick={() => setOpen(false)} className="text-sm tracking-[0.25em] uppercase">Dashboard</Link>
            <Link to="/admin" onClick={() => setOpen(false)} className="text-sm tracking-[0.25em] uppercase">Admin</Link>
          </div>
        </div>
      )}
    </header>
  );
}
