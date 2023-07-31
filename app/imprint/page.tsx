import { PageIntro } from "#/ui/PageIntro";

export const metadata = {
  title: "Imprint",
  description: "",
  keywords: [],
};

const Page = () => {
  return (
    <section className="relative">
      <PageIntro eyebrow="Imprint" title="Imprint">
        <p>
          Contact details and legal information about the company operating
          Velcure.
        </p>{" "}
      </PageIntro>
    </section>
  );
};

export default Page;
