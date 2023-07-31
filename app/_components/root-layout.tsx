"use client";

import { navConfig } from "#/config/nav";
import { cn } from "#/lib/utils";
import { Container } from "#/ui/Container";
import { Logo, Logomark } from "#/ui/Logo";
import { Button } from "#/ui/button";
import { MobileNav } from "#/ui/mobile-nav";
import { SiteFooter } from "#/ui/site-footer";
import { cva } from "class-variance-authority";
import { MotionConfig, motion, useReducedMotion } from "framer-motion";
import { XIcon } from "lucide-react";
import Link from "next/link";
import React, {
  ComponentPropsWithoutRef,
  ReactElement,
  createContext,
  forwardRef,
  useId,
  useMemo,
  useState,
} from "react";

interface RootLayoutContextValue {
  pathname: string;
}

const MenuIcon = forwardRef<SVGSVGElement, ComponentPropsWithoutRef<"svg">>(
  (props, ref) => {
    return (
      <svg ref={ref} viewBox="0 0 24 24" aria-hidden="true" {...props}>
        <path d="M2 6h20v2H2zM2 16h20v2H2z" />
      </svg>
    );
  }
);

const RootLayoutContext = createContext<RootLayoutContextValue>({
  pathname: "/",
});

interface HeaderProps {
  invert?: boolean;
  panelId: string;
  expanded: boolean;
  icon: React.ReactNode;
  onToggle: () => void;
}

const navBase = cva(
  [
    "relative",
    "inline-block",
    "align-top",
    "text-left",
    "transition-colors",
    "duration-200",
    "ease-in-out",
    "text-sm",
    "font-semibold",
    "rounded-md",
    "px-4",
    "py-2",
    // "hover:bg-brand-default",
    // "hover:text-brand",
    "outline-none",
    "hover:bg-gray-50",
    "transition-colors duration-200 ease-in-out",
  ],
  {
    variants: {
      invert: {
        true: ["text-brand"],
        false: ["text-default"],
      },
    },
    defaultVariants: {
      invert: false,
    },
  }
);

const Header: React.FC<HeaderProps> = (props) => {
  const { expanded, panelId, icon, onToggle, invert } = props;
  return (
    <Container>
      <div className="flex items-center justify-between">
        <Link href="/" className={cn("mr-[4vw]", invert && "text-white")}>
          <Logomark className="h-8 sm:hidden" />
          <Logo className="hidden h-8 sm:flex" />
        </Link>
        <nav className="hidden items-center text-sm font-medium md:flex">
          {navConfig.mainNav.map((item) => {
            if (item.href) {
              return (
                <Link
                  href={item.href}
                  key={item.href}
                  className={navBase({ invert })}
                >
                  {item.title}
                </Link>
              );
            }

            return (
              <button
                key={item.title}
                type="button"
                className={navBase({ invert })}
              >
                {item.title}
              </button>
            );
          })}
        </nav>
        <div className="flex flex-1 flex-row items-center justify-end gap-4">
          {/** actions: login, signup */}
          <Button
            size="lg"
            appearance="outline"
            color={invert ? "inverted" : "primary"}
          >
            Login
          </Button>

          <button
            type="button"
            aria-expanded={expanded}
            aria-controls={panelId}
            onClick={onToggle}
            className={cn(
              "group -m-2.5 block rounded-full p-2.5 transition md:hidden",
              invert
                ? "text-white hover:bg-white/10"
                : "text-default hover:bg-neutral-950/10"
            )}
            aria-label="Toggle navigation"
          >
            {React.isValidElement(icon)
              ? React.cloneElement(icon as ReactElement, {
                  className: cn(
                    "h-6 w-6",
                    invert
                      ? "fill-white group-hover:fill-neutral-200"
                      : "fill-neutral-950 group-hover:fill-neutral-700"
                  ),
                })
              : icon}
          </button>
        </div>
      </div>
    </Container>
  );
};

interface RootLayoutInnerProps {
  children: React.ReactNode;
}

const RootLayoutInner: React.FC<RootLayoutInnerProps> = (props) => {
  const { children } = props;

  const panelId = useId();
  const [expanded, setExpanded] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <MotionConfig transition={shouldReduceMotion ? { duration: 0 } : undefined}>
      <div className="relative flex min-h-screen flex-col">
        <header>
          <div
            className="absolute left-0 right-0 top-2 z-40 pt-14"
            aria-hidden={expanded ? "true" : undefined}
            // https://github.com/DefinitelyTyped/DefinitelyTyped/pull/60822
            // @ts-ignore
            inert={expanded ? "" : undefined}
          >
            <Header
              panelId={panelId}
              expanded={expanded}
              icon={<MenuIcon />}
              onToggle={() => setExpanded((prev) => !prev)}
            />
          </div>
          <motion.div
            layout
            id={panelId}
            style={{ height: expanded ? "auto" : "0.5rem" }}
            className="bg-brand-default relative z-50 overflow-hidden pt-2"
            aria-hidden={expanded ? undefined : "true"}
            // https://github.com/DefinitelyTyped/DefinitelyTyped/pull/60822
            // @ts-ignore
            inert={expanded ? undefined : ""}
          >
            <motion.div layout className="bg-brand-default pb-14">
              <div className="bg-brand-default pb-16 pt-14">
                <Header
                  invert
                  panelId={panelId}
                  expanded={expanded}
                  icon={<XIcon />}
                  onToggle={() => setExpanded((prev) => !prev)}
                />
              </div>
              <MobileNav />
            </motion.div>
          </motion.div>
        </header>
        <motion.div
          layout
          className="relative flex flex-auto overflow-hidden rounded-t-[40px] bg-white pt-14"
        >
          <motion.div
            layout
            className="relative isolate flex w-full flex-col pt-9"
          >
            <main className="w-full flex-auto">{children}</main>
          </motion.div>
        </motion.div>
        <motion.div layout className="bg-white">
          <div className="bg-brand-default overflow-hidden rounded-t-[40px] pt-14">
            <SiteFooter />
          </div>
        </motion.div>
      </div>
    </MotionConfig>
  );
};

export interface RootLayoutProps {
  children: React.ReactNode;
}
export const RootLayout: React.FC<RootLayoutProps> = (props) => {
  const { children } = props;

  const ctx = useMemo(() => ({ pathname: "" }), []);

  return (
    <RootLayoutContext.Provider value={ctx}>
      <RootLayoutInner>{children}</RootLayoutInner>
    </RootLayoutContext.Provider>
  );
};
