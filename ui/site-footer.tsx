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
          <div className="col-span-12 flex flex-col space-y-1 md:col-span-4">
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-brand border-b border-transparent text-sm hover:border-white hover:opacity-70"
                >
                  <span>About</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/imprint"
                  className="text-brand border-b border-transparent text-sm hover:border-white hover:opacity-70"
                >
                  <span>Imprint</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/legal"
                  className="text-brand border-b border-transparent text-sm hover:border-white hover:opacity-70"
                >
                  <span>Legal</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-brand border-b border-transparent text-sm hover:border-white hover:opacity-70"
                >
                  <span>Privacy</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-300">
            &copy; {new Date().getFullYear()} by {siteConfig.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
