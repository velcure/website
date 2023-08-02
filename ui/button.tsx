import { cn } from "#/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { ComponentPropsWithoutRef, forwardRef } from "react";

export const buttonClass = cva(
  [
    "appearance-none",
    "flex",
    "box-border",
    "select-none",
    "white-space-nowrap",
    "relative",
    "cursor-pointer",
    "font-semibold",
    "border",
    "border-transparent",
    "focus-visible:outline",
    "focus-visible:outline-2",
    "focus-visible:outline-offset-2",
  ],
  {
    variants: {
      appearance: {
        ghost: "",
        default: "shadow-sm",
        outline: "border-solid", // outline has no shadow
      },
      color: {
        primary: "focus-visible:outline-brand-default",
        inverted: "focus-visible:outline-white",
      },
      size: {
        base: "px-2.5 py-1.5 text-sm",
        lg: "px-3 py-2 text-sm",
        xl: "px-4 py-2 text-base",
      },
      rounded: {
        true: "",
      },
    },
    compoundVariants: [
      {
        size: "base",
        rounded: true,
        class: "rounded-md",
      },
      {
        size: "lg",
        rounded: true,
        class: "rounded-md",
      },
      {
        size: "xl",
        rounded: true,
        class: "rounded-md",
      },
      {
        appearance: "default",
        color: "primary",
        class: "bg-brand-default text-brand hover:bg-brand-emphasis",
      },
      {
        appearance: "default",
        color: "inverted",
        class: "bg-white text-default hover:bg-neutral-50",
      },
      {
        appearance: "outline",
        color: "primary",
        class: [
          "bg-transparent bg-opacity-50 border-neutral-600 border-opacity-10 text-emphasis",
          "hover:bg-muted hover:border-opacity-20",
        ],
      },
      {
        appearance: "outline",
        color: "inverted",
        class: "border-white text-white hover:bg-neutral-50",
      },
    ],
    defaultVariants: {
      size: "base",
      rounded: true,
      appearance: "default",
      color: "primary",
    },
  }
);

export type ButtonProps = VariantProps<typeof buttonClass> &
  ComponentPropsWithoutRef<"button">;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      className,
      size,
      rounded,
      appearance,
      color,
      type = "button",
      ...restProps
    } = props;

    return (
      <button
        className={cn(
          buttonClass({
            size,
            rounded,
            appearance,
            color,
          }),
          className
        )}
        ref={ref}
        type={type}
        {...restProps}
      />
    );
  }
);
