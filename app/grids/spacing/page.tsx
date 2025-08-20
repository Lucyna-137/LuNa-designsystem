'use client';
import React from 'react';
import Logo from '../../../components/Logo';
import ScrollNavigation from '../../../components/ScrollNavigation';
import Footer from '../../../components/Footer';

export default function SpacingPage() {
  return (
    <div className="bg-grey-900 min-h-screen">
      <div
        className="bg-grey-900 relative w-full min-h-screen"
        data-name="Spacing"
      >
        <div className="relative size-full">
          {/* Scroll Navigation */}
          <ScrollNavigation currentPage="spacing" />

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
                    <span className="font-host-grotesk not-italic text-grey-300">{` Grids & Spacing / Spacing`}</span>
                  </p>
                </div>
                <div className="relative shrink-0 text-display-xxl tracking-[-4.48px] w-full">
                  <h1 className="adjustLetterSpacing block leading-none" style={{ marginBottom: '30px' }}>
                    Spacing
                  </h1>
                </div>
              </div>
            </div>

            {/* Horizontal Spacing Section */}
            <div
              className="box-border content-stretch flex flex-col gap-20 items-start justify-start px-0 pt-[80px] pb-[100px] relative shrink-0 content-responsive"
              data-name="Horizontal Spacing"
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
                      Horizontal Spacing
                    </p>
                  </div>
                  <div className="relative shrink-0 text-grey-300 text-[18px] w-full max-w-[700px]">
                    <p className="block leading-[1.4]">
                      Using a modified 8px grid system keeps layouts consistent. Please note that these spacers are not design system components, they are just guidelines.
                    </p>
                  </div>
                </div>
                <div
                  className="box-border content-stretch flex flex-col gap-6 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-full max-w-[700px] flex-1"
                  data-name="Description"
                >
                  <div className="font-ibm-plex-sans-jp relative shrink-0 text-grey-50 text-heading-small tracking-[-0.48px] w-full">
                    <p className="adjustLetterSpacing block leading-[1.4]">
                      水平方向のスペーシング
                    </p>
                  </div>
                  <div className="font-ibm-plex-sans-jp relative shrink-0 text-grey-300 text-[18px] w-full max-w-[700px]">
                    <p className="block leading-[1.4]">
                      レイアウトの一貫性を保つため、アレンジした8pxグリッドシステムを使用しています。なお、これらのスペーサーはデザインシステムのコンポーネントではなく、あくまでガイドラインとしてご利用ください。
                    </p>
                  </div>
                </div>
              </div>

              {/* Horizontal Spacing Example */}
              <div className="w-full">
                <div className="bg-grey-900 rounded-lg overflow-hidden relative">
                  <img 
                    src="/assets/images/grids_spacing_01.png" 
                    alt="Horizontal Spacing System Example"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Vertical Rhythm Section */}
            <div
              className="box-border content-stretch flex flex-col gap-20 items-start justify-start px-0 pt-[80px] pb-[100px] relative shrink-0 content-responsive"
              data-name="Vertical Rhythm"
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
                      Vertical Rhythm
                    </p>
                  </div>
                  <div className="relative shrink-0 text-grey-300 text-[18px] w-full max-w-[700px]">
                    <p className="block leading-[1.4]">
                      Using a modified 8px grid system keeps layouts consistent. Please note that these spacers are not design system components, they are just guidelines.
                    </p>
                  </div>
                </div>
                <div
                  className="box-border content-stretch flex flex-col gap-6 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-full max-w-[700px] flex-1"
                  data-name="Description"
                >
                  <div className="font-ibm-plex-sans-jp relative shrink-0 text-grey-50 text-heading-small tracking-[-0.48px] w-full">
                    <p className="adjustLetterSpacing block leading-[1.4]">
                      垂直リズム
                    </p>
                  </div>
                  <div className="font-ibm-plex-sans-jp relative shrink-0 text-grey-300 text-[18px] w-full max-w-[700px]">
                    <p className="block leading-[1.4]">
                      レイアウトの一貫性を保つため、アレンジした8pxグリッドシステムを使用しています。なお、これらのスペーサーはデザインシステムのコンポーネントではなく、あくまでガイドラインとしてご利用ください。
                    </p>
                  </div>
                </div>
              </div>

              {/* Vertical Rhythm Example */}
              <div className="w-full">
                <div className="bg-grey-900 rounded-lg overflow-hidden relative">
                  <img 
                    src="/assets/images/grids_spacing_02.png" 
                    alt="Vertical Rhythm System Example"
                    className="w-full h-auto object-cover"
                  />
                </div>
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