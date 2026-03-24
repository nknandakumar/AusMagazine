"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Ticker } from "@/components/ui/Ticker";
import { PackageCard } from "@/components/ui/PackageCard";
import { Reveal } from "@/components/ui/Reveal";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* SECTION 1 — HERO */}
      <section className="relative pt-24 md:pt-40 pb-12 md:pb-20 px-6 flex flex-col items-center justify-center text-center max-w-5xl mx-auto min-h-[100svh] md:min-h-[85vh]">
        <Reveal>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6 md:mb-8">
            <div className="flex -space-x-3">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop&crop=faces&auto=format&q=80" alt="Audience" className="w-10 h-10 rounded-full border-2 border-[#0a0a0a] object-cover opacity-80" />
              <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=64&h=64&fit=crop&crop=faces&auto=format&q=80" alt="Audience" className="w-10 h-10 rounded-full border-2 border-[#0a0a0a] object-cover opacity-80" />
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=faces&auto=format&q=80" alt="Audience" className="w-10 h-10 rounded-full border-2 border-[#0a0a0a] object-cover opacity-80" />
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=faces&auto=format&q=80" alt="Audience" className="w-10 h-10 rounded-full border-2 border-[#0a0a0a] object-cover opacity-80" />
              <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=faces&auto=format&q=80" alt="Audience" className="w-10 h-10 rounded-full border-2 border-[#0a0a0a] object-cover opacity-80" />
            </div>
            <div className="flex flex-col items-center sm:items-start">
              <div className="flex gap-1 mb-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-4 h-4 text-white fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <div className="text-sm font-medium text-white/70">
                Trusted by <span className="text-white">700K+</span> engaged followers 
              </div>
            </div>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-4 md:mb-8 leading-[1.1]">
            Australia's <span className="font-serif-italic font-regular">Viral</span> Promotion Platform
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed">
            Helping Aussie brands, creators and local businesses get <span className="text-white">seen</span> by thousands of engaged followers every single day.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full px-4 sm:px-0 mb-4 md:mb-16">
            <Link href="/get-featured" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto">Get Featured</Button>
            </Link>
            <Link href="/advertise" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full sm:w-auto">Advertise With Us</Button>
            </Link>
          </div>
        </Reveal>
      </section>

      {/* SECTION 2 — TICKER */}
      <Ticker />

      {/* SECTION 3 — SOCIAL PROOF */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20 items-end">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Join hundreds of Australian brands already <span className="font-serif-italic font-regular">growing</span> with AUS Magazine
            </h2>
            <p className="text-white/70 text-lg leading-relaxed md:max-w-md">
              Our numbers speak for themselves. A highly engaged, 100 percent Australian community that actively discovers and supports new brands.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { stat: "50K+", label: "Instagram Followers" },
              { stat: "8.4%", label: "Engagement Rate" },
              { stat: "700K+", label: "Total Audience Reach" },
              { stat: "500+", label: "Brands Featured" },
            ].map((metric, i) => (
              <div key={i} className="bg-[#111] border border-white/5 p-8 flex flex-col justify-center items-center text-center">
                <span className="text-5xl font-bold font-satoshi text-gold mb-2">{metric.stat}</span>
                <span className="text-sm uppercase tracking-widest text-white/50 font-bold">{metric.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* SECTION 4 — WHAT WE DO */}
      <section className="py-24 px-6 bg-[#0a0a0a] border-y border-white/5">
        <Reveal>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { num: "01", title: "Promotion", body: "Get your brand in front of thousands of targeted Australian users who are actively engaged and ready to discover new businesses." },
              { num: "02", title: "Exposure", body: "Reach real audiences across cities like Melbourne, Sydney, and Perth. No bots, no inflated numbers — genuine local people." },
              { num: "03", title: "Results", body: "Drive real traffic, followers, and paying customers to your business. Partners see measurable growth within 24 hours of going live." }
            ].map((col, i) => (
              <div key={i} className="flex flex-col items-start">
                <span className="text-7xl font-bold text-white/5 mb-6 leading-none">{col.num}</span>
                <h3 className="text-3xl font-serif-italic mb-4">{col.title}</h3>
                <p className="text-white/60 leading-relaxed">{col.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* SECTION 5 — FEATURED CONTENT (VIDEOS MARQUEE) */}
      <section className="py-32 overflow-hidden relative">
        <Reveal>
          <div className="text-center mb-16 px-6">
            <span className="text-gold text-xs font-bold uppercase tracking-widest mb-4 inline-block">Viral Content</span>
            <h2 className="text-4xl md:text-5xl font-bold">The Engagement Engine</h2>
          </div>
          
          <div className="relative w-full flex overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none"></div>
            
            <motion.div 
              className="flex space-x-6 w-max items-center px-6"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 60 }}
            >
              {[
                "https://ik.imagekit.io/6b0su29zd/Aus.Magazine/hotel.mp4?updatedAt=1774343936604",
                "https://ik.imagekit.io/6b0su29zd/Aus.Magazine/bodycare.mp4?updatedAt=1774343936086",
                "https://ik.imagekit.io/6b0su29zd/Aus.Magazine/red.mp4?updatedAt=1774343934540",
                "https://ik.imagekit.io/6b0su29zd/Aus.Magazine/promotion.mp4?updatedAt=1774343936073",
                "https://ik.imagekit.io/6b0su29zd/Aus.Magazine/explainer.mp4?updatedAt=1774343935978",
                "https://ik.imagekit.io/6b0su29zd/Aus.Magazine/hotel.mp4?updatedAt=1774343936604",
                "https://ik.imagekit.io/6b0su29zd/Aus.Magazine/bodycare.mp4?updatedAt=1774343936086",
                "https://ik.imagekit.io/6b0su29zd/Aus.Magazine/red.mp4?updatedAt=1774343934540",
                "https://ik.imagekit.io/6b0su29zd/Aus.Magazine/promotion.mp4?updatedAt=1774343936073",
                "https://ik.imagekit.io/6b0su29zd/Aus.Magazine/explainer.mp4?updatedAt=1774343935978"
              ].map((src, i) => (
                <div key={i} className="relative w-[280px] md:w-[320px] aspect-[9/16] shrink-0 bg-[#111] overflow-hidden rounded-md border border-white/10">
                  <video src={src} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-80" />
                </div>
              ))}
            </motion.div>
          </div>
        </Reveal>
      </section>

      {/* SECTION 6 — PACKAGES */}
      <section className="py-32 px-6 bg-[#050505]">
        <Reveal>
          <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
            <span className="text-gold text-xs font-bold uppercase tracking-widest mb-4">Get Featured</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Get Your Brand <span className="font-serif-italic font-regular">Seen</span> by Thousands</h2>
            <p className="text-white/70 max-w-2xl mb-16 text-lg">
              Promote your business, product or service to a highly engaged Australian audience. Choose your level of exposure.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full text-left">
              <PackageCard
                name="Story Feature"
                price="From $20"
                description="A 24-hour Instagram story feature placing your brand directly in front of our engaged audience."
                features={["24-hour story placement", "Swipe-up link to your page", "Posted within 24 hours", "Reach 50K+ followers"]}
                buttonText="Submit Request"
                buttonVariant="outline"
                href="/get-featured"
              />
              <PackageCard
                name="Feed Post"
                price="From $50"
                description="A permanent feed post that stays on our profile — delivering long-term exposure to every new follower we gain."
                features={["Permanent feed post", "Caption with your handle", "Shared to stories too", "Priority turnaround", "50K+ follower reach"]}
                buttonText="Submit Request"
                buttonVariant="default"
                href="/get-featured"
                isPopular
              />
              <PackageCard
                name="Featured Campaign"
                price="From $150"
                description="A full 7-day campaign — multiple posts, dedicated stories, and custom caption writing for maximum sustained impact."
                features={["3 feed posts plus daily stories", "7-day promotion window", "Custom caption writing", "Priority placement", "Performance summary"]}
                buttonText="Submit Request"
                buttonVariant="outline"
                href="/get-featured"
              />
            </div>
            
            <div className="mt-12 text-white/50 text-sm">
              All packages include a personal review. Questions? <Link href="/contact" className="text-gold hover:underline">Contact us</Link>.
            </div>
          </div>
        </Reveal>
      </section>

      {/* SECTION 7 — WHY CHOOSE US */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-20">
            <div className="flex flex-col">
              <span className="text-gold text-xs font-bold uppercase tracking-widest mb-4">Differentiation</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Brands Choose AUS Magazine</h2>
              <p className="text-white/70 text-lg leading-relaxed mb-10">
                We are not a generic promotion page. We are a focused, engaged, Australia-first media platform built entirely around connecting local brands with local audiences.
              </p>
              <Link href="/get-featured" className="text-white hover:text-gold transition-colors font-bold uppercase tracking-widest text-sm flex items-center gap-2 w-max group">
                Start Growing Today
                <span className="w-6 h-px bg-white group-hover:bg-gold transition-colors"></span>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
              {[
                { title: "Australia-Focused Audience", desc: "Every follower is Australian. Your promotion reaches real local customers who can walk through your door." },
                { title: "High Engagement Content", desc: "Our 8.4% engagement rate is well above the industry average of 1 to 3 percent." },
                { title: "Fast 24-Hour Turnaround", desc: "Submit today, go live tomorrow. We move fast because your time is valuable." },
                { title: "Targeted Niche Exposure", desc: "Our audience is segmented by interest and city so your content reaches exactly the right people." }
              ].map((item, i) => (
                <div key={i} className="flex flex-col">
                  <h4 className="text-lg font-bold mb-3">{item.title}</h4>
                  <p className="text-white/60 leading-relaxed text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* SECTION 8 — TESTIMONIALS */}
      <section className="py-32 px-6 bg-[#050505] border-y border-white/5">
        <Reveal>
          <div className="max-w-7xl mx-auto flex flex-col items-center">
            <span className="text-gold text-xs font-bold uppercase tracking-widest mb-4">Results</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center">Real <span className="font-serif-italic font-regular">Growth</span> for Real Brands</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
              {[
                { quote: "We gained 300 plus followers in the first 24 hours. Our DMs were flooded with enquiries. Best $50 we have ever spent on marketing.", name: "Sarah M.", biz: "Nail Studio, Melbourne" },
                { quote: "Our bookings doubled the week after the feature. We have been using AUS Magazine every month since. The ROI is incredible.", name: "Jake T.", biz: "Tattoo Artist, Sydney" },
                { quote: "Finally a promotion platform that actually works for Australian businesses. Our cafe reached thousands of new people overnight.", name: "Priya R.", biz: "Cafe Owner, Brisbane" }
              ].map((test, i) => (
                <div key={i} className="p-8 bg-[#111] border border-white/5 flex flex-col">
                  <div className="flex gap-1 mb-6">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <span key={s} className="text-gold text-lg">★</span>
                    ))}
                  </div>
                  <p className="text-white/80 leading-relaxed mb-8 flex-grow">"{test.quote}"</p>
                  <div className="flex flex-col">
                    <span className="font-bold text-white">{test.name}</span>
                    <span className="text-white/50 text-sm">{test.biz}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* SECTION 9 — FINAL CTA */}
      <section className="py-40 px-6 text-center">
        <Reveal>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Ready to <span className="font-serif-italic font-regular">Grow</span> Your Brand?</h2>
          <p className="text-white/70 text-lg max-w-xl mx-auto mb-12">
            Get featured today and reach thousands of potential customers across Australia.
          </p>
          <div className="flex justify-center gap-4 flex-col sm:flex-row">
            <Link href="/get-featured">
              <Button>Get Featured</Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline">Contact Us</Button>
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
