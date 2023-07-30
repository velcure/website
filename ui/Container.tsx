import { cn } from "#/lib/utils";
import { ComponentPropsWithoutRef, forwardRef } from "react";

export type ContainerProps = ComponentPropsWithoutRef<"div">;

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  (props, ref) => {
    const { className, ...restProps } = props;

    return (
      <div ref={ref} className={cn("container", className)} {...restProps} />
    );
  }
);
