"use client";

import { useRef } from "react";
import CountUp from "./CountUp";

interface AnimatedStatCardProps {
  endValue: number;
  suffix: string;
  label: string;
  subLabel?: string;
  theme?: "light" | "dark";
  className?: string; // For layout ordering
}

export function AnimatedStatCard({ endValue, suffix, label, subLabel, theme = "light", className = "" }: AnimatedStatCardProps) {
  const ref = useRef(null);
  const isLight = theme === "light";

  return (
    <div 
      ref={ref}
      className={`relative p-8 md:p-10 flex flex-col items-start text-left justify-between h-48 md:h-48 group ${isLight ? "bg-white border border-primary/5 shadow-md" : "bg-primary"} ${className}`}
    >
      {/* Top Row: Label & Icon */}
      <div className="flex justify-between items-center w-full mb-6">
        <span className={`text-sm md:text-base font-black uppercase tracking-widest font-serif-italic text-accent`}>
          {label}
        </span>
        <div className={`w-6 h-6 ${isLight ? "text-primary" : "text-white"}`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
            {isLight ? (
              // Bar Chart Icon
              <><path d="M12 20V10" /><path d="M18 20V4" /><path d="M6 20v-4" /></>
            ) : (
              // Eye Icon
              <><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></>
            )}
          </svg>
        </div>
      </div>

      {/* Middle: Huge Number */}
      <div className="flex items-baseline my-auto">
        <CountUp 
          to={endValue} 
          duration={3} 
          className={`text-8xl md:text-7xl font-black font-satoshi tabular-nums tracking-tighter leading-none font-serif-italic ${isLight ? "text-primary" : "text-secondary"}`} 
        />
        <span className={`text-6xl md:text-7xl font-black font-satoshi ml-1 tracking-tighter leading-none font-serif-italic ${isLight ? "text-primary" : "text-white"}`}>
          {suffix}
        </span>
      </div>

     
    </div>
  );
}
