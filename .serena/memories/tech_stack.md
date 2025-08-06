# 技術スタックと依存関係

## コア技術
- **Next.js**: 14.0.4 - App Routerを使用したReactフレームワーク
- **React**: ^18 - UIライブラリ
- **TypeScript**: ^5 - 型安全性と開発体験の向上
- **Tailwind CSS**: ^3.3.0 - ユーティリティファーストのCSSフレームワーク

## 開発依存関係
- **ESLint**: ^8 with eslint-config-next - コードリンティング
- **PostCSS**: ^8 - CSS後処理
- **Autoprefixer**: ^10.0.1 - CSSベンダープレフィックス自動付与
- **@types/node**: ^20 - Node.js型定義
- **@types/react**: ^18 - React型定義
- **@types/react-dom**: ^18 - React DOM型定義

## 設定ファイル
- `tsconfig.json` - strictモードが有効なTypeScript設定
- `tailwind.config.ts` - 拡張テーマを含むカスタムTailwind設定
- `postcss.config.js` - PostCSS設定
- `next.config.js` - Next.js設定

## TypeScript設定
- ターゲット：ES5
- strictモード有効
- パスマッピング：`@/*`はプロジェクトルートを指す
- JSX：preserve（Next.jsが変換）
- モジュール解決：bundler

## カスタムTailwindテーマ拡張
- **フォント**：Host Grotesk（英語）、IBM Plex Sans JP（日本語）
- **カラー**：カスタムグレーパレット（50、300、900、white）
- **タイポグラフィ**：カスタムサイズ（display-xxl、heading-medium、heading-small、text-large）
- **グラデーション**：紫・オレンジ色のブランドグラデーション
- **アニメーション**：スケール変換付きフェードインアニメーション