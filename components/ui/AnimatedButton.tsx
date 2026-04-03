import * as React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AnimatedButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const AnimatedButton = React.forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "relative group overflow-hidden rounded-full bg-accent border-2 border-accent text-white flex items-center p-1.5 w-full sm:w-max tracking-wider text-lg font-semibold transition-colors",
          className
        )}
        {...props}
      >
        {/* Right-to-Left black fill animation */}
        <span className="absolute inset-y-0 right-0 w-0 bg-primary transition-all duration-500 ease-out group-hover:w-full z-0"></span>
        
        {/* Button Text */}
        <span className="relative z-10 flex-1 text-center px-6 group-hover:text-white transition-colors duration-300">
          {children}
        </span>
        
        {/* Black Circle with Arrow */}
        <div className="relative z-10 w-10 h-10 overflow-hidden rounded-full bg-primary flex items-center justify-center shrink-0 border border-transparent transition-colors group-hover:bg-transparent">
          <ArrowRight className="absolute w-5 h-5 text-white transition-transform duration-300 ease-in-out group-hover:translate-x-8" />
          <ArrowRight className="absolute w-5 h-5 text-white transition-transform duration-300 ease-in-out -translate-x-8 group-hover:translate-x-0" />
        </div>
      </button>
    );
  }
);
AnimatedButton.displayName = "AnimatedButton";
