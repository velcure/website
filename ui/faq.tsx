"use client";
import { cn } from "#/lib/utils";
import { Disclosure, Transition } from "@headlessui/react";
import { MinusIcon, PlusIcon } from "lucide-react";
import { ComponentPropsWithoutRef, forwardRef } from "react";

export type IFAQItem = {
  question: string;
  answer: string | React.ReactNode;
};

export interface FAQProps extends ComponentPropsWithoutRef<"dl"> {
  items: IFAQItem[];
}

export const FAQ = forwardRef<HTMLDListElement, FAQProps>((props, ref) => {
  const { className, items, ...restProps } = props;

  return (
    <dl ref={ref} className={cn("mt-10 space-y-3", className)}>
      {items.map((item, index) => {
        return (
          <Disclosure
            as="div"
            key={`${index}-${item.question}`}
            className={(bag) =>
              cn("rounded-lg px-4 py-3", {
                "bg-gray-100": !bag.open,
                "bg-emerald-50": bag.open,
              })
            }
          >
            {({ open }) => (
              <>
                <dt>
                  <Disclosure.Button
                    className={cn(
                      "grid select-none items-center gap-5",
                      "flex w-full items-start justify-between text-left",
                      "text-default"
                    )}
                  >
                    <span className="text-base font-semibold leading-7">
                      {item.question}
                    </span>
                    <span className="ml-6 flex h-7 items-center">
                      {open ? (
                        <MinusIcon className="h-6 w-6" aria-hidden="true" />
                      ) : (
                        <PlusIcon className="h-6 w-6" aria-hidden="true" />
                      )}
                    </span>
                  </Disclosure.Button>
                </dt>
                <Transition
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Disclosure.Panel
                    as="dd"
                    className="text-default mt-2 pe-8 text-sm leading-5"
                  >
                    {typeof item.answer === "string" ? (
                      <p>{item.answer}</p>
                    ) : (
                      item.answer
                    )}
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
        );
      })}
    </dl>
  );
});
