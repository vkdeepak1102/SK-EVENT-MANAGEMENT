import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { CalendarRange, Users, Image as ImageIcon, FileText, UploadCloud } from "lucide-react";
import { useState, useRef } from "react";
import { saveUploadedImage } from "@/lib/db";

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



function Admin() {
  const [cat, setCat] = useState("Weddings");
  const [h, setH] = useState<"tall" | "med" | "short">("med");
  const [uploading, setUploading] = useState(false);
  const fileInput = useRef<HTMLInputElement>(null);

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fileInput.current?.files?.length) return;
    
    setUploading(true);
    const file = fileInput.current.files[0];
    const reader = new FileReader();
    
    reader.onloadend = async () => {
      const base64String = reader.result as string;
      await saveUploadedImage({
        id: crypto.randomUUID(),
        src: base64String,
        cat,
        h,
        timestamp: Date.now()
      });
      setUploading(false);
      alert("Image uploaded to gallery successfully!");
      if (fileInput.current) fileInput.current.value = "";
    };
    
    reader.readAsDataURL(file);
  };

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

      <section className="mx-auto max-w-7xl px-6 mb-12">
        <div className="rounded-3xl border border-border bg-card p-8">
          <div className="flex items-center gap-3 border-b border-border pb-6">
            <UploadCloud className="h-6 w-6 text-gold" />
            <h3 className="font-display text-3xl">Upload to Gallery</h3>
          </div>
          <form onSubmit={handleUpload} className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="space-y-2">
              <label className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Select Image</label>
              <input 
                type="file" 
                accept="image/*" 
                ref={fileInput} 
                required 
                className="w-full flex h-11 rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Category</label>
              <select 
                value={cat} 
                onChange={(e) => setCat(e.target.value)}
                className="w-full flex h-11 rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold"
              >
                <option value="Weddings">Weddings</option>
                <option value="Yacht Parties">Yacht Parties</option>
                <option value="Birthday Surprise">Birthday Surprise</option>
                <option value="Room Decor">Room Decor</option>
                <option value="Villa Surprise">Villa Surprise</option>
                <option value="Celebrity Events">Celebrity Events</option>
                <option value="Model Shoots">Model Shoots</option>
              </select>
            </div>
            <div className="space-y-2 flex flex-col justify-end">
              <button 
                type="submit" 
                disabled={uploading}
                className="shimmer w-full rounded-md bg-gradient-gold px-5 py-3 text-[11px] font-bold tracking-[0.3em] uppercase text-background shadow-gold disabled:opacity-50"
              >
                {uploading ? "Uploading..." : "Upload Image"}
              </button>
            </div>
          </form>
        </div>
      </section>

    </PageShell>
  );
}
