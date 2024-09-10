import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";

const IndicatedSlider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => {
  const [displayValue, setDisplayValue] = React.useState(0);
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <SliderPrimitive.Root
      ref={ref}
      className={cn(
        "relative flex w-full touch-none select-none items-center",
        className,
      )}
      onValueChange={(e) => setDisplayValue(e[0])}
      {...props}
    >
      <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary">
        <SliderPrimitive.Range className="absolute h-full bg-primary" />
      </SliderPrimitive.Track>
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild onMouseDown={(e) => e.preventDefault()}>
          <SliderPrimitive.Thumb
            className="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            onPointerUp={() => setIsOpen(false)}
            onPointerDown={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <PopoverContent
              className="z-10 translate-y-[-3.5rem] rounded-md border bg-white px-2 py-1 text-center text-sm shadow-sm"
              onOpenAutoFocus={(e) => e.preventDefault()}
            >
              {displayValue}
            </PopoverContent>
          </SliderPrimitive.Thumb>
        </PopoverTrigger>
      </Popover>
    </SliderPrimitive.Root>
  );
});
IndicatedSlider.displayName = SliderPrimitive.Root.displayName;

export { IndicatedSlider };
