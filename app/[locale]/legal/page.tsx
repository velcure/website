import { PageIntro } from "#/ui/PageIntro";

export const metadata = {
  title: "Imprint",
  description: "",
  keywords: [],
};

const Page = () => {
  return (
    <section className="relative mt-[-5.5rem] py-24 md:mt-[-6rem] md:py-44">
      <PageIntro eyebrow="Legal" title="Legal Information">
        <p>
          Review the terms and conditions governing use of the Velcure platform.
        </p>{" "}
      </PageIntro>
    </section>
  );
};

export default Page;
