import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { CursorGlow } from "./CursorGlow";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <CursorGlow />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
