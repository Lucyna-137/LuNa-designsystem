'use client';
import React from 'react';
import Logo from '../../../components/Logo';
import ScrollNavigation from '../../../components/ScrollNavigation';
import Footer from '../../../components/Footer';

export default function ShadowsPage() {
  return (
    <div className="bg-grey-900 min-h-screen">
      <div
        className="bg-grey-900 relative w-full min-h-screen"
        data-name="Shadows"
      >
        <div className="relative size-full">
          {/* Scroll Navigation */}
          <ScrollNavigation currentPage="shadows" />

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
                    <span className="font-host-grotesk not-italic text-grey-300">{` Effects / Shadows`}</span>
                  </p>
                </div>
                <div className="relative shrink-0 text-display-xxl tracking-[-4.48px] w-full">
                  <h1 className="adjustLetterSpacing block leading-none" style={{ marginBottom: '30px' }}>
                    Shadows
                  </h1>
                </div>
              </div>
            </div>

            {/* Drop Shadows Section */}
            <div
              className="box-border content-stretch flex flex-col gap-20 items-start justify-start px-0 pt-[80px] pb-[100px] relative shrink-0 content-responsive"
              data-name="Drop Shadows"
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
                      Drop Shadows
                    </p>
                  </div>
                  <div className="relative shrink-0 text-grey-300 text-[18px] w-full max-w-[700px]">
                    <p className="block leading-[1.4]">
                      Used to signify that an element is interactive or to add a stylistic element to brand design.
                    </p>
                  </div>
                </div>
                <div
                  className="box-border content-stretch flex flex-col gap-6 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-full max-w-[700px] flex-1"
                  data-name="Description"
                >
                  <div className="font-ibm-plex-sans-jp relative shrink-0 text-grey-50 text-heading-small tracking-[-0.48px] w-full">
                    <p className="adjustLetterSpacing block leading-[1.4]">
                      ドロップシャドウ
                    </p>
                  </div>
                  <div className="font-ibm-plex-sans-jp relative shrink-0 text-grey-300 text-[18px] w-full max-w-[700px]">
                    <p className="block leading-[1.4]">
                      要素がインタラクティブ（操作可能）であることを示したり、ブランドデザインにスタイリッシュなアクセントを追加するために使用します。
                    </p>
                  </div>
                </div>
              </div>

              {/* Shadows Image */}
              <div className="w-full">
                <div className="bg-grey-900 rounded-lg overflow-hidden relative">
                  <img 
                    src="/assets/images/effects_shadows_01.png" 
                    alt="Drop Shadows"
                    className="block"
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