'use client';
import React from 'react';
import Logo from '../../../components/Logo';
import ScrollNavigation from '../../../components/ScrollNavigation';
import Footer from '../../../components/Footer';

export default function TexturesPage() {
  return (
    <div className="bg-grey-900 min-h-screen">
      <div
        className="bg-grey-900 relative w-full min-h-screen"
        data-name="Imagery / Textures"
      >
        <div className="relative size-full">
          {/* Scroll Navigation */}
          <ScrollNavigation currentPage="textures" />

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
                    <span className="font-host-grotesk not-italic text-grey-300">{` Imagery / Textures`}</span>
                  </p>
                </div>
                <div className="relative shrink-0 text-display-xxl tracking-[-4.48px] w-full">
                  <h1 className="adjustLetterSpacing block leading-none" style={{ marginBottom: '30px' }}>
                    Textures
                  </h1>
                </div>
              </div>
            </div>

            {/* Premium Textures Section */}
            <div
              className="box-border content-stretch flex flex-col gap-20 items-start justify-start px-0 pt-[80px] pb-[100px] relative shrink-0 content-responsive"
              data-name="Premium Textures"
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
                      Premium Textures
                    </p>
                  </div>
                  <div className="relative shrink-0 text-grey-300 text-[18px] w-full">
                    <p className="block leading-[1.4]">
                      A set of Beautiful textures
                    </p>
                  </div>
                </div>
                <div
                  className="box-border content-stretch flex flex-col gap-6 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-full max-w-[700px] flex-1"
                  data-name="Description"
                >
                  <div className="font-ibm-plex-sans-jp relative shrink-0 text-grey-50 text-heading-small tracking-[-0.48px] w-full">
                    <p className="adjustLetterSpacing block leading-[1.4]">
                      プレミアムテクスチャ
                    </p>
                  </div>
                  <div className="font-ibm-plex-sans-jp relative shrink-0 text-grey-300 text-[18px] w-full">
                    <p className="block leading-[1.4]">
                      美しいテクスチャのセットです。
                    </p>
                  </div>
                </div>
              </div>

              {/* Texture Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 md:gap-x-8 lg:gap-x-10 gap-y-20 w-full">
                <div className="relative aspect-square">
                  <img 
                    src="/assets/images/imagery_textures_01.png" 
                    alt="Texture 1"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="relative aspect-square">
                  <img 
                    src="/assets/images/imagery_textures_02.png" 
                    alt="Texture 2"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="relative aspect-square">
                  <img 
                    src="/assets/images/imagery_textures_03.png" 
                    alt="Texture 3"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="relative aspect-square">
                  <img 
                    src="/assets/images/imagery_textures_04.png" 
                    alt="Texture 4"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="relative aspect-square">
                  <img 
                    src="/assets/images/imagery_textures_05.png" 
                    alt="Texture 5"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="relative aspect-square">
                  <img 
                    src="/assets/images/imagery_textures_06.png" 
                    alt="Texture 6"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="relative aspect-square">
                  <img 
                    src="/assets/images/imagery_textures_07.png" 
                    alt="Texture 7"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="relative aspect-square">
                  <img 
                    src="/assets/images/imagery_textures_08.png" 
                    alt="Texture 8"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="relative aspect-square">
                  <img 
                    src="/assets/images/imagery_textures_09.png" 
                    alt="Texture 9"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="relative aspect-square">
                  <img 
                    src="/assets/images/imagery_textures_10.png" 
                    alt="Texture 10"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="relative aspect-square">
                  <img 
                    src="/assets/images/imagery_textures_11.png" 
                    alt="Texture 11"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="relative aspect-square">
                  <img 
                    src="/assets/images/imagery_textures_12.png" 
                    alt="Texture 12"
                    className="w-full h-full object-cover rounded-xl"
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