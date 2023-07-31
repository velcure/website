import { cn } from "#/lib/utils";
import { Container } from "#/ui/Container";
import { FadeInWhenVisible } from "#/ui/FadeInWhenVisible";
import { BookAppointmentButton } from "#/ui/book-appointment-button";
import Image from "next/image";
import React from "react";
import maleNurse from "../../public/male_nurse.png";
//import ktwImage from "./ktw.png";

export const TeaserHero: React.FC = () => {
  return (
    <section className="relative mt-[-3.5rem] pt-24 md:mt-[-6rem] md:pt-44">
      <Container className="container relative z-10 mt-24 sm:mt-32">
        <div className="grid auto-cols-fr grid-cols-1 gap-4 md:grid-cols-2">
          <FadeInWhenVisible>
            <div className="flex flex-col items-start justify-center pb-8 md:pb-24">
              <h1>
                <span className="font-display block text-base font-semibold text-neutral-950">
                  The Future of Medical Transport Booking
                </span>
                <span className="sr-only"> - </span>
                <span
                  className={cn(
                    "mt-6 block max-w-5xl font-sans text-5xl font-bold tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl"
                  )}
                >
                  Book Medical Transports Seamlessly
                </span>
              </h1>
              <div
                className={cn(
                  "mt-6 max-w-3xl text-xl tracking-tight text-neutral-600"
                )}
              >
                <p className="mb-8">
                  Velcure revolutionizes medical transport booking for
                  healthcare facilities. Our user-friendly platform empowers you
                  to conveniently find and book the right ambulance for patient
                  transfers.
                </p>
                <BookAppointmentButton />
              </div>
            </div>
          </FadeInWhenVisible>
          <div className="relative flex  items-center self-end md:h-auto">
            <Image
              className="inline-block max-w-full align-middle [transform:scaleX(-1)]"
              src={maleNurse}
              alt="Male nurse"
              sizes="100vw"
            />
          </div>
        </div>
      </Container>
      {/* <div className="absolute bottom-0 left-0 right-0 top-auto h-[20%] w-full bg-emerald-200 bg-opacity-25 sm:w-[40%] md:left-auto md:top-0 md:h-full"></div> */}
      {/** gradient white with opacity to white, from bottom to 20% from bottom */}
      <div className="absolute bottom-0 left-0 right-0 top-auto z-10 h-[10%] w-full bg-gradient-to-t from-white from-20% via-white/50 via-50% to-transparent "></div>
    </section>
  );
};
