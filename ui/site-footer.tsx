import { siteConfig } from "#/config/site";
import { Map, ShieldAlert, ShieldCheck } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Logo } from "./Logo";

const features = [
  {
    title: "Hosted in Germany",
    description:
      "All data is hosted in Germany and is subject to the strict German data protection laws. Our Servers are ISO 27001 certified.",
    icon: Map,
  },
  {
    title: "Secure",
    description:
      "We use the latest security standards to ensure that your data is safe and secure.",
    icon: ShieldCheck,
  },
  {
    title: "DSGVO",
    description:
      "We are fully compliant with the European General Data Protection Regulation (GDPR).",
    icon: ShieldAlert,
  },
];

export const SiteFooter: React.FC = () => {
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
              <p>
                Velcure is a platform for Clinics and Hospitals to manage their
                patient transportation.
              </p>
            </div>
            <div className="mt-6 grid gap-4">
              <h4 className="text-xl font-bold">Help &amp; Support</h4>
              <div className="flex flex-col gap-2">
                <div>
                  <Link
                    className="text-sm text-white hover:border-b hover:border-white"
                    href={`tel:${siteConfig.contact.support.phone}`}
                  >
                    Support: {siteConfig.contact.support.phone}
                  </Link>
                </div>
                <div>
                  <Link
                    className="text-sm text-white hover:border-b hover:border-white"
                    href={`mailto:${siteConfig.contact.support.email}`}
                  >
                    E-Mail: {siteConfig.contact.support.email}
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 flex flex-col space-y-1 md:col-span-4">
            <h4 className="text-xl font-bold md:text-right">Company</h4>
            <ul className="space-y-1 md:text-right">
              <li>
                <Link
                  href="/about"
                  className="text-brand border-b border-transparent text-sm hover:border-white hover:opacity-70"
                >
                  <span>About</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/imprint"
                  className="text-brand border-b border-transparent text-sm hover:border-white hover:opacity-70"
                >
                  <span>Imprint</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/legal"
                  className="text-brand border-b border-transparent text-sm hover:border-white hover:opacity-70"
                >
                  <span>Legal</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-brand border-b border-transparent text-sm hover:border-white hover:opacity-70"
                >
                  <span>Privacy</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-300">
            &copy; {new Date().getFullYear()} by {siteConfig.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
