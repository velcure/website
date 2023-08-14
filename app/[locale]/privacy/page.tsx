import { PageIntro } from "#/ui/PageIntro";

export const metadata = {
  title: "Imprint",
  description: "",
  keywords: [],
};

const Page = () => {
  return (
    <section className="relative mt-[-5.5rem] py-24 md:mt-[-6rem] md:py-44">
      <PageIntro eyebrow="Privacy" title="Privacy Policy">
        <p>
          Learn how Velcure collects, uses, and protects user data and
          information.
        </p>{" "}
      </PageIntro>
    </section>
  );
};

export default Page;
