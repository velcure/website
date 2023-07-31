import { PageIntro } from "#/ui/PageIntro";

export const metadata = {
  title: "Imprint",
  description: "",
  keywords: [],
};

const Page = () => {
  return (
    <section className="relative">
      <PageIntro eyebrow="Legal" title="Legal Information">
        <p>
          Review the terms and conditions governing use of the Velcure platform.
        </p>{" "}
      </PageIntro>
    </section>
  );
};

export default Page;
