'use client';
import React from 'react';
import Logo from '../../../components/Logo';
import ScrollNavigation from '../../../components/ScrollNavigation';

export default function IconDocumentationPage() {
  return (
    <div className="bg-grey-900 min-h-screen">
      <div
        className="bg-grey-900 relative w-full min-h-screen"
        data-name="Icon Documentation"
      >
        <div className="relative size-full">
          {/* Scroll Navigation */}
          <ScrollNavigation currentPage="icon-documentation" />

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
                    <span className="font-host-grotesk not-italic text-grey-300">{` Icons / Documentation `}</span>
                  </p>
                </div>
                <div className="relative shrink-0 text-display-xxl tracking-[-4.48px] w-full">
                  <h1 className="adjustLetterSpacing block leading-none" style={{ marginBottom: '30px' }}>
                    Icon Documentation
                  </h1>
                </div>
              </div>
            </div>

            {/* Brand Icons Section */}
            <div
              className="box-border content-stretch flex flex-col gap-20 items-start justify-start px-0 pt-[80px] pb-[100px] relative shrink-0 content-responsive"
              data-name="Brand Icons"
            >
              <div
                className="box-border content-stretch flex flex-col lg:flex-row gap-12 lg:gap-24 items-start justify-start p-0 relative shrink-0 w-full"
                data-name="Description"
              >
                <div
                  className="box-border content-stretch flex flex-col font-host-grotesk font-normal gap-4 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-full max-w-[700px] flex-1"
                  data-name="Description"
                >
                  <div className="relative shrink-0 text-grey-50 text-[32px] tracking-[-0.64px] w-full">
                    <p className="adjustLetterSpacing block leading-[1.3]">
                      Brand Icons
                    </p>
                  </div>
                  <div className="relative shrink-0 text-grey-300 text-[18px] w-full">
                    <p className="block leading-[1.4]">
                      Our brand system uses a curated selection from the amazing Hero Icons set.{' '}
                      <a 
                        href="https://heroicons.com/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-[#4648ff] cursor-pointer"
                      >
                        Hero icons can be found here
                      </a>
                    </p>
                  </div>
                </div>
                <div
                  className="box-border content-stretch flex flex-col gap-6 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-full max-w-[700px] flex-1"
                  data-name="Description"
                >
                  <div className="font-ibm-plex-sans-jp relative shrink-0 text-grey-50 text-heading-small tracking-[-0.48px] w-full">
                    <p className="adjustLetterSpacing block leading-[1.4]">
                      ブランドアイコン
                    </p>
                  </div>
                  <div className="font-ibm-plex-sans-jp relative shrink-0 text-grey-300 text-text-large w-full">
                    <p className="block leading-[1.4]">
                      私たちのブランドシステムでは、優れたHero Iconsコレクションの中から厳選したアイコンを使用しています。{' '}
                      <a 
                        href="https://heroicons.com/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-[#4648ff] underline cursor-pointer"
                      >
                        Hero Iconsの詳細はこちらから
                      </a>
                      ご覧いただけます。
                    </p>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="w-full">
                <img 
                  src="/assets/images/icons_documentation_01.png" 
                  alt="Brand Icons"
                  className="w-full h-auto object-cover rounded-lg max-w-[1177px]"
                />
              </div>
            </div>

            {/* Accessing The Brand Icons Section */}
            <div
              className="box-border content-stretch flex flex-col gap-20 items-start justify-start px-0 pt-[80px] pb-[100px] relative shrink-0 content-responsive"
              data-name="Accessing The Brand Icons"
            >
              <div
                className="box-border content-stretch flex flex-col lg:flex-row gap-12 lg:gap-24 items-start justify-start p-0 relative shrink-0 w-full"
                data-name="Description"
              >
                <div
                  className="box-border content-stretch flex flex-col font-host-grotesk font-normal gap-4 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-full max-w-[700px] flex-1"
                  data-name="Description"
                >
                  <div className="relative shrink-0 text-grey-50 text-[32px] tracking-[-0.64px] w-full">
                    <p className="adjustLetterSpacing block leading-[1.3]">
                      Accessing The Brand Icons
                    </p>
                  </div>
                  <div className="relative shrink-0 text-grey-300 text-[18px] w-full">
                    <p className="block leading-[1.4]">
                      In order to use the brand icons, you can drag them from the Assets panel.
                    </p>
                  </div>
                </div>
                <div
                  className="box-border content-stretch flex flex-col gap-6 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-full max-w-[700px] flex-1"
                  data-name="Description"
                >
                  <div className="font-ibm-plex-sans-jp relative shrink-0 text-grey-50 text-heading-small tracking-[-0.48px] w-full">
                    <p className="adjustLetterSpacing block leading-[1.4]">
                      ブランドアイコンの使用方法
                    </p>
                  </div>
                  <div className="font-ibm-plex-sans-jp relative shrink-0 text-grey-300 text-text-large w-full">
                    <p className="block leading-[1.4]">
                      ブランドアイコンを使用するには、Figmaの「アセット」パネルからドラッグ＆ドロップで配置できます。
                    </p>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="w-full">
                <img 
                  src="/assets/images/icons_documentation_02.png" 
                  alt="Accessing The Brand Icons"
                  className="w-full h-auto object-cover rounded-lg max-w-[1177px]"
                />
              </div>
            </div>

            {/* Accessing The Company Icons Section */}
            <div
              className="box-border content-stretch flex flex-col gap-20 items-start justify-start px-0 pt-[80px] pb-[100px] relative shrink-0 content-responsive"
              data-name="Accessing The Company Icons"
            >
              <div
                className="box-border content-stretch flex flex-col lg:flex-row gap-12 lg:gap-24 items-start justify-start p-0 relative shrink-0 w-full"
                data-name="Description"
              >
                <div
                  className="box-border content-stretch flex flex-col font-host-grotesk font-normal gap-4 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-full max-w-[700px] flex-1"
                  data-name="Description"
                >
                  <div className="relative shrink-0 text-grey-50 text-[32px] tracking-[-0.64px] w-full">
                    <p className="adjustLetterSpacing block leading-[1.3]">
                      Accessing The Company Icons
                    </p>
                  </div>
                  <div className="relative shrink-0 text-grey-300 text-[18px] w-full">
                    <p className="block leading-[1.4]">
                      In order to use the company icons, you can drag them from the Assets panel.
                    </p>
                  </div>
                </div>
                <div
                  className="box-border content-stretch flex flex-col gap-6 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-full max-w-[700px] flex-1"
                  data-name="Description"
                >
                  <div className="font-ibm-plex-sans-jp relative shrink-0 text-grey-50 text-heading-small tracking-[-0.48px] w-full">
                    <p className="adjustLetterSpacing block leading-[1.4]">
                      企業アイコンの使用方法
                    </p>
                  </div>
                  <div className="font-ibm-plex-sans-jp relative shrink-0 text-grey-300 text-text-large w-full">
                    <p className="block leading-[1.4]">
                      企業アイコンを使用するには、Figmaの「アセット」パネルからドラッグ＆ドロップで簡単に利用できます。
                    </p>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="w-full">
                <img 
                  src="/assets/images/icons_documentation_03.png" 
                  alt="Accessing The Company Icons"
                  className="w-full h-auto object-cover rounded-lg max-w-[1177px]"
                />
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
                  <p className="block leading-[1.4] text-sm md:text-base lg:text-text-large break-all">
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