"use client";
import { cn } from "#/lib/utils";
import { CircleBackground } from "#/ui/CircleBackground";
import { Container } from "#/ui/Container";
import { AnimatePresence, MotionProps, motion } from "framer-motion";
import { ArrowDown, ArrowRightIcon } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React, { forwardRef, useState } from "react";
import createBookingImage from "./create_booking.png";
import messageTimeSuggestionsImage from "./message_time_suggestion.png";
import timeSuggestionImage from "./time_suggestion.png";
import vehicleFleetImage from "./vehicle_fleet.png";

type Feature = {
  value: string;
  title: string;
  description: string | React.ReactNode;
  image?: StaticImageData;
};

const features: Feature[] = [
  {
    value: "1",
    title: "No More Phone Calls for Booking Ambulance Transports",
    description: `With Velcure, nurses can easily book ambulance transports on
                  their own schedule. Our user-friendly booking process gets the
                  job done in under 3 minutes on average. No more waiting on
                  hold! Nurses can simply enter all required information like
                  patient data, pickup and dropoff locations, vehicle type, etc
                  in our system. Real-time ETAs and vehicle locations are
                  visible thanks to GPS. This allows ambulance transports to be
                  efficiently planned without delays. Velcure saves valuable
                  time and enables smooth patient transfers.`,
    image: createBookingImage,
  },
  {
    value: "2",
    title: "Offer Alternative Times for Undesirable Trips",
    description: `We know that sometimes a trip request simply doesn't fit into
                  your schedule or routing. But refusing a booking leaves
                  medical facilities stranded. With Velcure, ambulance providers
                  can now propose alternative pickup times to better meet their
                  needs while still accommodating facilities. Our transparent
                  system allows you to view the request details and suggest
                  alternate pickup windows that work for your fleet availability
                  and routing. The medical facility can then easily accept your
                  proposal with a single click. This flexibility ensures you
                  only take on trips that fit your service while still
                  maintaining positive facility relationships and earning
                  business. Undesirable trips become desirable with the power to
                  propose alternatives.`,
    image: timeSuggestionImage,
  },
  {
    value: "3",
    title: "Streamlined Communication for Smoother Coordination",
    description: `Transporting patients requires constant coordination between
                  facilities and ambulance providers. Butcommunicating updates
                  by phone can be disruptive and lead to delays. Velcure offers
                  an integrated message center for simplified communication
                  about specific bookings. For recurring transports, facilities
                  can notify providers in advance of any schedule changes or
                  updates to patient requirements. For one-off transfers,
                  real-time updates can be exchanged if pickup times need to
                  shift or additional services are needed. Everything is
                  documented in one place, creating seamless transparency. And
                  message alerts ensure nothing falls through the cracks. With
                  easier communication capabilities, Velcure allows providers
                  and facilities to smoothly adapt to changing transport needs
                  for better patient care.`,
    image: messageTimeSuggestionsImage,
  },
  {
    value: "4",
    title: "Real-Time Tracking for Accurate ETAs and Arrival Planning",
    description: (
      <>
        <p className="mt-2">
          Lack of visibility into ambulance location and estimated arrival is a
          major cause of delays and complications in patient transfers. Velcure
          provides real-time GPS tracking of vehicles with up-to-the-minute
          ETAs.
        </p>
        <p className="mt-2">
          For medical facilities, this allows precise coordination with
          departments expecting the incoming patient. No more guessing when the
          ambulance will arrive.
        </p>
        <p className="mt-2">
          For ambulance companies, real-time tracking enables better route
          planning and customer communication. ETAs are more predictable
          resulting in less delays.
        </p>
        <p className="mt-2">
          By giving all parties transparency into the vehicle location and
          estimated arrival, Velcure creates a smooth, reliable transport
          experience. Take the guesswork out of patient transfers with real-time
          tracking.
        </p>
      </>
    ),
    image: vehicleFleetImage,
  },
];

