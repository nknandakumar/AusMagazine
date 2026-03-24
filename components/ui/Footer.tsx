import Link from "next/link";
import { Button } from "./Button";

export function Footer() {
  return (
    <footer className="bg-black py-20 px-6 border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex flex-col">
              <span className="font-serif-italic text-4xl font-regular tracking-wide leading-none">
                AUS
              </span>
              <span className="text-sm uppercase tracking-widest font-bold font-satoshi mt-1">
                Magazine
              </span>
            </Link>
            <p className="text-white/60 text-sm mt-4 leading-relaxed">
              Australia's Viral Promotion Platform. Helping Aussie brands, creators and local businesses get seen by thousands of engaged followers every single day.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-sm uppercase tracking-widest text-white/50 mb-2">Pages</h4>
            <Link href="/" className="text-white/80 hover:text-gold transition-colors text-sm">Home</Link>
            <Link href="/about" className="text-white/80 hover:text-gold transition-colors text-sm">About</Link>
            <Link href="/get-featured" className="text-white/80 hover:text-gold transition-colors text-sm">Get Featured</Link>
            <Link href="/advertise" className="text-white/80 hover:text-gold transition-colors text-sm">Advertise</Link>
            <Link href="/contact" className="text-white/80 hover:text-gold transition-colors text-sm">Contact</Link>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-sm uppercase tracking-widest text-white/50 mb-2">Packages</h4>
            <Link href="/get-featured" className="text-white/80 hover:text-gold transition-colors text-sm">Story Feature</Link>
            <Link href="/get-featured" className="text-white/80 hover:text-gold transition-colors text-sm">Feed Post</Link>
            <Link href="/get-featured" className="text-white/80 hover:text-gold transition-colors text-sm">Featured Campaign</Link>
            <Link href="/advertise" className="text-white/80 hover:text-gold transition-colors text-sm">Monthly Sponsor</Link>
            <Link href="/advertise" className="text-white/80 hover:text-gold transition-colors text-sm">Brand Ambassador</Link>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-sm uppercase tracking-widest text-white/50 mb-2">Connect</h4>
            <a href="https://instagram.com/aus.magazine" target="_blank" rel="noreferrer" className="text-white/80 hover:text-gold transition-colors text-sm">Instagram</a>
            <Link href="/contact" className="text-white/80 hover:text-gold transition-colors text-sm">Contact Us</Link>
            
            <Link href="/get-featured" className="mt-4">
              <Button variant="outline" className="w-full h-10 text-sm">Get Featured</Button>
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-white/40 text-sm">
          <p>&copy; {new Date().getFullYear()} AUS Magazine. All rights reserved.</p>
          <a href="https://instagram.com/aus.magazine" target="_blank" rel="noreferrer" className="hover:text-white transition-colors mt-4 md:mt-0">
            @aus.magazine
          </a>
        </div>
      </div>
    </footer>
  );
}
