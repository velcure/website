import { cn } from "#/lib/utils";
import { Container } from "#/ui/Container";
import { Eyebrow } from "#/ui/Eyebrow";
import { FadeInWhenVisible } from "#/ui/FadeInWhenVisible";
import { Spotlight } from "#/ui/Spotlight";
import { BookAppointmentButton } from "#/ui/book-appointment-button";
import {
  Building2,
  CalendarClock,
  CalendarDays,
  CalendarPlus,
  CalendarSearch,
  PieChart,
} from "lucide-react";
import { FaHandHoldingMedical, FaHospital } from "react-icons/fa";
import { TbAmbulance, TbBuildingEstate } from "react-icons/tb";
import { SectionFAQ } from "./_components/section-faq";
import bookingListImage from "./_images/booking_list.png";
import createPatientImage from "./_images/create_patient.png";
import marketplaceImage from "./_images/marketplace.png";
import recurringImage from "./_images/recurring.png";

export default function Page() {
  return (
    <>
      <section className="relative mt-[-3.5rem] bg-blue-50 pt-24 md:mt-[-6rem] md:pt-44">
        <Container className="relative mt-24 sm:mt-32">
          <div className="grid auto-cols-fr grid-cols-1 gap-8 md:grid-cols-2">
            <FadeInWhenVisible>
              <div className="flex flex-col items-start justify-center pb-8 md:pb-24">
                <h1>
                  <Eyebrow>The Future of Medical Transport Booking</Eyebrow>
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
                    healthcare facilities. Our user-friendly platform empowers
                    you to conveniently find and book the right ambulance for
                    patient transfers.
                  </p>
                  <BookAppointmentButton />
                </div>
              </div>
            </FadeInWhenVisible>
            <div className="relative flex items-center py-8 md:h-auto md:py-24">
              <Spotlight
                className="inline-block max-w-full align-middle"
                containerProps={{
                  className: "relative shadow-xl rounded-xl overflow-hidden",
                }}
                src={bookingListImage}
                alt="Male nurse"
                sizes="100vw"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="text-default relative bg-blue-50 py-24 sm:py-32">
        <Container>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="flex flex-col items-center text-center">
              <div>
                <FaHospital className="mb-4 h-9 w-9" />
              </div>
              <h5 className="text-base font-semibold">
                For Hospitals &amp; Clinics
              </h5>
            </div>
            <div className="flex flex-col items-center text-center">
              <FaHandHoldingMedical className="mb-4 h-9 w-9" />
              <h5 className="text-base font-semibold">
                For Doctors & Practices
              </h5>
            </div>
            <div className="flex flex-col items-center text-center">
              <TbBuildingEstate className="mb-4 h-9 w-9" />
              <h5 className="text-base font-semibold">For Nursing Homes</h5>
            </div>
            <div className="flex flex-col items-center text-center">
              <TbAmbulance className="mb-4 h-9 w-9" />
              <h5 className="text-base font-semibold">
                For Ambulance Services
              </h5>
            </div>
          </div>
        </Container>
      </section>

      <section className="relative py-24 sm:py-32">
        <Container>
          <div className="mx-auto max-w-2xl sm:text-center">
            <Eyebrow>Expand Your Coverage</Eyebrow>
            <h2 className="text-default mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Connect With Qualified Providers
            </h2>
            <p className="mt-6 text-lg leading-8 text-neutral-600">
              The Velcure Marketplace allows medical facilities to access an
              extensive network of accredited ambulance providers. Easily submit
              transport requests and get matched with qualified partner services
              in your area for fulfillment.
            </p>
            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Verified, integrated providers ensure the highest standards of
              safety and quality. Real-time visibility and centralized
              coordination enables a smooth hand-off for each trip.
            </p>
            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Expand your service reach through trusted, reliable providers on
              the Velcure Marketplace. We facilitate the connections so you can
              focus on patient care.
            </p>
          </div>
        </Container>
        <div className="relative overflow-hidden pt-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Spotlight
              src={marketplaceImage}
              alt="Velcure Marketplace"
              className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-neutral-900/10"
              sizes="100vw"
            />
            <div className="relative" aria-hidden="true">
              <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-24 sm:py-32">
        <Container>
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:ml-auto lg:pl-4 lg:pt-4">
              <div className="lg:max-w-lg">
                <p className="text-default text-3xl font-bold tracking-tight sm:text-4xl">
                  Recurring Bookings
                </p>
                <p className="mt-6 text-lg leading-8 text-neutral-600">
                  Velcure makes setting up recurring ambulance transports
                  simple. Our series booking feature allows you to schedule
                  regular trips like dialysis or chemotherapy in just a few
                  clicks.
                </p>
                <p className="mt-6 text-lg leading-8 text-neutral-600">
                  Velcure automatically generates all associated tours based on
                  your specifications. No need for repetitive manual entry.
                </p>
                <p className="mt-6 text-lg leading-8 text-neutral-600">
                  The dashboard provides an overview of upcoming recurring
                  trips. Easily modify, reschedule or cancel individual bookings
                  as needed. Changes sync across the series.
                </p>
                <p className="mt-6 text-lg leading-8 text-neutral-600">
                  With Velcure's series booking tool, regular ambulance
                  transports can be scheduled quickly without contacting
                  providers separately each time. The automated feature
                  simplifies recurring transport management.
                </p>
              </div>
            </div>
            <Spotlight
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-neutral-400/10 sm:w-[57rem] md:-mr-4 lg:-mr-0"
              src={recurringImage}
              alt="Create Patient Dialog"
              sizes="100vw"
              containerProps={{
                className: "flex items-center justify-center lg:order-first",
              }}
            />
          </div>
        </Container>
      </section>
      <section className="relative overflow-hidden py-24 sm:py-32">
        <Container>
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <p className="text-default text-3xl font-bold tracking-tight sm:text-4xl">
                  Managing Patients
                </p>
                <div className="mt-10 max-w-xl space-y-8 text-base leading-7 text-neutral-600 lg:max-w-none">
                  <div className="relative">
                    <dt className="inline font-semibold text-neutral-900">
                      Simplify Patient Profiles
                    </dt>
                    <dd>
                      Velcure allows you to easily create, manage, and reuse
                      patient profiles for streamlined transport booking. Key
                      demographic and medical data can be imported from your
                      hospital IT system via API integration. Profiles are saved
                      for future access, eliminating redundant data entry.
                    </dd>
                  </div>
                  <div className="relative">
                    <dt className="inline font-semibold text-neutral-900">
                      Seamless System Integration
                    </dt>
                    <dd>
                      Connect Velcure to your existing hospital IT
                      infrastructure to enable quick importing of patient
                      information into transport profiles. Robust APIs and
                      connections allow patient data to flow seamlessly between
                      systems. This saves time and ensures accurate up-to-date
                      records.
                    </dd>
                  </div>
                  <div className="relative">
                    <dt className="inline font-semibold text-neutral-900">
                      Secure Access and Controls
                    </dt>
                    <dd>
                      Patient profiles and data are protected by granular access
                      permissions. Usage activity and changes are logged for
                      auditing.
                    </dd>
                  </div>
                </div>
              </div>
            </div>
            <Spotlight
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-neutral-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
              src={createPatientImage}
              alt="Create Patient Dialog"
              sizes="100vw"
            />
          </div>
        </Container>
      </section>
      <section className="bg-blue-200 py-24 sm:py-32">
        <Container>
          <div className="lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Want to learn more?
              <br />
              Let's discuss integrating Velcure!
            </h2>
            <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
              <BookAppointmentButton />
            </div>
          </div>
        </Container>
      </section>
      <section className="py-24 sm:py-32">
        <Container>
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Streamlined Features for Efficient Processes
            </h2>
            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Velcure provides medical facilities with important functions to
              optimize workflows around medical transports.
            </p>
          </div>
          <div className="mt-16  sm:mt-20 md:mt-24">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-neutral-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
              <div className="relative pl-9">
                <div className="inline font-semibold text-neutral-900">
                  <CalendarPlus className="absolute left-1 top-1 h-5 w-5 text-blue-600" />
                  Simple Booking.{" "}
                </div>
                <div className="inline">
                  Quickly and easily book ambulance transports online without
                  manual effort.
                </div>
              </div>
              <div className="relative pl-9">
                <div className="inline font-semibold text-neutral-900">
                  <CalendarSearch className="absolute left-1 top-1 h-5 w-5 text-blue-600" />
                  Customizable Bookings.{" "}
                </div>
                <div className="inline">
                  Flexibly reschedule or cancel individual trips within a series
                  as needed.
                </div>
              </div>
              <div className="relative pl-9">
                <div className="inline font-semibold text-neutral-900">
                  <CalendarDays className="absolute left-1 top-1 h-5 w-5 text-blue-600" />
                  Recurring Bookings.{" "}
                </div>
                <div className="inline">
                  Set up regular trips like dialysis as recurring booking
                  series.
                </div>
              </div>
              <div className="relative pl-9">
                <div className="inline font-semibold text-neutral-900">
                  <CalendarClock className="absolute left-1 top-1 h-5 w-5 text-blue-600" />
                  Proposed Timeslots.{" "}
                </div>
                <div className="inline">
                  Suggest suitable alternative timeslots if requested by the
                  provider.
                </div>
              </div>
              <div className="relative pl-9">
                <div className="inline font-semibold text-neutral-900">
                  <Building2 className="absolute left-1 top-1 h-5 w-5 text-blue-600" />
                  Incoming Trips.{" "}
                </div>
                <div className="inline">
                  View and manage all incoming transport requests in one place.
                </div>
              </div>
              <div className="relative pl-9">
                <div className="inline font-semibold text-neutral-900">
                  <PieChart className="absolute left-1 top-1 h-5 w-5 text-blue-600" />
                  Automated Updates.{" "}
                </div>
                <div className="inline">
                  Automatically notify relevant parties about status changes
                  like delays.
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="relative bg-blue-200 py-24 sm:py-32">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-default text-3xl font-bold tracking-tight sm:text-4xl">
              Tailored to Your Needs
            </h2>
            <p className="text-default mx-auto mt-6 max-w-xl text-lg leading-8">
              Velcure can be customized to your specific requirements. Missing
              an integration? Need company-specific adjustments? Our development
              team is happy to assist with realizing customization requests.
            </p>
            <BookAppointmentButton className="mt-10" />
          </div>
        </Container>
      </section>
      {/* <SectionFeatures /> */}

      {/* <SectionBenefits /> */}
      <SectionFAQ className="py-24 md:pb-44" />
    </>
  );
}
