import Image from 'next/image'

interface FullLogoProps {
  color?: "Dark" | "Light"
  size?: "Large" | "Medium" | "Small"
}

export default function FullLogo({ color = "Light", size = "Small" }: FullLogoProps) {
  // サイズに応じたロゴの寸法を設定
  const getDimensions = () => {
    switch (size) {
      case "Large":
        return { 
          logoWidth: 60, 
          logoHeight: 66, 
          textSize: "text-[48px]",
          gap: "gap-6"
        }
      case "Medium":
        return { 
          logoWidth: 42, 
          logoHeight: 48, 
          textSize: "text-[32px]",
          gap: "gap-4"
        }
      case "Small":
      default:
        return { 
          logoWidth: 30, 
          logoHeight: 36, 
          textSize: "text-[24px]",
          gap: "gap-3"
        }
    }
  }

  const dimensions = getDimensions()
  const textColor = color === "Light" ? "text-grey-white" : "text-grey-900"

  return (
    <div
      className={`box-border content-stretch flex flex-row ${dimensions.gap} items-center justify-start p-0 relative`}
      data-name={`Color=${color}, Size=${size}`}
    >
      <div className="relative shrink-0">
        <Image
          src="/assets/logos/Logo.png"
          alt="Kit Design System Logo"
          width={dimensions.logoWidth}
          height={dimensions.logoHeight}
          className="object-contain"
          priority
        />
      </div>
      <div className={`font-host-grotesk font-medium ${dimensions.textSize} ${textColor} leading-[1.3] tracking-[-0.64px]`}>
        Kit
      </div>
    </div>
  )
}