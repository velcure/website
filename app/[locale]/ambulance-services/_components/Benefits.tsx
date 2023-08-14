"use client";

import { cn } from "#/lib/utils";
import { Container } from "#/ui/Container";
import { Tab } from "@headlessui/react";
import { LucideIcon, MessageSquare, Monitor, Rss } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { ComponentPropsWithoutRef } from "react";
import disponent from "../_images/disponent.jpg";

const benefits = [
  {
    name: "Simplified, Optimized Dispatching",
    summary:
      "Velcure provides an intuitive interface to streamline dispatch operations.",
    description:
      "The Velcure platform makes dispatching ambulance services efficient and organized. Our easy-to-use system allows dispatchers to quickly coordinate assignments, crew shifts, and fleet routing. Optimized at-a-glance overviews of all trips simplify coordination and planning. With Velcure, seamlessly manage dispatch workflows with less manual effort.",
    image: disponent,
    icon: Monitor,
  },
  {
    name: "Increased Visibility for Customer Acquisition",
    summary:
      "Join the Velcure network to boost visibility and attract new customers.",
    description:
      "Participating in the Velcure provider network expands your ambulance service's visibility to a wide range of healthcare facilities and patient demographics. Our platform makes it easy for prospective customers to find, vet, and connect with EMS providers that suit their needs, enabling organic new customer acquisition. Tap into new client opportunities by partnering with Velcure.",
    image: disponent,
    icon: Rss,
  },
  {
    name: "Enhanced Coordination for Streamlined Operations",
    summary: "Coordinate across stakeholders for smooth patient care journeys.",
    description:
      "Patient transfers require coordination between multiple parties - EMS providers, care facilities, nurses, physicians, and family members. Velcure centralizes communication channels to enable seamless collaboration. Message healthcare partners, share transport details, and keep everyone aligned. With enhanced coordination capabilities, Velcure creates integrated workflows for flawless end-to-end patient care.",
    image: disponent,
    icon: MessageSquare,
  },
];

type IBenefit = {
  name: string | React.ReactNode;
  summary: string;
  description: string;
  image: StaticImageData;
  icon: LucideIcon;
};

interface BenefitProps extends ComponentPropsWithoutRef<"article"> {
  benefit: IBenefit;
  isActive?: boolean;
}

export const Benefit: React.FC<BenefitProps> = (props) => {
  const { benefit, isActive, className, ...restProps } = props;

  return (
    <article
      className={cn(
        "relative flex w-full flex-col rounded-3xl",
        "p-6 ring-1 ring-neutral-950/5 transition",
        className,
        !isActive && "hover:bg-neutral-50"
      )}
      {...restProps}
    >
      {benefit.icon && (
        <div
          className={cn(
            "flex h-9 w-9 items-center justify-center rounded-lg text-white",
            isActive ? "bg-blue-800" : "bg-brand-default"
          )}
        >
          {<benefit.icon className="h-6 w-6" />}
        </div>
      )}
      <h3
        className={cn(
          "mt-6 text-sm font-medium",
          isActive ? "text-blue-800" : "text-default"
        )}
      >
        {benefit.name}
      </h3>
      <p className="text-default mt-2 font-sans text-xl">{benefit.summary}</p>
      <p className="text-default mt-4 text-sm">{benefit.description}</p>
    </article>
  );
};

export const Benefits = () => {
  return (
    <section className="relative py-24">
      <Container>
        <div>{/** images on mobile devices. */}</div>
        <Tab.Group as="div" className="hidden lg:mt-20 lg:block">
          {({ selectedIndex }) => (
            <>
              <Tab.List className="grid grid-cols-3 gap-x-8">
                {benefits.map((benefit, index) => (
                  <Benefit
                    key={index}
                    benefit={{
                      ...benefit,
                      name: (
                        <Tab className="[&:not(:focus-visible)]:focus:outline-none">
                          <span className="absolute inset-0" />
                          {benefit.name}
                        </Tab>
                      ),
                    }}
                    isActive={index === selectedIndex}
                  />
                ))}
              </Tab.List>
              <Tab.Panels className="rounded-4xl bg-brand-default relative mt-20 overflow-hidden rounded-3xl px-14 py-16 xl:px-16">
                <div className="-mx-5 flex">
                  {benefits.map((benefit, index) => (
                    <Tab.Panel
                      static
                      key={benefit.name}
                      className={cn(
                        "px-5 transition duration-500 ease-in-out [&:not(:focus-visible)]:focus:outline-none",
                        index !== selectedIndex && "opacity-60"
                      )}
                      style={{
                        transform: `translateX(-${selectedIndex * 100}%)`,
                      }}
                      aria-hidden={index !== selectedIndex}
                    >
                      <div className="w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
                        <Image
                          className="w-full"
                          src={benefit.image}
                          alt=""
                          sizes="52.75rem"
                        />
                      </div>
                    </Tab.Panel>
                  ))}
                </div>
                <div className="rounded-4xl pointer-events-none absolute inset-0 ring-1 ring-inset ring-slate-900/10" />
              </Tab.Panels>
            </>
          )}
        </Tab.Group>
      </Container>
    </section>
  );
};
