import React from 'react';
import Link from 'next/link';
import Logo from '../../../components/Logo';
import ScrollNavigation from '../../../components/ScrollNavigation';

export default function PlaceholderLogosPage() {
  return (
    <div className="bg-grey-900 min-h-screen">
      <div
        className="bg-grey-900 relative w-full min-h-screen"
        data-name="Placeholder Logos Page"
      >
        <div className="relative size-full">
          {/* Scroll Navigation */}
          <ScrollNavigation currentPage="placeholder-logos" />

          <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start overflow-clip pb-20 pt-0 fixed-padding-container relative size-full">
          {/* Title Section */}
          <div
            className="box-border content-stretch flex flex-col gap-[100px] items-start justify-start overflow-clip pb-2.5 pt-[100px] px-0 relative rounded-3xl shrink-0 content-responsive"
            data-name="_header"
          >
            {/* Title */}
            <div
              className="box-border content-stretch flex flex-col font-host-grotesk font-normal gap-6 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-grey-50 text-left w-full"
              data-name="Title"
            >
              <div className="relative shrink-0 text-[0px] w-full">
                <p className="leading-[1.4] text-text-large">
                  <span>Core /</span>
                  <span className="font-host-grotesk not-italic text-grey-300">{` Logo / Placeholders `}</span>
                </p>
              </div>
              <div className="relative shrink-0 text-display-xxl tracking-[-4.48px] w-full">
                <h1 className="adjustLetterSpacing block leading-none">
                  Placeholder Logos
                </h1>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div
            className="box-border content-stretch flex flex-col gap-20 items-start justify-start px-0 py-[100px] relative shrink-0 content-responsive"
            data-name="Content"
          >
            <div
              className="box-border content-stretch flex flex-col lg:flex-row gap-12 lg:gap-24 items-start justify-start p-0 relative shrink-0"
              data-name="Description"
            >
              <div
                className="box-border content-stretch flex flex-col font-host-grotesk font-normal gap-4 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-full max-w-[700px] flex-1"
                data-name="Description"
              >
                <div className="relative shrink-0 text-grey-50 text-heading-medium tracking-[-0.64px] w-full">
                  <p className="adjustLetterSpacing block leading-[1.3]">
                    Placeholder Logos
                  </p>
                </div>
                <div className="relative shrink-0 text-grey-300 text-[18px] w-full">
                  <p className="block leading-[1.4]">
                    Use these logos from fictional companies as placeholders
                  </p>
                </div>
              </div>
              <div
                className="box-border content-stretch flex flex-col gap-6 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-full max-w-[700px] flex-1"
                data-name="Description"
              >
                <div className="font-ibm-plex-sans-jp relative shrink-0 text-grey-50 text-heading-small tracking-[-0.48px] w-full">
                  <p className="adjustLetterSpacing block leading-[1.4]">
                    プレースホルダーロゴ
                  </p>
                </div>
                <div className="font-ibm-plex-sans-jp relative shrink-0 text-grey-300 text-[18px] w-full">
                  <p className="block leading-[1.4]">
                    架空の企業のロゴをプレースホルダーとして使用できます。
                  </p>
                </div>
              </div>
            </div>
            
            {/* Logo Grid */}
            <div
              className="box-border content-stretch flex flex-col lg:flex-row gap-20 items-start justify-start p-0 relative shrink-0 w-full"
              data-name="Logo Grid"
            >
              {/* Left Side - Company Logos Image */}
              <div
                className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 flex-1"
                data-name="Company Logos"
              >
                <img
                  src="/assets/logos/Company Logo.png"
                  alt="Company Placeholder Logos"
                  className="object-contain"
                  style={{
                    width: '542px',
                    height: '749px'
                  }}
                />
              </div>
            </div>
          </div>

          {/* Footer */}
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
          </div>
        </div>
      </div>
    </div>
  );
} 