import { MainNavItem } from "#/types/nav";

interface NavConfig {
  mainNav: MainNavItem[];
}

export const navConfig: NavConfig = {
  mainNav: [
    {
      title: "Fahrer",
      href: "#",
    },
    {
      title: "Unternehmen",
      items: [
        {
          title: "Über uns",
        },
        {
          title: "So funktioniert Velcure",
        },
      ],
    },
  ],
};
