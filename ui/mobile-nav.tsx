"use client";

import { navConfig } from "#/config/nav";
import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { useMobileNavToggle } from "./mobile-nav-toggle";

export const MobileNav: React.FC = () => {
  const { isOpen, setOpen } = useMobileNavToggle();

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => setOpen(false)}>
        <div className="fixed bottom-0 left-0 right-0 top-[3.5rem] md:top-[6rem]" />
        <div className="md:top-[6rem]overflow-hidden fixed bottom-0 left-0 right-0 top-[3.5rem]">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed bottom-0 left-0 right-0 top-[3.5rem] flex max-w-full  md:top-[6rem]">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="-translate-y-full"
                enterTo="translate-y-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-y-0"
                leaveTo="-translate-y-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                      <ul role="tree" className="m-0 block list-none p-0">
                        {navConfig.mainNav.map((item) => (
                          <li
                            key={item.title}
                            role="treeitem"
                            className="m-0 p-0"
                          >
                            {item.title}
                          </li>
                        ))}
                      </ul>
                      {/* Your content */}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
