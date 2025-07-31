'use client';
import React from 'react';
import Logo from '../../components/Logo';
import ScrollNavigation from '../../components/ScrollNavigation';

export default function ImageryPage() {
  return (
    <div className="bg-grey-900 min-h-screen">
      <div
        className="bg-grey-900 relative w-full min-h-screen"
        data-name="Imagery"
      >
        <div className="relative size-full">
          {/* Scroll Navigation */}
          <ScrollNavigation currentPage="imagery" />

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
                    <span className="font-host-grotesk not-italic text-grey-300">{` Imagery / Portraits`}</span>
                  </p>
                </div>
                <div className="relative shrink-0 text-display-xxl tracking-[-4.48px] w-full">
                  <h1 className="adjustLetterSpacing block leading-none" style={{ marginBottom: '30px' }}>
                    Portraits
                  </h1>
                </div>
              </div>
            </div>

            {/* Premium Avatars Section */}
            <div
              className="box-border content-stretch flex flex-col gap-20 items-start justify-start px-0 pt-[80px] pb-[100px] relative shrink-0 content-responsive"
              data-name="Premium Avatars"
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
                      Premium Avatars
                    </p>
                  </div>
                  <div className="relative shrink-0 text-grey-300 text-[18px] w-full">
                    <p className="block leading-[1.4]">
                      A set of stylish portraits
                    </p>
                  </div>
                </div>
                <div
                  className="box-border content-stretch flex flex-col gap-6 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-full max-w-[700px] flex-1"
                  data-name="Description"
                >
                  <div className="font-ibm-plex-sans-jp relative shrink-0 text-grey-50 text-heading-small tracking-[-0.48px] w-full">
                    <p className="adjustLetterSpacing block leading-[1.4]">
                      プレミアムアバター
                    </p>
                  </div>
                  <div className="font-ibm-plex-sans-jp relative shrink-0 text-grey-300 text-[18px] w-full">
                    <p className="block leading-[1.4]">
                      スタイリッシュなポートレートのセットです。
                    </p>
                  </div>
                </div>
              </div>

              {/* Avatar Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 md:gap-x-8 lg:gap-x-10 gap-y-20 w-full">
                <div className="relative aspect-square">
                  <img 
                    src="/assets/images/imagery_portraits_01.png" 
                    alt="Avatar 1"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="relative aspect-square">
                  <img 
                    src="/assets/images/imagery_portraits_02.png" 
                    alt="Avatar 2"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="relative aspect-square">
                  <img 
                    src="/assets/images/imagery_portraits_03.png" 
                    alt="Avatar 3"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="relative aspect-square">
                  <img 
                    src="/assets/images/imagery_portraits_04.png" 
                    alt="Avatar 4"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="relative aspect-square">
                  <img 
                    src="/assets/images/imagery_portraits_05.png" 
                    alt="Avatar 5"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="relative aspect-square">
                  <img 
                    src="/assets/images/imagery_portraits_06.png" 
                    alt="Avatar 6"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="relative aspect-square">
                  <img 
                    src="/assets/images/imagery_portraits_07.png" 
                    alt="Avatar 7"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="relative aspect-square">
                  <img 
                    src="/assets/images/imagery_portraits_08.png" 
                    alt="Avatar 8"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="relative aspect-square">
                  <img 
                    src="/assets/images/imagery_portraits_09.png" 
                    alt="Avatar 9"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="relative aspect-square">
                  <img 
                    src="/assets/images/imagery_portraits_10.png" 
                    alt="Avatar 10"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="relative aspect-square">
                  <img 
                    src="/assets/images/imagery_portraits_11.png" 
                    alt="Avatar 11"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="relative aspect-square">
                  <img 
                    src="/assets/images/imagery_portraits_12.png" 
                    alt="Avatar 12"
                    className="w-full h-full object-cover rounded-xl"
                  />
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