import { BookAppointmentButton } from "#/ui/book-appointment-button";

import { Container } from "#/ui/Container";
import { PageIntro } from "#/ui/PageIntro";
import Image from "next/image";
import heliosKlinikumSalzgitter from "./helios_klinikum_salzgitter.jpg";

export const metadata = {
  title: "Simplified Transport for Healthcare Facilities",
  description:
    "Velcure offers healthcare facilities an intuitive platform to streamline booking and simplify coordination for medical transports.",
  keywords: [
    "hospital transport management",
    "patient transfer booking",
    "medical transport coordination",
    "healthcare logistics software",
    "clinical ambulance booking",
  ],
};

const Page = () => {
  return (
    <>
      <section className="relative mt-[-5.5rem] bg-teal-50 py-24 md:mt-[-6rem] md:py-44">
        <PageIntro
          eyebrow="Maximize Your Team's Efficiency"
          title="Empowering Healthcare Facilities with Efficient Medical Transport
              Solutions"
        >
          <p>Spend less time coordinating and more time caring with Velcure.</p>
        </PageIntro>
      </section>
      <Image
        className="inline-block h-96 max-w-full object-cover object-center align-middle"
        alt="Helios Klinikum Salzgitter"
        src={heliosKlinikumSalzgitter}
        sizes="100vw"
      />
      <section className="relative px-8 py-12">
        <Container>
          <div className="mx-auto max-w-2xl lg:text-center">
            <div className="mb-2 font-bold uppercase text-emerald-500">
              USER STORY
            </div>
            <h3 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Meet Thomas, a Hospital Administrator
            </h3>
            <p className="text-default mt-6 text-lg leading-8">
              Thomas manages a bustling city hospital. His days are filled with
              managing staff, coordinating patient care, and ensuring the smooth
              operation of the hospital. But one of his biggest challenges?
              Arranging medical transports for patients.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="text-default text-base font-semibold leading-7">
                  The Challenge of Medical Transport
                </dt>
                <dd className="text-default mt-1 flex flex-auto flex-col text-base leading-7">
                  <p className="flex-auto">
                    Arranging transport was a time-consuming task that often
                    took his nursing staff away from their primary duty -
                    patient care. The process was stressful, inefficient, and
                    left little time for their primary responsibilities.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="text-default text-base font-semibold leading-7">
                  Discovering Velcure
                </dt>
                <dd className="text-default mt-1 flex flex-auto flex-col text-base leading-7">
                  <p className="flex-auto">
                    Then Thomas found Velcure. With our streamlined medical
                    transport platform, Thomas drastically reduced the time his
                    team spent coordinating patient transports. The easy-to-use
                    platform allowed them to book recurring or single trips
                    quickly, without the need to sift through phone lists or
                    deal with complicated scheduling.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="text-default text-base font-semibold leading-7">
                  Transforming Hospital Operations
                </dt>
                <dd className="text-default mt-1 flex flex-auto flex-col text-base leading-7">
                  <p className="flex-auto">
                    The impact on his team was immediate. Nurses were less
                    stressed, more focused on their patients, and less likely to
                    experience burnout. Bed turnover increased, allowing the
                    hospital to serve more patients efficiently.
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </Container>
      </section>
      <section className="relative  px-8 py-12">
        <div className="container">
          <div className="bg-brand-default relative isolate overflow-hidden px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
            <h2 className="text-brand mx-auto max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
              Experience the Velcure Difference
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Velcure has not only transformed the way Thomas's hospital handles
              medical transport but also improved the overall work environment
              for his team. It's given them back the time they need to do what
              they do best - care for their patients. Experience the Velcure
              difference today and give your team the gift of time and peace of
              mind.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <BookAppointmentButton />
            </div>
          </div>
        </div>
      </section>
      <section className="relative px-8 py-12">
        <div className="container">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
            <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
              <h2 className="text-default text-3xl font-bold tracking-tight sm:text-4xl">
                Velcure
              </h2>
              <p className="text-default mt-6 text-xl leading-8">
                Our Booking App makes it easy to book and manage medical
                transports. You can book recurring and single trips, track the
                status of your bookings, and contact our drivers through the
                Messaging Center.
              </p>
              <p className="text-default mt-6 text-base leading-7">
                The Messaging Center is a safe and secure way for nurses to
                communicate with our drivers. You can ask questions, give
                instructions, and receive status updates.
              </p>
              <p className="text-default mt-6 text-base leading-7">
                Our Booking App is a valuable tool for medical facilities that
                saves you time and hassle. Book your first medical transport
                with our app today!
              </p>
              <div className="mt-10 flex">
                <BookAppointmentButton />
              </div>
            </div>
            <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
              <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                <img
                  src="https://images.unsplash.com/photo-1670272502246-768d249768ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&q=80"
                  alt=""
                  className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                  <img
                    src="https://images.unsplash.com/photo-1605656816944-971cd5c1407f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80"
                    alt=""
                    className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                  />
                </div>
                <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                  <img
                    src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&h=842&q=80"
                    alt=""
                    className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                  />
                </div>
                <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                  <img
                    src="https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80"
                    alt=""
                    className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
