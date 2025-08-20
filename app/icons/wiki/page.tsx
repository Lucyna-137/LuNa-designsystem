'use client';
import React from 'react';
import Logo from '../../../components/Logo';
import ScrollNavigation from '../../../components/ScrollNavigation';
import Footer from '../../../components/Footer';

export default function IconWikiPage() {
  return (
    <div className="bg-grey-900 min-h-screen">
      <div
        className="bg-grey-900 relative w-full min-h-screen"
        data-name="Icon Wiki"
      >
        <div className="relative size-full">
          {/* Scroll Navigation */}
          <ScrollNavigation currentPage="icon-wiki" />

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
                    <span className="font-host-grotesk not-italic text-grey-300">{` Icons / Icon Wiki `}</span>
                  </p>
                </div>
                <div className="relative shrink-0 text-display-xxl tracking-[-4.48px] w-full">
                  <h1 className="adjustLetterSpacing block leading-none" style={{ marginBottom: '30px' }}>
                    Icon Wiki
                  </h1>
                </div>
              </div>
            </div>

            {/* Brand Icons Section */}
            <div
              className="box-border content-stretch flex flex-col gap-[100px] items-start justify-start px-0 pt-[80px] pb-0 relative shrink-0 content-responsive"
              data-name="Brand Icons"
            >
              <div
                className="box-border content-stretch flex flex-col lg:flex-row gap-12 lg:gap-24 items-start justify-start p-0 relative shrink-0"
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
                      Our brand system uses a curated selection from the amazing Hero Icons set. The icons can be{' '}
                      <a href="https://heroicons.com/" target="_blank" rel="noopener noreferrer" className="text-[#4648ff] underline">found here</a>.
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
                  <div className="font-ibm-plex-sans-jp relative shrink-0 text-grey-300 text-[18px] w-full">
                    <p className="block leading-[1.4]">
                      私たちのブランドシステムでは、優れたHero Iconsコレクションから厳選したアイコンを使用しています。{' '}
                      <a href="https://heroicons.com/" target="_blank" rel="noopener noreferrer" className="text-[#4648ff] underline">Hero Iconsはこちらからご覧いただけます</a>。
                    </p>
                  </div>
                </div>
              </div>

              {/* Brand Icons Image */}
              <div className="w-full">
                <img 
                  src="/assets/images/icons_wiki_01.png" 
                  alt="Brand Icons"
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Company Icons Section */}
            <div
              className="box-border content-stretch flex flex-col gap-[100px] items-start justify-start px-0 pt-[210px] pb-[200px] relative shrink-0 content-responsive"
              data-name="Company Icons"
            >
              <div
                className="box-border content-stretch flex flex-col lg:flex-row gap-12 lg:gap-24 items-start justify-start p-0 relative shrink-0"
                data-name="Description"
              >
                <div
                  className="box-border content-stretch flex flex-col font-host-grotesk font-normal gap-4 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-full max-w-[700px] flex-1"
                  data-name="Description"
                >
                  <div className="relative shrink-0 text-grey-50 text-[32px] tracking-[-0.64px] w-full">
                    <p className="adjustLetterSpacing block leading-[1.3]">
                      Company Icons
                    </p>
                  </div>
                  <div className="relative shrink-0 text-grey-300 text-[18px] w-full">
                    <p className="block leading-[1.4]">
                      Our brand system uses a curated selection from the Integrations library by Andrey Kovalev on Figma community. The library can be{' '}
                      <a href="https://www.figma.com/@akovalev" target="_blank" rel="noopener noreferrer" className="text-[#4648ff] underline">found here</a>.
                    </p>
                  </div>
                </div>
                <div
                  className="box-border content-stretch flex flex-col gap-6 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-full max-w-[700px] flex-1"
                  data-name="Description"
                >
                  <div className="font-ibm-plex-sans-jp relative shrink-0 text-grey-50 text-heading-small tracking-[-0.48px] w-full">
                    <p className="adjustLetterSpacing block leading-[1.4]">
                      企業アイコン
                    </p>
                  </div>
                  <div className="font-ibm-plex-sans-jp relative shrink-0 text-grey-300 text-[18px] w-full">
                    <p className="block leading-[1.4]">
                      私たちのブランドシステムでは、FigmaコミュニティでAndrey Kovalevが公開している「Integrationsライブラリ」から厳選したアイコンセットを使用しています。{' '}
                      <a href="https://www.figma.com/@akovalev" target="_blank" rel="noopener noreferrer" className="text-[#4648ff] underline">ライブラリの詳細はこちらから</a>
                      ご覧いただけます。
                    </p>
                  </div>
                </div>
              </div>

              {/* Company Icons Image */}
              <div className="w-full">
                <img 
                  src="/assets/images/icons_wiki_02.png" 
                  alt="Company Icons"
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Footer */}
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}