import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-brand-dark text-white hover:bg-brand-teal shadow-xs",
        brand:
          "bg-brand-primary text-brand-dark font-bold hover:bg-brand-secondary shadow-md hover:shadow-lg transition-all",
        "brand-outline":
          "border-2 border-brand-primary text-brand-dark hover:bg-brand-primary hover:text-brand-dark font-semibold transition-all",
        "brand-navy":
          "bg-brand-dark text-white font-semibold hover:bg-brand-teal transition-all shadow-md",
        outline:
          "border border-gray-200 bg-white hover:bg-gray-50 text-gray-800 shadow-xs",
        secondary:
          "bg-gray-100 text-gray-900 hover:bg-gray-200",
        ghost:
          "hover:bg-gray-100 hover:text-gray-900",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90",
        link: "text-brand-dark underline-offset-4 hover:underline hover:text-brand-primary",
      },
      size: {
        default: "h-10 gap-2 px-5 py-2",
        xs: "h-7 gap-1 rounded-md px-2.5 text-xs",
        sm: "h-8.5 gap-1.5 rounded-md px-3.5 text-xs",
        lg: "h-12 gap-2.5 px-7 text-base font-semibold",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
