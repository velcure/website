import { Container } from "#/ui/Container";

export const BenefitsIntro: React.FC = () => {
  return (
    <section className="bg-brand-default relative py-24">
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-brand text-3xl tracking-tight sm:text-4xl">
            Simplifying Everyday Operations
          </h2>
          <p className="text-brand mt-4 text-lg tracking-tight">
            Ambulance services juggle countless tasks on a daily basis. Managing
            calls, routing fleets, tracking billing, and maximizing efficiency
            is a complex balancing act. Velcure provides tools designed to
            simplify your most common workflows. Consolidate dispatching,
            scheduling, reporting, and coordination into one intuitive platform.
            Standardize processes with smart automation. Regain focus on
            operational excellence by transforming fragmented workflows into
            unified, optimized systems. Let Velcure untangle the complexities so
            you can get back to providing top-tier medical transport.
          </p>
        </div>
      </Container>
    </section>
  );
};
