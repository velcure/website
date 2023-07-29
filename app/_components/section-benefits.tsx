import { buttonClass } from "#/ui/button";
import { BusIcon, CalendarPlus, ClockIcon, PhoneOff } from "lucide-react";
import Image from "next/image";
import React from "react";
import bookingStepAddress from "../../public/booking_step_address.png";

export const SectionBenefits: React.FC = () => {
  return (
    <section className="relative px-8 py-24 md:py-44">
      <div className="bg-brand-default text-brand relative z-10 mx-auto mb-[-120px] grid w-full max-w-6xl grid-cols-1 gap-4 divide-y divide-white/10 rounded-xl p-10 md:grid-cols-3 md:divide-x md:divide-y-0">
        <div className="flex flex-col items-center gap-4 px-4 py-4">
          <div className="flex items-center justify-center rounded-full bg-yellow-300 px-4 py-1">
            <ClockIcon className="text-default inline-block h-6 w-6" />
          </div>
          <h6 className="text-brand text-center text-xl">
            Reduce the average time spent on ambulance bookings to 3 minutes
          </h6>
        </div>
        <div className="flex flex-col items-center gap-4 px-4 py-4">
          <div className="flex items-center justify-center rounded-full bg-blue-300 px-4 py-1">
            <BusIcon className="text-default inline-block h-6 w-6" />
          </div>
          <h6 className="text-brand text-center text-xl">
            Manage all your bookings in one place
          </h6>
        </div>
        <div className="flex flex-col items-center gap-4 px-4 py-4">
          <div className="flex items-center justify-center rounded-full bg-green-300 px-4 py-1">
            <PhoneOff className="text-default inline-block h-6 w-6" />
          </div>
          <h6 className="text-brand text-center text-xl">
            Stop waiting on the phone for hours
          </h6>
        </div>
      </div>
      <div className="container rounded-xl bg-gray-50 px-10 pb-24 pt-[140px] md:pt-[244px]">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h1 className="mt-10 text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl md:text-4xl">
              Supercharge your ambulance bookings
            </h1>
            <div className="text-default mb-12 flex flex-col gap-8 pt-10">
              <div className="relative space-y-2">
                <h2 className="text-default duration-250 text-2xl font-semibold tracking-tighter transition-colors ease-in-out md:text-3xl">
                  As simple as in 3 Steps
                </h2>
                <span className="text-default">
                  Choose your patient, destination and requirements in just 3
                  simple steps.
                </span>
              </div>
              <div className="relative space-y-2">
                <h2 className="text-default duration-250 text-2xl font-semibold tracking-tighter transition-colors ease-in-out md:text-3xl">
                  Connect with your Favorites
                </h2>
                <span className="text-default">
                  Choose from a list of your favorite ambulance providers and
                  book them in seconds.
                </span>
              </div>
              <div className="relative space-y-2">
                <h2 className="text-default duration-250 text-2xl font-semibold tracking-tighter transition-colors ease-in-out md:text-3xl">
                  Receive real-time updates
                </h2>
                <span className="text-default">
                  Stay up to date with your bookings and receive real-time
                  updates on your ambulance.
                </span>
              </div>
              <div className="relative space-y-2">
                <h2 className="text-default duration-250 text-2xl font-semibold tracking-tighter transition-colors ease-in-out md:text-3xl">
                  Message Center
                </h2>
                <span className="text-default">
                  Utilize our message center to communicate with your ambulance
                  provider. Eliminate the need to call them.
                </span>
              </div>
            </div>

            <a
              className={buttonClass({
                size: "xl",
                className: "inline-flex items-center",
              })}
            >
              <span>Book an Appointment</span>
              <CalendarPlus className="ml-2 inline-block h-4 w-4" />
            </a>
          </div>
          <div className="flex items-center justify-center">
            <div className="overflow-hidden rounded-xl shadow-2xl">
              <Image
                src={bookingStepAddress}
                className="inline-block max-w-full align-middle"
                sizes="100vw"
                alt="Booking step address"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
