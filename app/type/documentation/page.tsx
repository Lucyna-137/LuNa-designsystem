'use client';
import React from 'react';
import Logo from '../../../components/Logo';
import ScrollNavigation from '../../../components/ScrollNavigation';

export default function TypeDocumentationPage() {
  return (
    <div className="bg-grey-900 min-h-screen">
      <div
        className="bg-grey-900 relative w-full min-h-screen"
        data-name="Type Documentation"
      >
        <div className="relative size-full">
          {/* Scroll Navigation */}
          <ScrollNavigation currentPage="type-documentation" />

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
                    <span className="font-host-grotesk not-italic text-grey-300">{` Typography / Documentation `}</span>
                  </p>
                </div>
                <div className="relative shrink-0 text-display-xxl tracking-[-4.48px] w-full">
                  <h1 className="adjustLetterSpacing block leading-none" style={{ marginBottom: '30px' }}>
                    Type Documentation
                  </h1>
                </div>
              </div>
            </div>

            {/* Fonts Used Section */}
            <div
              className="box-border content-stretch flex flex-col gap-20 items-start justify-start px-0 pt-[80px] pb-[100px] relative shrink-0 content-responsive"
              data-name="Fonts Used"
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
                      Fonts Used
                    </p>
                  </div>
                  <div className="relative shrink-0 text-grey-300 text-[18px] w-full">
                    <p className="block leading-[1.4]">
                      The font used throughout this system is Host Grotesk. You can access this font and{" "}
                      <a href="https://fonts.google.com/specimen/Host+Grotesk" target="_blank" rel="noopener noreferrer" className="text-[#4648ff] underline">
                        download it for free here.
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
                      選定フォント
                    </p>
                  </div>
                  <div className="font-ibm-plex-sans-jp relative shrink-0 text-grey-300 text-text-large w-full">
                    <p className="block leading-[1.4]">
                      このシステム全体で使用しているフォントは「Host Grotesk」です。{" "}
                      <a href="https://fonts.google.com/specimen/Host+Grotesk" target="_blank" rel="noopener noreferrer" className="text-[#4648ff] underline">
                        こちらのリンクから無料でダウンロード
                      </a>
                      してご利用いただけます。
                    </p>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="w-full">
                <img 
                  src="/assets/images/type_documentation_01.png" 
                  alt="Fonts Used"
                  className="w-full h-auto object-cover rounded-lg max-w-[1177px]"
                />
              </div>
            </div>

            {/* Accessing The Type Styles Section */}
            <div
              className="box-border content-stretch flex flex-col gap-20 items-start justify-start px-0 pt-[80px] pb-[100px] relative shrink-0 content-responsive"
              data-name="Accessing The Type Styles"
            >
              <div
                className="box-border content-stretch flex flex-col lg:flex-row gap-12 lg:gap-24 items-start justify-start p-0 relative shrink-0 w-full"
                data-name="Description"
              >
                <div
                  className="box-border content-stretch flex flex-col gap-6 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-full max-w-[700px] flex-1"
                  data-name="Description"
                >
                  <div className="relative shrink-0 text-grey-50 text-heading-medium tracking-[-0.64px] w-full">
                    <p className="adjustLetterSpacing block leading-[1.3]">
                      Accessing The Type Styles
                    </p>
                  </div>
                  <div className="relative shrink-0 text-grey-300 text-text-large w-full">
                    <p className="block leading-[1.4]">
                      All typography is saved as Styles in Figma and can be access from the menu on the right hand side.
                    </p>
                  </div>
                </div>
                <div
                  className="box-border content-stretch flex flex-col gap-6 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-full max-w-[700px] flex-1"
                  data-name="Description"
                >
                  <div className="font-ibm-plex-sans-jp relative shrink-0 text-grey-50 text-heading-small tracking-[-0.48px] w-full">
                    <p className="adjustLetterSpacing block leading-[1.4]">
                      タイプスタイルの使用方法
                    </p>
                  </div>
                  <div className="font-ibm-plex-sans-jp relative shrink-0 text-grey-300 text-text-large w-full">
                    <p className="block leading-[1.4]">
                      すべてのタイポグラフィはFigmaの「スタイル」として保存されており、右側のメニューから簡単にアクセスできます。
                    </p>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="w-full">
                <img 
                  src="/assets/images/type_documentation_02.png" 
                  alt="Accessing The Type Styles"
                  className="w-full h-auto object-cover rounded-lg max-w-[1177px]"
                />
              </div>
            </div>

            {/* Using The Typography Section */}
            <div
              className="box-border content-stretch flex flex-col gap-20 items-start justify-start px-0 pt-[80px] pb-[100px] relative shrink-0 content-responsive"
              data-name="Using The Typography"
            >
              <div
                className="box-border content-stretch flex flex-col lg:flex-row gap-12 lg:gap-24 items-start justify-start p-0 relative shrink-0 w-full"
                data-name="Description"
              >
                <div
                  className="box-border content-stretch flex flex-col gap-6 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-full max-w-[700px] flex-1"
                  data-name="Description"
                >
                  <div className="relative shrink-0 text-grey-50 text-heading-medium tracking-[-0.64px] w-full">
                    <p className="adjustLetterSpacing block leading-[1.3]">
                      Using The Typography
                    </p>
                  </div>
                  <div className="relative shrink-0 text-grey-300 text-text-large w-full">
                    <p className="block leading-[1.4]">
                      Once an element is selected in Figma, click on the Text Styles section on the right hand side and choose the appropriate type styles for your selection.
                    </p>
                  </div>
                </div>
                <div
                  className="box-border content-stretch flex flex-col gap-6 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-full max-w-[700px] flex-1"
                  data-name="Description"
                >
                  <div className="font-ibm-plex-sans-jp relative shrink-0 text-grey-50 text-heading-small tracking-[-0.48px] w-full">
                    <p className="adjustLetterSpacing block leading-[1.4]">
                      タイポグラフィの使い方
                    </p>
                  </div>
                  <div className="font-ibm-plex-sans-jp relative shrink-0 text-grey-300 text-text-large w-full">
                    <p className="block leading-[1.4]">
                      Figmaで要素を選択したら、右側の「テキストスタイル」セクションをクリックし、選択した要素に適したタイプスタイルを選んで適用してください。
                    </p>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="w-full">
                <img 
                  src="/assets/images/type_documentation_03.png" 
                  alt="Using The Typography"
                  className="w-full h-auto object-cover rounded-lg max-w-[1177px]"
                />
              </div>
            </div>

            {/* Updating The Type Section */}
            <div
              className="box-border content-stretch flex flex-col gap-20 items-start justify-start px-0 pt-[80px] pb-[100px] relative shrink-0 content-responsive"
              data-name="Updating The Type"
            >
              <div
                className="box-border content-stretch flex flex-col lg:flex-row gap-12 lg:gap-24 items-start justify-start p-0 relative shrink-0 w-full"
                data-name="Description"
              >
                <div
                  className="box-border content-stretch flex flex-col gap-6 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-full max-w-[700px] flex-1"
                  data-name="Description"
                >
                  <div className="relative shrink-0 text-grey-50 text-heading-medium tracking-[-0.64px] w-full">
                    <p className="adjustLetterSpacing block leading-[1.3]">
                      Updating The Type
                    </p>
                  </div>
                  <div className="relative shrink-0 text-grey-300 text-text-large w-full">
                    <p className="block leading-[1.4]">
                      If you would like to modify and update the type, you can edit local styles from the right sidebar and from the style picker. Hover over the style, then click the style adjust icon when it appears.
                    </p>
                  </div>
                </div>
                <div
                  className="box-border content-stretch flex flex-col gap-6 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-full max-w-[700px] flex-1"
                  data-name="Description"
                >
                  <div className="font-ibm-plex-sans-jp relative shrink-0 text-grey-50 text-heading-small tracking-[-0.48px] w-full">
                    <p className="adjustLetterSpacing block leading-[1.4]">
                      タイポグラフィの更新方法
                    </p>
                  </div>
                  <div className="font-ibm-plex-sans-jp relative shrink-0 text-grey-300 text-text-large w-full">
                    <p className="block leading-[1.4]">
                      フォントスタイルを変更・更新したい場合は、右側のサイドバーやスタイルピッカーからローカルスタイルを編集できます。スタイルの上にカーソルを合わせると編集アイコンが表示されるので、クリックして調整してください。
                    </p>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="w-full">
                <img 
                  src="/assets/images/type_documentation_04.png" 
                  alt="Updating The Type"
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