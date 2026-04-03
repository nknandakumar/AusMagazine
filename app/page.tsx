"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { AnimatedButton } from "@/components/ui/AnimatedButton";
import { Ticker } from "@/components/ui/Ticker";
import { PackageCard } from "@/components/ui/PackageCard";
import { Reveal } from "@/components/ui/Reveal";
import { AnimatedStatCard } from "@/components/ui/AnimatedStatCard";
import { MarqueeStrip } from "@/components/ui/MarqueeStrip";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* SECTION 1 — HERO */}
      <section className="relative pt-24 md:pt-40 pb-12 md:pb-20 px-6 flex flex-col items-center justify-center text-center max-w-5xl mx-auto min-h-[100svh] md:min-h-[85vh]">
        <Reveal>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6 md:mb-8">
            <div className="flex -space-x-3">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop&crop=faces&auto=format&q=80" alt="Audience" className="w-10 h-10 rounded-full border-2 border-white object-cover opacity-80 shadow-sm" />
              <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=64&h=64&fit=crop&crop=faces&auto=format&q=80" alt="Audience" className="w-10 h-10 rounded-full border-2 border-white object-cover opacity-80 shadow-sm" />
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=faces&auto=format&q=80" alt="Audience" className="w-10 h-10 rounded-full border-2 border-white object-cover opacity-80 shadow-sm" />
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=faces&auto=format&q=80" alt="Audience" className="w-10 h-10 rounded-full border-2 border-white object-cover opacity-80 shadow-sm" />
              <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=faces&auto=format&q=80" alt="Audience" className="w-10 h-10 rounded-full border-2 border-white object-cover opacity-80 shadow-sm" />
            </div>
            <div className="flex flex-col items-center sm:items-start">
              <div className="flex gap-1 mb-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-4 h-4 text-secondary fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <div className="text-sm font-medium text-foreground/70">
                Trusted by <span className="text-primary font-bold">173K+</span> engaged Australian followers 
              </div>
            </div>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-4 md:mb-8 leading-[1.1] text-primary">
            Australia's <span className="font-serif-italic font-regular text-accent">Viral</span> Promotion Platform
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed">
            Helping Aussie brands, creators, and small businesses get <span className="text-primary font-bold">seen</span> by 173K real, engaged followers — every single day.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full px-4 sm:px-0 mb-4 md:mb-16">
            <Link href="/get-featured" className="w-full sm:w-auto">
              <AnimatedButton>Get Featured</AnimatedButton>
            </Link>
          </div>
        </Reveal>
      </section>

      {/* SECTION 2 — TICKER */}
      <Ticker />

      {/* SECTION 3 — SOCIAL PROOF */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <Reveal>
          <div className="mb-16 flex flex-col items-center">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-secondary/30 bg-secondary/5 text-secondary text-xs font-bold tracking-widest uppercase mb-8">
              Results
            </div>
            <h2 className="text-4xl md:text-5xl text-center font-bold leading-tight max-w-3xl mx-auto text-primary">
              Join hundreds of Aussie brands already <span className="font-serif-italic font-regular text-secondary">growing</span> with Aussie Life
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-10">
            <AnimatedStatCard 
              endValue={173} 
              suffix="K+" 
              label="Total Followers" 
              className="order-1"
            />
            <AnimatedStatCard 
              endValue={5} 
              suffix="M+" 
              label="Total Reach" 
              className="order-2"
            />
            <AnimatedStatCard 
              endValue={300} 
              suffix="+" 
              label="Brands Featured" 
              className="order-3"
            />
            <AnimatedStatCard 
              endValue={333} 
              suffix="+" 
              label="Posts Published" 
              className="order-4"
            />
          </div>
        </Reveal>
      </section>

      {/* SECTION 4 — WHAT WE DO */}
      <section className="py-32 px-6 bg-primary-tint/30 ">
        <Reveal>
          <div className="max-w-7xl mx-auto mb-20 flex flex-col items-center">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-secondary/30 bg-secondary/5 text-secondary text-xs font-bold tracking-widest uppercase mb-8">
              What We Do
            </div>
            <h2 className="text-4xl md:text-5xl text-center font-bold leading-tight max-w-3xl mx-auto text-primary">
              We Turn Australian Attention Into <span className="font-serif-italic font-regular text-secondary">Real Growth</span>
            </h2>
          </div>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-12">
            {[
              { num: "01", title: "Promotion", body: "Put your brand directly in front of 173K engaged Australian followers — people who already love food, beauty, lifestyle, and supporting local." },
              { num: "02", title: "Exposure", body: "Reach real audiences across Sydney, Melbourne, Brisbane, and Perth. No bots, no inflated numbers — genuine Australians who act on what they discover." },
              { num: "03", title: "Results", body: "Drive real traffic, new followers, and paying customers. Our partners see measurable growth within 48 hours of going live." }
            ].map((col, i) => (
              <div 
                key={i} 
                className="flex flex-col items-start p-8 border border-primary/10 bg-white shadow-sm min-h-[320px] justify-between md:p-8 md:min-h-[350px]"
              >
                {/* Top Text */}
                <span className="flex items-center font-serif-italic text-2xl font-bold text-primary/30 uppercase tracking-widest mb-6 md:mb-12">
                  {col.num}<span className="ml-2 mt-2.5 h-1.5 w-1.5 bg-secondary"></span>
                </span>

                <div className="flex flex-col mt-auto md:mt-0">
                  <h3 className="text-2xl font-bold text-primary mb-2 md:text-3xl font-serif-italic md:mb-4 tracking-tight md:tracking-normal">{col.title}</h3>
                  <p className="text-foreground/70 leading-relaxed text-[15px] md:text-base">{col.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* SECTION 5 — FEATURED CONTENT (VIDEOS MARQUEE) */}
      <section className="py-32 overflow-hidden relative px-6 max-w-7xl mx-auto">
        <Reveal>
          <div className="mb-16 flex flex-col items-center text-center">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-secondary/30 bg-secondary/5 text-secondary text-xs font-bold tracking-widest uppercase mb-8">
              Viral Content
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary">The Engagement Engine</h2>
          </div>
          
          <MarqueeStrip
            duration={30}
            itemWidth="w-[280px] md:w-[320px]"
            itemHeight="h-[550px]"
            items={[
              { type: "video", src: "https://res.cloudinary.com/dp9xxz6ww/video/upload/v1774519610/Aus%20Magazine/hotel_ulugu4.mp4" },
              { type: "video", src: "https://res.cloudinary.com/dp9xxz6ww/video/upload/v1774519608/Aus%20Magazine/bodycare_gcgf4a.mp4" },
              { type: "video", src: "https://res.cloudinary.com/dp9xxz6ww/video/upload/v1774519607/Aus%20Magazine/red_xfa2v1.mp4" },
              { type: "video", src: "https://res.cloudinary.com/dp9xxz6ww/video/upload/v1774519557/Aus%20Magazine/explainer_x3vlcc.mp4" },
              { type: "video", src: "https://res.cloudinary.com/dp9xxz6ww/video/upload/v1774519556/Aus%20Magazine/promotion_dyd3jg.mp4" },
            ]}
          />
        </Reveal>
      </section>

      {/* SECTION 5b — IMAGE GALLERY MARQUEE */}
      <section className="pb-32 overflow-hidden relative px-6 max-w-7xl mx-auto">
        <Reveal>
          <MarqueeStrip
            direction="right"
            duration={40}
            itemWidth="w-[300px] md:w-[360px]"
            itemHeight="h-[400px]"
            items={[
              { type: "image", src: "https://res.cloudinary.com/dp9xxz6ww/image/upload/v1774519555/Aus%20Magazine/food_qpp52k.jpg", alt: "Food" },
              { type: "image", src: "https://res.cloudinary.com/dp9xxz6ww/image/upload/v1774519555/Aus%20Magazine/dental_pqukfs.jpg", alt: "Dental" },
              { type: "image", src: "https://res.cloudinary.com/dp9xxz6ww/image/upload/v1774519555/Aus%20Magazine/foodcherry_iuvk7m.jpg", alt: "Food Cherry" },
              { type: "image", src: "https://res.cloudinary.com/dp9xxz6ww/image/upload/v1774519554/Aus%20Magazine/lipstick_z6nboz.jpg", alt: "Lipstick" },
              { type: "image", src: "https://res.cloudinary.com/dp9xxz6ww/image/upload/v1774521826/Aus%20Magazine/Image-687_qej24b.jpg", alt: "Image 687" },
              { type: "image", src: "https://res.cloudinary.com/dp9xxz6ww/image/upload/v1774521774/Aus%20Magazine/Image-249_nimt9u.jpg", alt: "Image 249" },
              { type: "image", src: "https://res.cloudinary.com/dp9xxz6ww/image/upload/v1774521707/Aus%20Magazine/Image-186_hdmwmj.jpg", alt: "Image 186" },
            ]}
          />
        </Reveal>
      </section>


      {/* SECTION 6 — PACKAGES */}
      <section className="py-32 px-6 bg-primary-tint/20">
        <Reveal>
          <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
            <span className="text-secondary text-xs font-bold uppercase tracking-widest mb-4">Get Featured</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Get Your Brand <span className="font-serif-italic font-regular text-secondary">Seen</span> by Hundreds of Thousands</h2>
            <p className="text-foreground/70 max-w-2xl mb-16 text-lg">
              Promote your business, product, or service to a highly engaged Australian audience. Choose your level of exposure.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full text-left">
              <PackageCard
                name="Story Feature"
                price="From AUD 20"
                description="24-hour brand placement on our engaged story feed."
                features={["24-hour story placement", "Swipe-up link to your page", "Posted within 24 hours", "Reach 50K+ followers"]}
                buttonText="Submit Request"
                buttonVariant="outline"
                href="/get-featured"
              />
              <PackageCard
                name="Feed Post"
                price="From AUD 50"
                description="Permanent brand visibility capturing long-term reach and sustained growth."
                features={["Permanent feed post", "Caption with your handle", "Shared to stories too", "Priority turnaround", "173K+ follower reach"]}
                buttonText="Submit Request"
                buttonVariant="default"
                href="/get-featured"
                isPopular
              />
              <PackageCard
                name="Featured Campaign"
                price="From AUD 150"
                description="A 7-day full campaign giving you priority exposure to our audience."
                features={["3 feed posts plus daily stories", "7-day promotion window", "Custom caption writing", "Priority placement", "Performance summary"]}
                buttonText="Submit Request"
                buttonVariant="outline"
                href="/get-featured"
              />
            </div>
            
            <div className="mt-12 text-foreground/50 text-sm">
              All packages include a personal review. Questions? <Link href="/contact" className="text-secondary hover:underline">Contact us</Link>.
            </div>
          </div>
        </Reveal>
      </section>

      {/* SECTION 7 — WHY CHOOSE US */}
      <section className="py-32 px-6 w-full">
        <Reveal>
          <div className="flex flex-col items-center text-center max-w-7xl mx-auto w-full">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-secondary/30 bg-secondary/5 text-secondary text-xs font-bold tracking-widest uppercase mb-8">
              Why Choose Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-primary">Why Brands Choose Aussie Life</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
              {[
                { title: "Australia-Focused Audience", desc: "Our entire community is Australia-based. Your promotion reaches real local customers, not international followers who will never visit your shop." },
                { title: "People, Culture & Businesses", desc: "Food. Beauty. Travel. Lifestyle. Culture. Small Business. Your brand finds the exact Aussie audience that cares most about what you offer." },
                { title: "Fast 48-Hour Turnaround", desc: "Submit today, go live tomorrow. We move fast because your time is money and opportunity does not wait." },
                { title: "173K Real Australian Eyes", desc: "173K followers built over 333+ posts. This is not overnight growth — it is a genuinely engaged community built on trust over time." }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center p-8 bg-white border border-primary/10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] h-full">
                  <h3 className="text-lg md:text-xl font-bold mb-4 text-primary leading-tight px-2">{item.title}</h3>
                  <p className="text-foreground/70 leading-relaxed text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* SECTION 8 — TESTIMONIALS */}
      <section className="py-32 px-6 bg-primary-tint/30 border-y border-primary/5">
        <Reveal>
          <div className="max-w-7xl mx-auto flex flex-col items-center">
            <span className="text-secondary text-xs font-bold uppercase tracking-widest mb-4">Results</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center text-primary">Real <span className="font-serif-italic font-regular text-secondary">Growth</span> for Real Aussie Brands</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
              {[
                { quote: "We gained 400+ followers in the first 48 hours. Our DMs were full of enquiries. Best AUD 50 we have ever spent on marketing.", name: "Sarah M.", biz: "Nail Studio, Sydney" },
                { quote: "Our bookings doubled the week after the feature. We have been using Aussie Life every month since. The ROI is incredible.", name: "Jake T.", biz: "Tour Guide, Cairns" },
                { quote: "Finally a promotion platform built for Australian businesses. Our restaurant reached thousands of new people overnight. We were fully booked by the weekend.", name: "Priya R.", biz: "Restaurant Owner, Melbourne" }
              ].map((test, i) => (
                <div key={i} className="p-8 bg-white border border-primary/5 shadow-[0_4px_40px_rgba(0,69,124,0.04)] flex flex-col">
                  <div className="flex gap-1 mb-6">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <span key={s} className="text-secondary text-lg">★</span>
                    ))}
                  </div>
                  <p className="text-foreground/80 leading-relaxed mb-8 flex-grow">"{test.quote}"</p>
                  <div className="flex flex-col">
                    <span className="font-bold text-primary">{test.name}</span>
                    <span className="text-foreground/60 text-sm">{test.biz}</span>
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
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-primary">Ready to <span className="font-serif-italic font-regular text-secondary">Grow</span> Your Aussie Brand?</h2>
          <p className="text-foreground/70 text-lg max-w-xl mx-auto mb-12">
            Get featured today and reach hundreds of thousands of potential customers across Australia.
          </p>
          <div className="flex justify-center gap-4 flex-col sm:flex-row">
            <Link href="/get-featured">
              <AnimatedButton>Get Featured</AnimatedButton>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="text-primary border-primary">Contact Us</Button>
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
