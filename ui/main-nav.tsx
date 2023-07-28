"use client";
import { navConfig } from "#/config/nav";
import { siteConfig } from "#/config/site";
import { cva } from "class-variance-authority";
import Link from "next/link";
import * as React from "react";

const navBase = cva([
  "relative",
  "inline-block",
  "align-top",
  "text-left",
  "transition-colors",
  "duration-200",
  "ease-in-out",
  "text-sm",
  "font-semibold",
]);

export const MainNav: React.FC = () => {
  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-[4vw] flex items-center space-x-2">
        <span>V</span>
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        {navConfig.mainNav.map((item) => {
          if (item.href) {
            return (
              <Link href={item.href} key={item.href} className={navBase()}>
                {item.title}
              </Link>
            );
          }

          return (
            <button key={item.title} type="button" className={navBase()}>
              {item.title}
            </button>
          );
        })}
      </nav>
    </div>
  );
};
