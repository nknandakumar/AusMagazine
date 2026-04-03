"use client";

interface MarqueeItem {
  src: string;
  alt?: string;
  type: "image" | "video";
}

interface MarqueeStripProps {
  items: MarqueeItem[];
  /** seconds for one full loop — default 30 */
  duration?: number;
  /** Tailwind width classes for each card — default "w-[280px] md:w-[320px]" */
  itemWidth?: string;
  /** Tailwind height classes for each card — default "h-[400px]" */
  itemHeight?: string;
  /** Scroll direction — default "left" */
  direction?: "left" | "right";
}

export function MarqueeStrip({
  items,
  duration = 30,
  itemWidth = "w-[280px] md:w-[320px]",
  itemHeight = "h-[400px]",
  direction = "left",
}: MarqueeStripProps) {
  const animationStyle: React.CSSProperties = {
    animation: `${direction === "right" ? "marquee-reverse" : "marquee"} ${duration}s linear infinite`,
    willChange: "transform",
    // GPU-accelerated compositing
    transform: "translateZ(0)",
    backfaceVisibility: "hidden" as const,
    display: "flex",
  };

  return (
    <div className="relative w-full flex overflow-hidden">
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      {/* Track — two identical copies for seamless loop */}
      <div className="flex w-max" style={animationStyle}>
        {[0, 1].map((copy) => (
          <div key={copy} className="flex gap-6 pr-6 items-start shrink-0">
            {items.map((item, j) => (
              <div
                key={j}
                className={`relative ${itemWidth} ${itemHeight} shrink-0 overflow-hidden ${item.type === "video" ? "bg-primary-tint border border-primary/10 rounded-md" : "rounded-2xl"}`}
                style={{ contain: "strict" }}
              >
                {item.type === "video" ? (
                  <video
                    src={item.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                    style={{ willChange: "auto" }}
                  />
                ) : (
                  <img
                    src={item.src}
                    alt={item.alt ?? ""}
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ willChange: "auto" }}
                  />
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
