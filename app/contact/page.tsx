"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export default function Contact() {
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
      <section className="pt-40 pb-20 px-6 max-w-4xl mx-auto text-center border-b border-white/5 w-full">
        <Reveal>
          <span className="text-gold text-xs font-bold uppercase tracking-widest mb-6 inline-block">Get in Touch</span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
            Let's <span className="font-serif-italic font-regular">Talk</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto">
            Whether you have a question, want to discuss a custom campaign, or just want to say hello — we respond within 24 hours.
          </p>
        </Reveal>
      </section>

      {/* SECTION 2 — TWO COLUMN LAYOUT */}
      <section className="py-24 px-6 max-w-7xl mx-auto w-full">
        <Reveal delay={0.2}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            
            {/* LEFT COLUMN — CONTACT INFO */}
            <div className="flex flex-col">
              <h2 className="text-3xl font-serif-italic mb-10">Reach Out Direct</h2>
              
              <div className="flex flex-col gap-12 mb-16">
                <div>
                  <span className="text-xs uppercase tracking-widest text-white/50 font-bold block mb-2">Instagram</span>
                  <a href="https://instagram.com/aus.magazine" target="_blank" rel="noreferrer" className="text-2xl font-bold text-white hover:text-gold transition-colors inline-flex items-center gap-3">
                    @aus.magazine
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                  </a>
                </div>
                
                <div>
                  <span className="text-xs uppercase tracking-widest text-white/50 font-bold block mb-2">Response Time</span>
                  <p className="text-2xl font-bold text-white">Within 24 hours</p>
                </div>

                <div>
                  <span className="text-xs uppercase tracking-widest text-white/50 font-bold block mb-2">Location</span>
                  <p className="text-2xl font-bold text-white">Australia</p>
                </div>
              </div>

              <div className="p-8 bg-[#111] border border-white/5 text-sm text-white/70 leading-relaxed">
                <strong className="text-white block mb-2 text-lg">For the quickest reply</strong>
                DM us directly on Instagram. We check DMs constantly and respond faster there than anywhere else.
              </div>
            </div>

            {/* RIGHT COLUMN — MESSAGE FORM */}
            <div className="flex flex-col bg-[#050505] p-10 border border-white/5">
              <h2 className="text-3xl font-serif-italic mb-8">We'd Love to Hear From You</h2>
              
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest text-white/50 font-bold">Your Name</label>
                  <input required type="text" className="bg-transparent border border-white/20 p-4 outline-none focus:border-gold transition-colors text-white" />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest text-white/50 font-bold">Email</label>
                  <input required type="email" className="bg-transparent border border-white/20 p-4 outline-none focus:border-gold transition-colors text-white" />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest text-white/50 font-bold">What's This About?</label>
                  <select className="bg-[#111] border border-white/20 p-4 outline-none focus:border-gold transition-colors text-white appearance-none cursor-pointer">
                    <option value="General Enquiry">General Enquiry</option>
                    <option value="Get Featured">Get Featured</option>
                    <option value="Advertising & Partnership">Advertising and Partnership</option>
                    <option value="Custom Campaign">Custom Campaign</option>
                    <option value="Something Else">Something Else</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2 mb-4">
                  <label className="text-xs uppercase tracking-widest text-white/50 font-bold">Message</label>
                  <textarea required rows={5} className="bg-transparent border border-white/20 p-4 outline-none focus:border-gold transition-colors text-white resize-none" placeholder="How can we help?"></textarea>
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting || isSuccess}
                  className={`w-full h-14 ${isSuccess ? 'bg-green-600 text-white hover:bg-green-600 border-green-600' : ''}`}
                >
                  {isSubmitting ? "Sending..." : isSuccess ? "Message Sent successfully! We'll be in touch." : "Send Message"}
                </Button>
              </form>
            </div>

          </div>
        </Reveal>
      </section>
    </div>
  );
}
