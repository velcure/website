import { MainNavItem } from "#/types/nav";

interface NavConfig {
  mainNav: MainNavItem[];
}

export const navConfig: NavConfig = {
  mainNav: [
    {
      title: "Medical Facilities",
      href: "/medical-facilities",
    },
    {
      title: "Ambulance Services",
      href: "/ambulance-services",
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
