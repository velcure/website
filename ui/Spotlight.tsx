import Image, { ImageProps } from "next/image";
import React, { ComponentPropsWithoutRef } from "react";

export interface SpotlightProps extends ImageProps {
  containerProps?: ComponentPropsWithoutRef<"div">;
}

export const Spotlight = React.forwardRef<HTMLImageElement, SpotlightProps>(
  (props, ref) => {
    const { containerProps, ...restProps } = props;

    return (
      <div {...containerProps}>
        <Image ref={ref} {...restProps} />
      </div>
    );
  }
);
