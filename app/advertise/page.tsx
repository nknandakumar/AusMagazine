"use client";

import { Reveal } from "@/components/ui/Reveal";
import { PackageCard } from "@/components/ui/PackageCard";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function Advertise() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* SECTION 1 — HEADER */}
      <section className="pt-40 pb-24 px-6 max-w-4xl mx-auto text-center">
        <Reveal>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Partner With AUS Magazine
          </h1>
          <p className="text-lg md:text-xl text-white/70 leading-relaxed">
            For brands ready to go beyond a single post. Long-term partnerships, sponsored campaigns, and exclusive promotions that build sustained brand presence across Australia.
          </p>
        </Reveal>
      </section>

      {/* SECTION 2 — PACKAGES */}
      <section className="py-24 px-6 bg-[#050505]">
        <Reveal>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <PackageCard
              name="Sponsored Content"
              price="$300 / mo"
              description="Consistent brand presence throughout the month. Your brand becomes part of our ongoing content narrative."
              features={[
                "4 feed posts per month",
                "8 Instagram stories per month",
                "Brand mention in bio",
                "Monthly performance report",
                "Caption and content strategy"
              ]}
              buttonText="Enquire Now"
              buttonVariant="outline"
              href="/contact"
            />
            <PackageCard
              name="Brand Ambassador"
              price="$500 / mo"
              description="Your brand becomes deeply integrated into AUS Magazine's identity. The highest-visibility offering we provide."
              features={[
                "8 feed posts per month",
                "Daily story features",
                "Profile bio link",
                "Highlight reel feature",
                "Weekly performance report",
                "Dedicated campaign strategy session"
              ]}
              buttonText="Enquire Now"
              buttonVariant="default"
              href="/contact"
              isPopular
            />
          </div>
        </Reveal>
      </section>

      {/* SECTION 3 — HOW IT WORKS */}
      <section className="py-32 px-6 max-w-5xl mx-auto w-full">
        <Reveal>
          <div className="flex flex-col md:flex-row gap-16 md:gap-32">
            <div className="md:w-1/3">
              <h2 className="text-4xl font-serif-italic sticky top-32">The Process</h2>
            </div>
            
            <div className="md:w-2/3 flex flex-col gap-12">
              {[
                { num: "01", title: "You Reach Out", desc: "Fill in our contact form or DM us on Instagram. Tell us about your brand and what you want to achieve." },
                { num: "02", title: "We Design Your Campaign", desc: "Our team creates a custom strategy with the right content type, timing, and messaging." },
                { num: "03", title: "You Review and Approve", desc: "We share the plan before anything goes live. You approve or request changes." },
                { num: "04", title: "Go Live and See Results", desc: "Your campaign reaches 50K+ Australian followers within 24 hours." }
              ].map((step, i) => (
                <div key={i} className="flex gap-8 group">
                  <div className="text-gold font-bold font-satoshi text-xl pt-1 opacity-50 group-hover:opacity-100 transition-opacity">
                    {step.num}
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                    <p className="text-white/60 leading-relaxed text-lg">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* SECTION 4 — CLOSING CTA */}
      <section className="py-32 px-6 bg-[#0a0a0a] border-t border-white/5 text-center">
        <Reveal>
          <h2 className="text-5xl font-bold mb-6">Ready to <span className="font-serif-italic font-regular">Partner</span> With Us?</h2>
          <p className="text-white/70 text-lg max-w-xl mx-auto mb-12">
            Tell us about your brand and let's build something great together.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <Button>Start a Conversation</Button>
            </Link>
            <Link href="/get-featured">
              <Button variant="outline">Get Featured Instead</Button>
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
