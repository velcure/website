import { cn } from "#/lib/utils";
import { Container } from "#/ui/Container";
import { Spotlight } from "#/ui/Spotlight";
import { StaticImageData } from "next/image";
import { ComponentPropsWithoutRef, forwardRef } from "react";

export interface FeatureSectionProps
  extends ComponentPropsWithoutRef<"section"> {
  headline: string;
  image: string | StaticImageData;
  imageAlt: string;
  features: Array<{
    title?: string;
    description: string;
  }>;
  /**
   * Aligns the image to the right instead of the left.
   */
  reverse?: boolean;
}

export const FeatureSection = forwardRef<HTMLDivElement, FeatureSectionProps>(
  (props, ref) => {
    const { className, headline, features, image, imageAlt, reverse, ...rest } =
      props;

    return (
      <section
        ref={ref}
        className={cn("relative overflow-hidden py-24 sm:py-32", className)}
        {...rest}
      >
        <Container>
          <div
            className={cn([
              "mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16",
              "sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2",
            ])}
          >
            <div
              className={cn(
                reverse ? "lg:pr-8 lg:pt-4" : "lg:ml-auto lg:pl-4 lg:pt-4"
              )}
            >
              <div className="lg:max-w-lg">
                <h3 className="text-default text-3xl font-bold tracking-tight sm:text-4xl">
                  {headline}
                </h3>
                <div className="mt-10 flex max-w-xl flex-col gap-8 text-base leading-7 text-neutral-600 lg:max-w-none">
                  {features.map((feature, index) => (
                    <div className="relative">
                      {feature.title && (
                        <p className="inline font-semibold text-neutral-900">
                          {feature.title}
                        </p>
                      )}
                      <p key={index}>{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <Spotlight
              className={cn([
                "w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-neutral-400/10",
                "sm:w-[57rem]",
                reverse ? "md:-ml-4 lg:-ml-0" : "md:-mr-4 lg:-mr-0",
              ])}
              src={image}
              alt={imageAlt}
              sizes="100vw"
              containerProps={{
                className: reverse
                  ? "flex items-center"
                  : "flex items-center justify-center lg:order-first",
              }}
            />
          </div>
        </Container>
      </section>
    );
  }
);
