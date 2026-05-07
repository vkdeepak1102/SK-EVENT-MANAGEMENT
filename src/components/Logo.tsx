export function Logo({ size = 44, withText = true }: { size?: number; withText?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div className="relative" style={{ width: size, height: size }}>
        <div className="absolute inset-0 rounded-full bg-gradient-gold opacity-20 blur-md animate-glow-pulse" />
        <div className="absolute inset-0 rounded-full border border-gold animate-spin-slow" style={{ borderStyle: "dashed" }} />
        <div className="absolute inset-[6px] rounded-full bg-gradient-gold flex items-center justify-center font-display text-background" style={{ fontSize: size * 0.42 }}>
          SK
        </div>
      </div>
      {withText && (
        <div className="leading-tight">
          <div className="font-display text-lg tracking-[0.2em] text-foreground">SK EVENTS</div>
          <div className="text-[10px] tracking-[0.3em] text-muted-foreground">& MANAGEMENT</div>
        </div>
      )}
    </div>
  );
}
