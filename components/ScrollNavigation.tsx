'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Logo from './Logo';

interface ScrollNavigationProps {
  children?: React.ReactNode;
  currentPage?: 'home' | 'logo' | 'logo-wiki' | 'placeholder-logos' | 'color' | 'color-wiki' | 'color-documentation' | 'color-resources' | 'gradients' | 'type' | 'typography-en' | 'typography-jp' | 'type-wiki' | 'type-documentation' | 'type-resources' | 'icons' | 'brand-icons' | 'icon-wiki' | 'icon-documentation' | 'imagery' | 'textures' | 'image-wiki' | 'imagery-documentation' | 'grids';
}

export default function ScrollNavigation({ children, currentPage = 'home' }: ScrollNavigationProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [isLogoDropdownHovered, setIsLogoDropdownHovered] = useState(false);
  const [isColorDropdownHovered, setIsColorDropdownHovered] = useState(false);
  const [isTypeDropdownHovered, setIsTypeDropdownHovered] = useState(false);
  const [isIconsDropdownHovered, setIsIconsDropdownHovered] = useState(false);
  const [isImageryDropdownHovered, setIsImageryDropdownHovered] = useState(false);
  const isLogoDropdownHoveredRef = useRef(false);
  const isColorDropdownHoveredRef = useRef(false);
  const isTypeDropdownHoveredRef = useRef(false);
  const isIconsDropdownHoveredRef = useRef(false);
  const isImageryDropdownHoveredRef = useRef(false);

  // refを最新の値で更新
  useEffect(() => {
    isLogoDropdownHoveredRef.current = isLogoDropdownHovered;
    isColorDropdownHoveredRef.current = isColorDropdownHovered;
    isTypeDropdownHoveredRef.current = isTypeDropdownHovered;
    isIconsDropdownHoveredRef.current = isIconsDropdownHovered;
    isImageryDropdownHoveredRef.current = isImageryDropdownHovered;
  }, [isLogoDropdownHovered, isColorDropdownHovered, isTypeDropdownHovered, isIconsDropdownHovered, isImageryDropdownHovered]);

  // ドロップダウンホバー時はナビゲーションを強制表示
  useEffect(() => {
    if (isLogoDropdownHovered || isColorDropdownHovered || isTypeDropdownHovered || isIconsDropdownHovered || isImageryDropdownHovered) {
      setIsVisible(true);
    }
  }, [isLogoDropdownHovered, isColorDropdownHovered, isTypeDropdownHovered, isIconsDropdownHovered, isImageryDropdownHovered]);

  useEffect(() => {
    let ticking = false;
    let previousScrollY = 0;

    const controlNavbar = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          // ドロップダウンがホバーされている時はスクロール制御をスキップ
          if (isLogoDropdownHoveredRef.current || isColorDropdownHoveredRef.current || isTypeDropdownHoveredRef.current || isIconsDropdownHoveredRef.current || isImageryDropdownHoveredRef.current) {
            ticking = false;
            return;
          }

          const currentScrollY = window.scrollY;
          
          if (currentScrollY > previousScrollY && currentScrollY > 100) {
            // 下にスクロール中で、100px以上スクロールした場合は非表示
            setIsVisible(false);
          } else if (currentScrollY < previousScrollY || currentScrollY <= 100) {
            // 上にスクロール中、または100px以下の場合は表示
            setIsVisible(true);
          }
          
          previousScrollY = currentScrollY;
          ticking = false;
        });
        
        ticking = true;
      }
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, []);

  return (
    <div className={`sticky top-0 z-50 transition-transform duration-300 ${
      isVisible ? 'transform translate-y-0' : 'transform -translate-y-full'
    }`}>
      {/* Navigation Background */}
      <div className={`absolute top-0 left-0 right-0 bg-grey-900/80 backdrop-blur-lg transition-all duration-200 ${
        (isLogoDropdownHovered || isColorDropdownHovered || isTypeDropdownHovered || isIconsDropdownHovered || isImageryDropdownHovered) ? 'bottom-[-180px]' : 'bottom-0'
      }`}></div>
              <div className="fixed-padding-container relative z-10">
          <div className="content-responsive">
            <div
              className="box-border content-stretch flex flex-row items-center justify-between pt-[100px] pb-6 relative shrink-0 w-full"
              data-name="Logo & Menu"
            >
              <div
                className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative shrink-0"
                data-name="Logo"
              >
                <Logo size="Medium" />
              </div>
              <div
                className="hidden md:flex box-border content-stretch flex-row font-host-grotesk font-normal gap-4 lg:gap-8 items-start justify-end leading-[0] not-italic p-0 relative shrink-0 text-sm lg:text-text-large text-left flex-wrap"
              >
                <div className={`relative shrink-0 transition-colors cursor-pointer ${currentPage === 'home' ? 'text-grey-50' : 'text-grey-300 hover:text-grey-50'}`}>
                  <Link href="/">
                    <p className="block leading-[1.4]">
                      Started
                    </p>
                  </Link>
                </div>
                <div 
                  className={`relative shrink-0 transition-colors cursor-pointer ${currentPage === 'logo' || currentPage === 'logo-wiki' || currentPage === 'placeholder-logos' ? 'text-grey-50' : 'text-grey-300 hover:text-grey-50'}`}
                  onMouseEnter={() => setIsLogoDropdownHovered(true)}
                  onMouseLeave={() => setIsLogoDropdownHovered(false)}
                >
                  <Link href="/logo">
                    <p className="block leading-[1.4]">
                      Logo
                    </p>
                  </Link>
                  {/* Dropdown Menu */}
                  <div 
                    className={`absolute top-full left-0 pt-2 w-48 transition-all duration-200 z-50 ${
                      isLogoDropdownHovered ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
                    onMouseEnter={() => setIsLogoDropdownHovered(true)}
                    onMouseLeave={() => setIsLogoDropdownHovered(false)}
                  >
                    <div className="py-2 pb-8">
                      <Link href="/logo" className={`block py-2 text-sm transition-colors ${currentPage === 'logo' ? 'text-grey-50' : 'text-grey-300 hover:text-grey-50'}`}>
                        Logo
                      </Link>
                      <Link href="/logo/placeholder-logos" className={`block py-2 text-sm transition-colors ${currentPage === 'placeholder-logos' ? 'text-grey-50' : 'text-grey-300 hover:text-grey-50'}`}>
                        Placeholder Logos
                      </Link>
                      <Link href="/logo/wiki" className={`block py-2 text-sm transition-colors ${currentPage === 'logo-wiki' ? 'text-grey-50' : 'text-grey-300 hover:text-grey-50'}`}>
                        Logo Wiki
                      </Link>
                    </div>
                  </div>
                </div>
                <div 
                  className={`relative shrink-0 transition-colors cursor-pointer ${currentPage === 'color' || currentPage === 'color-wiki' || currentPage === 'color-documentation' || currentPage === 'color-resources' || currentPage === 'gradients' ? 'text-grey-50' : 'text-grey-300 hover:text-grey-50'}`}
                  onMouseEnter={() => setIsColorDropdownHovered(true)}
                  onMouseLeave={() => setIsColorDropdownHovered(false)}
                >
                  <Link href="/color">
                    <p className="block leading-[1.4]">
                      Color
                    </p>
                  </Link>
                  <div 
                    className={`absolute top-full left-0 pt-2 w-48 transition-all duration-200 z-50 ${
                      isColorDropdownHovered ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
                    onMouseEnter={() => setIsColorDropdownHovered(true)}
                    onMouseLeave={() => setIsColorDropdownHovered(false)}
                  >
                    <div className="py-2 pb-8">
                      <Link href="/color" className={`block py-2 text-sm transition-colors ${currentPage === 'color' ? 'text-grey-50' : 'text-grey-300 hover:text-grey-50'}`}>
                        Color
                      </Link>
                      <Link href="/color/gradients" className={`block py-2 text-sm transition-colors ${currentPage === 'gradients' ? 'text-grey-50' : 'text-grey-300 hover:text-grey-50'}`}>
                        Gradients
                      </Link>
                      <Link href="/color/wiki" className={`block py-2 text-sm transition-colors ${currentPage === 'color-wiki' ? 'text-grey-50' : 'text-grey-300 hover:text-grey-50'}`}>
                        Color Wiki
                      </Link>
                      <Link href="/color/documentation" className={`block py-2 text-sm transition-colors ${currentPage === 'color-documentation' ? 'text-grey-50' : 'text-grey-300 hover:text-grey-50'}`}>
                        Color Documentation
                      </Link>
                      <Link href="/color/resources" className={`block py-2 pb-8 text-sm transition-colors ${currentPage === 'color-resources' ? 'text-grey-50' : 'text-grey-300 hover:text-grey-50'}`}>
                        Color Resources
                      </Link>
                    </div>
                  </div>
                </div>
                <div 
                  className={`relative shrink-0 transition-colors cursor-pointer ${currentPage === 'type' || currentPage === 'typography-en' || currentPage === 'typography-jp' || currentPage === 'type-wiki' || currentPage === 'type-documentation' || currentPage === 'type-resources' ? 'text-grey-50' : 'text-grey-300 hover:text-grey-50'}`}
                  onMouseEnter={() => setIsTypeDropdownHovered(true)}
                  onMouseLeave={() => setIsTypeDropdownHovered(false)}
                >
                  <Link href="/type/typography-en">
                    <p className="block leading-[1.4]">
                      Type
                    </p>
                  </Link>
                  <div 
                    className={`absolute top-full left-0 pt-2 w-48 transition-all duration-200 z-50 ${
                      isTypeDropdownHovered ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
                    onMouseEnter={() => setIsTypeDropdownHovered(true)}
                    onMouseLeave={() => setIsTypeDropdownHovered(false)}
                  >
                    <div className="py-2 pb-8">
                      <Link href="/type/typography-en" className={`block py-2 text-sm transition-colors ${currentPage === 'typography-en' ? 'text-grey-50' : 'text-grey-300 hover:text-grey-50'}`}>
                        Typography EN
                      </Link>
                      <Link href="/type/typography-jp" className={`block py-2 text-sm transition-colors ${currentPage === 'typography-jp' ? 'text-grey-50' : 'text-grey-300 hover:text-grey-50'}`}>
                        Typography JP
                      </Link>
                      <Link href="/type/wiki" className={`block py-2 text-sm transition-colors ${currentPage === 'type-wiki' ? 'text-grey-50' : 'text-grey-300 hover:text-grey-50'}`}>
                        Type Wiki
                      </Link>
                      <Link href="/type/documentation" className={`block py-2 text-sm transition-colors ${currentPage === 'type-documentation' ? 'text-grey-50' : 'text-grey-300 hover:text-grey-50'}`}>
                        Type Documentation
                      </Link>
                      <Link href="/type/resources" className={`block py-2 pb-8 text-sm transition-colors ${currentPage === 'type-resources' ? 'text-grey-50' : 'text-grey-300 hover:text-grey-50'}`}>
                        Type Resources
                      </Link>
                    </div>
                  </div>
                </div>
                <div 
                  className={`relative shrink-0 transition-colors cursor-pointer ${currentPage === 'icons' || currentPage === 'brand-icons' || currentPage === 'icon-wiki' || currentPage === 'icon-documentation' ? 'text-grey-50' : 'text-grey-300 hover:text-grey-50'}`}
                  onMouseEnter={() => setIsIconsDropdownHovered(true)}
                  onMouseLeave={() => setIsIconsDropdownHovered(false)}
                >
                  <Link href="/icons">
                    <p className="block leading-[1.4]">
                      Icons
                    </p>
                  </Link>
                  {/* Dropdown Menu */}
                  <div 
                    className={`absolute top-full left-0 pt-2 w-48 transition-all duration-200 z-50 ${
                      isIconsDropdownHovered ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
                    onMouseEnter={() => setIsIconsDropdownHovered(true)}
                    onMouseLeave={() => setIsIconsDropdownHovered(false)}
                  >
                    <div className="py-2 pb-8">
                      <Link href="/icons" className={`block py-2 text-sm transition-colors ${currentPage === 'icons' ? 'text-grey-50' : 'text-grey-300 hover:text-grey-50'}`}>
                        Brand Icons
                      </Link>
                      <Link href="/icons/company-icons" className={`block py-2 text-sm transition-colors ${currentPage === 'brand-icons' ? 'text-grey-50' : 'text-grey-300 hover:text-grey-50'}`}>
                        Company Icons
                      </Link>
                      <Link href="/icons/wiki" className={`block py-2 text-sm transition-colors ${currentPage === 'icon-wiki' ? 'text-grey-50' : 'text-grey-300 hover:text-grey-50'}`}>
                        Icon Wiki
                      </Link>
                      <Link href="/icons/documentation" className={`block py-2 text-sm transition-colors ${currentPage === 'icon-documentation' ? 'text-grey-50' : 'text-grey-300 hover:text-grey-50'}`}>
                        Icon Documentation
                      </Link>
                    </div>
                  </div>
                </div>
                <div 
                  className={`relative shrink-0 transition-colors cursor-pointer ${currentPage === 'imagery' || currentPage === 'textures' || currentPage === 'image-wiki' || currentPage === 'imagery-documentation' ? 'text-grey-50' : 'text-grey-300 hover:text-grey-50'}`}
                  onMouseEnter={() => setIsImageryDropdownHovered(true)}
                  onMouseLeave={() => setIsImageryDropdownHovered(false)}
                >
                  <Link href="/imagery">
                    <p className="block leading-[1.4]">
                      Imagery
                    </p>
                  </Link>
                  {/* Dropdown Menu */}
                  <div 
                    className={`absolute top-full left-0 pt-2 w-48 transition-all duration-200 z-50 ${
                      isImageryDropdownHovered ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
                    onMouseEnter={() => setIsImageryDropdownHovered(true)}
                    onMouseLeave={() => setIsImageryDropdownHovered(false)}
                  >
                    <div className="py-2 pb-8">
                      <Link href="/imagery" className={`block py-2 text-sm transition-colors ${currentPage === 'imagery' ? 'text-grey-50' : 'text-grey-300 hover:text-grey-50'}`}>
                        Portraits
                      </Link>
                      <Link href="/imagery/textures" className={`block py-2 text-sm transition-colors ${currentPage === 'textures' ? 'text-grey-50' : 'text-grey-300 hover:text-grey-50'}`}>
                        Textures
                      </Link>
                      <Link href="/imagery/wiki" className={`block py-2 text-sm transition-colors ${currentPage === 'image-wiki' ? 'text-grey-50' : 'text-grey-300 hover:text-grey-50'}`}>
                        Image Wiki
                      </Link>
                      <Link href="/imagery/documentation" className={`block py-2 text-sm transition-colors ${currentPage === 'imagery-documentation' ? 'text-grey-50' : 'text-grey-300 hover:text-grey-50'}`}>
                        IMG Documentation
                      </Link>
                    </div>
                  </div>
                </div>
                <div className={`relative shrink-0 transition-colors cursor-pointer ${currentPage === 'grids' ? 'text-grey-50' : 'text-grey-300 hover:text-grey-50'}`}>
                  <Link href="/grids">
                    <p className="block leading-[1.4]">
                      Grids
                    </p>
                  </Link>
                </div>
                <div className="relative shrink-0 text-grey-300">
                  <p className="block leading-[1.4]">
                    Effects
                  </p>
                </div>
                <div className="relative shrink-0 text-grey-300">
                  <p className="block leading-[1.4]">
                    Component
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
} 