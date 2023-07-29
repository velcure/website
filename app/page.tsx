import { SectionBenefits } from "./_components/section-benefits";
import { TeaserHero } from "./_components/teaser-hero";

export default function Page() {
  return (
    <>
      <TeaserHero />
      <section className="relative px-8 pt-24 md:pt-44">
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
      <SectionBenefits />
    </>
  );
}
