'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from '../../../components/Logo';
import ScrollNavigation from '../../../components/ScrollNavigation';
import Footer from '../../../components/Footer';

// カラーパレット用のコンポーネント
interface EditableColorSwatchProps {
  initialColor: string;
  initialName: string;
  initialHex: string;
  onColorChange: (name: string, hex: string) => void;
}

const EditableColorSwatch = ({ initialColor, initialName, initialHex, onColorChange }: EditableColorSwatchProps) => {
  const [color, setColor] = useState(initialColor);
  const [name, setName] = useState(initialName);
  const [hex, setHex] = useState(initialHex);
  const [originalName, setOriginalName] = useState(initialName);
  const [originalHex, setOriginalHex] = useState(initialHex);
  const [isEditing, setIsEditing] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [copyMessage, setCopyMessage] = useState('');

  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(hex);
      setCopyMessage('Color code copied!');
      setTimeout(() => setCopyMessage(''), 2000);
    } catch (err) {
      console.error('Failed to copy color code:', err);
      setCopyMessage('Failed to copy');
      setTimeout(() => setCopyMessage(''), 2000);
    }
  };

  const handleEditToggle = () => {
    if (!isEditing) {
      setOriginalName(name);
      setOriginalHex(hex);
    }
    setIsEditing(!isEditing);
  };

  const handleEditComplete = () => {
    onColorChange(name, hex);
    setColor(hex);
    setOriginalName(name);
    setOriginalHex(hex);
    setIsEditing(false);
  };

  const handleEditCancel = () => {
    setName(originalName);
    setHex(originalHex);
    setColor(originalHex);
    setIsEditing(false);
  };

  return (
    <div className="flex flex-col gap-4 shrink-0 relative">
      {copyMessage && (
        <div className="absolute -top-8 left-0 bg-green-600 text-white px-2 py-1 rounded text-xs z-10">
          {copyMessage}
        </div>
      )}
      
      <div 
        className="w-[150px] h-[80px] rounded relative cursor-pointer"
        style={{ backgroundColor: color }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {(isHovered || isEditing) && (
          <div className="absolute inset-0 bg-black/50 rounded flex items-center justify-center">
            <div className="flex gap-3">
              <button
                onClick={handleCopyToClipboard}
                className="w-8 h-8 flex items-center justify-center transition-opacity"
                title="Copy color code"
              >
                <img 
                  src="/assets/icons/215_clipboard-document-check.svg" 
                  alt="Copy" 
                  className="w-6 h-6 hover:opacity-70 transition-opacity"
                />
              </button>
              
              <button
                onClick={handleEditToggle}
                className="w-8 h-8 flex items-center justify-center transition-opacity"
                title="Edit color"
              >
                <img 
                  src="/assets/icons/159_pencil.svg" 
                  alt="Edit" 
                  className="w-6 h-6 hover:opacity-70 transition-opacity"
                />
              </button>
            </div>
          </div>
        )}
      </div>
      
      <div className="text-grey-300 leading-tight relative w-[150px]">
        <div className="h-[20px] mb-1">
          {isEditing ? (
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onBlur={() => {}}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  e.currentTarget.blur();
                }
              }}
              className="font-medium text-grey-50 text-sm outline-none border-none bg-transparent block focus:border-b focus:border-primary-500"
              style={{ 
                lineHeight: '20px', 
                height: '20px',
                padding: '0',
                margin: '0',
                width: '150px',
                maxWidth: '150px'
              }}
            />
          ) : (
            <div className="font-medium text-grey-50 text-sm block" style={{ 
              lineHeight: '20px', 
              height: '20px',
              width: '150px',
              maxWidth: '150px',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap'
            }}>
              {name}
            </div>
          )}
        </div>
        
        <div className="h-[20px]">
          {isEditing ? (
            <input
              type="text"
              value={hex}
              onChange={(e) => {
                const newHex = e.target.value;
                setHex(newHex);
                if (/^#[0-9A-F]{6}$/i.test(newHex)) {
                  setColor(newHex);
                }
              }}
              onBlur={() => {}}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  e.currentTarget.blur();
                }
              }}
              className="text-grey-400 uppercase text-sm outline-none border-none bg-transparent block focus:border-b focus:border-primary-500"
              style={{ 
                lineHeight: '20px', 
                height: '20px',
                padding: '0',
                margin: '0',
                width: '150px',
                maxWidth: '150px'
              }}
            />
          ) : (
            <div className="text-grey-400 uppercase text-sm block" style={{ 
              lineHeight: '20px', 
              height: '20px',
              width: '150px',
              maxWidth: '150px',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap'
            }}>
              {hex}
            </div>
          )}
        </div>
        
        {isEditing && (
          <div className="absolute -bottom-6 left-0 flex gap-4 z-10">
            <button
              onClick={handleEditComplete}
              className="text-white text-xs hover:text-grey-200 transition-colors"
            >
              Complete
            </button>
            <button
              onClick={handleEditCancel}
              className="text-grey-400 text-xs hover:text-grey-300 transition-colors"
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

interface EditableColorPaletteProps {
  title: string;
  colors: { name: string; hex: string; color: string }[];
  onPaletteChange: (title: string, colors: { name: string; hex: string; color: string }[]) => void;
}

const EditableColorPalette = ({ title, colors, onPaletteChange }: EditableColorPaletteProps) => {
  const [paletteColors, setPaletteColors] = useState(colors);

  const handleColorChange = (index: number, name: string, hex: string) => {
    const updatedColors = paletteColors.map((color, i) => 
      i === index ? { name, hex, color: hex } : color
    );
    setPaletteColors(updatedColors);
    onPaletteChange(title, updatedColors);
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-row gap-[30px] flex-wrap">
        {paletteColors.map((colorItem, index) => (
          <EditableColorSwatch
            key={index}
            initialColor={colorItem.color}
            initialName={colorItem.name}
            initialHex={colorItem.hex}
            onColorChange={(name, hex) => handleColorChange(index, name, hex)}
          />
        ))}
      </div>
    </div>
  );
};

export default function ColorWikiPage() {
  const initialColorPalettes = [
    {
      title: "Primary Purple Shades",
      colors: [
        { name: "Primary 50", hex: "#C8C8FF", color: "#C8C8FF" },
        { name: "Primary 100", hex: "#B5B6FF", color: "#B5B6FF" },
        { name: "Primary 200", hex: "#9091FF", color: "#9091FF" },
        { name: "Primary 300", hex: "#6B6DFF", color: "#6B6DFF" },
        { name: "Primary 400", hex: "#4648FF", color: "#4648FF" },
        { name: "Primary 500", hex: "#383AD2", color: "#383AD2" },
        { name: "Primary 600", hex: "#2A2BA5", color: "#2A2BA5" },
        { name: "Primary 700", hex: "#1C1D77", color: "#1C1D77" },
        { name: "Primary 800", hex: "#151661", color: "#151661" },
        { name: "Primary 900", hex: "#0E0E4A", color: "#0E0E4A" }
      ]
    },
    {
      title: "Greyscale",
      colors: [
        { name: "Grey 50", hex: "#F2F2F0", color: "#F2F2F0" },
        { name: "Grey 100", hex: "#DCDDE4", color: "#DCDDE4" },
        { name: "Grey 200", hex: "#A3A4B5", color: "#A3A4B5" },
        { name: "Grey 300", hex: "#67697C", color: "#67697C" },
        { name: "Grey 400", hex: "#4D4F60", color: "#4D4F60" },
        { name: "Grey 500", hex: "#373946", color: "#373946" },
        { name: "Grey 600", hex: "#292A36", color: "#292A36" },
        { name: "Grey 700", hex: "#20212B", color: "#20212B" },
        { name: "Grey 800", hex: "#16171F", color: "#16171F" },
        { name: "Grey 900", hex: "#010109", color: "#010109" }
      ]
    },
    {
      title: "Coral Reef",
      colors: [
        { name: "Coral 50", hex: "#FFE5E0", color: "#FFE5E0" },
        { name: "Coral 100", hex: "#FFD9D1", color: "#FFD9D1" },
        { name: "Coral 200", hex: "#FFCCC1", color: "#FFCCC1" },
        { name: "Coral 300", hex: "#FFB2A3", color: "#FFB2A3" },
        { name: "Coral 400", hex: "#FF9984", color: "#FF9984" },
        { name: "Coral 500", hex: "#FF7F65", color: "#FF7F65" },
        { name: "Coral 600", hex: "#D86851", color: "#D86851" },
        { name: "Coral 700", hex: "#B1503D", color: "#B1503D" },
        { name: "Coral 800", hex: "#8A3928", color: "#8A3928" },
        { name: "Coral 900", hex: "#632114", color: "#632114" }
      ]
    },
    {
      title: "Turquoise",
      colors: [
        { name: "Turquoise 50", hex: "#DAFBFB", color: "#DAFBFB" },
        { name: "Turquoise 100", hex: "#C8F9F9", color: "#C8F9F9" },
        { name: "Turquoise 200", hex: "#B5F7F7", color: "#B5F7F7" },
        { name: "Turquoise 300", hex: "#91F3F3", color: "#91F3F3" },
        { name: "Turquoise 400", hex: "#6CEFEF", color: "#6CEFEF" },
        { name: "Turquoise 500", hex: "#47EBEB", color: "#47EBEB" },
        { name: "Turquoise 600", hex: "#39BEBE", color: "#39BEBE" },
        { name: "Turquoise 700", hex: "#2B9191", color: "#2B9191" },
        { name: "Turquoise 800", hex: "#1D6363", color: "#1D6363" },
        { name: "Turquoise 900", hex: "#0F3636", color: "#0F3636" }
      ]
    },
    {
      title: "Rajah",
      colors: [
        { name: "Beige 50", hex: "#FFF7F0", color: "#FFF7F0" },
        { name: "Beige 100", hex: "#FEF0E1", color: "#FEF0E1" },
        { name: "Beige 200", hex: "#FEE8D2", color: "#FEE8D2" },
        { name: "Beige 300", hex: "#FDE0C3", color: "#FDE0C3" },
        { name: "Beige 400", hex: "#FDD1A6", color: "#FDD1A6" },
        { name: "Beige 500", hex: "#FCC188", color: "#FCC188" },
        { name: "Beige 600", hex: "#FBB26A", color: "#FBB26A" },
        { name: "Beige 700", hex: "#D59455", color: "#D59455" },
        { name: "Beige 800", hex: "#AF7740", color: "#AF7740" },
        { name: "Beige 900", hex: "#88592C", color: "#88592C" }
      ]
    },
    {
      title: "Indigo",
      colors: [
        { name: "Indigo 50", hex: "#E7DCFF", color: "#E7DCFF" },
        { name: "Indigo 100", hex: "#D0BAFE", color: "#D0BAFE" },
        { name: "Indigo 200", hex: "#B897FE", color: "#B897FE" },
        { name: "Indigo 300", hex: "#A175FD", color: "#A175FD" },
        { name: "Indigo 400", hex: "#8952FD", color: "#8952FD" },
        { name: "Indigo 500", hex: "#7042D2", color: "#7042D2" },
        { name: "Indigo 600", hex: "#5731A7", color: "#5731A7" },
        { name: "Indigo 700", hex: "#3F217D", color: "#3F217D" },
        { name: "Indigo 800", hex: "#321967", color: "#321967" },
        { name: "Indigo 900", hex: "#261052", color: "#261052" }
      ]
    },
    {
      title: "Blue",
      colors: [
        { name: "Blue 50", hex: "#D4D6FA", color: "#D4D6FA" },
        { name: "Blue 100", hex: "#A9AEF5", color: "#A9AEF5" },
        { name: "Blue 200", hex: "#7E85F1", color: "#7E85F1" },
        { name: "Blue 300", hex: "#535DEC", color: "#535DEC" },
        { name: "Blue 400", hex: "#2834E7", color: "#2834E7" },
        { name: "Blue 500", hex: "#202AB9", color: "#202AB9" },
        { name: "Blue 600", hex: "#181F8B", color: "#181F8B" },
        { name: "Blue 700", hex: "#10155C", color: "#10155C" },
        { name: "Blue 800", hex: "#0C1045", color: "#0C1045" },
        { name: "Blue 900", hex: "#080A2E", color: "#080A2E" }
      ]
    },
    {
      title: "Red",
      colors: [
        { name: "Red 50", hex: "#FDD8E1", color: "#FDD8E1" },
        { name: "Red 100", hex: "#FCC5D2", color: "#FCC5D2" },
        { name: "Red 200", hex: "#FBB1C3", color: "#FBB1C3" },
        { name: "Red 300", hex: "#FA8BA4", color: "#FA8BA4" },
        { name: "Red 400", hex: "#F86486", color: "#F86486" },
        { name: "Red 500", hex: "#F63D68", color: "#F63D68" },
        { name: "Red 600", hex: "#C73154", color: "#C73154" },
        { name: "Red 700", hex: "#982540", color: "#982540" },
        { name: "Red 800", hex: "#69182B", color: "#69182B" },
        { name: "Red 900", hex: "#521221", color: "#521221" }
      ]
    },
    {
      title: "Green",
      colors: [
        { name: "Green 50", hex: "#E9FBF0", color: "#E9FBF0" },
        { name: "Green 100", hex: "#D3F6E0", color: "#D3F6E0" },
        { name: "Green 200", hex: "#A7EEC1", color: "#A7EEC1" },
        { name: "Green 300", hex: "#7BE5A2", color: "#7BE5A2" },
        { name: "Green 400", hex: "#4FDD83", color: "#4FDD83" },
        { name: "Green 500", hex: "#23D464", color: "#23D464" },
        { name: "Green 600", hex: "#1CAA50", color: "#1CAA50" },
        { name: "Green 700", hex: "#157F3C", color: "#157F3C" },
        { name: "Green 800", hex: "#0E5528", color: "#0E5528" },
        { name: "Green 900", hex: "#0B401E", color: "#0B401E" }
      ]
    }
  ];

  const [colorPalettes, setColorPalettes] = useState(initialColorPalettes);

  const handlePaletteChange = (title: string, colors: { name: string; hex: string; color: string }[]) => {
    const newPalettes = colorPalettes.map(palette => 
      palette.title === title ? { ...palette, colors } : palette
    );
    setColorPalettes(newPalettes);
  };

  return (
    <div className="bg-grey-900 min-h-screen">
      <div
        className="bg-grey-900 relative w-full min-h-screen"
        data-name="Color Wiki Page"
      >
        <div className="relative size-full">
          {/* Scroll Navigation */}
          <ScrollNavigation currentPage="color-wiki" />

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
                  <span className="font-host-grotesk not-italic text-grey-300">{` Color / Color Wiki`}</span>
                </p>
              </div>
              <div className="relative shrink-0 text-display-xxl tracking-[-4.48px] w-full">
                <h1 className="adjustLetterSpacing block leading-none">
                  Color Wiki
                </h1>
              </div>
            </div>
          </div>

          {/* Color Usage Section */}
          <div
            className="box-border content-stretch flex flex-col gap-20 items-start justify-start px-0 py-[100px] relative shrink-0 content-responsive"
            data-name="Color Usage"
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
                    Color Usage
                  </p>
                </div>
                <div className="relative shrink-0 text-grey-300 text-[18px] w-full">
                  <p className="block leading-[1.4]">
                    Color is at the core of our brand and drives our visual language forward. We use a vibrant yet, sophisticated primary palette based off our Brand Purple, complimented by a mature greyscale and deep saturated pops of Coral Reef and Turquoise.
                  </p>
                </div>
              </div>
              <div
                className="box-border content-stretch flex flex-col gap-6 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-full max-w-[700px] flex-1"
                data-name="Description"
              >
                <div className="font-ibm-plex-sans-jp relative shrink-0 text-grey-50 text-heading-small tracking-[-0.48px] w-full">
                  <p className="adjustLetterSpacing block leading-[1.4]">
                    カラー使用法
                  </p>
                </div>
                <div className="font-ibm-plex-sans-jp relative shrink-0 text-grey-300 text-[18px] w-full">
                  <p className="block leading-[1.4]">
                    カラーは私たちのブランドの核であり、ビジュアル言語の中心的な役割を果たします。ブランドの基調となるパープルをベースに、鮮やかさと洗練を合わせたプライマリーパレットを使用し、落ち着いたグレースケールと、コーラルリーフとターコイズといった深く飽和のあるアクセントカラーで彩りを加えています。
                  </p>
                </div>
              </div>
            </div>
            <div
              className="box-border content-stretch flex flex-col items-center justify-center p-0 relative shrink-0 w-full h-auto"
              data-name="Color"
            >
              <img
                src="/assets/images/color_wiki_01.png"
                alt="Color Wiki"
                className="block w-full h-auto"
                style={{ 
                  objectFit: 'contain',
                  display: 'block',
                  flexShrink: 0
                }}
              />
            </div>
          </div>

          {/* Secondary Palette Section */}
          <div
            className="box-border content-stretch flex flex-col gap-20 items-start justify-start px-0 py-[100px] relative shrink-0 content-responsive"
            data-name="Secondary Palette"
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
                    Secondary Palette
                  </p>
                </div>
                <div className="relative shrink-0 text-grey-300 text-[18px] w-full">
                  <p className="block leading-[1.4]">
                    Kit does not enforce strict rules on its primary and secondary palette, therefor, secondary colors can be used with primary colors interchangeably. Our secondary palette draws inspiration from nature and consists of a refined Rajah (yellow), Indigo and Rose.
                  </p>
                </div>
              </div>
              <div
                className="box-border content-stretch flex flex-col gap-6 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-full max-w-[700px] flex-1"
                data-name="Description"
              >
                <div className="font-ibm-plex-sans-jp relative shrink-0 text-grey-50 text-heading-small tracking-[-0.48px] w-full">
                  <p className="adjustLetterSpacing block leading-[1.4]">
                    セカンダリーパレット
                  </p>
                </div>
                <div className="font-ibm-plex-sans-jp relative shrink-0 text-grey-300 text-[18px] w-full">
                  <p className="block leading-[1.4]">
                    このキットでは、プライマリーカラーとセカンダリーカラーの厳密な使い分けは設けていません。そのため、セカンダリーカラーはプライマリーカラーと自由に合わせて使用できます。セカンダリーパレット自然からインスピレーションを得ており、洗練されたラジャ（イエロー）、インディゴ、ローズで構成されています。
                  </p>
                </div>
              </div>
            </div>
            <div
              className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
              data-name="Secondary Palette"
            >
              <div className="flex flex-row gap-[47px] items-start justify-start w-full" style={{transform: 'scale(min(1, (100vw - 200px) / (560px * 3 + 47px * 2)))', transformOrigin: 'left top'}}>
                <img
                  src="/assets/images/color_wiki_02.png"
                  alt="Rajah Color"
                  style={{ 
                    objectFit: 'contain',
                    display: 'block',
                    width: '560px',
                    height: '874px',
                    flexShrink: 1,
                    minWidth: '0',
                    aspectRatio: '560/874'
                  }}
                />
                <img
                  src="/assets/images/color_wiki_03.png"
                  alt="Indigo Color"
                  style={{ 
                    objectFit: 'contain',
                    display: 'block',
                    width: '560px',
                    height: '874px',
                    flexShrink: 1,
                    minWidth: '0',
                    aspectRatio: '560/874'
                  }}
                />
                <img
                  src="/assets/images/color_wiki_04.png"
                  alt="Rose Color"
                  style={{ 
                    objectFit: 'contain',
                    display: 'block',
                    width: '560px',
                    height: '874px',
                    flexShrink: 1,
                    minWidth: '0',
                    aspectRatio: '560/874'
                  }}
                />
              </div>
            </div>
          </div>

          {/* Color Tints Section */}
          <div
            className="box-border content-stretch flex flex-col gap-20 items-start justify-start px-0 py-[100px] relative shrink-0 content-responsive"
            data-name="Color Tints"
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
                    Color Tints
                  </p>
                </div>
                <div className="relative shrink-0 text-grey-300 text-[18px] w-full">
                  <p className="block leading-[1.4]">
                    Adding certain amount of flexibility to our color system, each primary and secondary color comes in a 10-step system, allowing different shades to be used accordingly.
                  </p>
                </div>
              </div>
              <div
                className="box-border content-stretch flex flex-col gap-6 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-full max-w-[700px] flex-1"
                data-name="Description"
              >
                <div className="font-ibm-plex-sans-jp relative shrink-0 text-grey-50 text-heading-small tracking-[-0.48px] w-full">
                  <p className="adjustLetterSpacing block leading-[1.4]">
                    カラーティント
                  </p>
                </div>
                <div className="font-ibm-plex-sans-jp relative shrink-0 text-grey-300 text-[18px] w-full">
                  <p className="block leading-[1.4]">
                    カラーシステムに柔軟性を持たせるため、各プライマリーカラーとセカンダリーカラーには10段階のティント（濃淡）が用意されています。これにより、用途に応じて様々な色合いを適切に使い分けることができます。
                  </p>
                </div>
              </div>
            </div>
            <div
              className="box-border content-stretch flex flex-col gap-[80px] items-start justify-start px-0 py-0 relative shrink-0"
              data-name="Color Tints"
            >
              {colorPalettes.map((palette, index) => (
                <EditableColorPalette
                  key={index}
                  title={palette.title}
                  colors={palette.colors}
                  onPaletteChange={(title, colors) => handlePaletteChange(title, colors)}
                />
              ))}
            </div>
          </div>

          {/* Linear Gradients Section */}
          <div
            className="box-border content-stretch flex flex-col gap-20 items-start justify-start px-0 py-[100px] relative shrink-0 content-responsive"
            data-name="Linear Gradients"
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
                    Linear Gradients
                  </p>
                </div>
                <div className="relative shrink-0 text-grey-300 text-[18px] w-full">
                  <p className="block leading-[1.4]">
                    Using harmonious combinations from our color palette, our gradient system offers smooth, saturated effects to add another dimension to our design.
                  </p>
                </div>
              </div>
              <div
                className="box-border content-stretch flex flex-col gap-6 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-full max-w-[700px] flex-1"
                data-name="Description"
              >
                <div className="font-ibm-plex-sans-jp relative shrink-0 text-grey-50 text-heading-small tracking-[-0.48px] w-full">
                  <p className="adjustLetterSpacing block leading-[1.4]">
                    リニアグラデーション
                  </p>
                </div>
                <div className="font-ibm-plex-sans-jp relative shrink-0 text-grey-300 text-[18px] w-full">
                  <p className="block leading-[1.4]">
                    カラーパレットの調和の取れた組み合わせを使用し、グラデーションは滑らかで鮮やかな効果を生み出し、デザインにさらなる次元を加えます。
                  </p>
                </div>
              </div>
            </div>
            <div
              className="box-border content-stretch flex flex-col gap-[48px] items-start justify-start p-0 relative shrink-0"
              data-name="Linear Gradients"
            >
              <div
                className="box-border content-stretch flex flex-col items-center justify-center p-0 relative rounded-[10px] shrink-0 w-full h-auto"
                data-name="Main Gradient"
              >
                <img
                  src="/assets/images/color_wiki_05.png"
                  alt="Main Linear Gradient"
                  className="w-full h-auto"
                  style={{ 
                    objectFit: 'contain',
                    display: 'block',
                    flexShrink: 0
                  }}
                />
              </div>
              <div
                className="box-border content-stretch flex flex-row flex-wrap gap-[49px] items-start justify-start p-0 relative shrink-0"
                data-name="Gradient Cards"
              >
                <div
                  className="box-border content-stretch flex flex-col items-center justify-center p-0 relative rounded-[10px] shrink-0 flex-1 min-w-0"
                  data-name="Gradient 1"
                >
                  <img
                    src="/assets/images/color_wiki_06.png"
                    alt="Linear Gradient 1"
                    className="w-full h-auto"
                    style={{ 
                      objectFit: 'contain',
                      display: 'block',
                      flexShrink: 0
                    }}
                  />
                </div>
                <div
                  className="box-border content-stretch flex flex-col items-center justify-center p-0 relative rounded-[10px] shrink-0 flex-1 min-w-0"
                  data-name="Gradient 2"
                >
                  <img
                    src="/assets/images/color_wiki_07.png"
                    alt="Linear Gradient 2"
                    className="w-full h-auto"
                    style={{ 
                      objectFit: 'contain',
                      display: 'block',
                      flexShrink: 0
                    }}
                  />
                </div>
                <div
                  className="box-border content-stretch flex flex-col items-center justify-center p-0 relative rounded-[10px] shrink-0 flex-1 min-w-0"
                  data-name="Gradient 3"
                >
                  <img
                    src="/assets/images/color_wiki_08.png"
                    alt="Linear Gradient 3"
                    className="w-full h-auto"
                    style={{ 
                      objectFit: 'contain',
                      display: 'block',
                      flexShrink: 0
                    }}
                  />
                </div>
                <div
                  className="box-border content-stretch flex flex-col items-center justify-center p-0 relative rounded-[10px] shrink-0 flex-1 min-w-0"
                  data-name="Gradient 4"
                >
                  <img
                    src="/assets/images/color_wiki_09.png"
                    alt="Linear Gradient 4"
                    className="w-full h-auto"
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

          {/* Fade To Black Gradients Section */}
          <div
            className="box-border content-stretch flex flex-col gap-20 items-start justify-start px-0 py-[100px] relative shrink-0 content-responsive"
            data-name="Fade To Black Gradients"
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
                    Fade To Black Gradients
                  </p>
                </div>
                <div className="relative shrink-0 text-grey-300 text-[18px] w-full">
                  <p className="block leading-[1.4]">
                    The effective use of negative space is a crucial aspect of our visual identity; therefor we use a special 'fade to black' gradient in certain cases to evoke a sense of mystery.
                  </p>
                </div>
              </div>
              <div
                className="box-border content-stretch flex flex-col gap-6 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-full max-w-[700px] flex-1"
                data-name="Description"
              >
                <div className="font-ibm-plex-sans-jp relative shrink-0 text-grey-50 text-heading-small tracking-[-0.48px] w-full">
                  <p className="adjustLetterSpacing block leading-[1.4]">
                    フェード・トゥ・ブラック・グラデーション
                  </p>
                </div>
                <div className="font-ibm-plex-sans-jp relative shrink-0 text-grey-300 text-[18px] w-full">
                  <p className="block leading-[1.4]">
                    ネガティブスペース（余白）の効果的な活用は、私たちのビジュアルアイデンティティの重要な要素です。そのため、特定の場面では特別な「フェード・トゥ・ブラック」グラデーションを使用し、ミステリアスな印象を演出しています。
                  </p>
                </div>
              </div>
            </div>
            <div
              className="box-border content-stretch flex flex-col gap-[48px] items-start justify-start p-0 relative shrink-0"
              data-name="Fade To Black Gradients"
            >
              <div
                className="box-border content-stretch flex flex-col items-center justify-center p-0 relative rounded-[10px] shrink-0 w-full h-auto"
                data-name="Main Gradient"
              >
                <img
                  src="/assets/images/color_wiki_10.png"
                  alt="Main Fade To Black Gradient"
                  className="w-full h-auto"
                  style={{ 
                    objectFit: 'contain',
                    display: 'block',
                    flexShrink: 0
                  }}
                />
              </div>
              <div
                className="box-border content-stretch flex flex-row flex-wrap gap-[49px] items-start justify-start p-0 relative shrink-0"
                data-name="Gradient Cards"
              >
                <div
                  className="box-border content-stretch flex flex-col items-center justify-center p-0 relative rounded-[10px] shrink-0 flex-1 min-w-0"
                  data-name="Gradient 1"
                >
                  <img
                    src="/assets/images/color_wiki_11.png"
                    alt="Fade To Black Gradient 1"
                    className="w-full h-auto"
                    style={{ 
                      objectFit: 'contain',
                      display: 'block',
                      flexShrink: 0
                    }}
                  />
                </div>
                <div
                  className="box-border content-stretch flex flex-col items-center justify-center p-0 relative rounded-[10px] shrink-0 flex-1 min-w-0"
                  data-name="Gradient 2"
                >
                  <img
                    src="/assets/images/color_wiki_12.png"
                    alt="Fade To Black Gradient 2"
                    className="w-full h-auto"
                    style={{ 
                      objectFit: 'contain',
                      display: 'block',
                      flexShrink: 0
                    }}
                  />
                </div>
                <div
                  className="box-border content-stretch flex flex-col items-center justify-center p-0 relative rounded-[10px] shrink-0 flex-1 min-w-0"
                  data-name="Gradient 3"
                >
                  <img
                    src="/assets/images/color_wiki_13.png"
                    alt="Fade To Black Gradient 3"
                    className="w-full h-auto"
                    style={{ 
                      objectFit: 'contain',
                      display: 'block',
                      flexShrink: 0
                    }}
                  />
                </div>
                <div
                  className="box-border content-stretch flex flex-col items-center justify-center p-0 relative rounded-[10px] shrink-0 flex-1 min-w-0"
                  data-name="Gradient 4"
                >
                  <img
                    src="/assets/images/color_wiki_14.png"
                    alt="Fade To Black Gradient 4"
                    className="w-full h-auto"
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

          {/* Color Combinations Section */}
          <div
            className="box-border content-stretch flex flex-col gap-20 items-start justify-start px-0 py-[100px] relative shrink-0 content-responsive"
            data-name="Color Combinations"
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
                    Color Combinations
                  </p>
                </div>
                <div className="relative shrink-0 text-grey-300 text-[18px] w-full">
                  <p className="block leading-[1.4]">
                    These combinations are not set in stone, but are some suggestions from us that pair well together.
                  </p>
                </div>
              </div>
              <div
                className="box-border content-stretch flex flex-col gap-6 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-full max-w-[700px] flex-1"
                data-name="Description"
              >
                <div className="font-ibm-plex-sans-jp relative shrink-0 text-grey-50 text-heading-small tracking-[-0.48px] w-full">
                  <p className="adjustLetterSpacing block leading-[1.4]">
                    カラーコンビネーション
                  </p>
                </div>
                <div className="font-ibm-plex-sans-jp relative shrink-0 text-grey-300 text-[18px] w-full">
                  <p className="block leading-[1.4]">
                    これらの組み合わせは絶対的なルールではありませんが、私たちがおすすめする相性の良いカラーパターンです。
                  </p>
                </div>
              </div>
            </div>
            <div
              className="box-border content-stretch flex flex-col gap-[60px] items-start justify-start p-0 relative shrink-0"
              data-name="Color Combinations"
            >
              <div
                className="box-border content-stretch flex flex-row flex-wrap gap-4 lg:gap-[350px] items-start justify-center p-0 relative shrink-0 w-full"
                data-name="Top Row"
              >
                <div
                  className="box-border content-stretch flex flex-col items-center justify-center gap-4 p-0 relative shrink-0 flex-1 min-w-72 max-w-md"
                  data-name="Combination 1"
                >
                  <img
                    src="/assets/images/color_wiki_15.png"
                    alt="Primary 400 + Coral Reef 400"
                    className="w-full h-auto"
                    style={{ 
                      objectFit: 'contain',
                      display: 'block',
                      flexShrink: 0
                    }}
                  />
                  <div className="flex flex-row justify-between w-full text-white text-sm">
                    <span>Primary 400</span>
                    <span>Coral Reef 400</span>
                  </div>
                </div>
                <div
                  className="box-border content-stretch flex flex-col items-center justify-center gap-4 p-0 relative shrink-0 flex-1 min-w-72 max-w-md"
                  data-name="Combination 2"
                >
                  <img
                    src="/assets/images/color_wiki_16.png"
                    alt="Turquoise 400 + Primary 500"
                    className="w-full h-auto"
                    style={{ 
                      objectFit: 'contain',
                      display: 'block',
                      flexShrink: 0
                    }}
                  />
                  <div className="flex flex-row justify-between w-full text-white text-sm">
                    <span>Turquoise 400</span>
                    <span>Primary 500</span>
                  </div>
                </div>
                <div
                  className="box-border content-stretch flex flex-col items-center justify-center gap-4 p-0 relative shrink-0 flex-1 min-w-72 max-w-md"
                  data-name="Combination 3"
                >
                  <img
                    src="/assets/images/color_wiki_17.png"
                    alt="Primary 200 + Indigo 400"
                    className="w-full h-auto"
                    style={{ 
                      objectFit: 'contain',
                      display: 'block',
                      flexShrink: 0
                    }}
                  />
                  <div className="flex flex-row justify-between w-full text-white text-sm">
                    <span>Primary 200</span>
                    <span>Indigo 400</span>
                  </div>
                </div>
              </div>
              <div
                className="box-border content-stretch flex flex-row flex-wrap gap-4 lg:gap-[350px] items-start justify-center p-0 relative shrink-0 w-full"
                data-name="Bottom Row"
              >
                <div
                  className="box-border content-stretch flex flex-col items-center justify-center gap-4 p-0 relative shrink-0 flex-1 min-w-72 max-w-md"
                  data-name="Combination 4"
                >
                  <img
                    src="/assets/images/color_wiki_18.png"
                    alt="Coral Reef 100 + Red 500"
                    className="w-full h-auto"
                    style={{ 
                      objectFit: 'contain',
                      display: 'block',
                      flexShrink: 0
                    }}
                  />
                  <div className="flex flex-row justify-between w-full text-white text-sm">
                    <span>Coral Reef 100</span>
                    <span>Red 500</span>
                  </div>
                </div>
                <div
                  className="box-border content-stretch flex flex-col items-center justify-center gap-4 p-0 relative shrink-0 flex-1 min-w-72 max-w-md"
                  data-name="Combination 5"
                >
                  <img
                    src="/assets/images/color_wiki_19.png"
                    alt="Red 300 + Grey 900"
                    className="w-full h-auto"
                    style={{ 
                      objectFit: 'contain',
                      display: 'block',
                      flexShrink: 0
                    }}
                  />
                  <div className="flex flex-row justify-between w-full text-white text-sm">
                    <span>Red 300</span>
                    <span>Grey 900</span>
                  </div>
                </div>
                <div
                  className="box-border content-stretch flex flex-col items-center justify-center gap-4 p-0 relative shrink-0 flex-1 min-w-72 max-w-md"
                  data-name="Combination 6"
                >
                  <img
                    src="/assets/images/color_wiki_20.png"
                    alt="Primary 400 + Rajah 400"
                    className="w-full h-auto"
                    style={{ 
                      objectFit: 'contain',
                      display: 'block',
                      flexShrink: 0
                    }}
                  />
                  <div className="flex flex-row justify-between w-full text-white text-sm">
                    <span>Primary 400</span>
                    <span>Rajah 400</span>
                  </div>
                </div>
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