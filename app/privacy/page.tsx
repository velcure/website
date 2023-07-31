import { PageIntro } from "#/ui/PageIntro";

export const metadata = {
  title: "Imprint",
  description: "",
  keywords: [],
};

const Page = () => {
  return (
    <section className="relative">
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
