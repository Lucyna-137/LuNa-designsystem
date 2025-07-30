import React from 'react';
import Image from 'next/image';

interface LogoProps {
  color?: "Dark" | "Light";
  size?: "Large" | "Medium" | "Small";
}

export default function Logo({ color = "Light", size = "Small" }: LogoProps) {
  // サイズに応じたロゴの寸法を設定
  const getDimensions = () => {
    switch (size) {
      case "Large":
        return { width: 180, height: 66 };
      case "Medium":
        return { width: 130, height: 48 };
      case "Small":
      default:
        return { width: 100, height: 36 };
    }
  };

  const dimensions = getDimensions();

  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative"
      data-name={`Color=${color}, Size=${size}`}
    >
      <div className="relative shrink-0">
        <Image
          src="/assets/logos/Logo.png"
          alt="Kit Design System Logo"
          width={dimensions.width}
          height={dimensions.height}
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
} 