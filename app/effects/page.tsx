'use client';
import React from 'react';
import Logo from '../../components/Logo';
import ScrollNavigation from '../../components/ScrollNavigation';
import Footer from '../../components/Footer';

export default function BlurPage() {
  return (
    <div className="bg-grey-900 min-h-screen">
      <div
        className="bg-grey-900 relative w-full min-h-screen"
        data-name="Blur"
      >
        <div className="relative size-full">
          {/* Scroll Navigation */}
          <ScrollNavigation currentPage="effects" />

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
                    <span className="font-host-grotesk not-italic text-grey-300">{` Effects / Blur`}</span>
                  </p>
                </div>
                <div className="relative shrink-0 text-display-xxl tracking-[-4.48px] w-full">
                  <h1 className="adjustLetterSpacing block leading-none" style={{ marginBottom: '30px' }}>
                    Blur
                  </h1>
                </div>
              </div>
            </div>

            {/* Background Blur Section */}
            <div
              className="box-border content-stretch flex flex-col gap-20 items-start justify-start px-0 pt-[80px] pb-[100px] relative shrink-0 content-responsive"
              data-name="Background Blur"
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
                      Background Blur
                    </p>
                  </div>
                  <div className="relative shrink-0 text-grey-300 text-[18px] w-full max-w-[700px]">
                    <p className="block leading-[1.4]">
                      An elegant way of establishing visual hierarchy while creating some beautiful, smooth effects. Background blurs allow you to draw emphasis to a design element.
                    </p>
                  </div>
                </div>
                <div
                  className="box-border content-stretch flex flex-col gap-6 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-full max-w-[700px] flex-1"
                  data-name="Description"
                >
                  <div className="font-ibm-plex-sans-jp relative shrink-0 text-grey-50 text-heading-small tracking-[-0.48px] w-full">
                    <p className="adjustLetterSpacing block leading-[1.4]">
                      背景ぼかし
                    </p>
                  </div>
                  <div className="font-ibm-plex-sans-jp relative shrink-0 text-grey-300 text-[18px] w-full max-w-[700px]">
                    <p className="block leading-[1.4]">
                      美しく滑らかな効果を作り出しながら視覚的な階層を確立するエレガントな方法です。背景ぼかしは、特定のデザイン要素に注目を集める役割を果たします。
                    </p>
                  </div>
                </div>
              </div>

              {/* Blur Images Grid */}
              <div className="w-full">
                <div className="flex flex-wrap justify-start items-start" style={{ gap: '90px' }}>
                  <div className="relative">
                    <div className="bg-grey-900 rounded-lg overflow-hidden relative">
                      <img 
                        src="/assets/images/effects_blur_01.png" 
                        alt="Background Blur 001"
                        className="block"
                      />
                    </div>
                  </div>
                  <div className="relative">
                    <div className="bg-grey-900 rounded-lg overflow-hidden relative">
                      <img 
                        src="/assets/images/effects_blur_02.png" 
                        alt="Background Blur 002"
                        className="block"
                      />
                    </div>
                  </div>
                  <div className="relative">
                    <div className="bg-grey-900 rounded-lg overflow-hidden relative">
                      <img 
                        src="/assets/images/effects_blur_03.png" 
                        alt="Background Blur 003"
                        className="block"
                      />
                    </div>
                  </div>
                  <div className="relative">
                    <div className="bg-grey-900 rounded-lg overflow-hidden relative">
                      <img 
                        src="/assets/images/effects_blur_04.png" 
                        alt="Background Blur 004"
                        className="block"
                      />
                    </div>
                  </div>
                  <div className="relative">
                    <div className="bg-grey-900 rounded-lg overflow-hidden relative">
                      <img 
                        src="/assets/images/effects_blur_05.png" 
                        alt="Background Blur 005"
                        className="block"
                      />
                    </div>
                  </div>
                  <div className="relative">
                    <div className="bg-grey-900 rounded-lg overflow-hidden relative">
                      <img 
                        src="/assets/images/effects_blur_06.png" 
                        alt="Background Blur 006"
                        className="block"
                      />
                    </div>
                  </div>
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