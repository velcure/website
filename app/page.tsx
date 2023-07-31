import { SectionFAQ } from "./_components/section-faq";
import { SectionFeatures } from "./_components/section-features";
import { TeaserHero } from "./_components/teaser-hero";

export default function Page() {
  return (
    <>
      <TeaserHero />
      <SectionFeatures />

      {/* <SectionBenefits /> */}
      <SectionFAQ className="px-8 py-24 md:pb-44" />
    </>
  );
}
