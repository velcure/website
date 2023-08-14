import { siteConfig } from "#/config/site";
import { Map, ShieldAlert, ShieldCheck } from "lucide-react";

import { useTranslations } from "next-intl";
import Link from "next-intl/link";
import { Logo } from "./Logo";

export function SiteFooter() {
  const t = useTranslations("Footer");

  const features = [
    {
      title: t("features.hosting.title"),
      description: t("features.hosting.description"),
      icon: Map,
    },
    {
      title: t("features.security.title"),
      description: t("features.security.description"),
      icon: ShieldCheck,
    },
    {
      title: t("features.gdpr.title"),
      description: t("features.gdpr.description"),
      icon: ShieldAlert,
    },
  ];

  return (
    <footer className="bg-brand-default text-brand py-6 md:px-8 md:py-16">
      <div className="container pb-16">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="grid grid-cols-12 rounded-2xl bg-white bg-opacity-5 p-6 text-white"
            >
              <div className="col-span-2">
                <feature.icon className="h-8 w-8" aria-hidden="true" />
              </div>
              <div className="col-span-10">
                <h4 className="mb-3 text-xl font-bold">{feature.title}</h4>
                <p className="text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container">
        <div className="grid h-full w-full grid-cols-12 gap-8 self-center">
          <div className="col-span-12 md:col-span-8">
            <div>
              <Link href="/" className="mr-[4vw]">
                <Logo className="h-10" aria-hidden="true" invert />
              </Link>
            </div>
            <div className="mt-4 max-w-sm">
              <p>{t("site_description")}</p>
            </div>
            <div className="mt-6 grid gap-4">
              <h4 className="text-xl font-bold">{t("helpAndSupport.title")}</h4>
              <div className="flex flex-col gap-2">
                <div>
                  <Link
                    className="text-sm text-white hover:border-b hover:border-white"
                    href={`tel:${siteConfig.contact.support.phone}`}
                  >
                    {t("helpAndSupport.support")}:{" "}
                    {siteConfig.contact.support.phone}
                  </Link>
                </div>
                <div>
                  <Link
                    className="text-sm text-white hover:border-b hover:border-white"
                    href={`mailto:${siteConfig.contact.support.email}`}
                  >
                    {t("helpAndSupport.email")}:{" "}
                    {siteConfig.contact.support.email}
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 flex flex-col space-y-1 md:col-span-4">
            <h4 className="text-xl font-bold md:text-right">
              {t("company.title")}
            </h4>
            <ul className="space-y-1 md:text-right">
              <li>
                <Link
                  href="/legal/imprint"
                  className="text-brand border-b border-transparent text-sm hover:border-white hover:opacity-70"
                >
                  <span>{t("company.imprint")}</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/legal"
                  className="text-brand border-b border-transparent text-sm hover:border-white hover:opacity-70"
                >
                  <span>{t("company.legal")}</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-brand border-b border-transparent text-sm hover:border-white hover:opacity-70"
                >
                  <span>{t("company.privacy")}</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-300">
            {t("copyright", {
              date: new Date().getFullYear(),
              name: siteConfig.name,
            })}
          </p>
        </div>
      </div>
    </footer>
  );
}
