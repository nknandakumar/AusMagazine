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
          <span className="text-gold text-xs font-bold uppercase tracking-widest mb-6 inline-block">About AUS Magazine</span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
            Australia's <span className="font-serif-italic font-regular">Media</span> Platform
          </h1>
          <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto">
            AUS Magazine is a fast-growing Australian media platform dedicated to showcasing businesses, creators, and trends across the country.
          </p>
        </Reveal>
      </section>

      {/* SECTION 2 — TWO COLUMN GRID */}
      <section className="py-24 px-6 max-w-7xl mx-auto w-full">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            
            {/* LEFT COLUMN — STATS */}
            <div className="flex flex-col">
              <h2 className="text-3xl font-serif-italic mb-12">Platform by the Numbers</h2>
              
              <div className="flex flex-col divide-y divide-white/10 border-y border-white/10">
                {[
                  { label: "Total audience reach", val: "700K+" },
                  { label: "Instagram followers", val: "50K+" },
                  { label: "Average engagement rate", val: "8.4%" },
                  { label: "Brands featured", val: "500+" }
                ].map((stat, i) => (
                  <div key={i} className="py-8 flex justify-between items-center bg-[#050505] hover:bg-[#0a0a0a] transition-colors px-6 -mx-6">
                    <span className="text-white/70 text-lg">{stat.label}</span>
                    <span className="text-3xl font-bold font-satoshi text-gold">{stat.val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT COLUMN — PHILOSOPHY */}
            <div className="flex flex-col">
              <h2 className="text-3xl font-serif-italic mb-12">What We Stand For</h2>
              
              <div className="flex flex-col gap-12">
                <div>
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-gold"></span>
                    Australia First
                  </h3>
                  <p className="text-white/60 leading-relaxed text-lg">
                    Every piece of content, every brand we promote, every story we tell is about Australia. Our community is 100 percent local and 100 percent engaged.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-gold"></span>
                    Real Results Only
                  </h3>
                  <p className="text-white/60 leading-relaxed text-lg">
                    We do not believe in fake impressions or inflated numbers. We build real audiences who genuinely engage and buy from the brands we feature.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-gold"></span>
                    Speed and Simplicity
                  </h3>
                  <p className="text-white/60 leading-relaxed text-lg">
                    Submit today, go live tomorrow. We keep our process simple because your time is the most valuable thing you have.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-gold"></span>
                    Community Over Everything
                  </h3>
                  <p className="text-white/60 leading-relaxed text-lg">
                    Our audience trusts us because we have built real relationships — not just follower counts. That trust is what makes your promotion work.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </Reveal>
      </section>

      {/* SECTION 3 — CLOSING CTA */}
      <section className="py-32 px-6 bg-[#050505] text-center border-t border-white/5 mt-auto">
        <Reveal>
          <h2 className="text-5xl font-bold mb-6">Want to Be Part of the <span className="font-serif-italic font-regular">Story</span>?</h2>
          <p className="text-white/70 text-lg max-w-xl mx-auto mb-12">
            Join hundreds of Australian brands already growing with AUS Magazine.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/get-featured">
              <Button>Get Featured</Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline">Talk to Us</Button>
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
