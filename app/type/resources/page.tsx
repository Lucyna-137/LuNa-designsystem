'use client';
import React from 'react';
import Logo from '../../../components/Logo';
import ScrollNavigation from '../../../components/ScrollNavigation';

export default function TypeResourcesPage() {
  return (
    <div className="bg-grey-900 min-h-screen">
      <div
        className="bg-grey-900 relative w-full min-h-screen"
        data-name="Type Resources"
      >
        <div className="relative size-full">
          {/* Scroll Navigation */}
          <ScrollNavigation currentPage="type-resources" />

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
                    <span className="font-host-grotesk not-italic text-grey-300">{` Typography / Resources `}</span>
                  </p>
                </div>
                <div className="relative shrink-0 text-display-xxl tracking-[-4.48px] w-full">
                  <h1 className="adjustLetterSpacing block leading-none" style={{ marginBottom: '30px' }}>
                    Type Resources
                  </h1>
                </div>
              </div>
            </div>

            {/* Web Resources Section */}
            <div
              className="box-border content-stretch flex flex-col gap-20 items-start justify-start px-0 pt-[80px] pb-[100px] relative shrink-0 content-responsive"
              data-name="Web Resources"
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
                      Web Resources
                    </p>
                  </div>
                  <div className="relative shrink-0 text-grey-300 text-[18px] w-full">
                    <p className="block leading-[1.4]">
                      There are a lot of resources online whe it comes to typography, best practices and accessibility. Here are a few that we like:
                    </p>
                  </div>
                </div>
                <div
                  className="box-border content-stretch flex flex-col gap-6 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-full max-w-[700px] flex-1"
                  data-name="Description"
                >
                  <div className="font-ibm-plex-sans-jp relative shrink-0 text-grey-50 text-heading-small tracking-[-0.48px] w-full">
                    <p className="adjustLetterSpacing block leading-[1.4]">
                      ウェブリソース
                    </p>
                  </div>
                  <div className="font-ibm-plex-sans-jp relative shrink-0 text-grey-300 text-[18px] w-full">
                    <p className="block leading-[1.4]">
                      タイポグラフィのベストプラクティスやアクセシビリティに関しては、オンライン上に多くの参考資料があります。ここでは、私たちがおすすめするものをいくつか紹介します。
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="box-border content-stretch flex flex-col gap-20 items-start justify-start p-0 relative shrink-0 w-full"
                data-name="Resources"
              >
                {/* First Row */}
                <div className="flex flex-col lg:flex-row gap-5 w-full">
                  {/* Apple Type Guide */}
                  <div
                    className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 flex-1 min-w-0"
                    data-name="Apple Type Guide"
                  >
                    <div className="relative w-full">
                      <img
                        src="/assets/images/type_resources_01.png"
                        alt="Apple Type Guide Screenshot"
                        className="w-full h-auto max-w-full"
                      />
                    </div>
                    <div className="flex flex-col gap-[7px] w-full">
                      <a
                        href="https://developer.apple.com/design/human-interface-guidelines/typography"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-['Poppins',_sans-serif] font-normal text-grey-50 text-[24px] tracking-[-0.48px] leading-[1.4] underline cursor-pointer block"
                      >
                        Apple Type Guide
                      </a>
                      <div className="font-host-grotesk font-normal text-[#A3A4B5] text-[24px] tracking-[-0.48px] leading-[1.4] w-full max-w-[421px] mb-8">
                        <p>A great resource on best practices and type standards from Apple</p>
                      </div>
                      <div className="font-ibm-plex-sans-jp font-normal text-[#A3A4B5] text-[18px] leading-[1.4] w-full max-w-[500px]">
                        <p>Appleが提供する、タイポグラフィのベストプラクティスと標準に関する優れた参考資料です。</p>
                      </div>
                    </div>
                  </div>

                  {/* Material Design Typography */}
                  <div
                    className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 flex-1 min-w-0"
                    data-name="Material Design Typography"
                  >
                    <div className="relative w-full">
                      <img
                        src="/assets/images/type_resources_02.png"
                        alt="Material Design Typography Screenshot"
                        className="w-full h-auto max-w-full"
                      />
                    </div>
                    <div className="flex flex-col gap-[7px] w-full">
                      <a
                        href="https://m3.material.io/styles/typography/overview"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-['Poppins',_sans-serif] font-normal text-grey-50 text-[24px] tracking-[-0.48px] leading-[1.4] underline cursor-pointer block"
                      >
                        Material Design Typography
                      </a>
                      <div className="font-host-grotesk font-normal text-[#A3A4B5] text-[24px] tracking-[-0.48px] leading-[1.4] w-full max-w-[421px] mb-8">
                        <p>Google's best practices and methodology for type</p>
                      </div>
                      <div className="font-ibm-plex-sans-jp font-normal text-[#A3A4B5] text-[18px] leading-[1.4] w-full max-w-[500px]">
                        <p>Googleが提唱するタイポグラフィのベストプラクティスとメソッドです。</p>
                      </div>
                    </div>
                  </div>

                  {/* Brand Mastery Course */}
                  <div
                    className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 flex-1 min-w-0"
                    data-name="Brand Mastery Course"
                  >
                    <div className="relative w-full">
                      <img
                        src="/assets/images/type_resources_03.png"
                        alt="Brand Mastery Course Screenshot"
                        className="w-full h-auto max-w-full"
                      />
                    </div>
                    <div className="flex flex-col gap-[7px] w-full">
                      <a
                        href="https://brandkitpro.framer.website/course"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-['Poppins',_sans-serif] font-normal text-grey-50 text-[24px] tracking-[-0.48px] leading-[1.4] underline cursor-pointer block"
                      >
                        Brand Mastery Course
                      </a>
                      <div className="font-host-grotesk font-normal text-[#A3A4B5] text-[24px] tracking-[-0.48px] leading-[1.4] w-full max-w-[421px] mb-8">
                        <p>A course built to show a step by step process of building a brand.</p>
                      </div>
                      <div className="font-ibm-plex-sans-jp font-normal text-[#A3A4B5] text-[18px] leading-[1.4] w-full max-w-[500px]">
                        <p>ブランド構築のプロセスをステップ・バイ・ステップで学べるコースです。</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Second Row */}
                <div className="flex flex-col lg:flex-row gap-5 w-full">
                  {/* Typewolf */}
                  <div
                    className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 flex-1 min-w-0"
                    data-name="Typewolf"
                  >
                    <div className="relative w-full">
                      <img
                        src="/assets/images/type_resources_04.png"
                        alt="Typewolf Screenshot"
                        className="w-full h-auto max-w-full"
                      />
                    </div>
                    <div className="flex flex-col gap-[7px] w-full">
                      <a
                        href="https://www.typewolf.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-['Poppins',_sans-serif] font-normal text-grey-50 text-[24px] tracking-[-0.48px] leading-[1.4] underline cursor-pointer block"
                      >
                        Typewolf
                      </a>
                      <div className="font-host-grotesk font-normal text-[#A3A4B5] text-[24px] tracking-[-0.48px] leading-[1.4] w-full max-w-[421px] mb-8">
                        <p>A nice resource to see what's trending in typography.</p>
                      </div>
                      <div className="font-ibm-plex-sans-jp font-normal text-[#A3A4B5] text-[18px] leading-[1.4] w-full max-w-[500px]">
                        <p>タイポグラフィの最新トレンドをチェックできる便利なリソース</p>
                      </div>
                    </div>
                  </div>

                  {/* Fonts In Use */}
                  <div
                    className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 flex-1 min-w-0"
                    data-name="Fonts In Use"
                  >
                    <div className="relative w-full">
                      <img
                        src="/assets/images/type_resources_05.png"
                        alt="Fonts In Use Screenshot"
                        className="w-full h-auto max-w-full"
                      />
                    </div>
                    <div className="flex flex-col gap-[7px] w-full">
                      <a
                        href="https://fontsinuse.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-['Poppins',_sans-serif] font-normal text-grey-50 text-[24px] tracking-[-0.48px] leading-[1.4] underline cursor-pointer block"
                      >
                        Fonts In Use
                      </a>
                      <div className="font-host-grotesk font-normal text-[#A3A4B5] text-[24px] tracking-[-0.48px] leading-[1.4] w-full max-w-[421px] mb-8">
                        <p>A great resource to see practical applications of fonts in the wild.</p>
                      </div>
                      <div className="font-ibm-plex-sans-jp font-normal text-[#A3A4B5] text-[18px] leading-[1.4] w-full max-w-[500px]">
                        <p>実際のデザインでフォントがどのように使われているかを確認できる優秀な参考資料です。</p>
                      </div>
                    </div>
                  </div>

                  {/* Type Scale Calculator */}
                  <div
                    className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 flex-1 min-w-0"
                    data-name="Type Scale Calculator"
                  >
                    <div className="relative w-full">
                      <img
                        src="/assets/images/type_resources_06.png"
                        alt="Type Scale Calculator Screenshot"
                        className="w-full h-auto max-w-full"
                      />
                    </div>
                    <div className="flex flex-col gap-[7px] w-full">
                      <a
                        href="https://typescale.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-['Poppins',_sans-serif] font-normal text-grey-50 text-[24px] tracking-[-0.48px] leading-[1.4] underline cursor-pointer block"
                      >
                        Type Scale Calculator
                      </a>
                      <div className="font-host-grotesk font-normal text-[#A3A4B5] text-[24px] tracking-[-0.48px] leading-[1.4] w-full max-w-[421px] mb-8">
                        <p>You guessed it, a calculator for creating your own type scale.</p>
                      </div>
                      <div className="font-ibm-plex-sans-jp font-normal text-[#A3A4B5] text-[18px] leading-[1.4] w-full max-w-[500px]">
                        <p>その通り、自分だけのタイプスケールを作成できる計算ツールです。</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Foundries Section */}
            <div
              className="box-border content-stretch flex flex-col gap-20 items-start justify-start px-0 pt-[110px] pb-[100px] relative shrink-0 content-responsive"
              data-name="Foundries"
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
                      Foundries
                    </p>
                  </div>
                  <div className="relative shrink-0 text-grey-300 text-[18px] w-full">
                    <p className="block leading-[1.4]">
                      There are so many amazing foundries out there, these are a few of our favourites:
                    </p>
                  </div>
                </div>
                <div
                  className="box-border content-stretch flex flex-col gap-6 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-full max-w-[700px] flex-1"
                  data-name="Description"
                >
                  <div className="font-ibm-plex-sans-jp relative shrink-0 text-grey-50 text-heading-small tracking-[-0.48px] w-full">
                    <p className="adjustLetterSpacing block leading-[1.4]">
                      フォントファウンドリー
                    </p>
                  </div>
                  <div className="font-ibm-plex-sans-jp relative shrink-0 text-grey-300 text-[18px] w-full">
                    <p className="block leading-[1.4]">
                      素晴らしいフォントファウンドリーは世界中にたくさんありますが、ここでは私たちのお気に入りをいくつかご紹介します。
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="box-border content-stretch flex flex-col gap-20 items-start justify-start p-0 relative shrink-0 w-full"
                data-name="Foundries"
              >
                {/* First Row */}
                <div className="flex flex-col lg:flex-row gap-5 w-full">
                  {/* Pangram Pangram */}
                  <div
                    className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 flex-1 min-w-0"
                    data-name="Pangram Pangram"
                  >
                    <div className="relative w-full">
                      <img
                        src="/assets/images/type_resources_07.png"
                        alt="Pangram Pangram Screenshot"
                        className="w-full h-auto max-w-full"
                      />
                    </div>
                    <div className="flex flex-col gap-[7px] w-full">
                      <a
                        href="https://pangrampangram.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-['Poppins',_sans-serif] font-normal text-grey-50 text-[24px] tracking-[-0.48px] leading-[1.4] underline cursor-pointer block"
                      >
                        Pangram Pangram
                      </a>
                    </div>
                  </div>

                  {/* Grilli Type */}
                  <div
                    className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 flex-1 min-w-0"
                    data-name="Grilli Type"
                  >
                    <div className="relative w-full">
                      <img
                        src="/assets/images/type_resources_08.png"
                        alt="Grilli Type Screenshot"
                        className="w-full h-auto max-w-full"
                      />
                    </div>
                    <div className="flex flex-col gap-[7px] w-full">
                      <a
                        href="https://www.grillitype.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-['Poppins',_sans-serif] font-normal text-grey-50 text-[24px] tracking-[-0.48px] leading-[1.4] underline cursor-pointer block"
                      >
                        Grilli Type
                      </a>
                    </div>
                  </div>

                  {/* Klim Type Foundry */}
                  <div
                    className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 flex-1 min-w-0"
                    data-name="Klim Type Foundry"
                  >
                    <div className="relative w-full">
                      <img
                        src="/assets/images/type_resources_09.png"
                        alt="Klim Type Foundry Screenshot"
                        className="w-full h-auto max-w-full"
                      />
                    </div>
                    <div className="flex flex-col gap-[7px] w-full">
                      <a
                        href="https://klim.co.nz/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-['Poppins',_sans-serif] font-normal text-grey-50 text-[24px] tracking-[-0.48px] leading-[1.4] underline cursor-pointer block"
                      >
                        Klim Type Foundry
                      </a>
                    </div>
                  </div>
                </div>

                {/* Second Row */}
                <div className="flex flex-col lg:flex-row gap-5 w-full">
                  {/* Colophon */}
                  <div
                    className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 flex-1 min-w-0"
                    data-name="Colophon"
                  >
                    <div className="relative w-full">
                      <img
                        src="/assets/images/type_resources_10.png"
                        alt="Colophon Screenshot"
                        className="w-full h-auto max-w-full"
                      />
                    </div>
                    <div className="flex flex-col gap-[7px] w-full">
                      <a
                        href="https://www.colophon-foundry.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-['Poppins',_sans-serif] font-normal text-grey-50 text-[24px] tracking-[-0.48px] leading-[1.4] underline cursor-pointer block"
                      >
                        Colophon
                      </a>
                    </div>
                  </div>

                  {/* Sharpe Type */}
                  <div
                    className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 flex-1 min-w-0"
                    data-name="Sharpe Type"
                  >
                    <div className="relative w-full">
                      <img
                        src="/assets/images/type_resources_11.png"
                        alt="Sharpe Type Screenshot"
                        className="w-full h-auto max-w-full"
                      />
                    </div>
                    <div className="flex flex-col gap-[7px] w-full">
                      <a
                        href="https://sharpetype.co/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-['Poppins',_sans-serif] font-normal text-grey-50 text-[24px] tracking-[-0.48px] leading-[1.4] underline cursor-pointer block"
                      >
                        Sharpe Type
                      </a>
                    </div>
                  </div>

                  {/* CoType */}
                  <div
                    className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 flex-1 min-w-0"
                    data-name="CoType"
                  >
                    <div className="relative w-full">
                      <img
                        src="/assets/images/type_resources_12.png"
                        alt="CoType Screenshot"
                        className="w-full h-auto max-w-full"
                      />
                    </div>
                    <div className="flex flex-col gap-[7px] w-full">
                      <a
                        href="https://cotype.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-['Poppins',_sans-serif] font-normal text-grey-50 text-[24px] tracking-[-0.48px] leading-[1.4] underline cursor-pointer block"
                      >
                        CoType
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Books Section */}
            <div
              className="box-border content-stretch flex flex-col gap-20 items-start justify-start px-0 pt-[110px] pb-[100px] relative shrink-0 content-responsive"
              data-name="Books"
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
                      Books
                    </p>
                  </div>
                  <div className="relative shrink-0 text-grey-300 text-[18px] w-full">
                    <p className="block leading-[1.4]">
                      Here are some timeless resources on typography
                    </p>
                  </div>
                </div>
                <div
                  className="box-border content-stretch flex flex-col gap-6 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-full max-w-[700px] flex-1"
                  data-name="Description"
                >
                  <div className="font-ibm-plex-sans-jp relative shrink-0 text-grey-50 text-heading-small tracking-[-0.48px] w-full">
                    <p className="adjustLetterSpacing block leading-[1.4]">
                      書籍
                    </p>
                  </div>
                  <div className="font-ibm-plex-sans-jp relative shrink-0 text-grey-300 text-[18px] w-full">
                    <p className="block leading-[1.4]">
                      タイポグラフィについて学べる定番のリソースをご紹介します。
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="box-border content-stretch flex flex-col lg:flex-row gap-5 items-start justify-start p-0 relative shrink-0 w-full"
                data-name="Books"
              >
                {/* Thinking With Type */}
                <div
                  className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 flex-1 min-w-0"
                  data-name="Thinking With Type"
                >
                  <div className="relative w-full">
                    <img
                      src="/assets/images/type_resources_13.png"
                      alt="Thinking With Type Book Cover"
                      className="w-full h-auto max-w-full"
                    />
                  </div>
                  <div className="flex flex-col gap-[7px] w-full">
                    <div className="font-host-grotesk font-normal text-grey-50 text-[24px] tracking-[-0.48px] leading-[1.4]">
                      <p>Thinking With Type</p>
                    </div>
                    <div className="font-host-grotesk font-normal text-[#A3A4B5] text-[24px] tracking-[-0.48px] leading-[1.4] w-full max-w-[421px]">
                      <p>Ellen Lupton</p>
                    </div>
                  </div>
                </div>

                {/* The Elements of Typographic Style */}
                <div
                  className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 flex-1 min-w-0"
                  data-name="The Elements of Typographic Style"
                >
                  <div className="relative w-full">
                    <img
                      src="/assets/images/type_resources_14.png"
                      alt="The Elements of Typographic Style Book Cover"
                      className="w-full h-auto max-w-full"
                    />
                  </div>
                  <div className="flex flex-col gap-[7px] w-full">
                    <div className="font-host-grotesk font-normal text-grey-50 text-[24px] tracking-[-0.48px] leading-[1.4]">
                      <p>The Elements of Typographic Style</p>
                    </div>
                    <div className="font-host-grotesk font-normal text-[#A3A4B5] text-[24px] tracking-[-0.48px] leading-[1.4] w-full max-w-[421px]">
                      <p>Robert Bringhurst</p>
                    </div>
                  </div>
                </div>

                {/* Stop Stealing Sheep & Find Out How Type Works */}
                <div
                  className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 flex-1 min-w-0"
                  data-name="Stop Stealing Sheep & Find Out How Type Works"
                >
                  <div className="relative w-full">
                    <img
                      src="/assets/images/type_resources_15.png"
                      alt="Stop Stealing Sheep & Find Out How Type Works Book Cover"
                      className="w-full h-auto max-w-full"
                    />
                  </div>
                  <div className="flex flex-col gap-[7px] w-full">
                    <div className="font-host-grotesk font-normal text-grey-50 text-[24px] tracking-[-0.48px] leading-[1.4] w-full max-w-[373px]">
                      <p>Stop Stealing Sheep & Find Out How Type Works</p>
                    </div>
                    <div className="font-host-grotesk font-normal text-[#A3A4B5] text-[24px] tracking-[-0.48px] leading-[1.4] w-full max-w-[421px]">
                      <p>Erik Spiekermann & E.M. Ginger</p>
                    </div>
                  </div>
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