export const SectionFeatures = forwardRef<
  HTMLDivElement,
  Omit<React.ComponentPropsWithoutRef<"div">, keyof MotionProps>
>((props, ref) => {
  const { className, ...restProps } = props;

  // active index is the first item
  const [currentIndex, setIndex] = useState(0);

  const handleNextClick = (index: number) => {
    setIndex((current) => {
      if (current === index) {
        // can go to next?
        if (current < features.length - 1) {
          return current + 1;
        }

        // check if we can go back
        if (current > 0) {
          return current - 1;
        }
      }

      return index;
    });
  };

  return (
    <>
      <section className="relative py-24">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-wrap:balance] text-3xl font-bold tracking-tight sm:text-4xl">
              Simplified Transport Management
            </h2>
            <div className="mt-6 space-y-6 text-lg  leading-8">
              <p>
                Stop struggling with fragmented booking and coordination
                workflows. Velcure consolidates all your medical transport needs
                in one user-friendly platform. Quickly request, schedule, track
                vehicles, and communicate updates. Intuitive tools and real-time
                data enable smooth collaboration across departments. With just a
                few taps, manage the entire transport lifecycle.
              </p>
              <p>
                We believe technology is the answer to the world's greatest
                challenges. Velcure empowers efficient, streamlined management
                for better patient care through sophisticated yet easy-to-use
                software solutions.
              </p>
            </div>
          </div>
          <div className="mx-auto mt-16 max-w-2xl lg:max-w-none">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div className="flex">
                <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                  <h3 className="text-default text-2xl font-semibold">
                    <Link href="/medical-facilities">
                      <span className="absolute inset-0 rounded-3xl" />
                    </Link>
                    Step Into the Future of Medical Transport
                  </h3>
                  <p className="text-default mt-4 text-base">
                    Velcure provides an innovative platform to simplify and
                    streamline your facility's transport booking and
                    coordination. Say goodbye to fragmented workflows and wasted
                    time.
                  </p>
                  <p className="text-default mt-4 text-base">
                    Our easy-to-use system empowers you to quickly book
                    transports, track vehicles in real-time, and smooth
                    collaboration across departments - all from one centralized
                    hub.
                  </p>
                  <p className="text-default mt-6 text-sm font-bold">
                    See Velcure In Action{" "}
                    <ArrowRightIcon className="ml-1 inline-block h-4 w-4" />
                  </p>
                </article>
              </div>
              <div className="flex">
                <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                  <h3 className="text-default text-2xl font-semibold">
                    <Link href="/ambulance-services">
                      <span className="absolute inset-0 rounded-3xl" />
                    </Link>
                    Smart Tech for Smarter Ambulance Services
                  </h3>
                  <p className="text-default mt-4 text-base">
                    Velcure provides a revolutionary booking platform designed
                    to meet the unique needs of ambulance providers. Streamline
                    scheduling, routing, and communication with intuitive tools
                    purpose-built for your work.
                  </p>
                  <p className="text-default mt-4 text-base">
                    Discover real-time trip management, optimized routing,
                    simplified billing and more benefits that can transform your
                    operations.
                  </p>
                  <div className="mt-6 flex items-center">
                    <span className="text-default text-sm font-bold">
                      See How Velcure Empowers You
                    </span>
                    <ArrowRightIcon className="ml-1 inline-block h-4 w-4" />
                  </div>
                </article>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <motion.section
        ref={ref}
        className={cn(
          "bg-brand-default text-brand relative py-24 will-change-transform",
          className
        )}
        {...restProps}
      >
        <Container>
          <div className="mx-auto mb-24 max-w-xl lg:mx-0 lg:max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              The Smarter Way to Book Medical Transports
            </h2>
            <div className="mt-6 max-w-xl space-y-6 text-lg leading-8">
              <p>
                Stop juggling disjointed transport booking processes. Velcure
                offers a streamlined platform purpose-built for healthcare
                facilities. Find, book, and track vehicles in real-time with
                just a few taps. Enable smooth coordination across departments.
                Bring your facility into the modern era with efficient, reliable
                medical transport booking.
              </p>
            </div>
          </div>
        </Container>
        <Container className="relative">
          <div className="grid grid-cols-12 items-center gap-8 lg:gap-16 xl:gap-24">
            <div className="relative z-10 order-last col-span-12 space-y-6 md:col-span-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={false}
                  animate={{
                    background:
                      index === currentIndex
                        ? "rgba(255,255,255,100)"
                        : "rgba(255,255,255,0.05)",
                  }}
                  transition={{
                    duration: 0.8,
                    ease: [0.04, 0.62, 0.23, 0.98],
                  }}
                  className={cn("relative rounded-2xl pb-8", {
                    "text-default": index === currentIndex,
                    "text-white": index !== currentIndex,
                  })}
                  role="button"
                  onClick={() => {
                    handleNextClick(index);
                  }}
                >
                  <div className="select-none">
                    <div className="flex w-full flex-row rounded-t-2xl px-8 pt-8">
                      <h3 className="text-lg font-semibold ">
                        {feature.title}
                      </h3>
                      <div className="ml-auto justify-end">
                        <motion.div
                          animate={{
                            rotate: index === currentIndex ? 180 : 0,
                          }}
                        >
                          <ArrowDown className="h-6 w-6" />
                        </motion.div>
                      </div>
                    </div>
                    <AnimatePresence initial={false}>
                      {index === currentIndex && (
                        <motion.div
                          initial="collapsed"
                          animate="open"
                          exit="collapsed"
                          variants={{
                            open: { opacity: 1, height: "auto" },
                            collapsed: { opacity: 0, height: 0 },
                          }}
                          transition={{
                            duration: 0.8,
                            ease: [0.04, 0.62, 0.23, 0.98],
                          }}
                          className="overflow-hidden px-8 text-base"
                        >
                          <motion.div
                            variants={{
                              collapsed: { scale: 0.8 },
                              open: { scale: 1 },
                            }}
                            transition={{ duration: 0.8 }}
                          >
                            <div className="relative flex items-center justify-center pb-8 md:hidden">
                              {/** info graphic for mobile devices */}
                              {/** Image: Nurse booking transports on a tablet */}
                              {feature.image && (
                                <div className="block overflow-hidden rounded shadow">
                                  <Image
                                    src={feature.image}
                                    alt={feature.title}
                                    className="inline-block max-w-full align-middle"
                                    sizes="100vw"
                                  />
                                </div>
                              )}
                            </div>
                            {typeof feature.description === "string" ? (
                              <p className="mt-2">{feature.description}</p>
                            ) : (
                              feature.description
                            )}
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="relative hidden md:col-span-6 md:block">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <CircleBackground
                  color="#13B5C8"
                  className="animate-spin-slower"
                />
              </div>
              <div>
                {features.map((feature, index) => {
                  if (!feature.image) return null;

                  return (
                    <motion.div
                      key={index}
                      initial={false}
                      animate={{
                        opacity: index === currentIndex ? 1 : 0,
                        scale: index === currentIndex ? 1 : 0.95,
                        display: index === currentIndex ? "block" : "none",
                      }}
                      transition={{
                        duration: 0.8,
                        ease: [0.04, 0.62, 0.23, 0.98],
                      }}
                      className="relative hidden items-center justify-center pb-8 md:flex"
                    >
                      {/** Image: Nurse booking transports on a tablet */}
                      <div className="block overflow-hidden rounded shadow">
                        <Image
                          src={feature.image}
                          alt={feature.title}
                          className="inline-block max-w-full align-middle"
                          sizes="100vw"
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
        <div className="w-screen" />
      </motion.section>
    </>
  );
});
