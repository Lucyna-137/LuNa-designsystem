import ScrollNavigation from '@/components/ScrollNavigation'
import Logo from '@/components/Logo'

export default function ButtonsPage() {
  return (
    <div className="bg-grey-900 min-h-screen">
      <div className="bg-grey-900 relative w-full min-h-screen">
        <div className="relative size-full">
          {/* Scroll Navigation */}
          <ScrollNavigation currentPage="buttons" currentSection="components" />

          <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start overflow-clip pb-20 pt-0 fixed-padding-container relative size-full">
            {/* Title Section */}
            <div className="bg-grey-900 box-border content-stretch flex flex-col gap-[100px] items-start justify-start overflow-clip pb-2.5 pt-[100px] px-0 relative rounded-3xl shrink-0 content-responsive">
              {/* Title */}
              <div className="box-border content-stretch flex flex-col font-host-grotesk gap-[25px] items-start justify-start p-0 relative text-grey-50 text-left w-full">
                <div className="relative shrink-0 text-text-large">
                  <p className="leading-[1.4]">
                    <span>Components /</span>
                    <span className="text-grey-300"> Buttons</span>
                  </p>
                </div>
                <div className="relative shrink-0 text-display-xxl">
                  <h1 className="leading-none tracking-[-4.48px] font-normal">
                    Buttons
                  </h1>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="box-border content-stretch flex flex-col gap-20 items-start justify-start pb-20 pt-[100px] px-0 relative content-responsive">
              {/* Description */}
              <div className="box-border content-stretch flex flex-col lg:flex-row gap-12 lg:gap-24 items-start justify-start p-0 relative">
                <div className="box-border content-stretch flex flex-col font-host-grotesk font-normal gap-4 items-start justify-start p-0 relative">
                  <div className="relative text-grey-50 text-heading-medium">
                    <h2 className="leading-[1.3] tracking-[-0.64px] font-normal">
                      Button Component
                    </h2>
                  </div>
                  <div className="relative text-grey-300 text-text-large w-full max-w-[700px]">
                    <p className="leading-[1.4]">
                      This document contains basic button styles that you can easily modify to your brands needs
                    </p>
                  </div>
                </div>
                <div className="box-border content-stretch flex flex-col font-ibm-plex-sans-jp font-normal gap-6 items-start justify-start p-0 relative">
                  <div className="relative text-grey-50 text-heading-small">
                    <h2 className="leading-[1.4] tracking-[-0.48px] font-normal">
                      ボタンコンポーネント
                    </h2>
                  </div>
                  <div className="relative text-grey-300 text-text-large w-full max-w-[700px]">
                    <p className="leading-[1.4]">
                      このドキュメントには、ブランドに合わせて簡単にカスタマイズできる基本的なボタンスタイルが含まれています。
                    </p>
                  </div>
                </div>
              </div>

              {/* Button Showcase - Matching Figma Design */}
              <div className="w-full flex flex-col gap-[90px]">
                {/* First Row */}
                <div className="w-full flex flex-wrap gap-8 xl:gap-[200px]" data-name="Button">
                {/* Text Only Buttons - 3x3 Layout */}
                <div className="grid flex-shrink-0" style={{ 
                  gridTemplateColumns: '74px 82px 108px',
                  columnGap: '37px', 
                  rowGap: '32px' 
                }}>
                  {/* Row 1: Default State */}
                  <button className="bg-[#4648ff] hover:bg-[#2a2ba5] text-[#f2f2f0] w-[74px] h-[36px] px-[15px] py-[7px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4] transition-colors">
                    Button
                  </button>
                  <button className="bg-[#4648ff] hover:bg-[#2a2ba5] text-[#f2f2f0] w-[82px] h-[40px] px-[19px] py-[9px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4] transition-colors">
                    Button
                  </button>
                  <button className="bg-[#4648ff] hover:bg-[#2a2ba5] text-[#f2f2f0] w-[108px] h-[49px] px-[23px] py-[12px] rounded-lg font-host-grotesk font-normal text-lg leading-[1.4] transition-colors">
                    Button
                  </button>
                  
                  {/* Row 2: Hover State */}
                  <button className="bg-[#2a2ba5] text-[#f2f2f0] w-[74px] h-[36px] px-[15px] py-[7px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4]">
                    Button
                  </button>
                  <button className="bg-[#2a2ba5] text-[#f2f2f0] w-[82px] h-[40px] px-[19px] py-[9px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4]">
                    Button
                  </button>
                  <button className="bg-[#2a2ba5] text-[#f2f2f0] w-[108px] h-[49px] px-[23px] py-[12px] rounded-lg font-host-grotesk font-normal text-lg leading-[1.4]">
                    Button
                  </button>
                  
                  {/* Row 3: Disabled State */}
                  <button className="bg-[#9091ff] text-[#f2f2f0] w-[74px] h-[36px] px-[15px] py-[7px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4] opacity-50 cursor-not-allowed">
                    Button
                  </button>
                  <button className="bg-[#9091ff] text-[#f2f2f0] w-[82px] h-[40px] px-[19px] py-[9px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4] opacity-50 cursor-not-allowed">
                    Button
                  </button>
                  <button className="bg-[#9091ff] text-[#f2f2f0] w-[108px] h-[49px] px-[23px] py-[12px] rounded-lg font-host-grotesk font-normal text-lg leading-[1.4] opacity-50 cursor-not-allowed">
                    Button
                  </button>
                </div>

                {/* Icon + Text Buttons - 3x3 Layout */}
                <div className="grid flex-shrink-0" style={{ 
                  gridTemplateColumns: 'auto auto auto',
                  columnGap: '37px', 
                  rowGap: '32px' 
                }}>
                  {/* Row 1: Default State */}
                  <button className="bg-[#4648ff] hover:bg-[#2a2ba5] text-[#f2f2f0] h-[36px] px-[15px] py-[7px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4] transition-colors flex items-center gap-2">
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5" style={{filter: 'brightness(0) saturate(100%) invert(97%) sepia(3%) saturate(16%) hue-rotate(129deg) brightness(107%) contrast(97%)'}} />
                    Button
                  </button>
                  <button className="bg-[#4648ff] hover:bg-[#2a2ba5] text-[#f2f2f0] h-[40px] px-[19px] py-[9px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4] transition-colors flex items-center gap-2">
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5" style={{filter: 'brightness(0) saturate(100%) invert(97%) sepia(3%) saturate(16%) hue-rotate(129deg) brightness(107%) contrast(97%)'}} />
                    Button
                  </button>
                  <button className="bg-[#4648ff] hover:bg-[#2a2ba5] text-[#f2f2f0] h-[49px] px-[23px] py-[12px] rounded-lg font-host-grotesk font-normal text-lg leading-[1.4] transition-colors flex items-center gap-2">
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5" style={{filter: 'brightness(0) saturate(100%) invert(97%) sepia(3%) saturate(16%) hue-rotate(129deg) brightness(107%) contrast(97%)'}} />
                    Button
                  </button>
                  
                  {/* Row 2: Hover State */}
                  <button className="bg-[#2a2ba5] text-[#f2f2f0] h-[36px] px-[15px] py-[7px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4] flex items-center gap-2">
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5" style={{filter: 'brightness(0) saturate(100%) invert(97%) sepia(3%) saturate(16%) hue-rotate(129deg) brightness(107%) contrast(97%)'}} />
                    Button
                  </button>
                  <button className="bg-[#2a2ba5] text-[#f2f2f0] h-[40px] px-[19px] py-[9px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4] flex items-center gap-2">
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5" style={{filter: 'brightness(0) saturate(100%) invert(97%) sepia(3%) saturate(16%) hue-rotate(129deg) brightness(107%) contrast(97%)'}} />
                    Button
                  </button>
                  <button className="bg-[#2a2ba5] text-[#f2f2f0] h-[49px] px-[23px] py-[12px] rounded-lg font-host-grotesk font-normal text-lg leading-[1.4] flex items-center gap-2">
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5" style={{filter: 'brightness(0) saturate(100%) invert(97%) sepia(3%) saturate(16%) hue-rotate(129deg) brightness(107%) contrast(97%)'}} />
                    Button
                  </button>
                  
                  {/* Row 3: Disabled State */}
                  <button className="bg-[#9091ff] text-[#f2f2f0] h-[36px] px-[15px] py-[7px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4] opacity-50 cursor-not-allowed flex items-center gap-2">
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5" style={{filter: 'brightness(0) saturate(100%) invert(97%) sepia(3%) saturate(16%) hue-rotate(129deg) brightness(107%) contrast(97%)'}} />
                    Button
                  </button>
                  <button className="bg-[#9091ff] text-[#f2f2f0] h-[40px] px-[19px] py-[9px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4] opacity-50 cursor-not-allowed flex items-center gap-2">
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5" style={{filter: 'brightness(0) saturate(100%) invert(97%) sepia(3%) saturate(16%) hue-rotate(129deg) brightness(107%) contrast(97%)'}} />
                    Button
                  </button>
                  <button className="bg-[#9091ff] text-[#f2f2f0] h-[49px] px-[23px] py-[12px] rounded-lg font-host-grotesk font-normal text-lg leading-[1.4] opacity-50 cursor-not-allowed flex items-center gap-2">
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5" style={{filter: 'brightness(0) saturate(100%) invert(97%) sepia(3%) saturate(16%) hue-rotate(129deg) brightness(107%) contrast(97%)'}} />
                    Button
                  </button>
                </div>

                {/* Text + Icon Buttons - 3x3 Layout */}
                <div className="grid flex-shrink-0" style={{ 
                  gridTemplateColumns: 'auto auto auto',
                  columnGap: '37px', 
                  rowGap: '32px' 
                }}>
                  {/* Row 1: Default State */}
                  <button className="bg-[#4648ff] hover:bg-[#2a2ba5] text-[#f2f2f0] h-[36px] px-[15px] py-[7px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4] transition-colors flex items-center gap-2">
                    Button
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5" style={{filter: 'brightness(0) saturate(100%) invert(97%) sepia(3%) saturate(16%) hue-rotate(129deg) brightness(107%) contrast(97%)'}} />
                  </button>
                  <button className="bg-[#4648ff] hover:bg-[#2a2ba5] text-[#f2f2f0] h-[40px] px-[19px] py-[9px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4] transition-colors flex items-center gap-2">
                    Button
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5" style={{filter: 'brightness(0) saturate(100%) invert(97%) sepia(3%) saturate(16%) hue-rotate(129deg) brightness(107%) contrast(97%)'}} />
                  </button>
                  <button className="bg-[#4648ff] hover:bg-[#2a2ba5] text-[#f2f2f0] h-[49px] px-[23px] py-[12px] rounded-lg font-host-grotesk font-normal text-lg leading-[1.4] transition-colors flex items-center gap-2">
                    Button
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5" style={{filter: 'brightness(0) saturate(100%) invert(97%) sepia(3%) saturate(16%) hue-rotate(129deg) brightness(107%) contrast(97%)'}} />
                  </button>
                  
                  {/* Row 2: Hover State */}
                  <button className="bg-[#2a2ba5] text-[#f2f2f0] h-[36px] px-[15px] py-[7px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4] flex items-center gap-2">
                    Button
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5" style={{filter: 'brightness(0) saturate(100%) invert(97%) sepia(3%) saturate(16%) hue-rotate(129deg) brightness(107%) contrast(97%)'}} />
                  </button>
                  <button className="bg-[#2a2ba5] text-[#f2f2f0] h-[40px] px-[19px] py-[9px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4] flex items-center gap-2">
                    Button
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5" style={{filter: 'brightness(0) saturate(100%) invert(97%) sepia(3%) saturate(16%) hue-rotate(129deg) brightness(107%) contrast(97%)'}} />
                  </button>
                  <button className="bg-[#2a2ba5] text-[#f2f2f0] h-[49px] px-[23px] py-[12px] rounded-lg font-host-grotesk font-normal text-lg leading-[1.4] flex items-center gap-2">
                    Button
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5" style={{filter: 'brightness(0) saturate(100%) invert(97%) sepia(3%) saturate(16%) hue-rotate(129deg) brightness(107%) contrast(97%)'}} />
                  </button>
                  
                  {/* Row 3: Disabled State */}
                  <button className="bg-[#9091ff] text-[#f2f2f0] h-[36px] px-[15px] py-[7px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4] opacity-50 cursor-not-allowed flex items-center gap-2">
                    Button
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5" style={{filter: 'brightness(0) saturate(100%) invert(97%) sepia(3%) saturate(16%) hue-rotate(129deg) brightness(107%) contrast(97%)'}} />
                  </button>
                  <button className="bg-[#9091ff] text-[#f2f2f0] h-[40px] px-[19px] py-[9px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4] opacity-50 cursor-not-allowed flex items-center gap-2">
                    Button
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5" style={{filter: 'brightness(0) saturate(100%) invert(97%) sepia(3%) saturate(16%) hue-rotate(129deg) brightness(107%) contrast(97%)'}} />
                  </button>
                  <button className="bg-[#9091ff] text-[#f2f2f0] h-[49px] px-[23px] py-[12px] rounded-lg font-host-grotesk font-normal text-lg leading-[1.4] opacity-50 cursor-not-allowed flex items-center gap-2">
                    Button
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5" style={{filter: 'brightness(0) saturate(100%) invert(97%) sepia(3%) saturate(16%) hue-rotate(129deg) brightness(107%) contrast(97%)'}} />
                  </button>
                </div>
                </div>

                {/* Second Row - Black Buttons */}
                <div className="w-full flex flex-wrap gap-8 xl:gap-[200px]" data-name="Button">
                {/* Text Only Buttons - 3x3 Layout */}
                <div className="grid flex-shrink-0" style={{ 
                  gridTemplateColumns: '74px 82px 108px',
                  columnGap: '37px', 
                  rowGap: '32px' 
                }}>
                  {/* Row 1: Default State */}
                  <button className="bg-[#010109] hover:bg-[#292a36] text-[#f2f2f0] w-[74px] h-[36px] px-[15px] py-[7px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4] transition-colors">
                    Button
                  </button>
                  <button className="bg-[#010109] hover:bg-[#292a36] text-[#f2f2f0] w-[82px] h-[40px] px-[19px] py-[9px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4] transition-colors">
                    Button
                  </button>
                  <button className="bg-[#010109] hover:bg-[#292a36] text-[#f2f2f0] w-[108px] h-[49px] px-[23px] py-[12px] rounded-lg font-host-grotesk font-normal text-lg leading-[1.4] transition-colors">
                    Button
                  </button>
                  
                  {/* Row 2: Hover State */}
                  <button className="bg-[#292a36] text-[#a3a4b5] w-[74px] h-[36px] px-[15px] py-[7px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4]">
                    Button
                  </button>
                  <button className="bg-[#292a36] text-[#a3a4b5] w-[82px] h-[40px] px-[19px] py-[9px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4]">
                    Button
                  </button>
                  <button className="bg-[#292a36] text-[#a3a4b5] w-[108px] h-[49px] px-[23px] py-[12px] rounded-lg font-host-grotesk font-normal text-lg leading-[1.4]">
                    Button
                  </button>
                  
                  {/* Row 3: Disabled State */}
                  <button className="bg-[#292a36] text-[#a3a4b5] w-[74px] h-[36px] px-[15px] py-[7px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4] opacity-50 cursor-not-allowed">
                    Button
                  </button>
                  <button className="bg-[#292a36] text-[#a3a4b5] w-[82px] h-[40px] px-[19px] py-[9px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4] opacity-50 cursor-not-allowed">
                    Button
                  </button>
                  <button className="bg-[#292a36] text-[#a3a4b5] w-[108px] h-[49px] px-[23px] py-[12px] rounded-lg font-host-grotesk font-normal text-lg leading-[1.4] opacity-50 cursor-not-allowed">
                    Button
                  </button>
                </div>

                {/* Icon + Text Buttons - 3x3 Layout */}
                <div className="grid flex-shrink-0" style={{ 
                  gridTemplateColumns: 'auto auto auto',
                  columnGap: '37px', 
                  rowGap: '32px' 
                }}>
                  {/* Row 1: Default State */}
                  <button className="bg-[#010109] hover:bg-[#292a36] text-[#f2f2f0] h-[36px] px-[15px] py-[7px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4] transition-colors flex items-center gap-2">
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5" style={{filter: 'brightness(0) saturate(100%) invert(97%) sepia(3%) saturate(16%) hue-rotate(129deg) brightness(107%) contrast(97%)'}} />
                    Button
                  </button>
                  <button className="bg-[#010109] hover:bg-[#292a36] text-[#f2f2f0] h-[40px] px-[19px] py-[9px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4] transition-colors flex items-center gap-2">
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5" style={{filter: 'brightness(0) saturate(100%) invert(97%) sepia(3%) saturate(16%) hue-rotate(129deg) brightness(107%) contrast(97%)'}} />
                    Button
                  </button>
                  <button className="bg-[#010109] hover:bg-[#292a36] text-[#f2f2f0] h-[49px] px-[23px] py-[12px] rounded-lg font-host-grotesk font-normal text-lg leading-[1.4] transition-colors flex items-center gap-2">
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5" style={{filter: 'brightness(0) saturate(100%) invert(97%) sepia(3%) saturate(16%) hue-rotate(129deg) brightness(107%) contrast(97%)'}} />
                    Button
                  </button>
                  
                  {/* Row 2: Hover State */}
                  <button className="bg-[#292a36] text-[#a3a4b5] h-[36px] px-[15px] py-[7px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4] flex items-center gap-2">
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5" style={{filter: 'brightness(0) saturate(100%) invert(67%) sepia(6%) saturate(774%) hue-rotate(200deg) brightness(94%) contrast(92%)'}} />
                    Button
                  </button>
                  <button className="bg-[#292a36] text-[#a3a4b5] h-[40px] px-[19px] py-[9px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4] flex items-center gap-2">
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5" style={{filter: 'brightness(0) saturate(100%) invert(67%) sepia(6%) saturate(774%) hue-rotate(200deg) brightness(94%) contrast(92%)'}} />
                    Button
                  </button>
                  <button className="bg-[#292a36] text-[#a3a4b5] h-[49px] px-[23px] py-[12px] rounded-lg font-host-grotesk font-normal text-lg leading-[1.4] flex items-center gap-2">
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5" style={{filter: 'brightness(0) saturate(100%) invert(67%) sepia(6%) saturate(774%) hue-rotate(200deg) brightness(94%) contrast(92%)'}} />
                    Button
                  </button>
                  
                  {/* Row 3: Disabled State */}
                  <button className="bg-[#292a36] text-[#a3a4b5] h-[36px] px-[15px] py-[7px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4] opacity-50 cursor-not-allowed flex items-center gap-2">
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5" style={{filter: 'brightness(0) saturate(100%) invert(67%) sepia(6%) saturate(774%) hue-rotate(200deg) brightness(94%) contrast(92%)'}} />
                    Button
                  </button>
                  <button className="bg-[#292a36] text-[#a3a4b5] h-[40px] px-[19px] py-[9px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4] opacity-50 cursor-not-allowed flex items-center gap-2">
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5" style={{filter: 'brightness(0) saturate(100%) invert(67%) sepia(6%) saturate(774%) hue-rotate(200deg) brightness(94%) contrast(92%)'}} />
                    Button
                  </button>
                  <button className="bg-[#292a36] text-[#a3a4b5] h-[49px] px-[23px] py-[12px] rounded-lg font-host-grotesk font-normal text-lg leading-[1.4] opacity-50 cursor-not-allowed flex items-center gap-2">
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5" style={{filter: 'brightness(0) saturate(100%) invert(67%) sepia(6%) saturate(774%) hue-rotate(200deg) brightness(94%) contrast(92%)'}} />
                    Button
                  </button>
                </div>

                {/* Text + Icon Buttons - 3x3 Layout */}
                <div className="grid flex-shrink-0" style={{ 
                  gridTemplateColumns: 'auto auto auto',
                  columnGap: '37px', 
                  rowGap: '32px' 
                }}>
                  {/* Row 1: Default State */}
                  <button className="bg-[#010109] hover:bg-[#292a36] text-[#f2f2f0] h-[36px] px-[15px] py-[7px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4] transition-colors flex items-center gap-2">
                    Button
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5" style={{filter: 'brightness(0) saturate(100%) invert(97%) sepia(3%) saturate(16%) hue-rotate(129deg) brightness(107%) contrast(97%)'}} />
                  </button>
                  <button className="bg-[#010109] hover:bg-[#292a36] text-[#f2f2f0] h-[40px] px-[19px] py-[9px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4] transition-colors flex items-center gap-2">
                    Button
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5" style={{filter: 'brightness(0) saturate(100%) invert(97%) sepia(3%) saturate(16%) hue-rotate(129deg) brightness(107%) contrast(97%)'}} />
                  </button>
                  <button className="bg-[#010109] hover:bg-[#292a36] text-[#f2f2f0] h-[49px] px-[23px] py-[12px] rounded-lg font-host-grotesk font-normal text-lg leading-[1.4] transition-colors flex items-center gap-2">
                    Button
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5" style={{filter: 'brightness(0) saturate(100%) invert(97%) sepia(3%) saturate(16%) hue-rotate(129deg) brightness(107%) contrast(97%)'}} />
                  </button>
                  
                  {/* Row 2: Hover State */}
                  <button className="bg-[#292a36] text-[#a3a4b5] h-[36px] px-[15px] py-[7px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4] flex items-center gap-2">
                    Button
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5" style={{filter: 'brightness(0) saturate(100%) invert(67%) sepia(6%) saturate(774%) hue-rotate(200deg) brightness(94%) contrast(92%)'}} />
                  </button>
                  <button className="bg-[#292a36] text-[#a3a4b5] h-[40px] px-[19px] py-[9px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4] flex items-center gap-2">
                    Button
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5" style={{filter: 'brightness(0) saturate(100%) invert(67%) sepia(6%) saturate(774%) hue-rotate(200deg) brightness(94%) contrast(92%)'}} />
                  </button>
                  <button className="bg-[#292a36] text-[#a3a4b5] h-[49px] px-[23px] py-[12px] rounded-lg font-host-grotesk font-normal text-lg leading-[1.4] flex items-center gap-2">
                    Button
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5" style={{filter: 'brightness(0) saturate(100%) invert(67%) sepia(6%) saturate(774%) hue-rotate(200deg) brightness(94%) contrast(92%)'}} />
                  </button>
                  
                  {/* Row 3: Disabled State */}
                  <button className="bg-[#292a36] text-[#a3a4b5] h-[36px] px-[15px] py-[7px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4] opacity-50 cursor-not-allowed flex items-center gap-2">
                    Button
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5" style={{filter: 'brightness(0) saturate(100%) invert(67%) sepia(6%) saturate(774%) hue-rotate(200deg) brightness(94%) contrast(92%)'}} />
                  </button>
                  <button className="bg-[#292a36] text-[#a3a4b5] h-[40px] px-[19px] py-[9px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4] opacity-50 cursor-not-allowed flex items-center gap-2">
                    Button
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5" style={{filter: 'brightness(0) saturate(100%) invert(67%) sepia(6%) saturate(774%) hue-rotate(200deg) brightness(94%) contrast(92%)'}} />
                  </button>
                  <button className="bg-[#292a36] text-[#a3a4b5] h-[49px] px-[23px] py-[12px] rounded-lg font-host-grotesk font-normal text-lg leading-[1.4] opacity-50 cursor-not-allowed flex items-center gap-2">
                    Button
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5" style={{filter: 'brightness(0) saturate(100%) invert(67%) sepia(6%) saturate(774%) hue-rotate(200deg) brightness(94%) contrast(92%)'}} />
                  </button>
                </div>
                </div>

                {/* Third Row - White Buttons */}
                <div className="w-full flex flex-wrap gap-8 xl:gap-[200px]" data-name="Button">
                {/* Text Only Buttons - 3x3 Layout */}
                <div className="grid flex-shrink-0" style={{ 
                  gridTemplateColumns: '74px 82px 108px',
                  columnGap: '37px', 
                  rowGap: '32px' 
                }}>
                  {/* Row 1: Default State */}
                  <button className="bg-[#f2f2f0] hover:bg-[#a3a4b5] text-[#010109] w-[74px] h-[36px] px-[15px] py-[7px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4] transition-colors">
                    Button
                  </button>
                  <button className="bg-[#f2f2f0] hover:bg-[#a3a4b5] text-[#010109] w-[82px] h-[40px] px-[19px] py-[9px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4] transition-colors">
                    Button
                  </button>
                  <button className="bg-[#f2f2f0] hover:bg-[#a3a4b5] text-[#010109] w-[108px] h-[49px] px-[23px] py-[12px] rounded-lg font-host-grotesk font-normal text-lg leading-[1.4] transition-colors">
                    Button
                  </button>
                  
                  {/* Row 2: Hover State */}
                  <button className="bg-[#a3a4b5] text-[#010109] w-[74px] h-[36px] px-[15px] py-[7px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4]">
                    Button
                  </button>
                  <button className="bg-[#a3a4b5] text-[#010109] w-[82px] h-[40px] px-[19px] py-[9px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4]">
                    Button
                  </button>
                  <button className="bg-[#a3a4b5] text-[#010109] w-[108px] h-[49px] px-[23px] py-[12px] rounded-lg font-host-grotesk font-normal text-lg leading-[1.4]">
                    Button
                  </button>
                  
                  {/* Row 3: Disabled State */}
                  <button className="bg-[#a3a4b5] text-[#010109] w-[74px] h-[36px] px-[15px] py-[7px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4] opacity-50 cursor-not-allowed">
                    Button
                  </button>
                  <button className="bg-[#a3a4b5] text-[#010109] w-[82px] h-[40px] px-[19px] py-[9px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4] opacity-50 cursor-not-allowed">
                    Button
                  </button>
                  <button className="bg-[#a3a4b5] text-[#010109] w-[108px] h-[49px] px-[23px] py-[12px] rounded-lg font-host-grotesk font-normal text-lg leading-[1.4] opacity-50 cursor-not-allowed">
                    Button
                  </button>
                </div>

                {/* Icon + Text Buttons - 3x3 Layout */}
                <div className="grid flex-shrink-0" style={{ 
                  gridTemplateColumns: 'auto auto auto',
                  columnGap: '37px', 
                  rowGap: '32px' 
                }}>
                  {/* Row 1: Default State */}
                  <button className="bg-[#f2f2f0] hover:bg-[#a3a4b5] text-[#010109] h-[36px] px-[15px] py-[7px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4] transition-colors flex items-center gap-2">
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5 brightness-0" />
                    Button
                  </button>
                  <button className="bg-[#f2f2f0] hover:bg-[#a3a4b5] text-[#010109] h-[40px] px-[19px] py-[9px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4] transition-colors flex items-center gap-2">
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5 brightness-0" />
                    Button
                  </button>
                  <button className="bg-[#f2f2f0] hover:bg-[#a3a4b5] text-[#010109] h-[49px] px-[23px] py-[12px] rounded-lg font-host-grotesk font-normal text-lg leading-[1.4] transition-colors flex items-center gap-2">
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5 brightness-0" />
                    Button
                  </button>
                  
                  {/* Row 2: Hover State */}
                  <button className="bg-[#a3a4b5] text-[#010109] h-[36px] px-[15px] py-[7px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4] flex items-center gap-2">
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5 brightness-0" />
                    Button
                  </button>
                  <button className="bg-[#a3a4b5] text-[#010109] h-[40px] px-[19px] py-[9px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4] flex items-center gap-2">
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5 brightness-0" />
                    Button
                  </button>
                  <button className="bg-[#a3a4b5] text-[#010109] h-[49px] px-[23px] py-[12px] rounded-lg font-host-grotesk font-normal text-lg leading-[1.4] flex items-center gap-2">
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5 brightness-0" />
                    Button
                  </button>
                  
                  {/* Row 3: Disabled State */}
                  <button className="bg-[#a3a4b5] text-[#010109] h-[36px] px-[15px] py-[7px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4] opacity-50 cursor-not-allowed flex items-center gap-2">
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5 brightness-0" />
                    Button
                  </button>
                  <button className="bg-[#a3a4b5] text-[#010109] h-[40px] px-[19px] py-[9px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4] opacity-50 cursor-not-allowed flex items-center gap-2">
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5 brightness-0" />
                    Button
                  </button>
                  <button className="bg-[#a3a4b5] text-[#010109] h-[49px] px-[23px] py-[12px] rounded-lg font-host-grotesk font-normal text-lg leading-[1.4] opacity-50 cursor-not-allowed flex items-center gap-2">
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5 brightness-0" />
                    Button
                  </button>
                </div>

                {/* Text + Icon Buttons - 3x3 Layout */}
                <div className="grid flex-shrink-0" style={{ 
                  gridTemplateColumns: 'auto auto auto',
                  columnGap: '37px', 
                  rowGap: '32px' 
                }}>
                  {/* Row 1: Default State */}
                  <button className="bg-[#f2f2f0] hover:bg-[#a3a4b5] text-[#010109] h-[36px] px-[15px] py-[7px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4] transition-colors flex items-center gap-2">
                    Button
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5 brightness-0" />
                  </button>
                  <button className="bg-[#f2f2f0] hover:bg-[#a3a4b5] text-[#010109] h-[40px] px-[19px] py-[9px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4] transition-colors flex items-center gap-2">
                    Button
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5 brightness-0" />
                  </button>
                  <button className="bg-[#f2f2f0] hover:bg-[#a3a4b5] text-[#010109] h-[49px] px-[23px] py-[12px] rounded-lg font-host-grotesk font-normal text-lg leading-[1.4] transition-colors flex items-center gap-2">
                    Button
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5 brightness-0" />
                  </button>
                  
                  {/* Row 2: Hover State */}
                  <button className="bg-[#a3a4b5] text-[#010109] h-[36px] px-[15px] py-[7px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4] flex items-center gap-2">
                    Button
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5 brightness-0" />
                  </button>
                  <button className="bg-[#a3a4b5] text-[#010109] h-[40px] px-[19px] py-[9px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4] flex items-center gap-2">
                    Button
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5 brightness-0" />
                  </button>
                  <button className="bg-[#a3a4b5] text-[#010109] h-[49px] px-[23px] py-[12px] rounded-lg font-host-grotesk font-normal text-lg leading-[1.4] flex items-center gap-2">
                    Button
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5 brightness-0" />
                  </button>
                  
                  {/* Row 3: Disabled State */}
                  <button className="bg-[#a3a4b5] text-[#010109] h-[36px] px-[15px] py-[7px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4] opacity-50 cursor-not-allowed flex items-center gap-2">
                    Button
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5 brightness-0" />
                  </button>
                  <button className="bg-[#a3a4b5] text-[#010109] h-[40px] px-[19px] py-[9px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4] opacity-50 cursor-not-allowed flex items-center gap-2">
                    Button
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5 brightness-0" />
                  </button>
                  <button className="bg-[#a3a4b5] text-[#010109] h-[49px] px-[23px] py-[12px] rounded-lg font-host-grotesk font-normal text-lg leading-[1.4] opacity-50 cursor-not-allowed flex items-center gap-2">
                    Button
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5 brightness-0" />
                  </button>
                </div>
                </div>

                {/* Fourth Row - Secondary Buttons */}
                <div className="w-full flex flex-wrap gap-8 xl:gap-[200px]" data-name="Button">
                {/* Text Only Buttons - 3x3 Layout */}
                <div className="grid flex-shrink-0" style={{ 
                  gridTemplateColumns: '74px 82px 108px',
                  columnGap: '37px', 
                  rowGap: '32px' 
                }}>
                  {/* Row 1: Default State */}
                  <button className="bg-[#c7c8ff] hover:bg-[#b5b6ff] text-[#4648ff] w-[74px] h-[36px] px-[15px] py-[7px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4] transition-colors">
                    Button
                  </button>
                  <button className="bg-[#c7c8ff] hover:bg-[#b5b6ff] text-[#4648ff] w-[82px] h-[40px] px-[19px] py-[9px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4] transition-colors">
                    Button
                  </button>
                  <button className="bg-[#c7c8ff] hover:bg-[#b5b6ff] text-[#4648ff] w-[108px] h-[49px] px-[23px] py-[12px] rounded-lg font-host-grotesk font-normal text-lg leading-[1.4] transition-colors">
                    Button
                  </button>
                  
                  {/* Row 2: Hover State */}
                  <button className="bg-[#b5b6ff] text-[#4648ff] w-[74px] h-[36px] px-[15px] py-[7px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4]">
                    Button
                  </button>
                  <button className="bg-[#b5b6ff] text-[#4648ff] w-[82px] h-[40px] px-[19px] py-[9px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4]">
                    Button
                  </button>
                  <button className="bg-[#b5b6ff] text-[#4648ff] w-[108px] h-[49px] px-[23px] py-[12px] rounded-lg font-host-grotesk font-normal text-lg leading-[1.4]">
                    Button
                  </button>
                  
                  {/* Row 3: Disabled State */}
                  <button className="bg-[#b5b6ff] text-[#4648ff] w-[74px] h-[36px] px-[15px] py-[7px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4] opacity-50 cursor-not-allowed">
                    Button
                  </button>
                  <button className="bg-[#b5b6ff] text-[#4648ff] w-[82px] h-[40px] px-[19px] py-[9px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4] opacity-50 cursor-not-allowed">
                    Button
                  </button>
                  <button className="bg-[#b5b6ff] text-[#4648ff] w-[108px] h-[49px] px-[23px] py-[12px] rounded-lg font-host-grotesk font-normal text-lg leading-[1.4] opacity-50 cursor-not-allowed">
                    Button
                  </button>
                </div>

                {/* Icon + Text Buttons - 3x3 Layout */}
                <div className="grid flex-shrink-0" style={{ 
                  gridTemplateColumns: 'auto auto auto',
                  columnGap: '37px', 
                  rowGap: '32px' 
                }}>
                  {/* Row 1: Default State */}
                  <button className="bg-[#c7c8ff] hover:bg-[#b5b6ff] text-[#4648ff] h-[36px] px-[15px] py-[7px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4] transition-colors flex items-center gap-2">
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5" style={{filter: 'brightness(0) saturate(100%) invert(27%) sepia(91%) saturate(4573%) hue-rotate(232deg) brightness(102%) contrast(107%)'}} />
                    Button
                  </button>
                  <button className="bg-[#c7c8ff] hover:bg-[#b5b6ff] text-[#4648ff] h-[40px] px-[19px] py-[9px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4] transition-colors flex items-center gap-2">
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5" style={{filter: 'brightness(0) saturate(100%) invert(27%) sepia(91%) saturate(4573%) hue-rotate(232deg) brightness(102%) contrast(107%)'}} />
                    Button
                  </button>
                  <button className="bg-[#c7c8ff] hover:bg-[#b5b6ff] text-[#4648ff] h-[49px] px-[23px] py-[12px] rounded-lg font-host-grotesk font-normal text-lg leading-[1.4] transition-colors flex items-center gap-2">
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5" style={{filter: 'brightness(0) saturate(100%) invert(27%) sepia(91%) saturate(4573%) hue-rotate(232deg) brightness(102%) contrast(107%)'}} />
                    Button
                  </button>
                  
                  {/* Row 2: Hover State */}
                  <button className="bg-[#b5b6ff] text-[#4648ff] h-[36px] px-[15px] py-[7px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4] flex items-center gap-2">
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5" style={{filter: 'brightness(0) saturate(100%) invert(27%) sepia(91%) saturate(4573%) hue-rotate(232deg) brightness(102%) contrast(107%)'}} />
                    Button
                  </button>
                  <button className="bg-[#b5b6ff] text-[#4648ff] h-[40px] px-[19px] py-[9px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4] flex items-center gap-2">
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5" style={{filter: 'brightness(0) saturate(100%) invert(27%) sepia(91%) saturate(4573%) hue-rotate(232deg) brightness(102%) contrast(107%)'}} />
                    Button
                  </button>
                  <button className="bg-[#b5b6ff] text-[#4648ff] h-[49px] px-[23px] py-[12px] rounded-lg font-host-grotesk font-normal text-lg leading-[1.4] flex items-center gap-2">
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5" style={{filter: 'brightness(0) saturate(100%) invert(27%) sepia(91%) saturate(4573%) hue-rotate(232deg) brightness(102%) contrast(107%)'}} />
                    Button
                  </button>
                  
                  {/* Row 3: Disabled State */}
                  <button className="bg-[#b5b6ff] text-[#4648ff] h-[36px] px-[15px] py-[7px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4] opacity-50 cursor-not-allowed flex items-center gap-2">
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5" style={{filter: 'brightness(0) saturate(100%) invert(27%) sepia(91%) saturate(4573%) hue-rotate(232deg) brightness(102%) contrast(107%)'}} />
                    Button
                  </button>
                  <button className="bg-[#b5b6ff] text-[#4648ff] h-[40px] px-[19px] py-[9px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4] opacity-50 cursor-not-allowed flex items-center gap-2">
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5" style={{filter: 'brightness(0) saturate(100%) invert(27%) sepia(91%) saturate(4573%) hue-rotate(232deg) brightness(102%) contrast(107%)'}} />
                    Button
                  </button>
                  <button className="bg-[#b5b6ff] text-[#4648ff] h-[49px] px-[23px] py-[12px] rounded-lg font-host-grotesk font-normal text-lg leading-[1.4] opacity-50 cursor-not-allowed flex items-center gap-2">
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5" style={{filter: 'brightness(0) saturate(100%) invert(27%) sepia(91%) saturate(4573%) hue-rotate(232deg) brightness(102%) contrast(107%)'}} />
                    Button
                  </button>
                </div>

                {/* Text + Icon Buttons - 3x3 Layout */}
                <div className="grid flex-shrink-0" style={{ 
                  gridTemplateColumns: 'auto auto auto',
                  columnGap: '37px', 
                  rowGap: '32px' 
                }}>
                  {/* Row 1: Default State */}
                  <button className="bg-[#c7c8ff] hover:bg-[#b5b6ff] text-[#4648ff] h-[36px] px-[15px] py-[7px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4] transition-colors flex items-center gap-2">
                    Button
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5" style={{filter: 'brightness(0) saturate(100%) invert(27%) sepia(91%) saturate(4573%) hue-rotate(232deg) brightness(102%) contrast(107%)'}} />
                  </button>
                  <button className="bg-[#c7c8ff] hover:bg-[#b5b6ff] text-[#4648ff] h-[40px] px-[19px] py-[9px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4] transition-colors flex items-center gap-2">
                    Button
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5" style={{filter: 'brightness(0) saturate(100%) invert(27%) sepia(91%) saturate(4573%) hue-rotate(232deg) brightness(102%) contrast(107%)'}} />
                  </button>
                  <button className="bg-[#c7c8ff] hover:bg-[#b5b6ff] text-[#4648ff] h-[49px] px-[23px] py-[12px] rounded-lg font-host-grotesk font-normal text-lg leading-[1.4] transition-colors flex items-center gap-2">
                    Button
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5" style={{filter: 'brightness(0) saturate(100%) invert(27%) sepia(91%) saturate(4573%) hue-rotate(232deg) brightness(102%) contrast(107%)'}} />
                  </button>
                  
                  {/* Row 2: Hover State */}
                  <button className="bg-[#b5b6ff] text-[#4648ff] h-[36px] px-[15px] py-[7px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4] flex items-center gap-2">
                    Button
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5" style={{filter: 'brightness(0) saturate(100%) invert(27%) sepia(91%) saturate(4573%) hue-rotate(232deg) brightness(102%) contrast(107%)'}} />
                  </button>
                  <button className="bg-[#b5b6ff] text-[#4648ff] h-[40px] px-[19px] py-[9px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4] flex items-center gap-2">
                    Button
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5" style={{filter: 'brightness(0) saturate(100%) invert(27%) sepia(91%) saturate(4573%) hue-rotate(232deg) brightness(102%) contrast(107%)'}} />
                  </button>
                  <button className="bg-[#b5b6ff] text-[#4648ff] h-[49px] px-[23px] py-[12px] rounded-lg font-host-grotesk font-normal text-lg leading-[1.4] flex items-center gap-2">
                    Button
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5" style={{filter: 'brightness(0) saturate(100%) invert(27%) sepia(91%) saturate(4573%) hue-rotate(232deg) brightness(102%) contrast(107%)'}} />
                  </button>
                  
                  {/* Row 3: Disabled State */}
                  <button className="bg-[#b5b6ff] text-[#4648ff] h-[36px] px-[15px] py-[7px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4] opacity-50 cursor-not-allowed flex items-center gap-2">
                    Button
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5" style={{filter: 'brightness(0) saturate(100%) invert(27%) sepia(91%) saturate(4573%) hue-rotate(232deg) brightness(102%) contrast(107%)'}} />
                  </button>
                  <button className="bg-[#b5b6ff] text-[#4648ff] h-[40px] px-[19px] py-[9px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4] opacity-50 cursor-not-allowed flex items-center gap-2">
                    Button
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5" style={{filter: 'brightness(0) saturate(100%) invert(27%) sepia(91%) saturate(4573%) hue-rotate(232deg) brightness(102%) contrast(107%)'}} />
                  </button>
                  <button className="bg-[#b5b6ff] text-[#4648ff] h-[49px] px-[23px] py-[12px] rounded-lg font-host-grotesk font-normal text-lg leading-[1.4] opacity-50 cursor-not-allowed flex items-center gap-2">
                    Button
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5" style={{filter: 'brightness(0) saturate(100%) invert(27%) sepia(91%) saturate(4573%) hue-rotate(232deg) brightness(102%) contrast(107%)'}} />
                  </button>
                </div>
                </div>

                {/* Fifth Row - Outline Buttons */}
                <div className="w-full flex flex-wrap gap-8 xl:gap-[200px]" data-name="Button">
                {/* Text Only Buttons - 3x3 Layout */}
                <div className="grid flex-shrink-0" style={{ 
                  gridTemplateColumns: '74px 82px 108px',
                  columnGap: '37px', 
                  rowGap: '32px' 
                }}>
                  {/* Row 1: Default State */}
                  <button className="bg-transparent hover:bg-[rgba(70,72,255,0.15)] text-[#4648ff] w-[74px] h-[36px] px-[15px] py-[7px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4] transition-colors" style={{boxShadow: 'inset 0 0 0 2px #4648ff'}}>
                    Button
                  </button>
                  <button className="bg-transparent hover:bg-[rgba(70,72,255,0.15)] text-[#4648ff] w-[82px] h-[40px] px-[19px] py-[9px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4] transition-colors" style={{boxShadow: 'inset 0 0 0 2px #4648ff'}}>
                    Button
                  </button>
                  <button className="bg-transparent hover:bg-[rgba(70,72,255,0.15)] text-[#4648ff] w-[108px] h-[49px] px-[23px] py-[12px] rounded-lg font-host-grotesk font-normal text-lg leading-[1.4] transition-colors" style={{boxShadow: 'inset 0 0 0 2px #4648ff'}}>
                    Button
                  </button>
                  
                  {/* Row 2: Hover State */}
                  <button className="bg-[rgba(70,72,255,0.15)] text-[#4648ff] w-[74px] h-[36px] px-[15px] py-[7px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4]" style={{boxShadow: 'inset 0 0 0 2px #4648ff'}}>
                    Button
                  </button>
                  <button className="bg-[rgba(70,72,255,0.15)] text-[#4648ff] w-[82px] h-[40px] px-[19px] py-[9px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4]" style={{boxShadow: 'inset 0 0 0 2px #4648ff'}}>
                    Button
                  </button>
                  <button className="bg-[rgba(70,72,255,0.15)] text-[#4648ff] w-[108px] h-[49px] px-[23px] py-[12px] rounded-lg font-host-grotesk font-normal text-lg leading-[1.4]" style={{boxShadow: 'inset 0 0 0 2px #4648ff'}}>
                    Button
                  </button>
                  
                  {/* Row 3: Disabled State */}
                  <button className="bg-[rgba(70,72,255,0.15)] text-[#4648ff] w-[74px] h-[36px] px-[15px] py-[7px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4] opacity-50 cursor-not-allowed" style={{boxShadow: 'inset 0 0 0 2px #4648ff'}}>
                    Button
                  </button>
                  <button className="bg-[rgba(70,72,255,0.15)] text-[#4648ff] w-[82px] h-[40px] px-[19px] py-[9px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4] opacity-50 cursor-not-allowed" style={{boxShadow: 'inset 0 0 0 2px #4648ff'}}>
                    Button
                  </button>
                  <button className="bg-[rgba(70,72,255,0.15)] text-[#4648ff] w-[108px] h-[49px] px-[23px] py-[12px] rounded-lg font-host-grotesk font-normal text-lg leading-[1.4] opacity-50 cursor-not-allowed" style={{boxShadow: 'inset 0 0 0 2px #4648ff'}}>
                    Button
                  </button>
                </div>

                {/* Icon + Text Buttons - 3x3 Layout */}
                <div className="grid flex-shrink-0" style={{ 
                  gridTemplateColumns: 'auto auto auto',
                  columnGap: '37px', 
                  rowGap: '32px' 
                }}>
                  {/* Row 1: Default State */}
                  <button className="bg-transparent hover:bg-[rgba(70,72,255,0.15)] text-[#4648ff] h-[36px] px-[15px] py-[7px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4] transition-colors flex items-center gap-2" style={{boxShadow: 'inset 0 0 0 2px #4648ff'}}>
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5" style={{filter: 'brightness(0) saturate(100%) invert(27%) sepia(91%) saturate(4573%) hue-rotate(232deg) brightness(102%) contrast(107%)'}} />
                    Button
                  </button>
                  <button className="bg-transparent hover:bg-[rgba(70,72,255,0.15)] text-[#4648ff] h-[40px] px-[19px] py-[9px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4] transition-colors flex items-center gap-2" style={{boxShadow: 'inset 0 0 0 2px #4648ff'}}>
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5" style={{filter: 'brightness(0) saturate(100%) invert(27%) sepia(91%) saturate(4573%) hue-rotate(232deg) brightness(102%) contrast(107%)'}} />
                    Button
                  </button>
                  <button className="bg-transparent hover:bg-[rgba(70,72,255,0.15)] text-[#4648ff] h-[49px] px-[23px] py-[12px] rounded-lg font-host-grotesk font-normal text-lg leading-[1.4] transition-colors flex items-center gap-2" style={{boxShadow: 'inset 0 0 0 2px #4648ff'}}>
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5" style={{filter: 'brightness(0) saturate(100%) invert(27%) sepia(91%) saturate(4573%) hue-rotate(232deg) brightness(102%) contrast(107%)'}} />
                    Button
                  </button>
                  
                  {/* Row 2: Hover State */}
                  <button 
                    className="relative h-[36px] px-[15px] py-[7px] rounded-lg font-host-grotesk font-medium text-sm leading-[1.4] flex items-center gap-2 bg-transparent transition-all duration-200 hover:shadow-lg" 
                    style={{
                      border: '2px solid #4648ff',
                      boxShadow: '0 0 20px rgba(70, 72, 255, 0.3)'
                    }}
                  >
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5" style={{filter: 'brightness(0) saturate(100%) invert(27%) sepia(91%) saturate(4573%) hue-rotate(232deg) brightness(102%) contrast(107%)'}} />
                    <span 
                      className="bg-clip-text text-transparent font-medium"
                      style={{
                        backgroundImage: 'linear-gradient(90deg, #8B5CF6 0%, #3B82F6 100%)'
                      }}
                    >
                      Button
                    </span>
                  </button>
                  <button 
                    className="relative h-[40px] px-[19px] py-[9px] rounded-lg font-host-grotesk font-medium text-sm leading-[1.4] flex items-center gap-2 bg-transparent transition-all duration-200 hover:shadow-lg" 
                    style={{
                      border: '2px solid #4648ff',
                      boxShadow: '0 0 20px rgba(70, 72, 255, 0.3)'
                    }}
                  >
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5" style={{filter: 'brightness(0) saturate(100%) invert(27%) sepia(91%) saturate(4573%) hue-rotate(232deg) brightness(102%) contrast(107%)'}} />
                    <span 
                      className="bg-clip-text text-transparent font-medium"
                      style={{
                        backgroundImage: 'linear-gradient(90deg, #8B5CF6 0%, #3B82F6 100%)'
                      }}
                    >
                      Button
                    </span>
                  </button>
                  <button 
                    className="relative h-[49px] px-[23px] py-[12px] rounded-lg font-host-grotesk font-medium text-lg leading-[1.4] flex items-center gap-2 bg-transparent transition-all duration-200 hover:shadow-lg" 
                    style={{
                      border: '2px solid #4648ff',
                      boxShadow: '0 0 20px rgba(70, 72, 255, 0.3)'
                    }}
                  >
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5" style={{filter: 'brightness(0) saturate(100%) invert(27%) sepia(91%) saturate(4573%) hue-rotate(232deg) brightness(102%) contrast(107%)'}} />
                    <span 
                      className="bg-clip-text text-transparent font-medium"
                      style={{
                        backgroundImage: 'linear-gradient(90deg, #8B5CF6 0%, #3B82F6 100%)'
                      }}
                    >
                      Button
                    </span>
                  </button>
                  
                  {/* Row 3: Disabled State */}
                  <button className="bg-[rgba(70,72,255,0.15)] text-[#4648ff] h-[36px] px-[15px] py-[7px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4] opacity-50 cursor-not-allowed flex items-center gap-2" style={{boxShadow: 'inset 0 0 0 2px #4648ff'}}>
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5" style={{filter: 'brightness(0) saturate(100%) invert(27%) sepia(91%) saturate(4573%) hue-rotate(232deg) brightness(102%) contrast(107%)'}} />
                    Button
                  </button>
                  <button className="bg-[rgba(70,72,255,0.15)] text-[#4648ff] h-[40px] px-[19px] py-[9px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4] opacity-50 cursor-not-allowed flex items-center gap-2" style={{boxShadow: 'inset 0 0 0 2px #4648ff'}}>
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5" style={{filter: 'brightness(0) saturate(100%) invert(27%) sepia(91%) saturate(4573%) hue-rotate(232deg) brightness(102%) contrast(107%)'}} />
                    Button
                  </button>
                  <button className="bg-[rgba(70,72,255,0.15)] text-[#4648ff] h-[49px] px-[23px] py-[12px] rounded-lg font-host-grotesk font-normal text-lg leading-[1.4] opacity-50 cursor-not-allowed flex items-center gap-2" style={{boxShadow: 'inset 0 0 0 2px #4648ff'}}>
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5" style={{filter: 'brightness(0) saturate(100%) invert(27%) sepia(91%) saturate(4573%) hue-rotate(232deg) brightness(102%) contrast(107%)'}} />
                    Button
                  </button>
                </div>

                {/* Text + Icon Buttons - 3x3 Layout */}
                <div className="grid flex-shrink-0" style={{ 
                  gridTemplateColumns: 'auto auto auto',
                  columnGap: '37px', 
                  rowGap: '32px' 
                }}>
                  {/* Row 1: Default State */}
                  <button className="bg-transparent hover:bg-[rgba(70,72,255,0.15)] text-[#4648ff] h-[36px] px-[15px] py-[7px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4] transition-colors flex items-center gap-2" style={{boxShadow: 'inset 0 0 0 2px #4648ff'}}>
                    Button
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5" style={{filter: 'brightness(0) saturate(100%) invert(27%) sepia(91%) saturate(4573%) hue-rotate(232deg) brightness(102%) contrast(107%)'}} />
                  </button>
                  <button className="bg-transparent hover:bg-[rgba(70,72,255,0.15)] text-[#4648ff] h-[40px] px-[19px] py-[9px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4] transition-colors flex items-center gap-2" style={{boxShadow: 'inset 0 0 0 2px #4648ff'}}>
                    Button
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5" style={{filter: 'brightness(0) saturate(100%) invert(27%) sepia(91%) saturate(4573%) hue-rotate(232deg) brightness(102%) contrast(107%)'}} />
                  </button>
                  <button className="bg-transparent hover:bg-[rgba(70,72,255,0.15)] text-[#4648ff] h-[49px] px-[23px] py-[12px] rounded-lg font-host-grotesk font-normal text-lg leading-[1.4] transition-colors flex items-center gap-2" style={{boxShadow: 'inset 0 0 0 2px #4648ff'}}>
                    Button
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5" style={{filter: 'brightness(0) saturate(100%) invert(27%) sepia(91%) saturate(4573%) hue-rotate(232deg) brightness(102%) contrast(107%)'}} />
                  </button>
                  
                  {/* Row 2: Hover State */}
                  <button className="bg-[rgba(70,72,255,0.15)] text-[#4648ff] h-[36px] px-[15px] py-[7px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4] flex items-center gap-2" style={{boxShadow: 'inset 0 0 0 2px #4648ff'}}>
                    Button
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5" style={{filter: 'brightness(0) saturate(100%) invert(27%) sepia(91%) saturate(4573%) hue-rotate(232deg) brightness(102%) contrast(107%)'}} />
                  </button>
                  <button className="bg-[rgba(70,72,255,0.15)] text-[#4648ff] h-[40px] px-[19px] py-[9px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4] flex items-center gap-2" style={{boxShadow: 'inset 0 0 0 2px #4648ff'}}>
                    Button
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5" style={{filter: 'brightness(0) saturate(100%) invert(27%) sepia(91%) saturate(4573%) hue-rotate(232deg) brightness(102%) contrast(107%)'}} />
                  </button>
                  <button className="bg-[rgba(70,72,255,0.15)] text-[#4648ff] h-[49px] px-[23px] py-[12px] rounded-lg font-host-grotesk font-normal text-lg leading-[1.4] flex items-center gap-2" style={{boxShadow: 'inset 0 0 0 2px #4648ff'}}>
                    Button
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5" style={{filter: 'brightness(0) saturate(100%) invert(27%) sepia(91%) saturate(4573%) hue-rotate(232deg) brightness(102%) contrast(107%)'}} />
                  </button>
                  
                  {/* Row 3: Disabled State */}
                  <button className="bg-[rgba(70,72,255,0.15)] text-[#4648ff] h-[36px] px-[15px] py-[7px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4] opacity-50 cursor-not-allowed flex items-center gap-2" style={{boxShadow: 'inset 0 0 0 2px #4648ff'}}>
                    Button
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5" style={{filter: 'brightness(0) saturate(100%) invert(27%) sepia(91%) saturate(4573%) hue-rotate(232deg) brightness(102%) contrast(107%)'}} />
                  </button>
                  <button className="bg-[rgba(70,72,255,0.15)] text-[#4648ff] h-[40px] px-[19px] py-[9px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4] opacity-50 cursor-not-allowed flex items-center gap-2" style={{boxShadow: 'inset 0 0 0 2px #4648ff'}}>
                    Button
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5" style={{filter: 'brightness(0) saturate(100%) invert(27%) sepia(91%) saturate(4573%) hue-rotate(232deg) brightness(102%) contrast(107%)'}} />
                  </button>
                  <button className="bg-[rgba(70,72,255,0.15)] text-[#4648ff] h-[49px] px-[23px] py-[12px] rounded-lg font-host-grotesk font-normal text-lg leading-[1.4] opacity-50 cursor-not-allowed flex items-center gap-2" style={{boxShadow: 'inset 0 0 0 2px #4648ff'}}>
                    Button
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5" style={{filter: 'brightness(0) saturate(100%) invert(27%) sepia(91%) saturate(4573%) hue-rotate(232deg) brightness(102%) contrast(107%)'}} />
                  </button>
                </div>
                </div>

                {/* Sixth Row - Outline Buttons (Duplicate) */}
                <div className="w-full flex flex-wrap gap-8 xl:gap-[200px]" data-name="Button">
                {/* Text Only Buttons - 3x3 Layout */}
                <div className="grid flex-shrink-0" style={{ 
                  gridTemplateColumns: '74px 82px 108px',
                  columnGap: '37px', 
                  rowGap: '32px' 
                }}>
                  {/* Row 1: Default State (Dark, inner highlight/shadow) */}
                  <button
                    className="relative w-[74px] h-[36px] px-[15px] py-[7px] rounded-[10px] font-host-grotesk font-medium text-sm leading-[1.4] transition-colors text-[#b9bac7] border-[0.5px] border-[#1b1d29] hover:border-[#242736] focus:outline-none focus:ring-2 focus:ring-[#7b7d90]/40 shadow-[0_2px_8px_rgba(0,0,0,0.45)] hover:brightness-110"
                    style={{
                      background: 'linear-gradient(90deg, #16171F 0%, #000000 100%)',
                      boxShadow:
                        'inset 0 1px 0 rgba(255,255,255,0.06), inset 0 -1px 0 rgba(0,0,0,0.60), inset 0 0 0 1px rgba(255,255,255,0.04), 0 2px 8px rgba(0,0,0,0.45)'
                    }}
                  >
                    <span className="bg-clip-text text-transparent" style={{backgroundImage: 'linear-gradient(90deg, #4D4F60 0%, #292A36 100%)'}}>
                      Button
                    </span>
                  </button>
                  <button
                    className="relative w-[82px] h-[40px] px-[19px] py-[9px] rounded-[10px] font-host-grotesk font-medium text-sm leading-[1.4] transition-colors text-[#b9bac7] border-[0.5px] border-[#1b1d29] hover:border-[#242736] focus:outline-none focus:ring-2 focus:ring-[#7b7d90]/40 shadow-[0_2px_8px_rgba(0,0,0,0.45)] hover:brightness-110"
                    style={{
                      background: 'linear-gradient(90deg, #16171F 0%, #000000 100%)',
                      boxShadow:
                        'inset 0 1px 0 rgba(255,255,255,0.06), inset 0 -1px 0 rgba(0,0,0,0.60), inset 0 0 0 1px rgba(255,255,255,0.04), 0 2px 8px rgba(0,0,0,0.45)'
                    }}
                  >
                    <span className="bg-clip-text text-transparent" style={{backgroundImage: 'linear-gradient(90deg, #4D4F60 0%, #292A36 100%)'}}>
                      Button
                    </span>
                  </button>
                  <button
                    className="relative w-[108px] h-[49px] px-[23px] py-[12px] rounded-[10px] font-host-grotesk font-medium text-[18px] leading-[1.4] transition-colors text-[#b9bac7] border-[0.5px] border-[#1b1d29] hover:border-[#242736] focus:outline-none focus:ring-2 focus:ring-[#7b7d90]/40 shadow-[0_2px_8px_rgba(0,0,0,0.45)] hover:brightness-110"
                    style={{
                      background: 'linear-gradient(90deg, #16171F 0%, #000000 100%)',
                      boxShadow:
                        'inset 0 1px 0 rgba(255,255,255,0.06), inset 0 -1px 0 rgba(0,0,0,0.60), inset 0 0 0 1px rgba(255,255,255,0.04), 0 2px 8px rgba(0,0,0,0.45)'
                    }}
                  >
                    <span className="bg-clip-text text-transparent" style={{backgroundImage: 'linear-gradient(90deg, #4D4F60 0%, #292A36 100%)'}}>
                      Button
                    </span>
                  </button>
                  
                  {/* Row 2: Hover State */}
                  <button className="bg-[rgba(70,72,255,0.15)] text-[#4648ff] w-[74px] h-[36px] px-[15px] py-[7px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4]" style={{boxShadow: 'inset 0 0 0 2px #4648ff'}}>
                    Button
                  </button>
                  <button className="bg-[rgba(70,72,255,0.15)] text-[#4648ff] w-[82px] h-[40px] px-[19px] py-[9px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4]" style={{boxShadow: 'inset 0 0 0 2px #4648ff'}}>
                    Button
                  </button>
                  <button className="bg-[rgba(70,72,255,0.15)] text-[#4648ff] w-[108px] h-[49px] px-[23px] py-[12px] rounded-lg font-host-grotesk font-normal text-lg leading-[1.4]" style={{boxShadow: 'inset 0 0 0 2px #4648ff'}}>
                    Button
                  </button>
                  
                  {/* Row 3: Disabled State */}
                  <button className="bg-[rgba(70,72,255,0.15)] text-[#4648ff] w-[74px] h-[36px] px-[15px] py-[7px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4] opacity-50 cursor-not-allowed" style={{boxShadow: 'inset 0 0 0 2px #4648ff'}}>
                    Button
                  </button>
                  <button className="bg-[rgba(70,72,255,0.15)] text-[#4648ff] w-[82px] h-[40px] px-[19px] py-[9px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4] opacity-50 cursor-not-allowed" style={{boxShadow: 'inset 0 0 0 2px #4648ff'}}>
                    Button
                  </button>
                  <button className="bg-[rgba(70,72,255,0.15)] text-[#4648ff] w-[108px] h-[49px] px-[23px] py-[12px] rounded-lg font-host-grotesk font-normal text-lg leading-[1.4] opacity-50 cursor-not-allowed" style={{boxShadow: 'inset 0 0 0 2px #4648ff'}}>
                    Button
                  </button>
                </div>

                {/* Icon + Text Buttons - 3x3 Layout */}
                <div className="grid flex-shrink-0" style={{ 
                  gridTemplateColumns: 'auto auto auto',
                  columnGap: '37px', 
                  rowGap: '32px' 
                }}>
                  {/* Row 1: Default State */}
                  <button className="bg-transparent hover:bg-[rgba(70,72,255,0.15)] text-[#4648ff] h-[36px] px-[15px] py-[7px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4] transition-colors flex items-center gap-2" style={{boxShadow: 'inset 0 0 0 2px #4648ff'}}>
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5" style={{filter: 'brightness(0) saturate(100%) invert(27%) sepia(91%) saturate(4573%) hue-rotate(232deg) brightness(102%) contrast(107%)'}} />
                    Button
                  </button>
                  <button className="bg-transparent hover:bg-[rgba(70,72,255,0.15)] text-[#4648ff] h-[40px] px-[19px] py-[9px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4] transition-colors flex items-center gap-2" style={{boxShadow: 'inset 0 0 0 2px #4648ff'}}>
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5" style={{filter: 'brightness(0) saturate(100%) invert(27%) sepia(91%) saturate(4573%) hue-rotate(232deg) brightness(102%) contrast(107%)'}} />
                    Button
                  </button>
                  <button className="bg-transparent hover:bg-[rgba(70,72,255,0.15)] text-[#4648ff] h-[49px] px-[23px] py-[12px] rounded-lg font-host-grotesk font-normal text-lg leading-[1.4] transition-colors flex items-center gap-2" style={{boxShadow: 'inset 0 0 0 2px #4648ff'}}>
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5" style={{filter: 'brightness(0) saturate(100%) invert(27%) sepia(91%) saturate(4573%) hue-rotate(232deg) brightness(102%) contrast(107%)'}} />
                    Button
                  </button>
                  
                  {/* Row 2: Hover State */}
                  <button 
                    className="relative h-[36px] px-[15px] py-[7px] rounded-lg font-host-grotesk font-medium text-sm leading-[1.4] flex items-center gap-2 bg-transparent transition-all duration-200 hover:shadow-lg" 
                    style={{
                      border: '2px solid #4648ff',
                      boxShadow: '0 0 20px rgba(70, 72, 255, 0.3)'
                    }}
                  >
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5" style={{filter: 'brightness(0) saturate(100%) invert(27%) sepia(91%) saturate(4573%) hue-rotate(232deg) brightness(102%) contrast(107%)'}} />
                    <span 
                      className="bg-clip-text text-transparent font-medium"
                      style={{
                        backgroundImage: 'linear-gradient(90deg, #8B5CF6 0%, #3B82F6 100%)'
                      }}
                    >
                      Button
                    </span>
                  </button>
                  <button 
                    className="relative h-[40px] px-[19px] py-[9px] rounded-lg font-host-grotesk font-medium text-sm leading-[1.4] flex items-center gap-2 bg-transparent transition-all duration-200 hover:shadow-lg" 
                    style={{
                      border: '2px solid #4648ff',
                      boxShadow: '0 0 20px rgba(70, 72, 255, 0.3)'
                    }}
                  >
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5" style={{filter: 'brightness(0) saturate(100%) invert(27%) sepia(91%) saturate(4573%) hue-rotate(232deg) brightness(102%) contrast(107%)'}} />
                    <span 
                      className="bg-clip-text text-transparent font-medium"
                      style={{
                        backgroundImage: 'linear-gradient(90deg, #8B5CF6 0%, #3B82F6 100%)'
                      }}
                    >
                      Button
                    </span>
                  </button>
                  <button 
                    className="relative h-[49px] px-[23px] py-[12px] rounded-lg font-host-grotesk font-medium text-lg leading-[1.4] flex items-center gap-2 bg-transparent transition-all duration-200 hover:shadow-lg" 
                    style={{
                      border: '2px solid #4648ff',
                      boxShadow: '0 0 20px rgba(70, 72, 255, 0.3)'
                    }}
                  >
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5" style={{filter: 'brightness(0) saturate(100%) invert(27%) sepia(91%) saturate(4573%) hue-rotate(232deg) brightness(102%) contrast(107%)'}} />
                    <span 
                      className="bg-clip-text text-transparent font-medium"
                      style={{
                        backgroundImage: 'linear-gradient(90deg, #8B5CF6 0%, #3B82F6 100%)'
                      }}
                    >
                      Button
                    </span>
                  </button>
                  
                  {/* Row 3: Disabled State */}
                  <button className="bg-[rgba(70,72,255,0.15)] text-[#4648ff] h-[36px] px-[15px] py-[7px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4] opacity-50 cursor-not-allowed flex items-center gap-2" style={{boxShadow: 'inset 0 0 0 2px #4648ff'}}>
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5" style={{filter: 'brightness(0) saturate(100%) invert(27%) sepia(91%) saturate(4573%) hue-rotate(232deg) brightness(102%) contrast(107%)'}} />
                    Button
                  </button>
                  <button className="bg-[rgba(70,72,255,0.15)] text-[#4648ff] h-[40px] px-[19px] py-[9px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4] opacity-50 cursor-not-allowed flex items-center gap-2" style={{boxShadow: 'inset 0 0 0 2px #4648ff'}}>
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5" style={{filter: 'brightness(0) saturate(100%) invert(27%) sepia(91%) saturate(4573%) hue-rotate(232deg) brightness(102%) contrast(107%)'}} />
                    Button
                  </button>
                  <button className="bg-[rgba(70,72,255,0.15)] text-[#4648ff] h-[49px] px-[23px] py-[12px] rounded-lg font-host-grotesk font-normal text-lg leading-[1.4] opacity-50 cursor-not-allowed flex items-center gap-2" style={{boxShadow: 'inset 0 0 0 2px #4648ff'}}>
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5" style={{filter: 'brightness(0) saturate(100%) invert(27%) sepia(91%) saturate(4573%) hue-rotate(232deg) brightness(102%) contrast(107%)'}} />
                    Button
                  </button>
                </div>

                {/* Text + Icon Buttons - 3x3 Layout */}
                <div className="grid flex-shrink-0" style={{ 
                  gridTemplateColumns: 'auto auto auto',
                  columnGap: '37px', 
                  rowGap: '32px' 
                }}>
                  {/* Row 1: Default State */}
                  <button className="bg-transparent hover:bg-[rgba(70,72,255,0.15)] text-[#4648ff] h-[36px] px-[15px] py-[7px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4] transition-colors flex items-center gap-2" style={{boxShadow: 'inset 0 0 0 2px #4648ff'}}>
                    Button
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5" style={{filter: 'brightness(0) saturate(100%) invert(27%) sepia(91%) saturate(4573%) hue-rotate(232deg) brightness(102%) contrast(107%)'}} />
                  </button>
                  <button className="bg-transparent hover:bg-[rgba(70,72,255,0.15)] text-[#4648ff] h-[40px] px-[19px] py-[9px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4] transition-colors flex items-center gap-2" style={{boxShadow: 'inset 0 0 0 2px #4648ff'}}>
                    Button
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5" style={{filter: 'brightness(0) saturate(100%) invert(27%) sepia(91%) saturate(4573%) hue-rotate(232deg) brightness(102%) contrast(107%)'}} />
                  </button>
                  <button className="bg-transparent hover:bg-[rgba(70,72,255,0.15)] text-[#4648ff] h-[49px] px-[23px] py-[12px] rounded-lg font-host-grotesk font-normal text-lg leading-[1.4] transition-colors flex items-center gap-2" style={{boxShadow: 'inset 0 0 0 2px #4648ff'}}>
                    Button
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5" style={{filter: 'brightness(0) saturate(100%) invert(27%) sepia(91%) saturate(4573%) hue-rotate(232deg) brightness(102%) contrast(107%)'}} />
                  </button>
                  
                  {/* Row 2: Hover State */}
                  <button className="bg-[rgba(70,72,255,0.15)] text-[#4648ff] h-[36px] px-[15px] py-[7px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4] flex items-center gap-2" style={{boxShadow: 'inset 0 0 0 2px #4648ff'}}>
                    Button
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5" style={{filter: 'brightness(0) saturate(100%) invert(27%) sepia(91%) saturate(4573%) hue-rotate(232deg) brightness(102%) contrast(107%)'}} />
                  </button>
                  <button className="bg-[rgba(70,72,255,0.15)] text-[#4648ff] h-[40px] px-[19px] py-[9px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4] flex items-center gap-2" style={{boxShadow: 'inset 0 0 0 2px #4648ff'}}>
                    Button
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5" style={{filter: 'brightness(0) saturate(100%) invert(27%) sepia(91%) saturate(4573%) hue-rotate(232deg) brightness(102%) contrast(107%)'}} />
                  </button>
                  <button className="bg-[rgba(70,72,255,0.15)] text-[#4648ff] h-[49px] px-[23px] py-[12px] rounded-lg font-host-grotesk font-normal text-lg leading-[1.4] flex items-center gap-2" style={{boxShadow: 'inset 0 0 0 2px #4648ff'}}>
                    Button
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5" style={{filter: 'brightness(0) saturate(100%) invert(27%) sepia(91%) saturate(4573%) hue-rotate(232deg) brightness(102%) contrast(107%)'}} />
                  </button>
                  
                  {/* Row 3: Disabled State */}
                  <button className="bg-[rgba(70,72,255,0.15)] text-[#4648ff] h-[36px] px-[15px] py-[7px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4] opacity-50 cursor-not-allowed flex items-center gap-2" style={{boxShadow: 'inset 0 0 0 2px #4648ff'}}>
                    Button
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5" style={{filter: 'brightness(0) saturate(100%) invert(27%) sepia(91%) saturate(4573%) hue-rotate(232deg) brightness(102%) contrast(107%)'}} />
                  </button>
                  <button className="bg-[rgba(70,72,255,0.15)] text-[#4648ff] h-[40px] px-[19px] py-[9px] rounded-lg font-host-grotesk font-normal text-sm leading-[1.4] opacity-50 cursor-not-allowed flex items-center gap-2" style={{boxShadow: 'inset 0 0 0 2px #4648ff'}}>
                    Button
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5" style={{filter: 'brightness(0) saturate(100%) invert(27%) sepia(91%) saturate(4573%) hue-rotate(232deg) brightness(102%) contrast(107%)'}} />
                  </button>
                  <button className="bg-[rgba(70,72,255,0.15)] text-[#4648ff] h-[49px] px-[23px] py-[12px] rounded-lg font-host-grotesk font-normal text-lg leading-[1.4] opacity-50 cursor-not-allowed flex items-center gap-2" style={{boxShadow: 'inset 0 0 0 2px #4648ff'}}>
                    Button
                    <img src="/assets/icons/131_hand-thumb-up.svg" alt="Thumbs Up" className="w-5 h-5" style={{filter: 'brightness(0) saturate(100%) invert(27%) sepia(91%) saturate(4573%) hue-rotate(232deg) brightness(102%) contrast(107%)'}} />
                  </button>
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
  )
}