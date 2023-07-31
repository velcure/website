import { PageIntro } from "#/ui/PageIntro";

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
    <section className="relative">
      <PageIntro
        eyebrow="Optimize Your Operations"
        title="Empowering Ambulance Services with Smarter Booking Solutions"
      >
        <p>Scale your service and streamline your schedule with Velcure.</p>
      </PageIntro>
    </section>
  );
};

export default Page;
