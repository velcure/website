"use client";

import { cn } from "#/lib/utils";
import { MenuIcon } from "lucide-react";
import React from "react";

export const MobileNav: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <button
        onClick={() => setOpen((prev) => !prev)}
        type="button"
        aria-label="Toggle Menu"
        className={cn(
          "relative z-10 flex h-8 w-8 items-center justify-center",
          "mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        )}
      >
        <MenuIcon className="h-3.5 w-3.5 overflow-visible stroke-slate-700" />
        <span className="sr-only">Toggle Menu</span>
      </button>
    </>
  );
};
