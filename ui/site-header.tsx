import { Button } from "./button";
import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";

export const SiteHeader: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 w-full bg-transparent ">
      <div className="container flex h-14 items-center md:h-24">
        <MainNav />
        <MobileNav />
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          {/** actions: login, signup */}
          <Button appearance="outline">Login</Button>
        </div>
      </div>
    </header>
  );
};
