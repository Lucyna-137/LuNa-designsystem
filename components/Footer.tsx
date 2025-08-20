import React from 'react';
import Logo from './Logo';

export default function Footer() {
  return (
    <div
      className="box-border content-stretch flex flex-col md:flex-row items-start md:items-center justify-between pb-0 pt-[60px] md:pt-[80px] lg:pt-[100px] px-0 relative shrink-0 content-responsive gap-6 md:gap-8"
      data-name="Footer"
    >
      <div
        className="box-border content-stretch flex flex-col font-host-grotesk font-normal gap-3 md:gap-4 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-full md:w-auto flex-1"
        data-name="Description"
      >
        <div className="relative shrink-0 text-grey-50 w-full">
          <p className="block leading-[1.4] text-base md:text-lg lg:text-text-large">
            The only brand system that you'll ever need!
          </p>
        </div>
        <div className="relative shrink-0 text-grey-300 w-full">
          <p className="block leading-[1.4] text-sm md:text-base lg:text-text-large break-all md:break-normal">
            https://brandkitpro.framer.website
          </p>
        </div>
      </div>
      <div
        className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start md:justify-end p-0 relative shrink-0 mt-4 md:mt-0"
        data-name="Logo"
      >
        <Logo size="Medium" />
      </div>
    </div>
  );
}