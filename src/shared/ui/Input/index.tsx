"use client";
import * as React from "react";
import { cn } from "@/lib/utils/cn";

type InputProps = React.ComponentProps<"input"> & {
  iconStart?: React.ReactNode;
  iconEnd?: React.ReactNode;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, iconStart, iconEnd, ...props }, ref) => {
    return (
      <div className="relative w-full">
        {iconStart && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
            {iconStart}
          </span>
        )}

        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            iconStart && "pl-10",
            iconEnd && "pr-10",
            className
          )}
          ref={ref}
          {...props}
        />

        {iconEnd && (
          <span className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground">
            {iconEnd}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
