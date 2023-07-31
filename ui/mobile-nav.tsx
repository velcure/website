"use client";

import { navConfig } from "#/config/nav";
import Link from "next/link";
import React from "react";
import { Container } from "./Container";
import { useMobileNavToggle } from "./mobile-nav-toggle";

export const MobileNav: React.FC = () => {
  const { isOpen, setOpen } = useMobileNavToggle();

  return (
    <Container>
      <nav className="font-display text-brand mt-px text-2xl font-medium tracking-tight">
        <ul
          role="tree"
          className="m-0 block list-none divide-y divide-neutral-100 p-0"
        >
          {navConfig.mainNav.map((item) => (
            <li key={item.title} role="treeitem" className="m-0 p-0">
              {item.href ? (
                <Link
                  href={item.href}
                  key={item.href}
                  className="block px-6 py-4"
                >
                  {item.title}
                </Link>
              ) : (
                <div className="block px-6 py-4">{item.title}</div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </Container>
  );
};
