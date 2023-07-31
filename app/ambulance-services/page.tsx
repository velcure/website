import { PageIntro } from "#/ui/PageIntro";

import { Benefits } from "./_components/Benefits";
import { BenefitsIntro } from "./_components/BenefitsIntro";

export const metadata = {
  title: "Smart Tech for Ambulance Services",
  description:
    "Velcure provides optimized booking solutions to help ambulance providers scale operations, improve efficiency, and deliver better service.",
  keywords: [
    "ambulance dispatch software",
    "ambulance booking platform",
    "medical transport management",
    "ambulance scheduling system",
    "ambulance route optimization",
  ],
};

const Page = () => {
  return (
    <>
      <section className="relative mt-[-3.5rem] py-24 md:mt-[-6rem] md:py-44">
        <PageIntro
          eyebrow="Optimize Your Operations"
          title="Empowering Ambulance Services with Smarter Booking Solutions"
        >
          <p>Scale your service and streamline your schedule with Velcure.</p>
        </PageIntro>
      </section>
      <BenefitsIntro />
      <Benefits />
    </>
  );
};

export default Page;
