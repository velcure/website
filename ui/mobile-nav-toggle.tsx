"use client";

import { cn } from "#/lib/utils";
import { MenuAlt2Icon, XIcon } from "@heroicons/react/solid";
import React, {
  ComponentPropsWithoutRef,
  createContext,
  forwardRef,
  useMemo,
} from "react";

interface MobileNavContextValue {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggle: () => void;
}

const MobileNavContext = createContext<MobileNavContextValue>({
  isOpen: false,
  setOpen: () => {},
  toggle: () => {},
});

export function MobileNavContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = React.useCallback(() => {
    setIsOpen((isOpen) => !isOpen);
  }, []);

  const ctx = useMemo(
    () => ({ isOpen, setOpen: setIsOpen, toggle }),
    [isOpen, setIsOpen, toggle]
  );

  return (
    <MobileNavContext.Provider value={ctx}>
      {children}
    </MobileNavContext.Provider>
  );
}

export function useMobileNavToggle() {
  const context = React.useContext(MobileNavContext);
  if (context === undefined) {
    throw new Error(
      "useMobileNavToggle must be used within a MobileNavContextProvider"
    );
  }
  return context;
}

export interface MobileNavToggleProps
  extends ComponentPropsWithoutRef<"button"> {}

export const MobileNavToggle = forwardRef<
  HTMLButtonElement,
  MobileNavToggleProps
>((props, ref) => {
  const { isOpen, setOpen } = useMobileNavToggle();

  const { className, ...restProps } = props;

  return (
    <button
      type="button"
      className={cn(
        "group flex h-14 items-center gap-x-2 px-4 lg:hidden",
        className
      )}
      onClick={(e) => {
        console.log("clicked");
        setOpen((prev) => !prev);
      }}
      ref={ref}
      {...restProps}
    >
      <span className="sr-only">Toggle Menu</span>
      {isOpen ? (
        <XIcon className="block w-6 text-gray-300" />
      ) : (
        <MenuAlt2Icon className="block w-6 text-gray-300" />
      )}
    </button>
  );
});
