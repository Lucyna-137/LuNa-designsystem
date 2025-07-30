'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from '../../components/Logo';
import ScrollNavigation from '../../components/ScrollNavigation';

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
      // 編集開始 - 現在の値を保存
      setOriginalName(name);
      setOriginalHex(hex);
    }
    setIsEditing(!isEditing);
  };

  const handleEditComplete = () => {
    console.log('🎨 Saving changes:', { name, hex });
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

  const handleHexChange = (newHex: string) => {
    setHex(newHex);
    if (/^#[0-9A-F]{6}$/i.test(newHex)) {
      setColor(newHex);
    }
  };



  return (
    <div className="flex flex-col gap-4 shrink-0 relative">
      {/* コピー完了メッセージ */}
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
        {/* 黒透過50%オーバーレイとアイコン */}
        {(isHovered || isEditing) && (
          <div className="absolute inset-0 bg-black/50 rounded flex items-center justify-center">
            <div className="flex gap-3">
              {/* コピーアイコン */}
              <button
                onClick={handleCopyToClipboard}
                className="w-8 h-8 flex items-center justify-center transition-opacity"
                title="Copy color code"
              >
                <img 
                  src="/assets/icons/clipboard-document-check.svg" 
                  alt="Copy" 
                  className="w-6 h-6 hover:opacity-70 transition-opacity"
                />
              </button>
              
              {/* 編集アイコン */}
              <button
                onClick={handleEditToggle}
                className="w-8 h-8 flex items-center justify-center transition-opacity"
                title="Edit color"
              >
                <img 
                  src="/assets/icons/pencil.svg" 
                  alt="Edit" 
                  className="w-6 h-6 hover:opacity-70 transition-opacity"
                />
              </button>
            </div>
          </div>
        )}
      </div>
      
      <div className="text-grey-300 leading-tight relative w-[150px]">
        {/* カラーネーム */}
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
        
        {/* HEXコード */}
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
        
        {/* 編集完了・キャンセルボタン - 絶対位置で配置 */}
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
      <h3 className="font-host-grotesk text-grey-50 text-[32px] font-normal mb-20">{title}</h3>
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

export default function ColorPage() {
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

  // データの初期化フラグ
  const [isInitialized, setIsInitialized] = useState(false);

  // ページロード時にlocalStorageからデータを復元
  useEffect(() => {
    if (typeof window !== 'undefined' && !isInitialized) {
      try {
        const saved = localStorage.getItem('designSystemColors');
        if (saved) {
          const data = JSON.parse(saved);
          console.log('✅ Loaded data:', data);
          setColorPalettes(data);
        } else {
          console.log('📝 Using default data');
        }
      } catch (error) {
        console.error('❌ Load error:', error);
      }
      setIsInitialized(true);
    }
  }, [isInitialized]);

  // データ保存関数
  const saveToStorage = (data: typeof colorPalettes) => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('designSystemColors', JSON.stringify(data));
        console.log('💾 Saved!', data.length, 'palettes');
        
        // 保存確認のためのテスト読み込み
        const test = localStorage.getItem('designSystemColors');
        console.log('🔍 Verification:', test ? 'Data exists in storage' : 'Data missing!');
      } catch (error) {
        console.error('❌ Save error:', error);
      }
    }
  };

  const handlePaletteChange = (title: string, colors: { name: string; hex: string; color: string }[]) => {
    console.log('🎨 Change:', title, colors);
    
    const newPalettes = colorPalettes.map(palette => 
      palette.title === title ? { ...palette, colors } : palette
    );
    
    console.log('📊 Updated palettes:', newPalettes);
    setColorPalettes(newPalettes);
    saveToStorage(newPalettes);
  };

  return (
    <div className="bg-grey-900 min-h-screen">
      <div
        className="bg-grey-900 relative w-full min-h-screen"
        data-name="Color Page"
      >
        <div className="relative size-full">
          {/* Scroll Navigation */}
          <ScrollNavigation currentPage="color" />

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
                </p>
              </div>
              <div className="relative shrink-0 text-display-xxl tracking-[-4.48px] w-full">
                <h1 className="adjustLetterSpacing block leading-none">
                  Color
                </h1>
              </div>
            </div>
          </div>

          {/* Color Palettes Section */}
          <div
            className="box-border content-stretch flex flex-col gap-[200px] items-start justify-start px-0 py-[100px] relative shrink-0 content-responsive"
            data-name="Color Palettes"
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