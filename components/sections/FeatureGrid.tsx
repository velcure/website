import { cn } from "#/lib/utils";
import { Container } from "#/ui/Container";
import { LucideIcon } from "lucide-react";
import { ComponentPropsWithoutRef, forwardRef } from "react";

type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export interface FeatureGridProps extends ComponentPropsWithoutRef<"section"> {
  headline: string;
  description?: string;
  features: Feature[];
}

export const FeatureGrid = forwardRef<HTMLDivElement, FeatureGridProps>(
  (props, ref) => {
    const { className, headline, description, features, ...rest } = props;
    return (
      <section ref={ref} className={cn("", className)} {...rest}>
        <Container>
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              {headline}
            </h2>
            {description && (
              <p className="mt-6 text-lg leading-8 text-neutral-600">
                Velcure provides medical facilities with important functions to
                optimize workflows around medical transports.
              </p>
            )}
          </div>
          <div className="mt-16  sm:mt-20 md:mt-24">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-neutral-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
              {features.map((feature, index) => (
                <div key={index} className="relative pl-9">
                  <h6 className="inline font-semibold text-neutral-900">
                    <feature.icon className="absolute left-1 top-1 h-5 w-5 text-blue-600" />
                    {feature.title}{" "}
                  </h6>
                  <p className="inline">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    );
  }
);
