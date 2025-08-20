'use client';
import React from 'react';
import Link from 'next/link';
import Logo from '../../../components/Logo';
import ScrollNavigation from '../../../components/ScrollNavigation';
import Footer from '../../../components/Footer';

// グラデーションカード用のコンポーネント
interface GradientCardProps {
  imageSrc: string;
  colors: string;
}

const GradientCard = ({ imageSrc, colors }: GradientCardProps) => (
  <div className="flex flex-col gap-4 shrink-0">
    <div 
      className="rounded relative overflow-hidden"
      style={{ width: '324px', height: '172px' }}
    >
      <img 
        src={imageSrc} 
        alt="Gradient" 
        className="w-full h-full object-cover"
        width={324}
        height={172}
      />
    </div>
    <div className="text-grey-300 leading-tight">
      <div className="text-white text-[12px]">{colors}</div>
    </div>
  </div>
);

interface GradientSectionProps {
  title: string;
  gradients: { imageSrc: string; colors: string }[];
}

const GradientSection = ({ title, gradients }: GradientSectionProps) => (
  <div className="flex flex-col w-full">
    <h3 className="font-host-grotesk text-grey-50 text-[24px] md:text-[32px] font-normal mb-20">{title}</h3>
    <div className="flex flex-row gap-[40px] flex-wrap">
      {gradients.map((gradientItem, index) => (
        <GradientCard
          key={index}
          imageSrc={gradientItem.imageSrc}
          colors={gradientItem.colors}
        />
      ))}
    </div>
  </div>
);

export default function GradientsPage() {
  const gradientSections = [
    {
      title: "3 Tone Linear Gradient",
      gradients: [
        { 
          imageSrc: "/assets/images/color_gradients_01.png", 
          colors: "#4643FF • #FF706B • #FFAAA5" 
        },
        { 
          imageSrc: "/assets/images/color_gradients_02.png", 
          colors: "#66FFFF • #6644FF • #7712FF" 
        },
        { 
          imageSrc: "/assets/images/color_gradients_03.png", 
          colors: "#FCC11B • #7D4204 • #2E0DEE" 
        },
        { 
          imageSrc: "/assets/images/color_gradients_04.png", 
          colors: "#FF76F6 • #FE3C06 • #FF6401" 
        }
      ]
    },
    {
      title: "Fade To Black Linear Gradient",
      gradients: [
        { 
          imageSrc: "/assets/images/color_gradients_05.png", 
          colors: "#6B65FB • #8D52F7 • #000000" 
        },
        { 
          imageSrc: "/assets/images/color_gradients_06.png", 
          colors: "#FF10A5 • #FF6649 • #000000" 
        },
        { 
          imageSrc: "/assets/images/color_gradients_07.png", 
          colors: "#51F5F3 • #4444FF • #000000" 
        },
        { 
          imageSrc: "/assets/images/color_gradients_08.png", 
          colors: "#FFC524 • #FF5408 • #000000" 
        }
      ]
    },
    {
      title: "Greyscale Gradient",
      gradients: [
        { 
          imageSrc: "/assets/images/color_gradients_09.png", 
          colors: "#F5F7FA • #000000" 
        },
        { 
          imageSrc: "/assets/images/color_gradients_10.png", 
          colors: "#C9D1DB • #64571F" 
        },
        { 
          imageSrc: "/assets/images/color_gradients_11.png", 
          colors: "#372D4E • #61571F" 
        },
        { 
          imageSrc: "/assets/images/color_gradients_12.png", 
          colors: "#A6A4A0 • #FF9A3A" 
        }
      ]
    }
  ];

  return (
    <div className="bg-grey-900 min-h-screen">
      <div
        className="bg-grey-900 relative w-full min-h-screen"
        data-name="Gradients Page"
      >
        <div className="relative size-full">
          {/* Scroll Navigation */}
          <ScrollNavigation currentPage="gradients" />

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
                  <span className="font-host-grotesk not-italic text-grey-300">{` Color `}</span>
                  <span>/ Gradients</span>
                </p>
              </div>
              <div className="relative shrink-0 text-display-xxl tracking-[-4.48px] w-full">
                <h1 className="adjustLetterSpacing block leading-none">
                  Gradients
                </h1>
              </div>
            </div>
          </div>

          {/* Gradient Sections */}
          <div
            className="box-border content-stretch flex flex-col gap-[200px] items-start justify-start px-0 py-[100px] relative shrink-0 content-responsive"
            data-name="Gradient Sections"
          >
            {gradientSections.map((section, index) => (
              <GradientSection
                key={index}
                title={section.title}
                gradients={section.gradients}
              />
            ))}
          </div>

          {/* Footer */}
          <Footer />
          </div>
        </div>
      </div>
    </div>
  );
} 