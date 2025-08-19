'use client';
import React from 'react';
import Logo from '../../../components/Logo';
import ScrollNavigation from '../../../components/ScrollNavigation';

export default function TypeWikiPage() {
  return (
    <div className="bg-grey-900 min-h-screen">
      <div
        className="bg-grey-900 relative w-full min-h-screen"
        data-name="Type Wiki"
      >
        <div className="relative size-full">
          {/* Scroll Navigation */}
          <ScrollNavigation currentPage="type-wiki" />

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
                    <span className="font-host-grotesk not-italic text-grey-300">{` Type / Type Wiki `}</span>
                  </p>
                </div>
                <div className="relative shrink-0 text-display-xxl tracking-[-4.48px] w-full">
                  <h1 className="adjustLetterSpacing block leading-none" style={{ marginBottom: '30px' }}>
                    Type Wiki
                  </h1>
                </div>
              </div>
            </div>

            {/* Our Chosen Typeface Section */}
            <div
              className="box-border content-stretch flex flex-col gap-[100px] items-start justify-start px-0 pt-[80px] pb-0 relative shrink-0 content-responsive"
              data-name="Our Chosen Typeface"
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
                      Our Chosen Typeface
                    </p>
                  </div>
                  <div className="relative shrink-0 text-grey-300 text-[18px] w-full">
                    <p className="block leading-[1.4]">
                      The font used throughout this system is Host Grotesk. You can access this font and{" "}
                      <a href="https://fonts.google.com/specimen/Host+Grotesk" target="_blank" rel="noopener noreferrer" className="text-[#4648ff] underline">download it for free here</a>.
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
                  <div className="font-ibm-plex-sans-jp relative shrink-0 text-grey-300 text-[18px] w-full">
                    <p className="block leading-[1.4]">
                      このシステム全体で使用しているフォントは「Host Grotesk」です。{" "}
                      <a href="https://fonts.google.com/specimen/Host+Grotesk" target="_blank" rel="noopener noreferrer" className="text-[#4648ff] underline">こちらのリンクから無料でダウンロードしてご利用いただけます</a>。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Images Section */}
            <div
              className="box-border content-stretch flex flex-col gap-[80px] items-start justify-start px-0 pt-[80px] pb-[200px] relative shrink-0 content-responsive"
              data-name="Images Section"
            >
              {/* First Image */}
              <div className="w-full">
                <img 
                  src="/assets/images/type_wiki_01.png" 
                  alt="Type Wiki Image 1"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Second Image */}
              <div className="w-full">
                <img 
                  src="/assets/images/type_wiki_02.png" 
                  alt="Type Wiki Image 2"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Typescale System Section */}
            <div
              className="box-border content-stretch flex flex-col gap-[100px] items-start justify-start px-0 pt-[80px] pb-0 relative shrink-0 content-responsive"
              data-name="Typescale System"
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
                      Typescale System
                    </p>
                  </div>
                  <div className="relative shrink-0 text-grey-300 text-[18px] w-full">
                    <p className="block leading-[1.4]">
                      This document uses a flexible type system that can be updated to your needs
                    </p>
                  </div>
                </div>
                <div
                  className="box-border content-stretch flex flex-col gap-6 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-full max-w-[700px] flex-1"
                  data-name="Description"
                >
                  <div className="font-ibm-plex-sans-jp relative shrink-0 text-grey-50 text-heading-small tracking-[-0.48px] w-full">
                    <p className="adjustLetterSpacing block leading-[1.4]">
                      タイプスケールシステム
                    </p>
                  </div>
                  <div className="font-ibm-plex-sans-jp relative shrink-0 text-grey-300 text-[18px] w-full">
                    <p className="block leading-[1.4]">
                      このドキュメントでは、ニーズに合わせて柔軟に更新できるタイプスケール（文字サイズの体系）を採用しています。
                    </p>
                  </div>
                </div>
              </div>

              {/* Display XXL Typography Examples */}
              <div
                className="box-border content-stretch flex flex-col lg:flex-row gap-12 lg:gap-20 items-start justify-start p-0 relative shrink-0 w-full"
                data-name="Type Rows"
              >
                {/* Light */}
                <div
                  className="box-border content-stretch flex flex-col gap-[25px] items-start justify-start p-0 relative shrink-0 flex-1 min-w-[300px] max-w-[488px]"
                  data-name="Light"
                >
                  <div className="flex flex-col gap-4 w-full mb-1">
                    <div className="font-host-grotesk font-medium text-[#4648ff] text-[24px] tracking-[-0.24px] leading-[1.4]">
                      <p className="adjustLetterSpacing block mb-0">
                        Display XXL
                      </p>
                    </div>
                    <div className="font-host-grotesk font-medium text-grey-50 text-[18px] leading-[1.4]">
                      <span>Light: </span>
                      <span className="text-[#67697c]">112px / Line height: 100% / Tracking: -4%</span>
                    </div>
                  </div>
                  <div className="font-host-grotesk font-light text-[#f2f2f0] text-[112px] leading-none tracking-[-4.48px] w-full min-w-0">
                    <p className="adjustLetterSpacing block leading-none break-words overflow-wrap-anywhere">
                      Display
                    </p>
                  </div>
                </div>

                {/* Medium */}
                <div
                  className="box-border content-stretch flex flex-col gap-[25px] items-start justify-start p-0 relative shrink-0 flex-1 min-w-[300px] max-w-[488px]"
                  data-name="Medium"
                >
                  <div className="flex flex-col gap-4 w-full mb-1">
                    <div className="font-host-grotesk font-medium text-[#4648ff] text-[24px] tracking-[-0.24px] leading-[1.4]">
                      <p className="adjustLetterSpacing block mb-0">
                        Display XXL
                      </p>
                    </div>
                    <div className="font-host-grotesk font-medium text-grey-50 text-[18px] leading-[1.4]">
                      <span>Medium: </span>
                      <span className="text-[#67697c]">112px / Line height: 100% / Tracking: -4%</span>
                    </div>
                  </div>
                  <div className="font-host-grotesk font-medium text-[#f2f2f0] text-[112px] leading-none tracking-[-4.48px] w-full min-w-0">
                    <p className="adjustLetterSpacing block leading-none break-words overflow-wrap-anywhere">
                      Display
                    </p>
                  </div>
                </div>

                {/* Bold */}
                <div
                  className="box-border content-stretch flex flex-col gap-[25px] items-start justify-start p-0 relative shrink-0 flex-1 min-w-[300px] max-w-[488px]"
                  data-name="Bold"
                >
                  <div className="flex flex-col gap-4 w-full mb-1">
                    <div className="font-host-grotesk font-medium text-[#4648ff] text-[24px] tracking-[-0.24px] leading-[1.4]">
                      <p className="adjustLetterSpacing block mb-0">
                        Display XXL
                      </p>
                    </div>
                    <div className="font-host-grotesk font-medium text-grey-50 text-[18px] leading-[1.4]">
                      <span>Bold: </span>
                      <span className="text-[#67697c]">112px / Line height: 100% / Tracking: -4%</span>
                    </div>
                  </div>
                  <div className="font-host-grotesk font-bold text-[#f2f2f0] text-[112px] leading-none tracking-[-4.48px] w-full min-w-0">
                    <p className="adjustLetterSpacing block leading-none break-words overflow-wrap-anywhere">
                      Display
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Display XL Section */}
            <div
              className="box-border content-stretch flex flex-col gap-20 items-start justify-start px-0 pt-[80px] pb-0 relative shrink-0 content-responsive"
              data-name="Display XL Section"
            >
              <div
                className="box-border content-stretch flex flex-col lg:flex-row gap-12 lg:gap-20 items-start justify-start p-0 relative shrink-0 w-full"
                data-name="Display XL Rows"
              >
                {/* Light */}
                <div
                  className="box-border content-stretch flex flex-col gap-[25px] items-start justify-start p-0 relative shrink-0 flex-1 min-w-[300px] max-w-[488px]"
                  data-name="Light"
                >
                  <div className="flex flex-col gap-4 w-full mb-1">
                    <div className="font-host-grotesk font-medium text-[#4648ff] text-[24px] tracking-[-0.24px] leading-[1.4]">
                      <p className="adjustLetterSpacing block mb-0">
                        Display XL
                      </p>
                    </div>
                    <div className="font-host-grotesk font-medium text-grey-50 text-[18px] leading-[1.4]">
                      <span>Light: </span>
                      <span className="text-[#67697c]">96px / Line height: 100% / Tracking: -4%</span>
                    </div>
                  </div>
                  <div className="font-host-grotesk font-light text-[#f2f2f0] text-[96px] leading-none tracking-[-3.84px] w-full min-w-0">
                    <p className="adjustLetterSpacing block leading-none break-words overflow-wrap-anywhere">
                      Display
                    </p>
                  </div>
                </div>

                {/* Medium */}
                <div
                  className="box-border content-stretch flex flex-col gap-[25px] items-start justify-start p-0 relative shrink-0 flex-1 min-w-[300px] max-w-[488px]"
                  data-name="Medium"
                >
                  <div className="flex flex-col gap-4 w-full mb-1">
                    <div className="font-host-grotesk font-medium text-[#4648ff] text-[24px] tracking-[-0.24px] leading-[1.4]">
                      <p className="adjustLetterSpacing block mb-0">
                        Display XL
                      </p>
                    </div>
                    <div className="font-host-grotesk font-medium text-grey-50 text-[18px] leading-[1.4]">
                      <span>Medium: </span>
                      <span className="text-[#67697c]">96px / Line height: 100% / Tracking: -4%</span>
                    </div>
                  </div>
                  <div className="font-host-grotesk font-medium text-[#f2f2f0] text-[96px] leading-none tracking-[-3.84px] w-full min-w-0">
                    <p className="adjustLetterSpacing block leading-none break-words overflow-wrap-anywhere">
                      Display
                    </p>
                  </div>
                </div>

                {/* Bold */}
                <div
                  className="box-border content-stretch flex flex-col gap-[25px] items-start justify-start p-0 relative shrink-0 flex-1 min-w-[300px] max-w-[488px]"
                  data-name="Bold"
                >
                  <div className="flex flex-col gap-4 w-full mb-1">
                    <div className="font-host-grotesk font-medium text-[#4648ff] text-[24px] tracking-[-0.24px] leading-[1.4]">
                      <p className="adjustLetterSpacing block mb-0">
                        Display XL
                      </p>
                    </div>
                    <div className="font-host-grotesk font-medium text-grey-50 text-[18px] leading-[1.4]">
                      <span>Bold: </span>
                      <span className="text-[#67697c]">96px / Line height: 100% / Tracking: -4%</span>
                    </div>
                  </div>
                  <div className="font-host-grotesk font-bold text-[#f2f2f0] text-[96px] leading-none tracking-[-3.84px] w-full min-w-0">
                    <p className="adjustLetterSpacing block leading-none break-words overflow-wrap-anywhere">
                      Display
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Display Large Section */}
            <div
              className="box-border content-stretch flex flex-col gap-20 items-start justify-start px-0 pt-[80px] pb-0 relative shrink-0 content-responsive"
              data-name="Display Large Section"
            >
              <div
                className="box-border content-stretch flex flex-col lg:flex-row gap-12 lg:gap-20 items-start justify-start p-0 relative shrink-0 w-full"
                data-name="Display Large Rows"
              >
                {/* Light */}
                <div
                  className="box-border content-stretch flex flex-col gap-[25px] items-start justify-start p-0 relative shrink-0 flex-1 min-w-[300px] max-w-[488px]"
                  data-name="Light"
                >
                  <div className="flex flex-col gap-4 w-full mb-1">
                    <div className="font-host-grotesk font-medium text-[#4648ff] text-[24px] tracking-[-0.24px] leading-[1.4]">
                      <p className="adjustLetterSpacing block mb-0">
                        Display Large
                      </p>
                    </div>
                    <div className="font-host-grotesk font-medium text-grey-50 text-[18px] leading-[1.4]">
                      <span>Light: </span>
                      <span className="text-[#67697c]">88px / Line height: 100% / Tracking: -3%</span>
                    </div>
                  </div>
                  <div className="font-host-grotesk font-light text-[#f2f2f0] text-[88px] leading-none tracking-[-2.64px] w-full min-w-0">
                    <p className="adjustLetterSpacing block leading-none break-words overflow-wrap-anywhere">
                      Display
                    </p>
                  </div>
                </div>

                {/* Medium */}
                <div
                  className="box-border content-stretch flex flex-col gap-[25px] items-start justify-start p-0 relative shrink-0 flex-1 min-w-[300px] max-w-[488px]"
                  data-name="Medium"
                >
                  <div className="flex flex-col gap-4 w-full mb-1">
                    <div className="font-host-grotesk font-medium text-[#4648ff] text-[24px] tracking-[-0.24px] leading-[1.4]">
                      <p className="adjustLetterSpacing block mb-0">
                        Display Large
                      </p>
                    </div>
                    <div className="font-host-grotesk font-medium text-grey-50 text-[18px] leading-[1.4]">
                      <span>Medium: </span>
                      <span className="text-[#67697c]">88px / Line height: 100% / Tracking: -3%</span>
                    </div>
                  </div>
                  <div className="font-host-grotesk font-medium text-[#f2f2f0] text-[88px] leading-none tracking-[-2.64px] w-full min-w-0">
                    <p className="adjustLetterSpacing block leading-none break-words overflow-wrap-anywhere">
                      Display
                    </p>
                  </div>
                </div>

                {/* Bold */}
                <div
                  className="box-border content-stretch flex flex-col gap-[25px] items-start justify-start p-0 relative shrink-0 flex-1 min-w-[300px] max-w-[488px]"
                  data-name="Bold"
                >
                  <div className="flex flex-col gap-4 w-full mb-1">
                    <div className="font-host-grotesk font-medium text-[#4648ff] text-[24px] tracking-[-0.24px] leading-[1.4]">
                      <p className="adjustLetterSpacing block mb-0">
                        Display Large
                      </p>
                    </div>
                    <div className="font-host-grotesk font-medium text-grey-50 text-[18px] leading-[1.4]">
                      <span>Bold: </span>
                      <span className="text-[#67697c]">88px / Line height: 100% / Tracking: -3%</span>
                    </div>
                  </div>
                  <div className="font-host-grotesk font-bold text-[#f2f2f0] text-[88px] leading-none tracking-[-2.64px] w-full min-w-0">
                    <p className="adjustLetterSpacing block leading-none break-words overflow-wrap-anywhere">
                      Display
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Display Medium Section */}
            <div
              className="box-border content-stretch flex flex-col gap-20 items-start justify-start px-0 pt-[80px] pb-0 relative shrink-0 content-responsive"
              data-name="Display Medium Section"
            >
              <div
                className="box-border content-stretch flex flex-col lg:flex-row gap-12 lg:gap-20 items-start justify-start p-0 relative shrink-0 w-full"
                data-name="Display Medium Rows"
              >
                {/* Light */}
                <div
                  className="box-border content-stretch flex flex-col gap-[25px] items-start justify-start p-0 relative shrink-0 flex-1 min-w-[300px] max-w-[488px]"
                  data-name="Light"
                >
                  <div className="flex flex-col gap-4 w-full mb-1">
                    <div className="font-host-grotesk font-medium text-[#4648ff] text-[24px] tracking-[-0.24px] leading-[1.4]">
                      <p className="adjustLetterSpacing block mb-0">
                        Display Medium
                      </p>
                    </div>
                    <div className="font-host-grotesk font-medium text-grey-50 text-[18px] leading-[1.4]">
                      <span>Light: </span>
                      <span className="text-[#67697c]">72px / Line height: 100% / Tracking: -3%</span>
                    </div>
                  </div>
                  <div className="font-host-grotesk font-light text-[#f2f2f0] text-[72px] leading-none tracking-[-2.16px] w-full min-w-0">
                    <p className="adjustLetterSpacing block leading-none break-words overflow-wrap-anywhere">
                      Display
                    </p>
                  </div>
                </div>

                {/* Medium */}
                <div
                  className="box-border content-stretch flex flex-col gap-[25px] items-start justify-start p-0 relative shrink-0 flex-1 min-w-[300px] max-w-[488px]"
                  data-name="Medium"
                >
                  <div className="flex flex-col gap-4 w-full mb-1">
                    <div className="font-host-grotesk font-medium text-[#4648ff] text-[24px] tracking-[-0.24px] leading-[1.4]">
                      <p className="adjustLetterSpacing block mb-0">
                        Display Medium
                      </p>
                    </div>
                    <div className="font-host-grotesk font-medium text-grey-50 text-[18px] leading-[1.4]">
                      <span>Medium: </span>
                      <span className="text-[#67697c]">72px / Line height: 100% / Tracking: -3%</span>
                    </div>
                  </div>
                  <div className="font-host-grotesk font-medium text-[#f2f2f0] text-[72px] leading-none tracking-[-2.16px] w-full min-w-0">
                    <p className="adjustLetterSpacing block leading-none break-words overflow-wrap-anywhere">
                      Display
                    </p>
                  </div>
                </div>

                {/* Bold */}
                <div
                  className="box-border content-stretch flex flex-col gap-[25px] items-start justify-start p-0 relative shrink-0 flex-1 min-w-[300px] max-w-[488px]"
                  data-name="Bold"
                >
                  <div className="flex flex-col gap-4 w-full mb-1">
                    <div className="font-host-grotesk font-medium text-[#4648ff] text-[24px] tracking-[-0.24px] leading-[1.4]">
                      <p className="adjustLetterSpacing block mb-0">
                        Display Medium
                      </p>
                    </div>
                    <div className="font-host-grotesk font-medium text-grey-50 text-[18px] leading-[1.4]">
                      <span>Bold: </span>
                      <span className="text-[#67697c]">72px / Line height: 100% / Tracking: -3%</span>
                    </div>
                  </div>
                  <div className="font-host-grotesk font-bold text-[#f2f2f0] text-[72px] leading-none tracking-[-2.16px] w-full min-w-0">
                    <p className="adjustLetterSpacing block leading-none break-words overflow-wrap-anywhere">
                      Display
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Display Small Section */}
            <div
              className="box-border content-stretch flex flex-col gap-20 items-start justify-start px-0 pt-[80px] pb-0 relative shrink-0 content-responsive"
              data-name="Display Small Section"
            >
              <div
                className="box-border content-stretch flex flex-col lg:flex-row gap-12 lg:gap-20 items-start justify-start p-0 relative shrink-0 w-full"
                data-name="Display Small Rows"
              >
                {/* Light */}
                <div
                  className="box-border content-stretch flex flex-col gap-[25px] items-start justify-start p-0 relative shrink-0 flex-1 min-w-[300px] max-w-[488px]"
                  data-name="Light"
                >
                  <div className="flex flex-col gap-4 w-full mb-1">
                    <div className="font-host-grotesk font-medium text-[#4648ff] text-[24px] tracking-[-0.24px] leading-[1.4]">
                      <p className="adjustLetterSpacing block mb-0">
                        Display Small
                      </p>
                    </div>
                    <div className="font-host-grotesk font-medium text-grey-50 text-[18px] leading-[1.4]">
                      <span>Light: </span>
                      <span className="text-[#67697c]">64px / Line height: 100% / Tracking: -2%</span>
                    </div>
                  </div>
                  <div className="font-host-grotesk font-light text-[#f2f2f0] text-[64px] leading-none tracking-[-1.28px] w-full min-w-0">
                    <p className="adjustLetterSpacing block leading-none break-words overflow-wrap-anywhere">
                      Display
                    </p>
                  </div>
                </div>

                {/* Medium */}
                <div
                  className="box-border content-stretch flex flex-col gap-[25px] items-start justify-start p-0 relative shrink-0 flex-1 min-w-[300px] max-w-[488px]"
                  data-name="Medium"
                >
                  <div className="flex flex-col gap-4 w-full mb-1">
                    <div className="font-host-grotesk font-medium text-[#4648ff] text-[24px] tracking-[-0.24px] leading-[1.4]">
                      <p className="adjustLetterSpacing block mb-0">
                        Display Small
                      </p>
                    </div>
                    <div className="font-host-grotesk font-medium text-grey-50 text-[18px] leading-[1.4]">
                      <span>Medium: </span>
                      <span className="text-[#67697c]">64px / Line height: 100% / Tracking: -2%</span>
                    </div>
                  </div>
                  <div className="font-host-grotesk font-medium text-[#f2f2f0] text-[64px] leading-none tracking-[-1.28px] w-full min-w-0">
                    <p className="adjustLetterSpacing block leading-none break-words overflow-wrap-anywhere">
                      Display
                    </p>
                  </div>
                </div>

                {/* Bold */}
                <div
                  className="box-border content-stretch flex flex-col gap-[25px] items-start justify-start p-0 relative shrink-0 flex-1 min-w-[300px] max-w-[488px]"
                  data-name="Bold"
                >
                  <div className="flex flex-col gap-4 w-full mb-1">
                    <div className="font-host-grotesk font-medium text-[#4648ff] text-[24px] tracking-[-0.24px] leading-[1.4]">
                      <p className="adjustLetterSpacing block mb-0">
                        Display Small
                      </p>
                    </div>
                    <div className="font-host-grotesk font-medium text-grey-50 text-[18px] leading-[1.4]">
                      <span>Bold: </span>
                      <span className="text-[#67697c]">64px / Line height: 100% / Tracking: -2%</span>
                    </div>
                  </div>
                  <div className="font-host-grotesk font-bold text-[#f2f2f0] text-[64px] leading-none tracking-[-1.28px] w-full min-w-0">
                    <p className="adjustLetterSpacing block leading-none break-words overflow-wrap-anywhere">
                      Display
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Heading XL Section */}
            <div
              className="box-border content-stretch flex flex-col gap-20 items-start justify-start px-0 pt-[80px] pb-0 relative shrink-0 content-responsive"
              data-name="Heading XL Section"
            >
              <div
                className="box-border content-stretch flex flex-col lg:flex-row gap-12 lg:gap-20 items-start justify-start p-0 relative shrink-0 w-full"
                data-name="Heading XL Rows"
              >
                {/* Light */}
                <div
                  className="box-border content-stretch flex flex-col gap-[25px] items-start justify-start p-0 relative shrink-0 flex-1 min-w-[300px] max-w-[488px]"
                  data-name="Light"
                >
                  <div className="flex flex-col gap-4 w-full mb-1">
                    <div className="font-host-grotesk font-medium text-[#4648ff] text-[24px] tracking-[-0.24px] leading-[1.4]">
                      <p className="adjustLetterSpacing block mb-0">
                        Heading XL
                      </p>
                    </div>
                    <div className="font-host-grotesk font-medium text-grey-50 text-[18px] leading-[1.4]">
                      <span>Light: </span>
                      <span className="text-[#67697c]">56px / Line height: 120% / Tracking: -2%</span>
                    </div>
                  </div>
                  <div className="font-host-grotesk font-light text-[#f2f2f0] text-[56px] leading-[1.2] tracking-[-1.12px] w-full min-w-0">
                    <p className="adjustLetterSpacing block break-words overflow-wrap-anywhere">
                      Heading
                    </p>
                  </div>
                </div>

                {/* Medium */}
                <div
                  className="box-border content-stretch flex flex-col gap-[25px] items-start justify-start p-0 relative shrink-0 flex-1 min-w-[300px] max-w-[488px]"
                  data-name="Medium"
                >
                  <div className="flex flex-col gap-4 w-full mb-1">
                    <div className="font-host-grotesk font-medium text-[#4648ff] text-[24px] tracking-[-0.24px] leading-[1.4]">
                      <p className="adjustLetterSpacing block mb-0">
                        Heading XL
                      </p>
                    </div>
                    <div className="font-host-grotesk font-medium text-grey-50 text-[18px] leading-[1.4]">
                      <span>Medium: </span>
                      <span className="text-[#67697c]">56px / Line height: 120% / Tracking: -2%</span>
                    </div>
                  </div>
                  <div className="font-host-grotesk font-medium text-[#f2f2f0] text-[56px] leading-[1.2] tracking-[-1.12px] w-full min-w-0">
                    <p className="adjustLetterSpacing block break-words overflow-wrap-anywhere">
                      Heading
                    </p>
                  </div>
                </div>

                {/* Bold */}
                <div
                  className="box-border content-stretch flex flex-col gap-[25px] items-start justify-start p-0 relative shrink-0 flex-1 min-w-[300px] max-w-[488px]"
                  data-name="Bold"
                >
                  <div className="flex flex-col gap-4 w-full mb-1">
                    <div className="font-host-grotesk font-medium text-[#4648ff] text-[24px] tracking-[-0.24px] leading-[1.4]">
                      <p className="adjustLetterSpacing block mb-0">
                        Heading XL
                      </p>
                    </div>
                    <div className="font-host-grotesk font-medium text-grey-50 text-[18px] leading-[1.4]">
                      <span>Bold: </span>
                      <span className="text-[#67697c]">56px / Line height: 120% / Tracking: -2%</span>
                    </div>
                  </div>
                  <div className="font-host-grotesk font-bold text-[#f2f2f0] text-[56px] leading-[1.2] tracking-[-1.12px] w-full min-w-0">
                    <p className="adjustLetterSpacing block break-words overflow-wrap-anywhere">
                      Heading
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Heading L Section */}
            <div
              className="box-border content-stretch flex flex-col gap-20 items-start justify-start px-0 pt-[80px] pb-0 relative shrink-0 content-responsive"
              data-name="Heading L Section"
            >
              <div
                className="box-border content-stretch flex flex-col lg:flex-row gap-12 lg:gap-20 items-start justify-start p-0 relative shrink-0 w-full"
                data-name="Heading L Rows"
              >
                {/* Light */}
                <div
                  className="box-border content-stretch flex flex-col gap-[25px] items-start justify-start p-0 relative shrink-0 flex-1 min-w-[300px] max-w-[488px]"
                  data-name="Light"
                >
                  <div className="flex flex-col gap-4 w-full mb-1">
                    <div className="font-host-grotesk font-medium text-[#4648ff] text-[24px] tracking-[-0.24px] leading-[1.4]">
                      <p className="adjustLetterSpacing block mb-0">
                        Heading L
                      </p>
                    </div>
                    <div className="font-host-grotesk font-medium text-grey-50 text-[18px] leading-[1.4]">
                      <span>Light: </span>
                      <span className="text-[#67697c]">48px / Line height: 120% / Tracking: -1%</span>
                    </div>
                  </div>
                  <div className="font-host-grotesk font-light text-[#f2f2f0] text-[48px] leading-[1.2] tracking-[-0.48px] w-full min-w-0">
                    <p className="adjustLetterSpacing block break-words overflow-wrap-anywhere">
                      Heading
                    </p>
                  </div>
                </div>

                {/* Medium */}
                <div
                  className="box-border content-stretch flex flex-col gap-[25px] items-start justify-start p-0 relative shrink-0 flex-1 min-w-[300px] max-w-[488px]"
                  data-name="Medium"
                >
                  <div className="flex flex-col gap-4 w-full mb-1">
                    <div className="font-host-grotesk font-medium text-[#4648ff] text-[24px] tracking-[-0.24px] leading-[1.4]">
                      <p className="adjustLetterSpacing block mb-0">
                        Heading L
                      </p>
                    </div>
                    <div className="font-host-grotesk font-medium text-grey-50 text-[18px] leading-[1.4]">
                      <span>Medium: </span>
                      <span className="text-[#67697c]">48px / Line height: 120% / Tracking: -1%</span>
                    </div>
                  </div>
                  <div className="font-host-grotesk font-medium text-[#f2f2f0] text-[48px] leading-[1.2] tracking-[-0.48px] w-full min-w-0">
                    <p className="adjustLetterSpacing block break-words overflow-wrap-anywhere">
                      Heading
                    </p>
                  </div>
                </div>

                {/* Bold */}
                <div
                  className="box-border content-stretch flex flex-col gap-[25px] items-start justify-start p-0 relative shrink-0 flex-1 min-w-[300px] max-w-[488px]"
                  data-name="Bold"
                >
                  <div className="flex flex-col gap-4 w-full mb-1">
                    <div className="font-host-grotesk font-medium text-[#4648ff] text-[24px] tracking-[-0.24px] leading-[1.4]">
                      <p className="adjustLetterSpacing block mb-0">
                        Heading L
                      </p>
                    </div>
                    <div className="font-host-grotesk font-medium text-grey-50 text-[18px] leading-[1.4]">
                      <span>Bold: </span>
                      <span className="text-[#67697c]">48px / Line height: 120% / Tracking: -1%</span>
                    </div>
                  </div>
                  <div className="font-host-grotesk font-bold text-[#f2f2f0] text-[48px] leading-[1.2] tracking-[-0.48px] w-full min-w-0">
                    <p className="adjustLetterSpacing block break-words overflow-wrap-anywhere">
                      Heading
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Heading M Section */}
            <div
              className="box-border content-stretch flex flex-col gap-20 items-start justify-start px-0 pt-[80px] pb-0 relative shrink-0 content-responsive"
              data-name="Heading M Section"
            >
              <div
                className="box-border content-stretch flex flex-col lg:flex-row gap-12 lg:gap-20 items-start justify-start p-0 relative shrink-0 w-full"
                data-name="Heading M Rows"
              >
                {/* Light */}
                <div
                  className="box-border content-stretch flex flex-col gap-[25px] items-start justify-start p-0 relative shrink-0 flex-1 min-w-[300px] max-w-[488px]"
                  data-name="Light"
                >
                  <div className="flex flex-col gap-4 w-full mb-1">
                    <div className="font-host-grotesk font-medium text-[#4648ff] text-[24px] tracking-[-0.24px] leading-[1.4]">
                      <p className="adjustLetterSpacing block mb-0">
                        Heading M
                      </p>
                    </div>
                    <div className="font-host-grotesk font-medium text-grey-50 text-[18px] leading-[1.4]">
                      <span>Light: </span>
                      <span className="text-[#67697c]">32px / Line height: 130% / Tracking: -1%</span>
                    </div>
                  </div>
                  <div className="font-host-grotesk font-light text-[#f2f2f0] text-[32px] leading-[1.3] tracking-[-0.32px] w-full min-w-0">
                    <p className="adjustLetterSpacing block break-words overflow-wrap-anywhere">
                      Heading
                    </p>
                  </div>
                </div>

                {/* Medium */}
                <div
                  className="box-border content-stretch flex flex-col gap-[25px] items-start justify-start p-0 relative shrink-0 flex-1 min-w-[300px] max-w-[488px]"
                  data-name="Medium"
                >
                  <div className="flex flex-col gap-4 w-full mb-1">
                    <div className="font-host-grotesk font-medium text-[#4648ff] text-[24px] tracking-[-0.24px] leading-[1.4]">
                      <p className="adjustLetterSpacing block mb-0">
                        Heading M
                      </p>
                    </div>
                    <div className="font-host-grotesk font-medium text-grey-50 text-[18px] leading-[1.4]">
                      <span>Medium: </span>
                      <span className="text-[#67697c]">32px / Line height: 130% / Tracking: -1%</span>
                    </div>
                  </div>
                  <div className="font-host-grotesk font-medium text-[#f2f2f0] text-[32px] leading-[1.3] tracking-[-0.32px] w-full min-w-0">
                    <p className="adjustLetterSpacing block break-words overflow-wrap-anywhere">
                      Heading
                    </p>
                  </div>
                </div>

                {/* Bold */}
                <div
                  className="box-border content-stretch flex flex-col gap-[25px] items-start justify-start p-0 relative shrink-0 flex-1 min-w-[300px] max-w-[488px]"
                  data-name="Bold"
                >
                  <div className="flex flex-col gap-4 w-full mb-1">
                    <div className="font-host-grotesk font-medium text-[#4648ff] text-[24px] tracking-[-0.24px] leading-[1.4]">
                      <p className="adjustLetterSpacing block mb-0">
                        Heading M
                      </p>
                    </div>
                    <div className="font-host-grotesk font-medium text-grey-50 text-[18px] leading-[1.4]">
                      <span>Bold: </span>
                      <span className="text-[#67697c]">32px / Line height: 130% / Tracking: -1%</span>
                    </div>
                  </div>
                  <div className="font-host-grotesk font-bold text-[#f2f2f0] text-[32px] leading-[1.3] tracking-[-0.32px] w-full min-w-0">
                    <p className="adjustLetterSpacing block break-words overflow-wrap-anywhere">
                      Heading
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Heading S Section */}
            <div
              className="box-border content-stretch flex flex-col gap-20 items-start justify-start px-0 pt-[80px] pb-0 relative shrink-0 content-responsive"
              data-name="Heading S Section"
            >
              <div
                className="box-border content-stretch flex flex-col lg:flex-row gap-12 lg:gap-20 items-start justify-start p-0 relative shrink-0 w-full"
                data-name="Heading S Rows"
              >
                {/* Light */}
                <div
                  className="box-border content-stretch flex flex-col gap-[25px] items-start justify-start p-0 relative shrink-0 flex-1 min-w-[300px] max-w-[488px]"
                  data-name="Light"
                >
                  <div className="flex flex-col gap-4 w-full mb-1">
                    <div className="font-host-grotesk font-medium text-[#4648ff] text-[24px] tracking-[-0.24px] leading-[1.4]">
                      <p className="adjustLetterSpacing block mb-0">
                        Heading S
                      </p>
                    </div>
                    <div className="font-host-grotesk font-medium text-grey-50 text-[18px] leading-[1.4]">
                      <span>Light: </span>
                      <span className="text-[#67697c]">24px / Line height: 140% / Tracking: -1%</span>
                    </div>
                  </div>
                  <div className="font-host-grotesk font-light text-[#f2f2f0] text-[24px] leading-[1.4] tracking-[-0.24px] w-full min-w-0">
                    <p className="adjustLetterSpacing block break-words overflow-wrap-anywhere">
                      Heading
                    </p>
                  </div>
                </div>

                {/* Medium */}
                <div
                  className="box-border content-stretch flex flex-col gap-[25px] items-start justify-start p-0 relative shrink-0 flex-1 min-w-[300px] max-w-[488px]"
                  data-name="Medium"
                >
                  <div className="flex flex-col gap-4 w-full mb-1">
                    <div className="font-host-grotesk font-medium text-[#4648ff] text-[24px] tracking-[-0.24px] leading-[1.4]">
                      <p className="adjustLetterSpacing block mb-0">
                        Heading S
                      </p>
                    </div>
                    <div className="font-host-grotesk font-medium text-grey-50 text-[18px] leading-[1.4]">
                      <span>Medium: </span>
                      <span className="text-[#67697c]">24px / Line height: 140% / Tracking: -1%</span>
                    </div>
                  </div>
                  <div className="font-host-grotesk font-medium text-[#f2f2f0] text-[24px] leading-[1.4] tracking-[-0.24px] w-full min-w-0">
                    <p className="adjustLetterSpacing block break-words overflow-wrap-anywhere">
                      Heading
                    </p>
                  </div>
                </div>

                {/* Bold */}
                <div
                  className="box-border content-stretch flex flex-col gap-[25px] items-start justify-start p-0 relative shrink-0 flex-1 min-w-[300px] max-w-[488px]"
                  data-name="Bold"
                >
                  <div className="flex flex-col gap-4 w-full mb-1">
                    <div className="font-host-grotesk font-medium text-[#4648ff] text-[24px] tracking-[-0.24px] leading-[1.4]">
                      <p className="adjustLetterSpacing block mb-0">
                        Heading S
                      </p>
                    </div>
                    <div className="font-host-grotesk font-medium text-grey-50 text-[18px] leading-[1.4]">
                      <span>Bold: </span>
                      <span className="text-[#67697c]">24px / Line height: 140% / Tracking: -1%</span>
                    </div>
                  </div>
                  <div className="font-host-grotesk font-bold text-[#f2f2f0] text-[24px] leading-[1.4] tracking-[-0.24px] w-full min-w-0">
                    <p className="adjustLetterSpacing block break-words overflow-wrap-anywhere">
                      Heading
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Text XL Section */}
            <div
              className="box-border content-stretch flex flex-col gap-20 items-start justify-start px-0 pt-[80px] pb-0 relative shrink-0 content-responsive"
              data-name="Text XL Section"
            >
              <div
                className="box-border content-stretch flex flex-col lg:flex-row gap-12 lg:gap-20 items-start justify-start p-0 relative shrink-0 w-full"
                data-name="Text XL Rows"
              >
                {/* Light */}
                <div
                  className="box-border content-stretch flex flex-col gap-[25px] items-start justify-start p-0 relative shrink-0 flex-1 min-w-[300px] max-w-[488px]"
                  data-name="Light"
                >
                  <div className="flex flex-col gap-4 w-full mb-1">
                    <div className="font-host-grotesk font-medium text-[#4648ff] text-[24px] tracking-[-0.24px] leading-[1.4]">
                      <p className="adjustLetterSpacing block mb-0">
                        Text XL
                      </p>
                    </div>
                    <div className="font-host-grotesk font-medium text-grey-50 text-[18px] leading-[1.4]">
                      <span>Light: </span>
                      <span className="text-[#67697c]">20px / Line height: 140% / Tracking: 0%</span>
                    </div>
                  </div>
                  <div className="font-host-grotesk font-light text-[#f2f2f0] text-[20px] leading-[1.4] tracking-[0px] w-full min-w-0">
                    <p className="adjustLetterSpacing block break-words overflow-wrap-anywhere">
                      Body Text
                    </p>
                  </div>
                </div>

                {/* Medium */}
                <div
                  className="box-border content-stretch flex flex-col gap-[25px] items-start justify-start p-0 relative shrink-0 flex-1 min-w-[300px] max-w-[488px]"
                  data-name="Medium"
                >
                  <div className="flex flex-col gap-4 w-full mb-1">
                    <div className="font-host-grotesk font-medium text-[#4648ff] text-[24px] tracking-[-0.24px] leading-[1.4]">
                      <p className="adjustLetterSpacing block mb-0">
                        Text XL
                      </p>
                    </div>
                    <div className="font-host-grotesk font-medium text-grey-50 text-[18px] leading-[1.4]">
                      <span>Medium: </span>
                      <span className="text-[#67697c]">20px / Line height: 140% / Tracking: 0%</span>
                    </div>
                  </div>
                  <div className="font-host-grotesk font-medium text-[#f2f2f0] text-[20px] leading-[1.4] tracking-[0px] w-full min-w-0">
                    <p className="adjustLetterSpacing block break-words overflow-wrap-anywhere">
                      Body Text
                    </p>
                  </div>
                </div>

                {/* Bold */}
                <div
                  className="box-border content-stretch flex flex-col gap-[25px] items-start justify-start p-0 relative shrink-0 flex-1 min-w-[300px] max-w-[488px]"
                  data-name="Bold"
                >
                  <div className="flex flex-col gap-4 w-full mb-1">
                    <div className="font-host-grotesk font-medium text-[#4648ff] text-[24px] tracking-[-0.24px] leading-[1.4]">
                      <p className="adjustLetterSpacing block mb-0">
                        Text XL
                      </p>
                    </div>
                    <div className="font-host-grotesk font-medium text-grey-50 text-[18px] leading-[1.4]">
                      <span>Bold: </span>
                      <span className="text-[#67697c]">20px / Line height: 140% / Tracking: 0%</span>
                    </div>
                  </div>
                  <div className="font-host-grotesk font-bold text-[#f2f2f0] text-[20px] leading-[1.4] tracking-[0px] w-full min-w-0">
                    <p className="adjustLetterSpacing block break-words overflow-wrap-anywhere">
                      Body Text
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Text L Section */}
            <div
              className="box-border content-stretch flex flex-col gap-20 items-start justify-start px-0 pt-[80px] pb-0 relative shrink-0 content-responsive"
              data-name="Text L Section"
            >
              <div
                className="box-border content-stretch flex flex-col lg:flex-row gap-12 lg:gap-20 items-start justify-start p-0 relative shrink-0 w-full"
                data-name="Text L Rows"
              >
                {/* Light */}
                <div
                  className="box-border content-stretch flex flex-col gap-[25px] items-start justify-start p-0 relative shrink-0 flex-1 min-w-[300px] max-w-[488px]"
                  data-name="Light"
                >
                  <div className="flex flex-col gap-4 w-full mb-1">
                    <div className="font-host-grotesk font-medium text-[#4648ff] text-[24px] tracking-[-0.24px] leading-[1.4]">
                      <p className="adjustLetterSpacing block mb-0">
                        Text L
                      </p>
                    </div>
                    <div className="font-host-grotesk font-medium text-grey-50 text-[18px] leading-[1.4]">
                      <span>Light: </span>
                      <span className="text-[#67697c]">18px / Line height: 140% / Tracking: 0%</span>
                    </div>
                  </div>
                  <div className="font-host-grotesk font-light text-[#f2f2f0] text-[18px] leading-[1.4] tracking-[0px] w-full min-w-0">
                    <p className="adjustLetterSpacing block break-words overflow-wrap-anywhere">
                      Body Text
                    </p>
                  </div>
                </div>

                {/* Medium */}
                <div
                  className="box-border content-stretch flex flex-col gap-[25px] items-start justify-start p-0 relative shrink-0 flex-1 min-w-[300px] max-w-[488px]"
                  data-name="Medium"
                >
                  <div className="flex flex-col gap-4 w-full mb-1">
                    <div className="font-host-grotesk font-medium text-[#4648ff] text-[24px] tracking-[-0.24px] leading-[1.4]">
                      <p className="adjustLetterSpacing block mb-0">
                        Text L
                      </p>
                    </div>
                    <div className="font-host-grotesk font-medium text-grey-50 text-[18px] leading-[1.4]">
                      <span>Medium: </span>
                      <span className="text-[#67697c]">18px / Line height: 140% / Tracking: 0%</span>
                    </div>
                  </div>
                  <div className="font-host-grotesk font-medium text-[#f2f2f0] text-[18px] leading-[1.4] tracking-[0px] w-full min-w-0">
                    <p className="adjustLetterSpacing block break-words overflow-wrap-anywhere">
                      Body Text
                    </p>
                  </div>
                </div>

                {/* Bold */}
                <div
                  className="box-border content-stretch flex flex-col gap-[25px] items-start justify-start p-0 relative shrink-0 flex-1 min-w-[300px] max-w-[488px]"
                  data-name="Bold"
                >
                  <div className="flex flex-col gap-4 w-full mb-1">
                    <div className="font-host-grotesk font-medium text-[#4648ff] text-[24px] tracking-[-0.24px] leading-[1.4]">
                      <p className="adjustLetterSpacing block mb-0">
                        Text L
                      </p>
                    </div>
                    <div className="font-host-grotesk font-medium text-grey-50 text-[18px] leading-[1.4]">
                      <span>Bold: </span>
                      <span className="text-[#67697c]">18px / Line height: 140% / Tracking: 0%</span>
                    </div>
                  </div>
                  <div className="font-host-grotesk font-bold text-[#f2f2f0] text-[18px] leading-[1.4] tracking-[0px] w-full min-w-0">
                    <p className="adjustLetterSpacing block break-words overflow-wrap-anywhere">
                      Body Text
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Text M Section */}
            <div
              className="box-border content-stretch flex flex-col gap-20 items-start justify-start px-0 pt-[80px] pb-0 relative shrink-0 content-responsive"
              data-name="Text M Section"
            >
              <div
                className="box-border content-stretch flex flex-col lg:flex-row gap-12 lg:gap-20 items-start justify-start p-0 relative shrink-0 w-full"
                data-name="Text M Rows"
              >
                {/* Light */}
                <div
                  className="box-border content-stretch flex flex-col gap-[25px] items-start justify-start p-0 relative shrink-0 flex-1 min-w-[300px] max-w-[488px]"
                  data-name="Light"
                >
                  <div className="flex flex-col gap-4 w-full mb-1">
                    <div className="font-host-grotesk font-medium text-[#4648ff] text-[24px] tracking-[-0.24px] leading-[1.4]">
                      <p className="adjustLetterSpacing block mb-0">
                        Text M
                      </p>
                    </div>
                    <div className="font-host-grotesk font-medium text-grey-50 text-[18px] leading-[1.4]">
                      <span>Light: </span>
                      <span className="text-[#67697c]">16px / Line height: 140% / Tracking: 0%</span>
                    </div>
                  </div>
                  <div className="font-host-grotesk font-light text-[#f2f2f0] text-[16px] leading-[1.4] tracking-[0px] w-full min-w-0">
                    <p className="adjustLetterSpacing block break-words overflow-wrap-anywhere">
                      Body Text
                    </p>
                  </div>
                </div>

                {/* Medium */}
                <div
                  className="box-border content-stretch flex flex-col gap-[25px] items-start justify-start p-0 relative shrink-0 flex-1 min-w-[300px] max-w-[488px]"
                  data-name="Medium"
                >
                  <div className="flex flex-col gap-4 w-full mb-1">
                    <div className="font-host-grotesk font-medium text-[#4648ff] text-[24px] tracking-[-0.24px] leading-[1.4]">
                      <p className="adjustLetterSpacing block mb-0">
                        Text M
                      </p>
                    </div>
                    <div className="font-host-grotesk font-medium text-grey-50 text-[18px] leading-[1.4]">
                      <span>Medium: </span>
                      <span className="text-[#67697c]">16px / Line height: 140% / Tracking: 0%</span>
                    </div>
                  </div>
                  <div className="font-host-grotesk font-medium text-[#f2f2f0] text-[16px] leading-[1.4] tracking-[0px] w-full min-w-0">
                    <p className="adjustLetterSpacing block break-words overflow-wrap-anywhere">
                      Body Text
                    </p>
                  </div>
                </div>

                {/* Bold */}
                <div
                  className="box-border content-stretch flex flex-col gap-[25px] items-start justify-start p-0 relative shrink-0 flex-1 min-w-[300px] max-w-[488px]"
                  data-name="Bold"
                >
                  <div className="flex flex-col gap-4 w-full mb-1">
                    <div className="font-host-grotesk font-medium text-[#4648ff] text-[24px] tracking-[-0.24px] leading-[1.4]">
                      <p className="adjustLetterSpacing block mb-0">
                        Text M
                      </p>
                    </div>
                    <div className="font-host-grotesk font-medium text-grey-50 text-[18px] leading-[1.4]">
                      <span>Bold: </span>
                      <span className="text-[#67697c]">16px / Line height: 140% / Tracking: 0%</span>
                    </div>
                  </div>
                  <div className="font-host-grotesk font-bold text-[#f2f2f0] text-[16px] leading-[1.4] tracking-[0px] w-full min-w-0">
                    <p className="adjustLetterSpacing block break-words overflow-wrap-anywhere">
                      Body Text
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Text S Section */}
            <div
              className="box-border content-stretch flex flex-col gap-20 items-start justify-start px-0 pt-[80px] pb-0 relative shrink-0 content-responsive"
              data-name="Text S Section"
            >
              <div
                className="box-border content-stretch flex flex-col lg:flex-row gap-12 lg:gap-20 items-start justify-start p-0 relative shrink-0 w-full"
                data-name="Text S Rows"
              >
                {/* Light */}
                <div
                  className="box-border content-stretch flex flex-col gap-[25px] items-start justify-start p-0 relative shrink-0 flex-1 min-w-[300px] max-w-[488px]"
                  data-name="Light"
                >
                  <div className="flex flex-col gap-4 w-full mb-1">
                    <div className="font-host-grotesk font-medium text-[#4648ff] text-[24px] tracking-[-0.24px] leading-[1.4]">
                      <p className="adjustLetterSpacing block mb-0">
                        Text S
                      </p>
                    </div>
                    <div className="font-host-grotesk font-medium text-grey-50 text-[18px] leading-[1.4]">
                      <span>Light: </span>
                      <span className="text-[#67697c]">14px / Line height: 140% / Tracking: 0%</span>
                    </div>
                  </div>
                  <div className="font-host-grotesk font-light text-[#f2f2f0] text-[14px] leading-[1.4] tracking-[0px] w-full min-w-0">
                    <p className="adjustLetterSpacing block break-words overflow-wrap-anywhere">
                      Body Text
                    </p>
                  </div>
                </div>

                {/* Medium */}
                <div
                  className="box-border content-stretch flex flex-col gap-[25px] items-start justify-start p-0 relative shrink-0 flex-1 min-w-[300px] max-w-[488px]"
                  data-name="Medium"
                >
                  <div className="flex flex-col gap-4 w-full mb-1">
                    <div className="font-host-grotesk font-medium text-[#4648ff] text-[24px] tracking-[-0.24px] leading-[1.4]">
                      <p className="adjustLetterSpacing block mb-0">
                        Text S
                      </p>
                    </div>
                    <div className="font-host-grotesk font-medium text-grey-50 text-[18px] leading-[1.4]">
                      <span>Medium: </span>
                      <span className="text-[#67697c]">14px / Line height: 140% / Tracking: 0%</span>
                    </div>
                  </div>
                  <div className="font-host-grotesk font-medium text-[#f2f2f0] text-[14px] leading-[1.4] tracking-[0px] w-full min-w-0">
                    <p className="adjustLetterSpacing block break-words overflow-wrap-anywhere">
                      Body Text
                    </p>
                  </div>
                </div>

                {/* Bold */}
                <div
                  className="box-border content-stretch flex flex-col gap-[25px] items-start justify-start p-0 relative shrink-0 flex-1 min-w-[300px] max-w-[488px]"
                  data-name="Bold"
                >
                  <div className="flex flex-col gap-4 w-full mb-1">
                    <div className="font-host-grotesk font-medium text-[#4648ff] text-[24px] tracking-[-0.24px] leading-[1.4]">
                      <p className="adjustLetterSpacing block mb-0">
                        Text S
                      </p>
                    </div>
                    <div className="font-host-grotesk font-medium text-grey-50 text-[18px] leading-[1.4]">
                      <span>Bold: </span>
                      <span className="text-[#67697c]">14px / Line height: 140% / Tracking: 0%</span>
                    </div>
                  </div>
                  <div className="font-host-grotesk font-bold text-[#f2f2f0] text-[14px] leading-[1.4] tracking-[0px] w-full min-w-0">
                    <p className="adjustLetterSpacing block break-words overflow-wrap-anywhere">
                      Body Text
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Text XS Section */}
            <div
              className="box-border content-stretch flex flex-col gap-20 items-start justify-start px-0 pt-[80px] pb-0 relative shrink-0 content-responsive"
              data-name="Text XS Section"
            >
              <div
                className="box-border content-stretch flex flex-col lg:flex-row gap-12 lg:gap-20 items-start justify-start p-0 relative shrink-0 w-full"
                data-name="Text XS Rows"
              >
                {/* Light */}
                <div
                  className="box-border content-stretch flex flex-col gap-[25px] items-start justify-start p-0 relative shrink-0 flex-1 min-w-[300px] max-w-[488px]"
                  data-name="Light"
                >
                  <div className="flex flex-col gap-4 w-full mb-1">
                    <div className="font-host-grotesk font-medium text-[#4648ff] text-[24px] tracking-[-0.24px] leading-[1.4]">
                      <p className="adjustLetterSpacing block mb-0">
                        Text XS
                      </p>
                    </div>
                    <div className="font-host-grotesk font-medium text-grey-50 text-[18px] leading-[1.4]">
                      <span>Light: </span>
                      <span className="text-[#67697c]">12px / Line height: 140% / Tracking: 0%</span>
                    </div>
                  </div>
                  <div className="font-host-grotesk font-light text-[#f2f2f0] text-[12px] leading-[1.4] tracking-[0px] w-full min-w-0">
                    <p className="adjustLetterSpacing block break-words overflow-wrap-anywhere">
                      Body Text
                    </p>
                  </div>
                </div>

                {/* Medium */}
                <div
                  className="box-border content-stretch flex flex-col gap-[25px] items-start justify-start p-0 relative shrink-0 flex-1 min-w-[300px] max-w-[488px]"
                  data-name="Medium"
                >
                  <div className="flex flex-col gap-4 w-full mb-1">
                    <div className="font-host-grotesk font-medium text-[#4648ff] text-[24px] tracking-[-0.24px] leading-[1.4]">
                      <p className="adjustLetterSpacing block mb-0">
                        Text XS
                      </p>
                    </div>
                    <div className="font-host-grotesk font-medium text-grey-50 text-[18px] leading-[1.4]">
                      <span>Medium: </span>
                      <span className="text-[#67697c]">12px / Line height: 140% / Tracking: 0%</span>
                    </div>
                  </div>
                  <div className="font-host-grotesk font-medium text-[#f2f2f0] text-[12px] leading-[1.4] tracking-[0px] w-full min-w-0">
                    <p className="adjustLetterSpacing block break-words overflow-wrap-anywhere">
                      Body Text
                    </p>
                  </div>
                </div>

                {/* Bold */}
                <div
                  className="box-border content-stretch flex flex-col gap-[25px] items-start justify-start p-0 relative shrink-0 flex-1 min-w-[300px] max-w-[488px]"
                  data-name="Bold"
                >
                  <div className="flex flex-col gap-4 w-full mb-1">
                    <div className="font-host-grotesk font-medium text-[#4648ff] text-[24px] tracking-[-0.24px] leading-[1.4]">
                      <p className="adjustLetterSpacing block mb-0">
                        Text XS
                      </p>
                    </div>
                    <div className="font-host-grotesk font-medium text-grey-50 text-[18px] leading-[1.4]">
                      <span>Bold: </span>
                      <span className="text-[#67697c]">12px / Line height: 140% / Tracking: 0%</span>
                    </div>
                  </div>
                  <div className="font-host-grotesk font-bold text-[#f2f2f0] text-[12px] leading-[1.4] tracking-[0px] w-full min-w-0">
                    <p className="adjustLetterSpacing block break-words overflow-wrap-anywhere">
                      Body Text
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Typography Scale Table */}
            <div
              className="box-border content-stretch flex flex-col items-start justify-start px-0 pt-[180px] pb-0 relative shrink-0 content-responsive"
              data-name="Typography Scale Table"
            >
              {/* Outer Container Frame - responsive width */}
              <div className="w-full max-w-[1775px] bg-transparent border border-[#67697c] rounded-3xl mx-auto py-20 px-8 flex flex-col gap-2.5 items-center justify-center">
                <div className="w-full max-w-[1255px] bg-transparent overflow-hidden relative">
                {/* Table Header */}
                <div className="rounded-[40px] bg-transparent border border-[#67697c] h-16 mb-6 flex items-center px-8">
                  <div className="flex-1 font-host-grotesk font-medium text-[#67697c] text-[24px] tracking-[-0.48px]">
                    <p className="adjustLetterSpacing block leading-[1.4]">
                      ID
                    </p>
                  </div>
                  <div className="flex-1 font-host-grotesk font-medium text-[#67697c] text-[24px] tracking-[-0.48px] text-center">
                    <p className="adjustLetterSpacing block leading-[1.4]">
                      Typeface
                    </p>
                  </div>
                  <div className="flex-1 font-host-grotesk font-medium text-[#67697c] text-[24px] tracking-[-0.48px] text-center">
                    <p className="adjustLetterSpacing block leading-[1.4]">
                      Scale
                    </p>
                  </div>
                  <div className="flex-1 font-host-grotesk font-medium text-[#67697c] text-[24px] tracking-[-0.48px] text-center">
                    <p className="adjustLetterSpacing block leading-[1.4]">
                      Line Height
                    </p>
                  </div>
                  <div className="flex-1 font-host-grotesk font-medium text-[#67697c] text-[24px] tracking-[-0.48px] text-center">
                    <p className="adjustLetterSpacing block leading-[1.4]">
                      Tracking
                    </p>
                  </div>
                </div>

                {/* Table Body */}
                <div className="space-y-12">
                  {/* Scale/12 */}
                  <div className="h-12 rounded-lg flex items-center px-8">
                    <div className="flex-1 font-host-grotesk font-normal text-grey-50 text-[24px] tracking-[-0.48px]">
                      <p className="adjustLetterSpacing block leading-[1.4]">
                        Scale/12
                      </p>
                    </div>
                    <div className="flex-1 font-host-grotesk font-normal text-grey-50 text-[24px] tracking-[-0.48px] text-center">
                      <p className="adjustLetterSpacing block leading-[1.4]">
                        Host Grotesk
                      </p>
                    </div>
                    <div className="flex-1 font-host-grotesk font-normal text-grey-50 text-[24px] text-center tracking-[-0.48px]">
                      <p className="adjustLetterSpacing block leading-[1.4]">
                        12px
                      </p>
                    </div>
                    <div className="flex-1 font-host-grotesk font-normal text-grey-50 text-[24px] text-center tracking-[-0.48px]">
                      <p className="adjustLetterSpacing block leading-[1.4]">
                        140%
                      </p>
                    </div>
                    <div className="flex-1 font-host-grotesk font-normal text-grey-50 text-[24px] text-center tracking-[-0.48px]">
                      <p className="adjustLetterSpacing block leading-[1.4]">
                        0%
                      </p>
                    </div>
                  </div>

                  {/* Scale/14 */}
                  <div className="h-12 rounded-lg flex items-center px-8">
                    <div className="flex-1 font-host-grotesk font-normal text-grey-50 text-[24px] tracking-[-0.48px]">
                      <p className="adjustLetterSpacing block leading-[1.4]">
                        Scale/14
                      </p>
                    </div>
                    <div className="flex-1 font-host-grotesk font-normal text-grey-50 text-[24px] tracking-[-0.48px] text-center">
                      <p className="adjustLetterSpacing block leading-[1.4]">
                        Host Grotesk
                      </p>
                    </div>
                    <div className="flex-1 font-host-grotesk font-normal text-grey-50 text-[24px] text-center tracking-[-0.48px]">
                      <p className="adjustLetterSpacing block leading-[1.4]">
                        14px
                      </p>
                    </div>
                    <div className="flex-1 font-host-grotesk font-normal text-grey-50 text-[24px] text-center tracking-[-0.48px]">
                      <p className="adjustLetterSpacing block leading-[1.4]">
                        140%
                      </p>
                    </div>
                    <div className="flex-1 font-host-grotesk font-normal text-grey-50 text-[24px] text-center tracking-[-0.48px]">
                      <p className="adjustLetterSpacing block leading-[1.4]">
                        0%
                      </p>
                    </div>
                  </div>

                  {/* Scale/16 */}
                  <div className="h-12 rounded-lg flex items-center px-8">
                    <div className="flex-1 font-host-grotesk font-normal text-grey-50 text-[24px] tracking-[-0.48px]">
                      <p className="adjustLetterSpacing block leading-[1.4]">
                        Scale/16
                      </p>
                    </div>
                    <div className="flex-1 font-host-grotesk font-normal text-grey-50 text-[24px] tracking-[-0.48px] text-center">
                      <p className="adjustLetterSpacing block leading-[1.4]">
                        Host Grotesk
                      </p>
                    </div>
                    <div className="flex-1 font-host-grotesk font-normal text-grey-50 text-[24px] text-center tracking-[-0.48px]">
                      <p className="adjustLetterSpacing block leading-[1.4]">
                        16px
                      </p>
                    </div>
                    <div className="flex-1 font-host-grotesk font-normal text-grey-50 text-[24px] text-center tracking-[-0.48px]">
                      <p className="adjustLetterSpacing block leading-[1.4]">
                        140%
                      </p>
                    </div>
                    <div className="flex-1 font-host-grotesk font-normal text-grey-50 text-[24px] text-center tracking-[-0.48px]">
                      <p className="adjustLetterSpacing block leading-[1.4]">
                        0%
                      </p>
                    </div>
                  </div>

                  {/* Scale/18 */}
                  <div className="h-12 rounded-lg flex items-center px-8">
                    <div className="flex-1 font-host-grotesk font-normal text-grey-50 text-[24px] tracking-[-0.48px]">
                      <p className="adjustLetterSpacing block leading-[1.4]">
                        Scale/18
                      </p>
                    </div>
                    <div className="flex-1 font-host-grotesk font-normal text-grey-50 text-[24px] tracking-[-0.48px] text-center">
                      <p className="adjustLetterSpacing block leading-[1.4]">
                        Host Grotesk
                      </p>
                    </div>
                    <div className="flex-1 font-host-grotesk font-normal text-grey-50 text-[24px] text-center tracking-[-0.48px]">
                      <p className="adjustLetterSpacing block leading-[1.4]">
                        18px
                      </p>
                    </div>
                    <div className="flex-1 font-host-grotesk font-normal text-grey-50 text-[24px] text-center tracking-[-0.48px]">
                      <p className="adjustLetterSpacing block leading-[1.4]">
                        140%
                      </p>
                    </div>
                    <div className="flex-1 font-host-grotesk font-normal text-grey-50 text-[24px] text-center tracking-[-0.48px]">
                      <p className="adjustLetterSpacing block leading-[1.4]">
                        0%
                      </p>
                    </div>
                  </div>

                  {/* Scale/20 */}
                  <div className="h-12 rounded-lg flex items-center px-8">
                    <div className="flex-1 font-host-grotesk font-normal text-grey-50 text-[24px] tracking-[-0.48px]">
                      <p className="adjustLetterSpacing block leading-[1.4]">
                        Scale/20
                      </p>
                    </div>
                    <div className="flex-1 font-host-grotesk font-normal text-grey-50 text-[24px] tracking-[-0.48px] text-center">
                      <p className="adjustLetterSpacing block leading-[1.4]">
                        Host Grotesk
                      </p>
                    </div>
                    <div className="flex-1 font-host-grotesk font-normal text-grey-50 text-[24px] text-center tracking-[-0.48px]">
                      <p className="adjustLetterSpacing block leading-[1.4]">
                        20px
                      </p>
                    </div>
                    <div className="flex-1 font-host-grotesk font-normal text-grey-50 text-[24px] text-center tracking-[-0.48px]">
                      <p className="adjustLetterSpacing block leading-[1.4]">
                        140%
                      </p>
                    </div>
                    <div className="flex-1 font-host-grotesk font-normal text-grey-50 text-[24px] text-center tracking-[-0.48px]">
                      <p className="adjustLetterSpacing block leading-[1.4]">
                        0%
                      </p>
                    </div>
                  </div>

                  {/* Scale/24 */}
                  <div className="h-12 rounded-lg flex items-center px-8">
                    <div className="flex-1 font-host-grotesk font-normal text-grey-50 text-[24px] tracking-[-0.48px]">
                      <p className="adjustLetterSpacing block leading-[1.4]">
                        Scale/24
                      </p>
                    </div>
                    <div className="flex-1 font-host-grotesk font-normal text-grey-50 text-[24px] tracking-[-0.48px] text-center">
                      <p className="adjustLetterSpacing block leading-[1.4]">
                        Host Grotesk
                      </p>
                    </div>
                    <div className="flex-1 font-host-grotesk font-normal text-grey-50 text-[24px] text-center tracking-[-0.48px]">
                      <p className="adjustLetterSpacing block leading-[1.4]">
                        24px
                      </p>
                    </div>
                    <div className="flex-1 font-host-grotesk font-normal text-grey-50 text-[24px] text-center tracking-[-0.48px]">
                      <p className="adjustLetterSpacing block leading-[1.4]">
                        140%
                      </p>
                    </div>
                    <div className="flex-1 font-host-grotesk font-normal text-grey-50 text-[24px] text-center tracking-[-0.48px]">
                      <p className="adjustLetterSpacing block leading-[1.4]">
                        -2%
                      </p>
                    </div>
                  </div>

                  {/* Scale/32 */}
                  <div className="h-12 rounded-lg flex items-center px-8">
                    <div className="flex-1 font-host-grotesk font-normal text-grey-50 text-[24px] tracking-[-0.48px]">
                      <p className="adjustLetterSpacing block leading-[1.4]">
                        Scale/32
                      </p>
                    </div>
                    <div className="flex-1 font-host-grotesk font-normal text-grey-50 text-[24px] tracking-[-0.48px] text-center">
                      <p className="adjustLetterSpacing block leading-[1.4]">
                        Host Grotesk
                      </p>
                    </div>
                    <div className="flex-1 font-host-grotesk font-normal text-grey-50 text-[24px] text-center tracking-[-0.48px]">
                      <p className="adjustLetterSpacing block leading-[1.4]">
                        32px
                      </p>
                    </div>
                    <div className="flex-1 font-host-grotesk font-normal text-grey-50 text-[24px] text-center tracking-[-0.48px]">
                      <p className="adjustLetterSpacing block leading-[1.4]">
                        130%
                      </p>
                    </div>
                    <div className="flex-1 font-host-grotesk font-normal text-grey-50 text-[24px] text-center tracking-[-0.48px]">
                      <p className="adjustLetterSpacing block leading-[1.4]">
                        -2%
                      </p>
                    </div>
                  </div>

                  {/* Scale/48 */}
                  <div className="h-12 rounded-lg flex items-center px-8">
                    <div className="flex-1 font-host-grotesk font-normal text-grey-50 text-[24px] tracking-[-0.48px]">
                      <p className="adjustLetterSpacing block leading-[1.4]">
                        Scale/48
                      </p>
                    </div>
                    <div className="flex-1 font-host-grotesk font-normal text-grey-50 text-[24px] tracking-[-0.48px] text-center">
                      <p className="adjustLetterSpacing block leading-[1.4]">
                        Host Grotesk
                      </p>
                    </div>
                    <div className="flex-1 font-host-grotesk font-normal text-grey-50 text-[24px] text-center tracking-[-0.48px]">
                      <p className="adjustLetterSpacing block leading-[1.4]">
                        48px
                      </p>
                    </div>
                    <div className="flex-1 font-host-grotesk font-normal text-grey-50 text-[24px] text-center tracking-[-0.48px]">
                      <p className="adjustLetterSpacing block leading-[1.4]">
                        120%
                      </p>
                    </div>
                    <div className="flex-1 font-host-grotesk font-normal text-grey-50 text-[24px] text-center tracking-[-0.48px]">
                      <p className="adjustLetterSpacing block leading-[1.4]">
                        -3%
                      </p>
                    </div>
                  </div>

                  {/* Scale/56 */}
                  <div className="h-12 rounded-lg flex items-center px-8">
                    <div className="flex-1 font-host-grotesk font-normal text-grey-50 text-[24px] tracking-[-0.48px]">
                      <p className="adjustLetterSpacing block leading-[1.4]">
                        Scale/56
                      </p>
                    </div>
                    <div className="flex-1 font-host-grotesk font-normal text-grey-50 text-[24px] tracking-[-0.48px] text-center">
                      <p className="adjustLetterSpacing block leading-[1.4]">
                        Host Grotesk
                      </p>
                    </div>
                    <div className="flex-1 font-host-grotesk font-normal text-grey-50 text-[24px] text-center tracking-[-0.48px]">
                      <p className="adjustLetterSpacing block leading-[1.4]">
                        56px
                      </p>
                    </div>
                    <div className="flex-1 font-host-grotesk font-normal text-grey-50 text-[24px] text-center tracking-[-0.48px]">
                      <p className="adjustLetterSpacing block leading-[1.4]">
                        120%
                      </p>
                    </div>
                    <div className="flex-1 font-host-grotesk font-normal text-grey-50 text-[24px] text-center tracking-[-0.48px]">
                      <p className="adjustLetterSpacing block leading-[1.4]">
                        -3%
                      </p>
                    </div>
                  </div>

                  {/* Scale/64 */}
                  <div className="h-12 rounded-lg flex items-center px-8">
                    <div className="flex-1 font-host-grotesk font-normal text-grey-50 text-[24px] tracking-[-0.48px]">
                      <p className="adjustLetterSpacing block leading-[1.4]">
                        Scale/64
                      </p>
                    </div>
                    <div className="flex-1 font-host-grotesk font-normal text-grey-50 text-[24px] tracking-[-0.48px] text-center">
                      <p className="adjustLetterSpacing block leading-[1.4]">
                        Host Grotesk
                      </p>
                    </div>
                    <div className="flex-1 font-host-grotesk font-normal text-grey-50 text-[24px] text-center tracking-[-0.48px]">
                      <p className="adjustLetterSpacing block leading-[1.4]">
                        64px
                      </p>
                    </div>
                    <div className="flex-1 font-host-grotesk font-normal text-grey-50 text-[24px] text-center tracking-[-0.48px]">
                      <p className="adjustLetterSpacing block leading-[1.4]">
                        110%
                      </p>
                    </div>
                    <div className="flex-1 font-host-grotesk font-normal text-grey-50 text-[24px] text-center tracking-[-0.48px]">
                      <p className="adjustLetterSpacing block leading-[1.4]">
                        -3%
                      </p>
                    </div>
                  </div>

                  {/* Scale/72 */}
                  <div className="h-12 rounded-lg flex items-center px-8">
                    <div className="flex-1 font-host-grotesk font-normal text-grey-50 text-[24px] tracking-[-0.48px]">
                      <p className="adjustLetterSpacing block leading-[1.4]">
                        Scale/72
                      </p>
                    </div>
                    <div className="flex-1 font-host-grotesk font-normal text-grey-50 text-[24px] tracking-[-0.48px] text-center">
                      <p className="adjustLetterSpacing block leading-[1.4]">
                        Host Grotesk
                      </p>
                    </div>
                    <div className="flex-1 font-host-grotesk font-normal text-grey-50 text-[24px] text-center tracking-[-0.48px]">
                      <p className="adjustLetterSpacing block leading-[1.4]">
                        72px
                      </p>
                    </div>
                    <div className="flex-1 font-host-grotesk font-normal text-grey-50 text-[24px] text-center tracking-[-0.48px]">
                      <p className="adjustLetterSpacing block leading-[1.4]">
                        110%
                      </p>
                    </div>
                    <div className="flex-1 font-host-grotesk font-normal text-grey-50 text-[24px] text-center tracking-[-0.48px]">
                      <p className="adjustLetterSpacing block leading-[1.4]">
                        -4%
                      </p>
                    </div>
                  </div>

                  {/* Scale/88 */}
                  <div className="h-12 rounded-lg flex items-center px-8">
                    <div className="flex-1 font-host-grotesk font-normal text-grey-50 text-[24px] tracking-[-0.48px]">
                      <p className="adjustLetterSpacing block leading-[1.4]">
                        Scale/88
                      </p>
                    </div>
                    <div className="flex-1 font-host-grotesk font-normal text-grey-50 text-[24px] tracking-[-0.48px] text-center">
                      <p className="adjustLetterSpacing block leading-[1.4]">
                        Host Grotesk
                      </p>
                    </div>
                    <div className="flex-1 font-host-grotesk font-normal text-grey-50 text-[24px] text-center tracking-[-0.48px]">
                      <p className="adjustLetterSpacing block leading-[1.4]">
                        88px
                      </p>
                    </div>
                    <div className="flex-1 font-host-grotesk font-normal text-grey-50 text-[24px] text-center tracking-[-0.48px]">
                      <p className="adjustLetterSpacing block leading-[1.4]">
                        100%
                      </p>
                    </div>
                    <div className="flex-1 font-host-grotesk font-normal text-grey-50 text-[24px] text-center tracking-[-0.48px]">
                      <p className="adjustLetterSpacing block leading-[1.4]">
                        -4%
                      </p>
                    </div>
                  </div>

                  {/* Scale/96 */}
                  <div className="h-12 rounded-lg flex items-center px-8">
                    <div className="flex-1 font-host-grotesk font-normal text-grey-50 text-[24px] tracking-[-0.48px]">
                      <p className="adjustLetterSpacing block leading-[1.4]">
                        Scale/96
                      </p>
                    </div>
                    <div className="flex-1 font-host-grotesk font-normal text-grey-50 text-[24px] tracking-[-0.48px] text-center">
                      <p className="adjustLetterSpacing block leading-[1.4]">
                        Host Grotesk
                      </p>
                    </div>
                    <div className="flex-1 font-host-grotesk font-normal text-grey-50 text-[24px] text-center tracking-[-0.48px]">
                      <p className="adjustLetterSpacing block leading-[1.4]">
                        96px
                      </p>
                    </div>
                    <div className="flex-1 font-host-grotesk font-normal text-grey-50 text-[24px] text-center tracking-[-0.48px]">
                      <p className="adjustLetterSpacing block leading-[1.4]">
                        100%
                      </p>
                    </div>
                    <div className="flex-1 font-host-grotesk font-normal text-grey-50 text-[24px] text-center tracking-[-0.48px]">
                      <p className="adjustLetterSpacing block leading-[1.4]">
                        -4%
                      </p>
                    </div>
                  </div>

                  {/* Scale/112 */}
                  <div className="h-12 rounded-lg flex items-center px-8">
                    <div className="flex-1 font-host-grotesk font-normal text-grey-50 text-[24px] tracking-[-0.48px]">
                      <p className="adjustLetterSpacing block leading-[1.4]">
                        Scale/112
                      </p>
                    </div>
                    <div className="flex-1 font-host-grotesk font-normal text-grey-50 text-[24px] tracking-[-0.48px] text-center">
                      <p className="adjustLetterSpacing block leading-[1.4]">
                        Host Grotesk
                      </p>
                    </div>
                    <div className="flex-1 font-host-grotesk font-normal text-grey-50 text-[24px] text-center tracking-[-0.48px]">
                      <p className="adjustLetterSpacing block leading-[1.4]">
                        112px
                      </p>
                    </div>
                    <div className="flex-1 font-host-grotesk font-normal text-grey-50 text-[24px] text-center tracking-[-0.48px]">
                      <p className="adjustLetterSpacing block leading-[1.4]">
                        100%
                      </p>
                    </div>
                    <div className="flex-1 font-host-grotesk font-normal text-grey-50 text-[24px] text-center tracking-[-0.48px]">
                      <p className="adjustLetterSpacing block leading-[1.4]">
                        -4%
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>

            {/* Font Weights Section */}
            <div
              className="box-border content-stretch flex flex-col gap-[100px] items-start justify-start px-0 pt-[210px] pb-[100px] relative shrink-0 content-responsive"
              data-name="Font Weights"
            >
              <div
                className="box-border content-stretch flex flex-col lg:flex-row gap-12 lg:gap-20 items-start justify-start p-0 relative shrink-0 w-full"
                data-name="Description"
              >
                <div
                  className="box-border content-stretch flex flex-col gap-6 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-full max-w-[700px] flex-1"
                  data-name="Description"
                >
                  <div className="relative shrink-0 text-grey-50 text-heading-medium tracking-[-0.64px] w-full">
                    <p className="adjustLetterSpacing block leading-[1.3]">
                      Font Weights
                    </p>
                  </div>
                  <div className="relative shrink-0 text-grey-300 text-text-large w-full">
                    <p className="block leading-[1.4]">
                      Insert blurb about font weight here
                    </p>
                  </div>
                </div>
                <div
                  className="box-border content-stretch flex flex-col gap-6 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-full max-w-[700px] flex-1"
                  data-name="Description"
                >
                  <div className="font-ibm-plex-sans-jp relative shrink-0 text-grey-50 text-heading-small tracking-[-0.48px] w-full">
                    <p className="adjustLetterSpacing block leading-[1.4]">
                      フォントウェイト
                    </p>
                  </div>
                  <div className="font-ibm-plex-sans-jp relative shrink-0 text-grey-300 text-text-large w-full">
                    <p className="block leading-[1.4]">
                      ここにはフォントの太さ（ウェイト）に関する説明を記載してください。たとえば、見出しには太めのウェイト、本文には標準的なウェイトを使用するなど、使い分けの方針をまとめることができます。
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Font Weights Image */}
              <div className="w-full">
                <img 
                  src="/assets/images/type_wiki_03.png" 
                  alt="Font Weights Display"
                  className="w-full h-auto object-cover"
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