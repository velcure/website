import { Container } from "#/ui/Container";
import { BookAppointmentButton } from "#/ui/book-appointment-button";

interface CTAProps {
  headline: string;
  description?: string;
}

export const CTA = ({ headline, description }: CTAProps): JSX.Element => {
  return (
    <section className="bg-blue-200 py-24 sm:py-32">
      <Container>
        <div className="lg:flex lg:items-center lg:justify-between">
          <div>
            <h2
              className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl"
              dangerouslySetInnerHTML={{ __html: headline }}
            />
            {description && (
              <p className="text-default mx-auto mt-6 max-w-xl text-lg leading-8">
                {description}
              </p>
            )}
          </div>
          <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
            <BookAppointmentButton />
          </div>
        </div>
      </Container>
    </section>
  );
};
