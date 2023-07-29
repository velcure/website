"use client";

import Headroom from "react-headroom";
import { useMobileNavToggle } from "./mobile-nav-toggle";

export interface HeadroomContainerProps {
  children: React.ReactNode;
}

export const HeadroomContainer: React.FC<HeadroomContainerProps> = ({
  children,
}: HeadroomContainerProps) => {
  const { isOpen } = useMobileNavToggle();

  return (
    <Headroom className="headroom" pin={isOpen}>
      {children}
    </Headroom>
  );
};
