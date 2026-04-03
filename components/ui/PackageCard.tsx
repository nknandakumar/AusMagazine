import { Button } from "./Button";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface PackageProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonVariant: "default" | "outline";
  isPopular?: boolean;
  href?: string;
  onClick?: () => void;
  className?: string;
  isActive?: boolean;
}

export function PackageCard({
  name,
  price,
  description,
  features,
  buttonText,
  buttonVariant,
  isPopular,
  href,
  onClick,
  className,
  isActive,
}: PackageProps) {
  const content = (
    <div className={cn(
      "relative flex flex-col p-8 bg-white shadow-[0_4px_40px_rgba(0,69,124,0.08)] transition-all duration-300",
      isPopular ? "border-accent border-t-2" : "border-primary/10 border",
      isActive && "border-l-4 border-l-secondary",
      className
    )}>
      {isPopular && (
        <span className="absolute -top-[14px] left-8 bg-accent text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1">
          Most Popular
        </span>
      )}
      <h3 className="text-2xl font-serif-italic text-primary mb-2">{name}</h3>
      <p className="text-foreground/70 text-sm mb-6 h-[60px]">{description}</p>
      <div className="text-4xl font-bold mb-8 font-satoshi text-primary">{price}</div>
      <ul className="flex flex-col gap-4 mb-10 flex-grow">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-foreground/80 leading-relaxed font-satoshi">
            <Check className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      {href ? (
        <Link href={href} className="w-full mt-auto">
          <Button variant={buttonVariant} className="w-full">{buttonText}</Button>
        </Link>
      ) : (
        <Button variant={buttonVariant} className="w-full mt-auto" onClick={onClick}>
          {buttonText}
        </Button>
      )}
    </div>
  );

  return content;
}
