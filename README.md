# Design System - Getting Started

社内容デザインシステムのスターターテンプレートです。Figmaデザインを完全に再現し、レスポンシブ対応されています。

## 特徴

- ✨ **Figmaデザイン完全再現**: Figmaで作成されたデザインを完全に再現
- 📱 **レスポンシブ対応**: モバイル、タブレット、デスクトップに最適化
- 🎯 **センター揃えレイアウト**: コンテンツが美しくセンターに配置
- 🎨 **カスタムフォント**: Host Grotesk（英語）、IBM Plex Sans JP（日本語）
- 🔧 **Next.js + TypeScript**: 最新の技術スタックを使用
- 🎯 **Tailwind CSS**: 効率的なスタイリング
- 🌈 **グラデーション背景**: 美しいブランドカラーグラデーション
- 🖼️ **実際の画像とロゴ**: SVGロゴと高品質画像を使用

## 技術スタック

- **フレームワーク**: Next.js 14
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **フォント**: Google Fonts (Host Grotesk, IBM Plex Sans JP)

## セットアップ

1. **プロジェクトディレクトリに移動**
   ```bash
   cd kit_designsystem
   ```

2. **依存関係のインストール**
   ```bash
   npm install
   ```

3. **開発サーバーの起動**
   ```bash
   npm run dev
   ```

4. **ブラウザでアクセス**
   [http://localhost:3000](http://localhost:3000) にアクセスしてページを確認

## プロジェクト構造

```
kit_designsystem/
├── app/                          # Next.js App Router
│   ├── color/                    # カラーセクション
│   │   ├── page.tsx             # メインカラーページ
│   │   ├── wiki/                # カラーWiki
│   │   ├── documentation/       # カラー詳細ドキュメント  
│   │   ├── resources/           # カラーリソース
│   │   └── gradients/           # グラデーション
│   ├── logo/                     # ロゴセクション
│   │   ├── page.tsx             # メインロゴページ
│   │   ├── wiki/                # ロゴWiki
│   │   └── placeholder-logos/   # プレースホルダーロゴ
│   ├── type/                     # タイポグラフィセクション
│   │   ├── page.tsx             # タイプメインページ
│   │   ├── typography-en/       # 英語タイポグラフィ
│   │   ├── typography-jp/       # 日本語タイポグラフィ
│   │   ├── wiki/                # タイプWiki
│   │   ├── documentation/       # タイプドキュメント
│   │   └── resources/           # タイプリソース
│   ├── icons/                    # アイコンセクション
│   │   ├── page.tsx             # ブランドアイコン（メイン）
│   │   ├── company-icons/       # 会社アイコン
│   │   ├── wiki/                # アイコンWiki  
│   │   └── documentation/       # アイコンドキュメント
│   ├── imagery/                  # イメージセクション
│   │   ├── page.tsx             # ポートレート（メイン）
│   │   ├── textures/            # テクスチャ
│   │   ├── wiki/                # イメージWiki
│   │   └── documentation/       # イメージドキュメント
│   ├── grids/                    # グリッドセクション
│   │   └── page.tsx             # グリッドシステム
│   ├── globals.css               # グローバルスタイル
│   ├── layout.tsx                # ルートレイアウト
│   └── page.tsx                  # Getting Startedホームページ
├── components/                   # 共通コンポーネント
│   ├── Logo.tsx                  # ロゴコンポーネント
│   └── ScrollNavigation.tsx      # ナビゲーションコンポーネント
├── public/
│   └── assets/                   # 静的アセット管理
│       ├── icons/                # SVGアイコン、ファビコン
│       ├── images/               # ページ用画像、背景画像
│       ├── logos/                # ロゴ画像（SVG、PNG）
│       ├── illustrations/        # イラスト、グラフィック素材
│       └── README.md             # アセット管理ガイド
├── tailwind.config.ts            # カスタムカラー・フォント設定
├── package.json
├── README.md
└── .gitignore
```

## フォント設定

- **Host Grotesk**: 英語テキスト用（500, 600, 700 weight）
- **IBM Plex Sans JP**: 日本語テキスト用（400, 500, 600, 700 weight）

フォントはGoogle Fontsから自動的に読み込まれます。

## アセット管理

### 📁 静的ファイルの配置

画像やアイコンは`public/assets/`フォルダに整理して配置されています：

```
public/assets/
├── icons/           # SVGアイコン、ファビコン
├── images/          # Getting Startedページ用画像（Started-img-1.png〜7.png）
├── logos/           # ロゴ画像（Logo.svg）
└── illustrations/   # イラスト、グラフィック素材
```

### 🎯 現在使用中のアセット

**ロゴ:**
- `Logo.svg` - メインロゴ（ヘッダー・フッターで使用）

**画像:**
- `Started-img-1.png` - Core Brand Elements セクション
- `Started-img-2.png` - Brand Guidelines セクション（1枚目）
- `Started-img-3.png` - Brand Guidelines セクション（2枚目）
- `Started-img-4.png` - Basic Components セクション
- `Started-img-5.png` - Browsers & Devices セクション
- `Started-img-6.png` - Social Templates セクション
- `Started-img-7.png` - Email UI セクション

### 🎯 使用例

```tsx
// ロゴコンポーネントで使用（Mediumサイズ: 130×48px）
<Image src="/assets/logos/Logo.svg" alt="Kit Design System Logo" width={130} height={48} />

// セクション画像の場合（1265×709px - !important完全強制指定、Figmaデザイン完全準拠）
<img 
  src="/assets/images/Started-img-1.png" 
  alt="Core Brand Elements" 
  width="1265" 
  height="709" 
  className="block"
  style={{ 
    width: '1265px !important', 
    height: '709px !important',
    minWidth: '1265px',
    minHeight: '709px',
    maxWidth: '1265px', 
    maxHeight: '709px',
    objectFit: 'cover'
  }}
/>
```

## カスタマイズ

### カラーパレット
Tailwind設定で以下のカスタムカラーが定義されています：
- `grey-50`: #F2F2F0
- `grey-300`: #67697C  
- `grey-900`: #010109
- `grey-white`: #FFFFFF

### タイポグラフィ
カスタムフォントサイズが定義されています：
- `display-xxl`: 112px
- `heading-medium`: 32px
- `heading-small`: 24px
- `text-large`: 18px

## デプロイ

```bash
npm run build
npm start
```

## ライセンス

このプロジェクトは社内使用を目的としています。 