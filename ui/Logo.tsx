import { siteConfig } from "#/config/site";
import { cn } from "#/lib/utils";
import { ComponentPropsWithoutRef, forwardRef } from "react";

export const Logomark = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<"div">
>((props, ref) => {
  return (
    <div ref={ref} {...props}>
      V
    </div>
  );
});

export const Logo = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<"div">>(
  (props, ref) => {
    const { className, ...restProps } = props;
    return (
      <div
        ref={ref}
        {...restProps}
        className={cn(
          "flex flex-row items-center justify-center space-x-2",
          className
        )}
      >
        <Logomark />
        <div className="font-bold">{siteConfig.name}</div>
      </div>
    );
  }
);
