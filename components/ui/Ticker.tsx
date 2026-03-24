"use client";

const items = [
  "Food and Dining",
  "Tattoo Studios",
  "Nails and Beauty",
  "Lifestyle Brands",
  "Fashion",
  "Local Businesses",
  "Creators",
  "Events",
];

export function Ticker() {
  // Quadruple items for a robust seamless loop on wide screens
  const duplicatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="w-full overflow-hidden bg-black/40 border-y border-white/5 py-4 flex items-center">
      <div className="flex space-x-12 items-center whitespace-nowrap pl-12 w-max animate-marquee">
        {duplicatedItems.map((item, index) => (
          <div key={index} className="flex items-center space-x-12">
            <span className="text-xs uppercase tracking-[0.25em] text-white/40 font-bold font-satoshi">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-gold opacity-50 block" />
          </div>
        ))}
      </div>
    </div>
  );
}
