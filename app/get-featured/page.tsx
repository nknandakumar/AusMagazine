"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { PackageCard } from "@/components/ui/PackageCard";
import { Button } from "@/components/ui/Button";
import { Check } from "lucide-react";

type PackageType = "Story Feature" | "Feed Post" | "Featured Campaign" | "Not sure";

export default function GetFeatured() {
  const [selectedPackage, setSelectedPackage] = useState<PackageType>("Feed Post");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Mock successful submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1000);
  };

  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* SECTION 1 — HEADER */}
      <section className="pt-40 pb-20 px-6 max-w-4xl mx-auto text-center">
        <Reveal>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Promote Your Brand with AUS Magazine
          </h1>
          <p className="text-lg md:text-xl text-white/70">
            Fill in the form below and we'll get your brand in front of thousands of engaged Australians — <span className="text-white font-bold">fast</span>.
          </p>
        </Reveal>
      </section>

      {/* SECTION 2 — METRICS STRIP */}
      <div className="bg-[#111] border-y border-white/5 py-8 w-full">
        <Reveal>
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
            {[
              { val: "50K+", label: "Followers" },
              { val: "700K+", label: "Total Reach" },
              { val: "8.4%", label: "Engagement" },
              { val: "24hr", label: "Turnaround" },
            ].map((m, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="text-3xl font-bold text-gold font-satoshi mb-1">{m.val}</span>
                <span className="text-xs uppercase tracking-widest text-white/50">{m.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* SECTION 3 — LAYOUT */}
      <section className="py-24 px-6 max-w-7xl mx-auto w-full">
        <Reveal delay={0.2}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            
            {/* LEFT COLUMN */}
            <div className="flex flex-col">
              <h2 className="text-3xl font-serif-italic mb-4">Pick What Works for You</h2>
              <p className="text-white/60 mb-10 leading-relaxed">
                All packages include a personal review and go live within 24 hours of confirmation.
              </p>

              <div className="flex flex-col gap-4 mb-8">
                {[
                  { id: "Story Feature", name: "Story Feature", desc: "24-hour story, swipe-up link", price: "$20" },
                  { id: "Feed Post", name: "Feed Post", desc: "Permanent post, 50K+ reach", price: "$50" },
                  { id: "Featured Campaign", name: "Featured Campaign", desc: "7-day, 3 posts plus daily stories", price: "$150" },
                ].map((pkg) => (
                  <div
                    key={pkg.id}
                    onClick={() => setSelectedPackage(pkg.id as PackageType)}
                    className={`p-6 cursor-pointer border flex items-center justify-between transition-all bg-[#0d0d0d] ${
                      selectedPackage === pkg.id 
                        ? "border-gold border-l-4 lg:-ml-2 bg-[#141414]" 
                        : "border-white/10 hover:border-white/30"
                    }`}
                  >
                    <div className="flex flex-col">
                      <span className="font-bold text-lg mb-1">{pkg.name}</span>
                      <span className="text-sm text-white/50">{pkg.desc}</span>
                    </div>
                    <span className="text-xl font-bold text-gold font-satoshi">{pkg.price}</span>
                  </div>
                ))}
              </div>

              <div className="p-6 bg-[#111] border border-white/5 text-sm text-white/70 leading-relaxed rounded-sm">
                <strong className="text-white block mb-1">Not sure which package?</strong>
                Select <span className="italic">Not sure</span> in the form and we will recommend the best fit for your budget and goals.
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="flex flex-col">
              <h2 className="text-3xl font-serif-italic mb-10">Let's Get You Featured</h2>
              
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-widest text-white/50 font-bold">Your Name</label>
                    <input required type="text" className="bg-transparent border border-white/20 p-4 outline-none focus:border-gold transition-colors text-white" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-widest text-white/50 font-bold">Business Name</label>
                    <input required type="text" className="bg-transparent border border-white/20 p-4 outline-none focus:border-gold transition-colors text-white" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-widest text-white/50 font-bold">Instagram Handle</label>
                    <input required type="text" placeholder="@yourbrand" className="bg-transparent border border-white/20 p-4 outline-none focus:border-gold transition-colors text-white" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-widest text-white/50 font-bold">Email Address</label>
                    <input required type="email" className="bg-transparent border border-white/20 p-4 outline-none focus:border-gold transition-colors text-white" />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest text-white/50 font-bold">Package Selection</label>
                  <select 
                    value={selectedPackage} 
                    onChange={(e) => setSelectedPackage(e.target.value as PackageType)}
                    className="bg-transparent border border-white/20 p-4 outline-none focus:border-gold transition-colors text-white appearance-none cursor-pointer"
                  >
                    <option className="bg-[#111]" value="Story Feature">Starter: Story Feature - $20</option>
                    <option className="bg-[#111]" value="Feed Post">Growth: Feed Post - $50</option>
                    <option className="bg-[#111]" value="Featured Campaign">Premium: Featured Campaign - $150</option>
                    <option className="bg-[#111]" value="Not sure">Not sure – let's discuss</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest text-white/50 font-bold">What Do You Want to Promote?</label>
                  <textarea required rows={4} className="bg-transparent border border-white/20 p-4 outline-none focus:border-gold transition-colors text-white resize-none" placeholder="Tell us about the product, service, or event..."></textarea>
                </div>

                <div className="flex flex-col gap-2 mb-4">
                  <label className="text-xs uppercase tracking-widest text-white/50 font-bold">Budget (Optional)</label>
                  <input type="text" placeholder="$" className="bg-transparent border border-white/20 p-4 outline-none focus:border-gold transition-colors text-white" />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting || isSuccess}
                  className={`w-full h-14 ${isSuccess ? 'bg-green-600 text-white hover:bg-green-600 border-green-600' : ''}`}
                >
                  {isSubmitting ? "Submitting..." : isSuccess ? "Request Submitted Successfully" : "Submit Feature Request"}
                </Button>
              </form>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
