import { siteConfig } from "#/config/site";
import { Container } from "#/ui/Container";
import { PageIntro } from "#/ui/PageIntro";

export const metadata = {
  title: "Imprint",
  description: "",
  keywords: [],
};

const Page = () => {
  return (
    <>
      <section className="relative mt-[-5.5rem] py-24 md:mt-[-6rem] md:pt-44">
        <PageIntro eyebrow="Imprint" title="Imprint">
          <p>
            Contact details and legal information about the company operating
            Velcure.
          </p>{" "}
        </PageIntro>
      </section>
      <section className="relative py-24 sm:py-32">
        <Container>
          <div className="prose">
            <table>
              <tbody>
                <tr>
                  <th>Company:</th>
                  <td>teamspiel healthcare GmbH</td>
                </tr>
                <tr>
                  <th>Office:</th>
                  <td>
                    Unterjörn 19a
                    <br />
                    24536 Neumünster
                    <br />
                    Germany
                  </td>
                </tr>
                <tr>
                  <th>Registration Court:</th>
                  <td>Kiel</td>
                </tr>
                <tr>
                  <th>Managing Directors:</th>
                  <td>Heinzelmännchen</td>
                </tr>
                <tr>
                  <th>VAT Number:</th>
                  <td>DE123456789</td>
                </tr>
                <tr>
                  <th>Email:</th>
                  <td>
                    <a href={`mailto:${siteConfig.contact.support.email}`}>
                      {siteConfig.contact.support.email}
                    </a>
                  </td>
                </tr>
                <tr>
                  <th>Phone Number:</th>
                  <td>
                    <a href={`tel:${siteConfig.contact.support.phone}`}>
                      {siteConfig.contact.support.phone}
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
            <p>
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Here is the link
              </a>{" "}
              to the platform of the European Commission according to Regulation
              on consumer Online Dispute Resolution. {siteConfig.name} does
              currently not use the Online Dispute Resolution platform for any
              complaints.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Page;
