import React from 'react';
import Link from 'next/link';
import Logo from '../../../components/Logo';
import ScrollNavigation from '../../../components/ScrollNavigation';

export default function LogoWikiPage() {
  return (
    <div className="bg-grey-900 min-h-screen">
      <div
        className="bg-grey-900 relative w-full min-h-screen"
        data-name="Logo Wiki Page"
      >
        <div className="relative size-full">
          {/* Scroll Navigation */}
          <ScrollNavigation currentPage="logo-wiki" />

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
                  <span className="font-host-grotesk not-italic text-grey-300">{` Logo / Logo Wiki`}</span>
                </p>
              </div>
              <div className="relative shrink-0 text-display-xxl tracking-[-4.48px] w-full">
                <h1 className="adjustLetterSpacing block leading-none">
                  Logo Wiki
                </h1>
              </div>
            </div>
          </div>

          {/* Our Logo Section */}
          <div
            className="box-border content-stretch flex flex-col gap-20 items-start justify-start px-0 py-[100px] relative shrink-0 content-responsive"
            data-name="Our Logo"
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
                    Our Logo
                  </p>
                </div>
                <div className="relative shrink-0 text-grey-300 text-[18px] w-full">
                  <p className="block leading-[1.4]">
                    Use this area to enter some description details about your logo, pointing out key features of it's form and the meaning behind its construction.
                  </p>
                </div>
              </div>
              <div
                className="box-border content-stretch flex flex-col gap-6 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-full max-w-[700px] flex-1"
                data-name="Description"
              >
                <div className="font-ibm-plex-sans-jp relative shrink-0 text-grey-50 text-heading-small tracking-[-0.48px] w-full">
                  <p className="adjustLetterSpacing block leading-[1.4]">
                    私たちのロゴ
                  </p>
                </div>
                <div className="font-ibm-plex-sans-jp relative shrink-0 text-grey-300 text-[18px] w-full">
                  <p className="block leading-[1.4]">
                    このセクションでは、ロゴの形状の特徴やデザインに込めた意味など、ロゴに関する説明を記載できます。
                  </p>
                </div>
              </div>
            </div>
            <div
              className="box-border content-stretch flex flex-col items-center justify-center p-0 relative  shrink-0 w-full h-auto"
              data-name="Logo"
            >
              <img
                src="/assets/images/Logo_wiki_01.png"
                alt="LuNa Logo"
                className="block w-full h-auto"
                style={{ 
                  objectFit: 'contain',
                  display: 'block',
                  flexShrink: 0
                }}
              />
            </div>
          </div>

          {/* Logo Construction Section */}
          <div
            className="box-border content-stretch flex flex-col gap-20 items-start justify-start px-0 py-[100px] relative shrink-0 content-responsive"
            data-name="Construction"
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
                    Logo Construction
                  </p>
                </div>
                <div className="relative shrink-0 text-grey-300 text-[18px] w-full">
                  <p className="block leading-[1.4]">
                    Use this area to discuss intricate details and decisions behind your logo's construction and form. You could overlay grid lines to show the thinking behind it's design.
                  </p>
                </div>
              </div>
              <div
                className="box-border content-stretch flex flex-col gap-6 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-full max-w-[700px] flex-1"
                data-name="Description"
              >
                <div className="font-ibm-plex-sans-jp relative shrink-0 text-grey-50 text-heading-small tracking-[-0.48px] w-full">
                  <p className="adjustLetterSpacing block leading-[1.4]">
                    ロゴ構成
                  </p>
                </div>
                <div className="font-ibm-plex-sans-jp relative shrink-0 text-grey-300 text-[18px] w-full">
                  <p className="block leading-[1.4]">
                    このセクションでは、ロゴの構成や形状に込めた細かなこだわりやデザイン上の意図について説明できます。グリッドラインを重ねて、デザインの考え方を視覚的に示すのもおすすめです。
                  </p>
                </div>
              </div>
            </div>
            <div
              className="box-border content-stretch flex flex-col gap-6 items-start justify-start p-0 relative shrink-0"
              data-name="Construction Elements"
            >
              <div
                className="box-border content-stretch flex flex-col gap-5 items-start justify-start p-0 relative shrink-0"
                data-name="Mark Construction"
              >
                <div
                  className="box-border content-stretch flex flex-col items-center justify-center p-0 relative  shrink-0 w-full h-auto"
                  data-name="Image"
                >
                  <img
                    src="/assets/images/Logo_wiki_02.png"
                    alt="Logo Mark Construction"
                    className="block w-full h-auto"
                    style={{ 
                      objectFit: 'contain',
                      display: 'block',
                      flexShrink: 0
                    }}
                  />
                </div>
              </div>
              <div
                className="box-border content-stretch flex flex-col gap-5 items-start justify-start p-0 relative shrink-0"
                data-name="Full Construction"
              >
                <div
                  className="box-border content-stretch flex flex-col items-center justify-center p-0 relative  shrink-0 w-full h-auto"
                  data-name="Image"
                >
                  <img
                    src="/assets/images/Logo_wiki_03.png"
                    alt="Logo Full Construction"
                    className="block w-full h-auto"
                    style={{ 
                      objectFit: 'contain',
                      display: 'block',
                      flexShrink: 0
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Clearspace Section */}
          <div
            className="box-border content-stretch flex flex-col gap-20 items-start justify-start px-0 py-[100px] relative shrink-0 content-responsive"
            data-name="Clearspace"
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
                    Clearspace
                  </p>
                </div>
                <div className="relative shrink-0 text-grey-300 text-[18px] w-full">
                  <p className="block leading-[1.4]">
                    The area around our logo should provide ample breathing room so that it does not get crowded by external elements.
                  </p>
                </div>
              </div>
              <div
                className="box-border content-stretch flex flex-col gap-6 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-full max-w-[700px] flex-1"
                data-name="Description"
              >
                <div className="font-ibm-plex-sans-jp relative shrink-0 text-grey-50 text-heading-small tracking-[-0.48px] w-full">
                  <p className="adjustLetterSpacing block leading-[1.4]">
                    クリアスペース
                  </p>
                </div>
                <div className="font-ibm-plex-sans-jp relative shrink-0 text-grey-300 text-[18px] w-full">
                  <p className="block leading-[1.4]">
                    ロゴの周りには十分な余白（クリアスペース）を確保し、外部の要素に圧迫されないように保ちます。
                  </p>
                </div>
              </div>
            </div>
            <div
              className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
              data-name="Clearspace"
            >
              <div
                className="box-border content-stretch flex flex-col items-center justify-center p-0 relative  shrink-0 w-full h-auto"
                data-name="Image"
              >
                <img
                  src="/assets/images/Logo_wiki_04.png"
                  alt="Logo Clearspace"
                  className="block w-full h-auto"
                  style={{ 
                    objectFit: 'contain',
                    display: 'block',
                    flexShrink: 0
                  }}
                />
              </div>
            </div>
          </div>

          {/* Color Section */}
          <div
            className="box-border content-stretch flex flex-col gap-20 items-start justify-start px-0 py-[100px] relative shrink-0 content-responsive"
            data-name="Color"
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
                    Color
                  </p>
                </div>
                <div className="relative shrink-0 text-grey-300 text-[18px] w-full">
                  <p className="block leading-[1.4]">
                    Insert details about your logo color here - describing preference for using your logo on preferred color backgrounds.
                  </p>
                </div>
              </div>
              <div
                className="box-border content-stretch flex flex-col gap-6 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-full max-w-[700px] flex-1"
                data-name="Description"
              >
                <div className="font-ibm-plex-sans-jp relative shrink-0 text-grey-50 text-heading-small tracking-[-0.48px] w-full">
                  <p className="adjustLetterSpacing block leading-[1.4]">
                    カラー
                  </p>
                </div>
                <div className="font-ibm-plex-sans-jp relative shrink-0 text-grey-300 text-[18px] w-full">
                  <p className="block leading-[1.4]">
                    このセクションでは、ロゴのカラーに関する詳細を記載します。特に、どの背景色での使用が推奨されるかについて説明してください。
                  </p>
                </div>
              </div>
            </div>
            <div
              className="box-border content-stretch flex flex-col gap-[30px] items-start justify-start p-0 relative shrink-0"
              data-name="Color Grid"
            >
              <div
                className="box-border content-stretch flex flex-row gap-5 items-start justify-start p-0 relative shrink-0"
                data-name="Side By Side"
              >
                <div
                  className="box-border content-stretch flex flex-col items-center justify-center p-0 relative  shrink-0 w-1/2 h-auto"
                  data-name="Image"
                >
                  <img
                    src="/assets/images/Logo_wiki_05.png"
                    alt="Logo Color - Black Background"
                    className="block w-full h-auto"
                    style={{ 
                      objectFit: 'contain',
                      display: 'block',
                      flexShrink: 0
                    }}
                  />
                </div>
                <div
                  className="box-border content-stretch flex flex-col items-center justify-center p-0 relative  shrink-0 w-1/2 h-auto"
                  data-name="Image"
                >
                  <img
                    src="/assets/images/Logo_wiki_06.png"
                    alt="Logo Color - White Background"
                    className="block w-full h-auto"
                    style={{ 
                      objectFit: 'contain',
                      display: 'block',
                      flexShrink: 0
                    }}
                  />
                </div>
              </div>
              <div
                className="box-border content-stretch flex flex-row gap-5 items-start justify-start p-0 relative shrink-0"
                data-name="Side By Side"
              >
                <div
                  className="box-border content-stretch flex flex-col items-center justify-center p-0 relative  shrink-0 w-1/2 h-auto"
                  data-name="Image"
                >
                  <img
                    src="/assets/images/Logo_wiki_07.png"
                    alt="Logo Color - Blue Background"
                    className="block w-full h-auto"
                    style={{ 
                      objectFit: 'contain',
                      display: 'block',
                      flexShrink: 0
                    }}
                  />
                </div>
                <div
                  className="box-border content-stretch flex flex-col items-center justify-center p-0 relative  shrink-0 w-1/2 h-auto"
                  data-name="Image"
                >
                  <img
                    src="/assets/images/Logo_wiki_08.png"
                    alt="Logo Color - Gradient Background"
                    className="block w-full h-auto"
                    style={{ 
                      objectFit: 'contain',
                      display: 'block',
                      flexShrink: 0
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Avatar Section */}
          <div
            className="box-border content-stretch flex flex-col gap-20 items-start justify-start px-0 py-[100px] relative shrink-0 content-responsive"
            data-name="Avatar"
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
                    Avatar
                  </p>
                </div>
                <div className="relative shrink-0 text-grey-300 text-[18px] w-full">
                  <p className="block leading-[1.4]">
                    Insert details about your logo avatar here - describing preference for using your logo on preferred color backgrounds.
                  </p>
                </div>
              </div>
              <div
                className="box-border content-stretch flex flex-col font-ibm-plex-sans-jp font-normal gap-6 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-full max-w-[700px] flex-1"
                data-name="Description"
              >
                <div className="relative shrink-0 text-grey-50 text-heading-small tracking-[-0.48px] w-full">
                  <p className="adjustLetterSpacing block leading-[1.4]">
                    アバター
                  </p>
                </div>
                <div className="relative shrink-0 text-grey-300 text-[18px] w-full">
                  <p className="block leading-[1.4]">
                    このセクションでは、ロゴアバターに関する詳細を記載します。特に、どの背景色で使用するのが望ましいかについて説明してください。
                  </p>
                </div>
              </div>
            </div>
            <div
              className="box-border content-stretch flex flex-col gap-6 items-start justify-start p-0 relative shrink-0"
              data-name="Avatar Images"
            >
              <div
                className="box-border content-stretch flex flex-col items-center justify-center p-0 relative  shrink-0 w-full h-auto"
                data-name="Image"
              >
                <img
                  src="/assets/images/Logo_wiki_09.png"
                  alt="Avatar Examples"
                  className="block w-full h-auto"
                  style={{ 
                    objectFit: 'contain',
                    display: 'block',
                    flexShrink: 0
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