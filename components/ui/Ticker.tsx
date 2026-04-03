"use client";

const items = [
  {
    name: "Sydney Bakery",
    stat: "+600 Followers in 48h",
    image: "https://images.unsplash.com/photo-1550525811-e5869dd03032?w=100&h=100&fit=crop&crop=faces&auto=format&q=80"
  },
  {
    name: "Melbourne Beauty Studio",
    stat: "Fully Booked This Week",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces&auto=format&q=80"
  },
  {
    name: "Local Restaurant",
    stat: "AUD 3K+ in Sales",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces&auto=format&q=80"
  },
  {
    name: "Aussie Tour Guide",
    stat: "Sold Out Weekend Slots",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces&auto=format&q=80"
  },
  {
    name: "Aussie Skincare Brand",
    stat: "80+ New Enquiries",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces&auto=format&q=80"
  },
  {
    name: "Brisbane Fitness Coach",
    stat: "15 New Clients Signed",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces&auto=format&q=80"
  },
];

export function Ticker() {
  // Quadruple items for a robust seamless loop on wide screens
  const duplicatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="w-full max-w-5xl mx-auto py-12 flex flex-col items-center">
      <span className="text-primary/60 text-sm font-bold tracking-wide mb-8 ">
        Driving real results for Australian brands
      </span>
      <div className="relative w-full overflow-hidden flex items-center py-4">
        {/* Edge Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>

        <div className="flex space-x-20 md:space-x-26 items-center whitespace-nowrap pl-12 md:pl-16 w-max animate-marquee [animation-duration:80s]">
          {duplicatedItems.map((item, index) => (
            <div key={index} className="flex items-center gap-2 transition-opacity hover:opacity-100 cursor-default opacity-90">
              <img src={item.image} alt={item.name} className="w-12 h-12 rounded-full object-cover border border-primary/10" />
              <div className="flex flex-col">
                <span className="text-lg md:text-lg text-primary font-bold leading-none mb-0.5">
                  {item.name}
                </span>
                <span className="text-sm text-foreground/60 leading-none">
                  {item.stat}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
