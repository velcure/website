import { buttonClass } from "#/ui/button";
import { CalendarPlus } from "lucide-react";
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
      <section className="relative bg-indigo-900 py-44">
        <div className="container">
          <div className="grid grid-cols-3">
            <div>feature</div>
            <div>feature</div>
            <div>feature</div>
          </div>
        </div>
      </section>
      <section className="relative bg-white py-44">
        <div className="container">this is some awesome content...</div>
      </section>
    </>
  );
}
