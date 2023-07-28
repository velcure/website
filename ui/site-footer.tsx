import React from "react";

export const SiteFooter: React.FC = () => {
  return (
    <footer className="bg-brand-default text-brand py-6 md:px-8 md:py-16">
      <div className="container">
        <div className="grid h-full w-full grid-cols-12 gap-8 self-center">
          <div className="col-span-12 md:col-span-8">to the left</div>
          <div className="col-span-12 md:col-span-4">to the right</div>
        </div>
        <div className="grid h-full grid-cols-4 gap-8 md:grid-cols-8"></div>
      </div>
    </footer>
  );
};
