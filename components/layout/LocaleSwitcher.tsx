"use client";
import { i18n } from "#/i18n-config";
import { cn } from "#/lib/utils";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next-intl/client";
import { useTransition } from "react";

export const LocaleSwitcher: React.FC = () => {
  const t = useTranslations("LocaleSwitcher");

  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();

  function onSelectChange(nextLocale: string) {
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  }

  return (
    <div
      className={cn(
        "divide-x divide-white text-sm",
        isPending && "transition-opacity [&:disabled]:opacity-30"
      )}
    >
      {i18n.locales.map((locale) => (
        <button
          onClick={() => onSelectChange(locale)}
          className="px-2"
          key={locale}
          disabled={isPending}
        >
          {t("locale", { locale })}
        </button>
      ))}
    </div>
  );
};
