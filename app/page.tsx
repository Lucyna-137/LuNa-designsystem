import React from 'react';
import Link from 'next/link';
import Logo from '../components/Logo';
import ScrollNavigation from '../components/ScrollNavigation';
import Footer from '../components/Footer';

export default function GettingStarted() {
  return (
    <div className="bg-grey-900 min-h-screen">
      <div
        className="bg-grey-900 relative w-full min-h-screen"
        data-name="Getting Started"
      >
        <div className="relative size-full">
          {/* Scroll Navigation */}
          <ScrollNavigation currentPage="home" />

          {/* Main Content */}
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
                  <span>Hello /</span>
                  <span className="font-host-grotesk not-italic text-grey-300">{` Getting Started `}</span>
                </p>
              </div>
              <div className="relative shrink-0 text-display-xxl tracking-[-4.48px] w-full">
                <h1 className="adjustLetterSpacing block leading-none">
                  Getting Started
                </h1>
              </div>
            </div>
          </div>

          {/* Core Section */}
          <div
            className="box-border content-stretch flex flex-col gap-20 items-start justify-start px-0 py-[100px] relative shrink-0 content-responsive"
            data-name="Core"
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
                    1. Core Brand Elements
                  </p>
                </div>
                <div className="relative shrink-0 text-grey-300 text-[18px] w-full">
                  <p className="block leading-[1.4]">
                    'Core' contains all of your foundational brand elements such as logo, color, typography, icons, imagery, grids & effects. Everything in 'Core' are saved as styles or components - so if you want update any of your brand elements, update it here and it will auto-update everywhere else.
                  </p>
                </div>
              </div>
              <div
                className="box-border content-stretch flex flex-col gap-6 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-full max-w-[700px] flex-1"
                data-name="Description"
              >
                <div className="font-ibm-plex-sans-jp relative shrink-0 text-grey-50 text-heading-small tracking-[-0.48px] w-full">
                  <p className="adjustLetterSpacing block leading-[1.4]">
                    1. コア・ブランド要素
                  </p>
                </div>
                <div className="font-ibm-plex-sans-jp relative shrink-0 text-grey-300 text-[18px] w-full">
                  <p className="block leading-[1.4]">
                    「コア」にはロゴ、カラー、タイポグラフィ、アイコン、イメージ、グリッドやエフェクトなど、ブランドの基礎となる要素がすべて含まれています。「コア」の中の要素はすべてスタイルやコンポーネントとして保存されているため、ブランド要素を変更したいときはここを更新すれば、他のすべての場所でも自動的に更新されます。
                  </p>
                </div>
              </div>
            </div>
            <div
              className="box-border content-stretch flex flex-col items-center justify-center p-0 relative rounded-[10px] shrink-0 w-full h-auto"
              data-name="Image"
            >
              <img
                src="/assets/images/home_started_01.png"
                alt="Core Brand Elements"
                className="block rounded-[10px] w-full h-auto"
                style={{ 
                  objectFit: 'contain',
                  display: 'block',
                  flexShrink: 0
                }}
              />
            </div>
          </div>

          {/* Guidelines Section */}
          <div
            className="box-border content-stretch flex flex-col gap-20 items-start justify-start px-0 py-[100px] relative shrink-0 content-responsive"
            data-name="Guidelines"
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
                    2. Brand Guidelines
                  </p>
                </div>
                <div className="relative shrink-0 text-grey-300 text-[18px] w-full">
                  <p className="block leading-[1.4]">
                    The brand guidelines section takes all of your core brand elements and packages them into presentable items, in the form of a Brand Book and Brand Wiki.
                  </p>
                </div>
              </div>
              <div
                className="box-border content-stretch flex flex-col gap-6 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-full max-w-[700px] flex-1"
                data-name="Description"
              >
                <div className="font-ibm-plex-sans-jp relative shrink-0 text-grey-50 text-heading-small tracking-[-0.48px] w-full">
                  <p className="adjustLetterSpacing block leading-[1.4]">
                    2. ブランドガイドライン
                  </p>
                </div>
                <div className="font-ibm-plex-sans-jp relative shrink-0 text-grey-300 text-[18px] w-full">
                  <p className="block leading-[1.4]">
                    ブランドガイドラインのセクションでは、コア・ブランド要素をまとめて「ブランドブック」や「ブランドウィキ」の形でわかりやすく整理・提示します。
                  </p>
                </div>
              </div>
            </div>
            <div
              className="box-border content-stretch flex flex-col items-center justify-center p-0 relative rounded-[10px] shrink-0 w-full h-auto"
              data-name="Image"
            >
              <img
                src="/assets/images/home_started_02.png"
                alt="Brand Guidelines"
                className="block rounded-[10px] w-full h-auto"
                style={{ 
                  objectFit: 'contain',
                  display: 'block',
                  flexShrink: 0
                }}
              />
            </div>
            <div
              className="box-border content-stretch flex flex-col items-center justify-center p-0 relative rounded-[10px] shrink-0 w-full h-auto"
              data-name="Image"
            >
              <img
                src="/assets/images/home_started_03.png"
                alt="Brand Guidelines - Wiki"
                className="block rounded-[10px] w-full h-auto"
                style={{ 
                  objectFit: 'contain',
                  display: 'block',
                  flexShrink: 0
                }}
              />
            </div>
          </div>

          {/* Components Section */}
          <div
            className="box-border content-stretch flex flex-col gap-20 items-start justify-start px-0 py-[100px] relative shrink-0 content-responsive"
            data-name="Components"
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
                    3. Basic Components
                  </p>
                </div>
                <div className="relative shrink-0 text-grey-300 text-[18px] w-full">
                  <p className="block leading-[1.4]">
                    Although this is not a UI Kit, there are some basic brand components included such as button variations, badges and input fields. Feel free to build out this component library to your brands needs.
                  </p>
                </div>
              </div>
              <div
                className="box-border content-stretch flex flex-col gap-6 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-full max-w-[700px] flex-1"
                data-name="Description"
              >
                <div className="font-ibm-plex-sans-jp relative shrink-0 text-grey-50 text-heading-small tracking-[-0.64px] w-full">
                  <p className="adjustLetterSpacing block leading-[1.4]">
                    3. 基本コンポーネント
                  </p>
                </div>
                <div className="font-ibm-plex-sans-jp relative shrink-0 text-grey-300 text-[18px] w-full">
                  <p className="block leading-[1.4]">
                    これはUIキットではありませんが、ボタンのバリエーションやバッジ、入力フィールドなど、基本的なブランド用コンポーネントがいくつか含まれています。ブランドのニーズに合わせて、このコンポーネントライブラリを自由に拡張してください。
                  </p>
                </div>
              </div>
            </div>
            <div
              className="box-border content-stretch flex flex-col items-center justify-center p-0 relative rounded-[10px] shrink-0 w-full h-auto"
              data-name="Image"
            >
              <img
                src="/assets/images/home_started_04.png"
                alt="Basic Components"
                className="block rounded-[10px] w-full h-auto"
                style={{ 
                  objectFit: 'contain',
                  display: 'block',
                  flexShrink: 0
                }}
              />
            </div>
          </div>

          {/* Browsers & Devices Section */}
          <div
            className="box-border content-stretch flex flex-col gap-20 items-start justify-start px-0 py-[100px] relative shrink-0 content-responsive"
            data-name="Browsers & Devices"
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
                    4. Browsers & Devices
                  </p>
                </div>
                <div className="relative shrink-0 text-grey-300 text-[18px] w-full">
                  <p className="block leading-[1.4]">
                    Contains a set of clean, abstract browsers and devices.
                  </p>
                </div>
              </div>
              <div
                className="box-border content-stretch flex flex-col gap-6 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-full max-w-[700px] flex-1"
                data-name="Description"
              >
                <div className="font-ibm-plex-sans-jp relative shrink-0 text-grey-50 text-heading-small tracking-[-0.48px] w-full">
                  <p className="adjustLetterSpacing block leading-[1.4]">
                    4. ブラウザ＆デバイス
                  </p>
                </div>
                <div className="font-ibm-plex-sans-jp relative shrink-0 text-grey-300 text-[18px] w-full">
                  <p className="block leading-[1.4]">
                    シンプルで抽象的なブラウザやデバイスのセットが含まれています。
                  </p>
                </div>
              </div>
            </div>
            <div
              className="box-border content-stretch flex flex-col items-center justify-center p-0 relative rounded-[10px] shrink-0 w-full h-auto"
              data-name="Image"
            >
              <img
                src="/assets/images/home_started_05.png"
                alt="Browsers & Devices"
                className="block rounded-[10px] w-full h-auto"
                style={{ 
                  objectFit: 'contain',
                  display: 'block',
                  flexShrink: 0
                }}
              />
            </div>
          </div>

          {/* Social Templates Section */}
          <div
            className="box-border content-stretch flex flex-col gap-20 items-start justify-start px-0 py-[100px] relative shrink-0 content-responsive"
            data-name="Social"
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
                    5. Social Templates
                  </p>
                </div>
                <div className="relative shrink-0 text-grey-300 text-[18px] w-full">
                  <p className="block leading-[1.4]">
                    Contains a set of placeholder designs with various social post options for Instagram, Facebook and X(Twitter) along with UI mockups.
                  </p>
                </div>
              </div>
              <div
                className="box-border content-stretch flex flex-col gap-6 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-full max-w-[700px] flex-1"
                data-name="Description"
              >
                <div className="font-ibm-plex-sans-jp relative shrink-0 text-grey-50 text-heading-small tracking-[-0.48px] w-full">
                  <p className="adjustLetterSpacing block leading-[1.4]">
                    5. ソーシャルテンプレート
                  </p>
                </div>
                <div className="font-ibm-plex-sans-jp relative shrink-0 text-grey-300 text-[18px] w-full">
                  <p className="block leading-[1.4]">
                    Instagram、Facebook、X（旧Twitter）向けのさまざまな投稿パターンやUIモックアップを含む、プレースホルダー用デザインのセットが収録されています。
                  </p>
                </div>
              </div>
            </div>
            <div
              className="box-border content-stretch flex flex-col items-center justify-center p-0 relative rounded-[10px] shrink-0 w-full h-auto"
              data-name="Image"
            >
              <img
                src="/assets/images/home_started_06.png"
                alt="Social Templates"
                className="block rounded-[10px] w-full h-auto"
                style={{ 
                  objectFit: 'contain',
                  display: 'block',
                  flexShrink: 0
                }}
              />
            </div>
          </div>

          {/* Email UI Section */}
          <div
            className="box-border content-stretch flex flex-col gap-20 items-start justify-start px-0 py-[100px] relative shrink-0 content-responsive"
            data-name="Email UI"
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
                    6. Email UI
                  </p>
                </div>
                <div className="relative shrink-0 text-grey-300 text-[18px] w-full">
                  <p className="block leading-[1.4]">
                    Contains 2 pre-built email designs, along with Gmail UI placeholder.
                  </p>
                </div>
              </div>
              <div
                className="box-border content-stretch flex flex-col gap-6 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-full max-w-[700px] flex-1"
                data-name="Description"
              >
                <div className="font-ibm-plex-sans-jp relative shrink-0 text-grey-50 text-heading-small tracking-[-0.64px] w-full">
                  <p className="adjustLetterSpacing block leading-[1.4]">
                    6. メールUI
                  </p>
                </div>
                <div className="font-ibm-plex-sans-jp relative shrink-0 text-grey-300 text-[18px] w-full">
                  <p className="block leading-[1.4]">
                    GmailのUIプレースホルダーと共に、あらかじめデザインされた2種類のメールテンプレートが含まれています。
                  </p>
                </div>
              </div>
            </div>
            <div
              className="box-border content-stretch flex flex-col items-center justify-center p-0 relative rounded-[10px] shrink-0 w-full h-auto"
              data-name="Image"
            >
              <img
                src="/assets/images/home_started_07.png"
                alt="Email UI"
                className="block rounded-[10px] w-full h-auto"
                style={{ 
                  objectFit: 'contain',
                  display: 'block',
                  flexShrink: 0
                }}
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