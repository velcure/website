import { siteConfig } from "#/config/site";
import Link from "next/link";
import { Button } from "./button";
import { HeadroomContainer } from "./headroom-container";
import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";
import { MobileNavContextProvider, MobileNavToggle } from "./mobile-nav-toggle";

export const SiteHeader: React.FC = () => {
  return (
    <MobileNavContextProvider>
      <HeadroomContainer>
        <header className="sticky top-0 z-40 w-full bg-transparent ">
          <div className="container flex h-14 items-center md:h-24">
            <MainNav />
            <div className="mr-4 flex md:hidden">
              <Link href="/" className="mr-[4vw] flex items-center space-x-2">
                <span>V</span>
                <span className="hidden font-bold sm:inline-block">
                  {siteConfig.name}
                </span>
              </Link>
            </div>

            <div className="flex flex-1 flex-row items-center justify-end  gap-2">
              {/** actions: login, signup */}
              <Button size="lg" appearance="outline">
                Login
              </Button>

              <MobileNavToggle />
            </div>
          </div>
        </header>
        <MobileNav />
      </HeadroomContainer>
    </MobileNavContextProvider>
  );
};
