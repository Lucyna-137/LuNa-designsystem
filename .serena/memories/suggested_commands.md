# 推奨開発コマンド

## 開発ワークフロー
```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
# http://localhost:3000 でアクセス

# 本番用ビルド
npm run build

# 本番サーバーの起動
npm start

# コードリンティング
npm run lint
```

## システムコマンド（macOS/Darwin）
```bash
# ファイル操作
ls -la                    # 詳細付きファイル一覧
find . -name "*.tsx"      # TypeScript Reactファイルを検索
grep -r "pattern" .       # ファイル内検索

# Git操作
git status
git add .
git commit -m "メッセージ"
git push origin main

# プロセス管理
lsof -ti:3000            # ポート3000のプロセスを検索
kill -9 [PID]            # PID指定でプロセス終了
```

## プロジェクト固有コマンド
```bash
# 主要ディレクトリへの移動
cd app/                  # App Routerページ
cd components/           # 共有コンポーネント
cd public/assets/images/ # 画像アセット

# 開発タスク
npm run dev              # ホットリロード付き開発開始
npm run build           # 本番ビルド
npm run lint            # ESLintチェック
```

## 画像管理
```bash
# 命名規則に従った画像整理
# フォーマット：{section}_{page}_{number}.png
# 例：
# - home_started_01.png
# - color_wiki_15.png
# - effects_blur_03.png
```

## 注意事項
- 専用のテストフレームワークは設定されていません
- フォーマットコマンドなし（ESLintに依存）
- 画像は統一された命名規則に従う必要があります
- すべての開発はDarwin（macOS）システム上で行われます