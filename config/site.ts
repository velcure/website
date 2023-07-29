export const siteConfig = {
  name: "Velcure",
  url: "https://velcure.com",
  contact: {
    support: {
      email: "help@velcure.com",
      phone: "+49 30 123 456 789",
    },
  },
  description:
    "A playground to explore new Next.js App Router features such as nested layouts, instant loading states, streaming, and component level data fetching.",
  keywords: ["Velcure", "ambulance", "krankenwagentransport"],
  authors: [
    {
      name: "teamspiel GmbH",
      url: "https://teamspiel.io",
    },
  ],
};

export type SiteConfig = typeof siteConfig;
