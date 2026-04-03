"use client";

import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function About() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* SECTION 1 — PAGE HEADER */}
      <section className="pt-40 pb-24 px-6 max-w-4xl mx-auto text-center">
        <Reveal>
          <span className="text-secondary text-xs font-bold uppercase tracking-widest mb-6 inline-block">About Aussie Life</span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-primary">
            Australia's <span className="font-serif-italic font-regular text-secondary">Media</span> Platform
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 leading-relaxed max-w-2xl mx-auto">
            Aussie Life is a fast-growing Australian media platform dedicated to showcasing the best of Australia — its businesses, creators, food, beauty, and the people who make this country extraordinary.
          </p>
        </Reveal>
      </section>

      {/* SECTION 2 — TWO COLUMN GRID */}
      <section className="py-24 px-6 max-w-7xl mx-auto w-full">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            
            {/* LEFT COLUMN — STATS */}
            <div className="flex flex-col">
              <h2 className="text-3xl font-serif-italic mb-12 text-primary">Platform by the Numbers</h2>
              
              <div className="flex flex-col divide-y divide-primary/10 border-y border-primary/10">
                {[
                  { label: "Total Audience Reach", val: "173K+" },
                  { label: "Posts Published", val: "333+" },
                  { label: "Brands Featured", val: "300+" }
                ].map((stat, i) => (
                  <div key={i} className="py-8 flex justify-between items-center bg-white hover:bg-primary-tint/30 transition-colors px-6 -mx-6 rounded-md">
                    <span className="text-foreground/70 text-lg">{stat.label}</span>
                    <span className="text-3xl font-bold font-satoshi text-secondary">{stat.val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT COLUMN — PHILOSOPHY */}
            <div className="flex flex-col">
              <h2 className="text-3xl font-serif-italic mb-12 text-primary">What We Stand For</h2>
              
              <div className="flex flex-col gap-12">
                <div>
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-3 text-primary">
                    <span className="w-2 h-2 rounded-full bg-secondary"></span>
                    Australia First
                  </h3>
                  <p className="text-foreground/70 leading-relaxed text-lg">
                    Every piece of content, every brand we promote, every story we tell is rooted in Australia. Our community is local, loyal, and deeply engaged with everything Aussie.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-3 text-primary">
                    <span className="w-2 h-2 rounded-full bg-secondary"></span>
                    Real Results Only
                  </h3>
                  <p className="text-foreground/70 leading-relaxed text-lg">
                    We do not believe in fake impressions or inflated numbers. We build real audiences — people who genuinely engage with and buy from the brands we feature.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-3 text-primary">
                    <span className="w-2 h-2 rounded-full bg-secondary"></span>
                    Speed and Simplicity
                  </h3>
                  <p className="text-foreground/70 leading-relaxed text-lg">
                    Submit today, go live within 48 hours. We keep our process simple because your time and your business momentum matter more than red tape.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-3 text-primary">
                    <span className="w-2 h-2 rounded-full bg-secondary"></span>
                    Community Over Follower Counts
                  </h3>
                  <p className="text-foreground/70 leading-relaxed text-lg">
                    Our audience trusts us because we have spent years building real relationships — not just chasing numbers. That trust is what makes your promotion actually work.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </Reveal>
      </section>

      {/* SECTION 3 — CLOSING CTA */}
      <section className="py-32 px-6 bg-primary-tint/20 text-center border-t border-primary/5 mt-auto">
        <Reveal>
          <h2 className="text-5xl font-bold mb-6 text-primary">Want to Be Part of the <span className="font-serif-italic font-regular text-secondary">Story</span>?</h2>
          <p className="text-foreground/70 text-lg max-w-xl mx-auto mb-12">
            Join hundreds of Aussie brands already growing with Aussie Life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/get-featured">
              <Button>Get Featured</Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="text-primary border-primary">Talk to Us</Button>
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
