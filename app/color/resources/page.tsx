'use client';
import React from 'react';
import Logo from '../../../components/Logo';
import ScrollNavigation from '../../../components/ScrollNavigation';

export default function ColorResourcesPage() {
  return (
    <div className="bg-grey-900 min-h-screen">
      <div
        className="bg-grey-900 relative w-full min-h-screen"
        data-name="Color Resources"
      >
        <div className="relative size-full">
          {/* Scroll Navigation */}
          <ScrollNavigation currentPage="color-resources" />

          <div className="fixed-padding-container relative size-full">
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
                    <span className="font-host-grotesk not-italic text-grey-300">{` Color / Resources `}</span>
                  </p>
                </div>
                <div className="relative shrink-0 text-display-xxl tracking-[-4.48px] w-full">
                  <h1 className="adjustLetterSpacing block leading-none" style={{ marginBottom: '30px' }}>
                    Color Resources
                  </h1>
                </div>
              </div>
            </div>

            {/* Best Practices Section */}
            <div
              className="box-border content-stretch flex flex-col gap-20 items-start justify-start px-0 pt-[80px] pb-[100px] relative shrink-0 content-responsive"
              data-name="Best Practices"
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
                      Best Practices
                    </p>
                  </div>
                  <div className="relative shrink-0 text-grey-300 text-[18px] w-full">
                    <p className="block leading-[1.4]">
                      There are a lot of resources online whe it comes to color theory, best practices and accessibility. Here are a few that we like:
                    </p>
                  </div>
                </div>
                <div
                  className="box-border content-stretch flex flex-col gap-6 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-full max-w-[700px] flex-1"
                  data-name="Description"
                >
                  <div className="font-ibm-plex-sans-jp relative shrink-0 text-grey-50 text-heading-small tracking-[-0.48px] w-full">
                    <p className="adjustLetterSpacing block leading-[1.4]">
                      ベストプラクティス
                    </p>
                  </div>
                  <div className="font-ibm-plex-sans-jp relative shrink-0 text-grey-300 text-[18px] w-full">
                    <p className="block leading-[1.4]">
                      カラーデザインに関する理論やベストプラクティス、アクセシビリティについては、オンライン上に多くの参考資料があります。ここでは、私たちがおすすめするものをいくつか紹介します。
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="box-border content-stretch flex flex-col lg:flex-row gap-5 items-start justify-start p-0 relative shrink-0 w-full"
                data-name="Resources"
              >
                {/* Apple Color Guide */}
                <div
                  className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 flex-1 min-w-0"
                  data-name="Apple Color Guide"
                >
                  <div className="relative w-full">
                    <img
                      src="/assets/images/color_resources_01.png"
                      alt="Apple Color Guide Screenshot"
                      className="w-full h-auto max-w-full"
                    />
                  </div>
                  <div className="flex flex-col gap-[7px] w-full">
                    <a
                      href="https://developer.apple.com/design/human-interface-guidelines/color"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-['Poppins',_sans-serif] font-normal text-grey-50 text-[24px] tracking-[-0.48px] leading-[1.4] underline cursor-pointer block"
                    >
                      Apple Color Guide
                    </a>
                    <div className="font-host-grotesk font-normal text-[#A3A4B5] text-[24px] tracking-[-0.48px] leading-[1.4] w-full max-w-[421px] mb-8">
                      <p>A great resource on best practices and color standards from Apple</p>
                    </div>
                    <div className="font-ibm-plex-sans-jp font-normal text-[#A3A4B5] text-[18px] leading-[1.4] w-full max-w-[500px]">
                      <p>Appleが提供する、ベストプラクティスとカラースタンダードに関する優れた参考資料です。</p>
                    </div>
                  </div>
                </div>

                {/* Material Design Color */}
                <div
                  className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 flex-1 min-w-0"
                  data-name="Material Design Color"
                >
                  <div className="relative w-full">
                    <img
                      src="/assets/images/color_resources_02.png"
                      alt="Material Design Color Screenshot"
                      className="w-full h-auto max-w-full"
                    />
                  </div>
                  <div className="flex flex-col gap-[7px] w-full">
                    <a
                      href="https://m3.material.io/styles/color/system/overview"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-['Poppins',_sans-serif] font-normal text-grey-50 text-[24px] tracking-[-0.48px] leading-[1.4] underline cursor-pointer block"
                    >
                      Material Design Color
                    </a>
                    <div className="font-host-grotesk font-normal text-[#A3A4B5] text-[24px] tracking-[-0.48px] leading-[1.4] w-full max-w-[421px] mb-8">
                      <p>Google's best practices and methodology for color</p>
                    </div>
                    <div className="font-ibm-plex-sans-jp font-normal text-[#A3A4B5] text-[18px] leading-[1.4] w-full max-w-[500px]">
                      <p>Googleが提唱するカラーのベストプラクティスと活用メソッドです。</p>
                    </div>
                  </div>
                </div>

                {/* Brand Mastery Course */}
                <div
                  className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 flex-1 min-w-0"
                  data-name="Brand Mastery Course"
                >
                  <div className="relative w-full">
                    <img
                      src="/assets/images/color_resources_03.png"
                      alt="Brand Mastery Course Screenshot"
                      className="w-full h-auto max-w-full"
                    />
                  </div>
                  <div className="flex flex-col gap-[7px] w-full">
                    <a
                      href="https://brandkitpro.framer.website/course"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-['Poppins',_sans-serif] font-normal text-grey-50 text-[24px] tracking-[-0.48px] leading-[1.4] underline cursor-pointer block"
                    >
                      Brand Mastery Course
                    </a>
                    <div className="font-host-grotesk font-normal text-[#A3A4B5] text-[24px] tracking-[-0.48px] leading-[1.4] w-full max-w-[421px] mb-8">
                      <p>A course built to show a step by step process of building a brand.</p>
                    </div>
                    <div className="font-ibm-plex-sans-jp font-normal text-[#A3A4B5] text-[18px] leading-[1.4] w-full max-w-[500px]">
                      <p>ブランド構築のプロセスをステップ・バイ・ステップで学べるコースです。</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Books Section */}
            <div
              className="box-border content-stretch flex flex-col gap-20 items-start justify-start px-0 pt-[80px] pb-[100px] relative shrink-0 content-responsive"
              data-name="Books"
            >
              <div
                className="box-border content-stretch flex flex-col lg:flex-row gap-12 lg:gap-24 items-start justify-start p-0 relative shrink-0"
                data-name="Description"
              >
                <div
                  className="box-border content-stretch flex flex-col font-host-grotesk font-normal gap-4 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left"
                  data-name="Description"
                >
                  <div className="relative shrink-0 text-grey-50 text-heading-medium tracking-[-0.64px]">
                    <p className="adjustLetterSpacing block leading-[1.3]">
                    Books
                    </p>
                  </div>
                  <div className="relative shrink-0 text-grey-300 text-[18px] w-full max-w-[700px]">
                    <p className="block leading-[1.4]">
                    Here are some timeless resources on color theory
                    </p>
                  </div>
                </div>
                <div
                  className="box-border content-stretch flex flex-col gap-6 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left"
                  data-name="Description"
                >
                  <div className="font-ibm-plex-sans-jp relative shrink-0 text-grey-50 text-heading-small tracking-[-0.48px]">
                    <p className="adjustLetterSpacing block leading-[1.4]">
                    書籍
                    </p>
                  </div>
                  <div className="font-ibm-plex-sans-jp relative shrink-0 text-grey-300 text-[18px] w-full max-w-[700px]">
                    <p className="block leading-[1.4]">
                    色彩理論に関する不朽の名著をご紹介します。
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="box-border content-stretch flex flex-col lg:flex-row gap-5 items-start justify-start p-0 relative shrink-0 w-full"
                data-name="Books"
              >
                {/* Interaction of Color */}
                <div
                  className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 flex-1 min-w-0"
                  data-name="Interaction of Color"
                >
                  <div className="relative w-full">
                    <img
                      src="/assets/images/color_resources_04.png"
                      alt="Interaction of Color Book Cover"
                      className="w-full h-auto max-w-full"
                    />
                  </div>
                  <div className="flex flex-col gap-[7px] w-full">
                    <div className="font-host-grotesk font-normal text-grey-50 text-[24px] tracking-[-0.48px] leading-[1.4]">
                      <p>Interaction of Color</p>
                    </div>
                    <div className="font-host-grotesk font-normal text-[#A3A4B5] text-[24px] tracking-[-0.48px] leading-[1.4] w-full max-w-[421px]">
                      <p>Josef Albers</p>
                    </div>
                  </div>
                </div>

                {/* Color Mania */}
                <div
                  className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 flex-1 min-w-0"
                  data-name="Color Mania"
                >
                  <div className="relative w-full">
                    <img
                      src="/assets/images/color_resources_05.png"
                      alt="Color Mania Book Cover"
                      className="w-full h-auto max-w-full"
                    />
                  </div>
                  <div className="flex flex-col gap-[7px] w-full">
                    <div className="font-host-grotesk font-normal text-grey-50 text-[24px] tracking-[-0.48px] leading-[1.4]">
                      <p>Color Mania</p>
                    </div>
                    <div className="font-host-grotesk font-normal text-[#A3A4B5] text-[24px] tracking-[-0.48px] leading-[1.4] w-full max-w-[421px]">
                      <p>Barbara Flückiger, Eva Hielscher, Nadine Wietlisbach</p>
                    </div>
                  </div>
                </div>

                {/* Graphic Design The New Basics */}
                <div
                  className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 flex-1 min-w-0"
                  data-name="Graphic Design The New Basics"
                >
                  <div className="relative w-full">
                    <img
                      src="/assets/images/color_resources_06.png"
                      alt="Graphic Design The New Basics Book Cover"
                      className="w-full h-auto max-w-full"
                    />
                  </div>
                  <div className="flex flex-col gap-[7px] w-full">
                    <div className="font-host-grotesk font-normal text-grey-50 text-[24px] tracking-[-0.48px] leading-[1.4] w-full max-w-[373px]">
                      <p>Graphic Design The New Basics</p>
                    </div>
                    <div className="font-host-grotesk font-normal text-[#A3A4B5] text-[24px] tracking-[-0.48px] leading-[1.4] w-full max-w-[421px]">
                      <p>Ellen Lupton & Jennifer Cole Phillips</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div
              className="box-border content-stretch flex flex-col md:flex-row items-start md:items-center justify-between pb-20 pt-[60px] md:pt-[80px] lg:pt-[100px] px-0 relative shrink-0 content-responsive gap-6 md:gap-8"
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