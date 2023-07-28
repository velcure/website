import { buttonClass } from "#/ui/button";
import { BusIcon, CalendarPlus, ClockIcon, PhoneOff } from "lucide-react";
import Image from "next/image";
import maleNurse from "../public/male_nurse.png";

export default function Page() {
  return (
    <>
      <section className="relative mt-[-3.5rem] bg-white pt-44 md:mt-[-6rem]">
        <div className="container relative z-10">
          <div className="grid auto-cols-fr grid-cols-2 gap-4">
            <div className="flex flex-col items-start justify-center pb-24">
              <div className="mb-2 font-semibold uppercase">
                IMPRESSIVE TEASER
              </div>
              <h1 className="mb-4 text-6xl font-bold tracking-tighter">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr
              </h1>
              <p className="mb-8 text-lg tracking-tight">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </p>
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
            <div className="relative flex items-center self-end">
              <Image
                className="inline-block max-w-full align-middle"
                src={maleNurse}
                alt="Male nurse"
                sizes="100vw"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-auto right-0 top-0 h-full w-[40%] bg-emerald-200"></div>
      </section>
      <section className="relative pt-44">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-default text-3xl font-bold tracking-tight sm:text-4xl">
            Save time and money <br /> with our services
          </h2>
          <p className="text-default mx-auto mt-6 max-w-xl text-lg leading-8">
            Incididunt sint fugiat pariatur cupidatat consectetur sit cillum
            anim id veniam aliqua proident excepteur commodo do ea.
          </p>
        </div>
      </section>
      <section className="relative px-8 py-44">
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
        <div className="container rounded-xl bg-gray-50 px-10 pb-24 pt-[244px]">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Supercharge your ambulance bookings
              </h1>
              <div className="text-default flex flex-col gap-8 pt-10">
                <div className="relative space-y-2">
                  <h2 className="text-default duration-250 text-3xl font-semibold tracking-tighter transition-colors ease-in-out">
                    Connect with your Favorites
                  </h2>
                  <span className="text-default">
                    Choose from a list of your favorite ambulance providers and
                    book them in seconds.
                  </span>
                </div>
                <div className="relative space-y-2">
                  <h2 className="text-default duration-250 text-3xl font-semibold tracking-tighter transition-colors ease-in-out">
                    Receive real-time updates
                  </h2>
                  <span className="text-default">
                    Stay up to date with your bookings and receive real-time
                    updates on your ambulance.
                  </span>
                </div>
                <div className="relative space-y-2">
                  <h2 className="text-default duration-250 text-3xl font-semibold tracking-tighter transition-colors ease-in-out">
                    Message Center
                  </h2>
                  <span className="text-default">
                    Utilize our message center to communicate with your
                    ambulance provider. Eliminate the need to call them.
                  </span>
                </div>
              </div>
            </div>
            <div>banner</div>
          </div>
        </div>
      </section>
    </>
  );
}
