# 🎨 Kit Design System

> Next.jsで構築された包括的なデザインシステム。完全なナビゲーション、複数のセクション、美しいインターフェースを提供します。

## ✨ 特徴

- 🎯 **完全なデザインシステム**: 7つのメインセクションを持つフル機能のデザインシステム
- 📱 **レスポンシブデザイン**: モバイル、タブレット、デスクトップに最適化
- 🧭 **スマートナビゲーション**: ホバー状態付きの動的ドロップダウンナビゲーション
- 🎨 **多言語対応**: 英語・日本語コンテンツ
- 🖼️ **画像ギャラリー**: 129枚以上の整理された画像と統一された命名規則
- ⚡ **モダンスタック**: Next.js 14 + TypeScript + Tailwind CSS

## 🚀 クイックスタート

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# ブラウザでアクセス
open http://localhost:3000
```

## 📱 セクション概要

| セクション | ページ数 | 説明 |
|---------|-------|-------------|
| 🏠 **ホーム** | Getting Started | 7つの機能セクションがあるメインランディングページ |
| 🎨 **カラー** | Color, Gradients, Wiki, Documentation, Resources | 41枚以上の画像を持つ完全なカラーシステム |
| ✍️ **タイプ** | Typography EN/JP, Wiki, Documentation, Resources | 22枚以上の画像を持つタイポグラフィシステム |
| 🎯 **アイコン** | Brand Icons, Company Icons, Wiki, Documentation | 5つ以上のサンプルがあるアイコンライブラリ |
| 🖼️ **イメージ** | Portraits, Textures, Wiki, Documentation | 28枚以上のアセットがある画像ギャラリー |
| 🏗️ **グリッド** | Grid System, Spacing, Wiki, Documentation | 11枚以上のサンプルがあるレイアウトシステム |
| ✨ **エフェクト** | Blur, Shadows, Wiki, Documentation | 9枚以上のサンプルがある視覚効果 |

## 🗂️ プロジェクト構造

```
kit_designsystem/
├── 📁 app/                    # Next.js App Router
│   ├── 🎨 color/            # カラーセクション（5ページ）
│   ├── ✍️ type/             # タイポグラフィセクション（5ページ）
│   ├── 🎯 icons/            # アイコンセクション（4ページ）
│   ├── 🖼️ imagery/          # イメージセクション（4ページ）
│   ├── 🏗️ grids/            # グリッドセクション（4ページ）
│   ├── ✨ effects/          # エフェクトセクション（4ページ）
│   ├── 🏷️ logo/             # ロゴセクション（3ページ）
│   └── 📄 page.tsx          # ホームページ
├── 🧩 components/           # 共通コンポーネント
│   ├── Logo.tsx             # ロゴコンポーネント
│   └── ScrollNavigation.tsx # ドロップダウン付きナビゲーション
└── 🖼️ public/assets/images/ # 129枚の整理済み画像
    ├── home_started_01-07.png
    ├── color_wiki_01-20.png
    ├── effects_blur_01-06.png
    └── ... (section_page_number で整理)
```

## 🎨 デザイン機能

### ナビゲーションシステム
- **スマートドロップダウン**: 6つのメインセクションとサブナビゲーション
- **アクティブ状態**: 現在のページのハイライト表示
- **ホバーエフェクト**: スムーズなトランジションと背景ブラー
- **レスポンシブ**: 全画面サイズに最適化

### タイポグラフィ
- **Host Grotesk**: 英語コンテンツ用（ウェイト: 500, 600, 700）
- **IBM Plex Sans JP**: 日本語コンテンツ用（ウェイト: 400, 500, 600, 700）
- **カスタムサイズ**: `display-xxl`, `heading-medium`, `heading-small`, `text-large`

### カラーシステム
- **プライマリ**: `grey-900` (#010109) - ダーク背景
- **セカンダリ**: `grey-300` (#67697C) - セカンダリテキスト
- **アクセント**: `grey-50` (#F2F2F0) - プライマリテキスト
- **ホワイト**: `grey-white` (#FFFFFF) - ハイライト

## 🖼️ 画像の整理

すべての画像は統一された命名規則に従います: `{セクション}_{ページ}_{番号}.png`

### 例:
- `home_started_01.png` - ホームページ画像
- `color_wiki_15.png` - カラーWiki画像
- `effects_blur_03.png` - エフェクトブラー画像
- `grids_documentation_02.png` - グリッドドキュメント画像

## 🛠️ 技術スタック

| 技術 | バージョン | 目的 |
|------------|---------|---------|
| **Next.js** | 14.0.4 | Reactフレームワーク |
| **TypeScript** | 最新 | 型安全性 |
| **Tailwind CSS** | 最新 | スタイリング |
| **React** | 18+ | UIライブラリ |

## 🎯 開発

### 新しいセクションの追加
1. `app/` にフォルダを作成
2. `page.tsx` でページを追加
3. `ScrollNavigation.tsx` の型を更新
4. ドロップダウンナビゲーションを追加
5. `public/assets/images/` に画像を配置

### 画像のガイドライン
- 統一された命名規則を使用: `{セクション}_{ページ}_{番号}.png`
- Web用に最適化（適切なファイルサイズ）
- デザインのアスペクト比を維持
- `/public/assets/images/` に配置

## 📈 最近の更新

- ✅ Effectsセクションの完全実装
- ✅ フォルダ構造の再編成（SpacingをGridsに移動）
- ✅ 統一された命名規則での画像リネーム
- ✅ ナビゲーションドロップダウンシステム
- ✅ 129枚すべての画像の整理とリンク
- ✅ 多言語コンテンツサポート

## 🚀 デプロイ

```bash
# 本番用ビルド
npm run build

# 本番サーバー起動
npm start
```

## 📄 ライセンス

社内使用のみ。すべての権利は保護されています。

---

**❤️ を込めて Next.js、TypeScript、Tailwind CSS で作成**