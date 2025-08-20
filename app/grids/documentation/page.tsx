'use client';
import React from 'react';
import Logo from '../../../components/Logo';
import ScrollNavigation from '../../../components/ScrollNavigation';
import Footer from '../../../components/Footer';

export default function GridDocumentationPage() {
  return (
    <div className="bg-grey-900 min-h-screen">
      <div
        className="bg-grey-900 relative w-full min-h-screen"
        data-name="Grid Documentation"
      >
        <div className="relative size-full">
          {/* Scroll Navigation */}
          <ScrollNavigation currentPage="grids-documentation" />

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
                    <span className="font-host-grotesk not-italic text-grey-300">{` Grids & Spacing / Documentation `}</span>
                  </p>
                </div>
                <div className="relative shrink-0 text-display-xxl tracking-[-4.48px] w-full">
                  <h1 className="adjustLetterSpacing block leading-none" style={{ marginBottom: '30px' }}>
                    Grid Documentation
                  </h1>
                </div>
              </div>
            </div>

            {/* 8pt Spacing Section */}
            <div
              className="box-border content-stretch flex flex-col gap-20 items-start justify-start px-0 pt-[80px] pb-[100px] relative shrink-0 content-responsive"
              data-name="8pt Spacing"
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
                      8pt Spacing
                    </p>
                  </div>
                  <div className="relative shrink-0 text-grey-300 text-[18px] w-full">
                    <p className="block leading-[1.4]">
                      Our brand system uses an 8pt grid system to create consistent spacing and layouts. This system ensures visual harmony and helps maintain design consistency across all touchpoints.
                    </p>
                  </div>
                </div>
                <div
                  className="box-border content-stretch flex flex-col gap-6 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-full max-w-[700px] flex-1"
                  data-name="Description"
                >
                  <div className="font-ibm-plex-sans-jp relative shrink-0 text-grey-50 text-heading-small tracking-[-0.48px] w-full">
                    <p className="adjustLetterSpacing block leading-[1.4]">
                      8ptスペーシング
                    </p>
                  </div>
                  <div className="font-ibm-plex-sans-jp relative shrink-0 text-grey-300 text-text-large w-full">
                    <p className="block leading-[1.4]">
                      私たちのブランドシステムでは、一貫したスペーシングとレイアウトを作成するために8ptグリッドシステムを使用しています。このシステムにより、視覚的な調和を保ち、すべてのタッチポイントでデザインの一貫性を維持できます。
                    </p>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="w-full">
                <img 
                  src="/assets/images/grids_documentation_01.png" 
                  alt="8pt Spacing Documentation"
                  className="w-full h-auto object-cover rounded-lg max-w-[1177px]"
                />
              </div>
            </div>

            {/* Using The Grids Section */}
            <div
              className="box-border content-stretch flex flex-col gap-20 items-start justify-start px-0 pt-[80px] pb-[100px] relative shrink-0 content-responsive"
              data-name="Using The Grids"
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
                      Using The Grids
                    </p>
                  </div>
                  <div className="relative shrink-0 text-grey-300 text-[18px] w-full">
                    <p className="block leading-[1.4]">
                      Learn how to implement and use our grid system effectively in your designs. This section covers best practices for applying the grid to create structured, responsive layouts.
                    </p>
                  </div>
                </div>
                <div
                  className="box-border content-stretch flex flex-col gap-6 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-full max-w-[700px] flex-1"
                  data-name="Description"
                >
                  <div className="font-ibm-plex-sans-jp relative shrink-0 text-grey-50 text-heading-small tracking-[-0.48px] w-full">
                    <p className="adjustLetterSpacing block leading-[1.4]">
                      グリッドの使い方
                    </p>
                  </div>
                  <div className="font-ibm-plex-sans-jp relative shrink-0 text-grey-300 text-text-large w-full">
                    <p className="block leading-[1.4]">
                      デザインでグリッドシステムを効果的に実装し、活用する方法を学びます。このセクションでは、構造化されたレスポンシブレイアウトを作成するためのグリッド適用のベストプラクティスを説明します。
                    </p>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="w-full">
                <img 
                  src="/assets/images/grids_documentation_02.png" 
                  alt="Using The Grids Documentation"
                  className="w-full h-auto object-cover rounded-lg max-w-[1177px]"
                />
              </div>
            </div>

            {/* Updating The Grid Section */}
            <div
              className="box-border content-stretch flex flex-col gap-20 items-start justify-start px-0 pt-[80px] pb-[100px] relative shrink-0 content-responsive"
              data-name="Updating The Grid"
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
                      Updating The Grid
                    </p>
                  </div>
                  <div className="relative shrink-0 text-grey-300 text-[18px] w-full">
                    <p className="block leading-[1.4]">
                      Customize and update grid settings to meet your specific design requirements. This guide shows you how to modify grid parameters while maintaining system consistency.
                    </p>
                  </div>
                </div>
                <div
                  className="box-border content-stretch flex flex-col gap-6 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-full max-w-[700px] flex-1"
                  data-name="Description"
                >
                  <div className="font-ibm-plex-sans-jp relative shrink-0 text-grey-50 text-heading-small tracking-[-0.48px] w-full">
                    <p className="adjustLetterSpacing block leading-[1.4]">
                      グリッドの更新方法
                    </p>
                  </div>
                  <div className="font-ibm-plex-sans-jp relative shrink-0 text-grey-300 text-text-large w-full">
                    <p className="block leading-[1.4]">
                      特定のデザイン要件に合わせてグリッド設定をカスタマイズし、更新する方法を説明します。このガイドでは、システムの一貫性を保ちながらグリッドパラメータを変更する方法を紹介します。
                    </p>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="w-full">
                <img 
                  src="/assets/images/grids_documentation_03.png" 
                  alt="Updating The Grid Documentation"
                  className="w-full h-auto object-cover rounded-lg max-w-[1177px]"
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