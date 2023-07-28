import { siteConfig } from "#/config/site";
import Link from "next/link";
import React from "react";

export const SiteFooter: React.FC = () => {
  return (
    <footer className="bg-brand-default text-brand py-6 md:px-8 md:py-16">
      <div className="container">
        <div className="grid h-full w-full grid-cols-12 gap-8 self-center">
          <div className="col-span-12 md:col-span-8">
            <Link
              href="/"
              className="mr-[4vw] flex items-center space-x-2 text-2xl"
            >
              <span>V</span>
              <span className="hidden font-bold sm:inline-block">
                {siteConfig.name}
              </span>
            </Link>
          </div>
          <div className="col-span-12 md:col-span-4">
            <Link
              href="/about"
              className="text-brand border-b border-transparent text-sm hover:border-white hover:opacity-70"
            >
              <span>About</span>
            </Link>
          </div>
        </div>
        <div className="grid h-full grid-cols-4 gap-8 md:grid-cols-8"></div>
      </div>
    </footer>
  );
};
