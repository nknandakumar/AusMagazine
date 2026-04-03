import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-base font-bold transition-colors duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-14 px-8 uppercase tracking-wider rounded-md",
  {
    variants: {
      variant: {
        default:
          "bg-accent text-white hover:bg-white hover:text-white",
        outline:
          "border border-white bg-transparent text-white hover:bg-white hover:text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? "span" : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, className }))}
        ref={ref as any}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
