import { cn } from "#/lib/utils";
import React from "react";

export const Eyebrow = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>((props, ref) => {
  const { className, ...restProps } = props;
  return (
    <span
      ref={ref}
      {...restProps}
      className={cn("font-display text-default block text-base font-semibold")}
    />
  );
});
