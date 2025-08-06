# Kit Design System - プロジェクト概要

## プロジェクトの目的
Kit Design Systemは、Next.jsで構築された包括的なデザインシステムで、完全なナビゲーションシステム、複数のセクション、美しいインターフェースを提供します。社内利用を目的とし、デザインコンポーネントとシステムのショーケースとして機能します。

## 主な機能
- 🎯 7つのメインセクションを持つ完全なデザインシステム
- 📱 モバイル、タブレット、デスクトップに最適化されたレスポンシブデザイン
- 🧭 ホバー状態と動的ドロップダウンナビゲーションを備えたスマートナビゲーション
- 🎨 多言語対応（英語・日本語コンテンツ）
- 🖼️ 統一された命名規則による129枚以上の整理された画像ギャラリー
- ⚡ モダンスタック：Next.js 14 + TypeScript + Tailwind CSS

## メインセクション
1. **ホーム** - 7つの機能セクションを持つGetting Startedランディングページ
2. **カラー** - 41枚以上の画像を持つ完全なカラーシステム（Color、Gradients、Wiki、Documentation、Resources）
3. **タイプ** - 22枚以上の画像を持つタイポグラフィシステム（Typography EN/JP、Wiki、Documentation、Resources）
4. **アイコン** - 5つ以上のサンプルを持つアイコンライブラリ（Brand Icons、Company Icons、Wiki、Documentation）
5. **イメージ** - 28枚以上のアセットを持つ画像ギャラリー（Portraits、Textures、Wiki、Documentation）
6. **グリッド** - 11枚以上のサンプルを持つレイアウトシステム（Grid System、Spacing、Wiki、Documentation）
7. **エフェクト** - 9枚以上のサンプルを持つ視覚効果（Blur、Shadows、Wiki、Documentation）

## プロジェクト構造
- `app/` - 7つのメインセクション（計28ページ）を持つNext.js App Router
- `components/` - 共有コンポーネント（Logo.tsx、ScrollNavigation.tsx）
- `public/assets/images/` - `{section}_{page}_{number}.png`命名規則に従った129枚の整理済み画像

## ビジネスコンテキスト
- 社内使用のみ
- 包括的なデザインシステムリファレンスとして機能
- すべてのアセットが整理され、適切にリンクされている