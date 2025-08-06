# Assets Directory

デザインシステムで使用するすべての静的アセットを格納するディレクトリです。

## 📁 フォルダ構造

```
public/assets/
├── icons/           # SVGアイコン、ファビコン
├── images/          # 写真、背景画像、装飾画像
├── logos/           # ロゴ画像（SVG、PNG）
├── illustrations/   # イラスト、グラフィック素材
└── README.md        # このファイル
```

## 🎯 使用方法

Next.jsでは`public`フォルダ内のファイルは`/`からの絶対パスでアクセスできます。

### 例：

```tsx
// ロゴの場合
<img src="/assets/logos/company-logo.svg" alt="Company Logo" />

// アイコンの場合
<img src="/assets/icons/search-icon.svg" alt="Search" />

// 画像の場合
<img src="/assets/images/hero-background.jpg" alt="Hero Background" />
```

## 📋 推奨ファイル形式

- **Icons**: SVG（推奨）、PNG
- **Logos**: SVG（推奨）、PNG
- **Images**: JPG、PNG、WebP
- **Illustrations**: SVG（推奨）、PNG

## 🎨 命名規則

- **ケバブケース**: `hero-background.jpg`
- **説明的な名前**: `user-profile-icon.svg`
- **サイズ情報**: `logo-large.svg`, `logo-small.svg`
