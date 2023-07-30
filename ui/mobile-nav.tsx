"use client";

import { navConfig } from "#/config/nav";
import React from "react";
import { Container } from "./Container";
import { useMobileNavToggle } from "./mobile-nav-toggle";

export const MobileNav: React.FC = () => {
  const { isOpen, setOpen } = useMobileNavToggle();

  return (
    <Container>
      <nav className="font-display text-brand mt-px text-5xl font-medium tracking-tight">
        <ul role="tree" className="m-0 block list-none p-0">
          {navConfig.mainNav.map((item) => (
            <li key={item.title} role="treeitem" className="m-0 p-0">
              {item.title}
            </li>
          ))}
        </ul>
      </nav>
    </Container>
  );
};
