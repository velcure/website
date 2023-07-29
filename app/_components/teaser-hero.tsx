import { BookAppointmentButton } from "#/ui/book-appointment-button";
import Image from "next/image";
import React from "react";
import maleNurse from "../../public/male_nurse.png";

export const TeaserHero: React.FC = () => {
  return (
    <section className="relative mt-[-3.5rem] bg-white pt-24 md:mt-[-6rem] md:pt-44">
      <div className="container relative z-10">
        <div className="grid auto-cols-fr grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex flex-col items-start justify-center pb-8 md:pb-24">
            <div className="mb-2 font-semibold uppercase">
              IMPRESSIVE TEASER
            </div>
            <h1 className="mb-4 text-3xl font-bold tracking-tighter md:text-6xl">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr
            </h1>
            <p className="mb-8 text-lg tracking-tight">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>
            <BookAppointmentButton />
          </div>
          <div className="relative flex  items-center self-end md:h-auto">
            <Image
              className="inline-block max-w-full align-middle"
              src={maleNurse}
              alt="Male nurse"
              sizes="100vw"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 top-auto h-[20%] w-full bg-emerald-200 sm:w-[40%] md:left-auto md:top-0 md:h-full"></div>
    </section>
  );
};
