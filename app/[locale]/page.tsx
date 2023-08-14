import { CTA } from "#/components/sections/CTA";
import { FeatureSection } from "#/components/sections/Feature";
import { FeatureGrid } from "#/components/sections/FeatureGrid";
import type { Locale } from "#/i18n-config";
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
import { getTranslator } from "next-intl/server";
import { FaHandHoldingMedical, FaHospital } from "react-icons/fa";
import { TbAmbulance, TbBuildingEstate } from "react-icons/tb";
import { SectionFAQ } from "./_components/section-faq";
import bookingListImage from "./_images/booking_list.png";
import createPatientImage from "./_images/create_patient.png";
import marketplaceImage from "./_images/marketplace.png";
import recurringImage from "./_images/recurring.png";

export default async function Page({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const t = await getTranslator(locale, "Index");

  return (
    <>
      <section className="relative mt-[-5.5rem] bg-blue-50 pt-24 md:mt-[-6rem] md:pt-44">
        <Container className="relative mt-24 sm:mt-32">
          <div className="grid auto-cols-fr grid-cols-1 gap-8 md:grid-cols-2">
            <FadeInWhenVisible>
              <div className="flex flex-col items-start justify-center pb-8 md:pb-24">
                <h1>
                  <Eyebrow>{t("hero.eyebrow")}</Eyebrow>
                  <span className="sr-only"> - </span>
                  <span
                    className={cn(
                      "mt-6 block max-w-5xl font-sans text-5xl font-bold tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl"
                    )}
                  >
                    {t("hero.heading")}
                  </span>
                </h1>
                <div
                  className={cn(
                    "mt-6 max-w-3xl text-xl tracking-tight text-neutral-600"
                  )}
                >
                  <p className="mb-8">{t("hero.description")}</p>
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
                {t("target_groups.hospitals")}
              </h5>
            </div>
            <div className="flex flex-col items-center text-center">
              <FaHandHoldingMedical className="mb-4 h-9 w-9" />
              <h5 className="text-base font-semibold">
                {t("target_groups.doctors")}
              </h5>
            </div>
            <div className="flex flex-col items-center text-center">
              <TbBuildingEstate className="mb-4 h-9 w-9" />
              <h5 className="text-base font-semibold">
                {t("target_groups.nursing_homes")}
              </h5>
            </div>
            <div className="flex flex-col items-center text-center">
              <TbAmbulance className="mb-4 h-9 w-9" />
              <h5 className="text-base font-semibold">
                {t("target_groups.ambulance_providers")}
              </h5>
            </div>
          </div>
        </Container>
      </section>

      <section className="relative py-24 sm:py-32">
        <Container>
          <div className="mx-auto max-w-2xl sm:text-center">
            <Eyebrow>{t("section_market.eyebrow")}</Eyebrow>
            <h2 className="text-default mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              {t("section_market.heading")}
            </h2>
            <p className="mt-6 text-lg leading-8 text-neutral-600">
              {t("section_market.description1")}
            </p>
            <p className="mt-6 text-lg leading-8 text-neutral-600">
              {t("section_market.description2")}
            </p>
            <p className="mt-6 text-lg leading-8 text-neutral-600">
              {t("section_market.description3")}
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
      <FeatureSection
        headline={t("recurring_bookings.headline")}
        image={recurringImage}
        imageAlt="Velcures Recurring Ambulance Bookings"
        features={[
          {
            description: t("recurring_bookings.description1"),
          },
          {
            description: t("recurring_bookings.description2"),
          },
          {
            description: t("recurring_bookings.description3"),
          },
          {
            description: t("recurring_bookings.description4"),
          },
        ]}
      />
      <FeatureSection
        headline={t("managing_patients.headline")}
        image={createPatientImage}
        imageAlt="Velcure Create Patient Dialog"
        features={[
          {
            title: t("managing_patients.features.one.title"),
            description: t("managing_patients.features.one.description"),
          },
          {
            title: t("managing_patients.features.two.title"),
            description: t("managing_patients.features.two.description"),
          },
          {
            title: t("managing_patients.features.three.title"),
            description: t("managing_patients.features.three.description"),
          },
        ]}
        reverse
      />

      <CTA headline={t("CTA.headline")} />
      <FeatureGrid
        className="py-24 sm:py-32"
        headline={t("featureGrid.headline")}
        description={t("featureGrid.description")}
        features={[
          {
            title: t("featureGrid.features.1.title"),
            description: t("featureGrid.features.1.description"),
            icon: CalendarPlus,
          },
          {
            title: t("featureGrid.features.2.title"),
            description: t("featureGrid.features.2.description"),
            icon: CalendarSearch,
          },
          {
            title: t("featureGrid.features.3.title"),
            description: t("featureGrid.features.3.description"),
            icon: CalendarDays,
          },
          {
            title: t("featureGrid.features.4.title"),
            description: t("featureGrid.features.4.description"),
            icon: CalendarClock,
          },
          {
            title: t("featureGrid.features.5.title"),
            description: t("featureGrid.features.5.description"),
            icon: Building2,
          },
          {
            title: t("featureGrid.features.6.title"),
            description: t("featureGrid.features.6.description"),
            icon: PieChart,
          },
        ]}
      />

      <CTA
        headline={t("cta-customizing.headline")}
        description={t("cta-customizing.description")}
      />

      <SectionFAQ className="py-24 md:pb-44" />
    </>
  );
}
