import { cn } from "#/lib/utils";
import { FAQ, IFAQItem } from "#/ui/faq";
import { ComponentPropsWithoutRef, forwardRef } from "react";

const faqs: IFAQItem[] = [
  {
    question: "What costs Velcure?",
    answer: (
      <>
        <p>Velcure is free for Hospitals, Doctors and Patients.</p>
        <p>
          We charge ambulance services a small fee for each booking. Depending
          on the number of bookings, we offer discounts.
        </p>
        <p>
          For more information, take a look at our{" "}
          <a
            href="#"
            className="text-default hover:text-emphasis font-semibold"
          >
            Pricing
          </a>{" "}
          page.
        </p>
      </>
    ),
  },
  {
    question: "Is there a minimum contract period?",
    answer: "No, you can cancel your subscription at any time.",
  },
  {
    question: "How does Velcure handle Privacy?",
    answer: (
      <div className="space-y-2">
        <p>
          Velcure is fully compliant with the EU General Data Protection
          Regulation (GDPR).
        </p>
        <p>
          We do not share any data with third parties. All data is stored in the
          EU.
        </p>
        <p>Our servers are ISO 27001 certified.</p>
      </div>
    ),
  },
  {
    question: "Which data is stored by Velcure?",
    answer: (
      <p>
        We store the data that is necessary to provide our services. Take a look
        at our{" "}
        <a href="#" className="text-default hover:text-emphasis font-semibold">
          Privacy Policy
        </a>{" "}
        for more information.
      </p>
    ),
  },
];

export type SectionFAQProps = ComponentPropsWithoutRef<"section">;

export const SectionFAQ = forwardRef<HTMLDivElement, SectionFAQProps>(
  (props, ref) => {
    const { className, ...restProps } = props;

    return (
      <section ref={ref} className={cn("relative", className)} {...restProps}>
        <div className="container">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-5">
              <h2 className="text-default text-2xl font-bold leading-10 tracking-tight md:text-4xl">
                Frequently asked questions
              </h2>
              <p className="mt-4 text-base leading-7 text-gray-600">
                Can&apos;t find the answer you&apos;re looking for? Reach out to
                our{" "}
                <a
                  href="#"
                  className="text-default hover:text-emphasis font-semibold"
                >
                  customer support
                </a>{" "}
                team.
              </p>
            </div>
            <div className="mt-10 lg:col-span-7 lg:mt-0">
              <FAQ items={faqs} />
            </div>
          </div>
        </div>
      </section>
    );
  }
);
