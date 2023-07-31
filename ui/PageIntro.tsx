import { cn } from "#/lib/utils";
import React from "react";
import { Container } from "./Container";
import { FadeInWhenVisible } from "./FadeInWhenVisible";

export interface PageIntroProps {
  eyebrow: string;
  title: string;
  centered?: boolean;
  children?: React.ReactNode;
}

export const PageIntro: React.FC<PageIntroProps> = (props) => {
  const { eyebrow, title, centered, children } = props;

  return (
    <Container
      className={cn("mt-24 sm:mt-32 lg:mt-40", centered && "text-center")}
    >
      <FadeInWhenVisible>
        <h1>
          <span className="font-display block text-base font-semibold text-neutral-950">
            {eyebrow}
          </span>
          <span className="sr-only"> - </span>
          <span
            className={cn(
              "mt-6 block max-w-5xl font-sans text-5xl font-bold tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl",
              centered && "mx-auto"
            )}
          >
            {title}
          </span>
        </h1>
        <div
          className={cn(
            "mt-6 max-w-3xl text-xl tracking-tight text-neutral-600",
            centered && "mx-auto"
          )}
        >
          {children}
        </div>
      </FadeInWhenVisible>
    </Container>
  );
};
