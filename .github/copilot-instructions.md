# Copilot Instructions

## プロジェクト概要

静的サイト（HTML/SCSS/JS）または WordPress（SWELL 子テーマ）向け Web フロントエンドのボイラープレート。
JS は Vite でバンドル、SCSS は Live Sass Compiler（VS Code 拡張機能）でコンパイル。

## JS ビルド（Vite）

```bash
npm run dev      # 開発サーバー起動
npm run build    # 本番ビルド
npm run preview  # ビルド結果のプレビュー
```

- **エントリーポイント:** `assets/js/_main.js`
- **出力先:** `assets/js/common.js`
- `outDir: 'assets'`、`emptyOutDir: false` — **`true` にすると `assets/js/` のソースファイルが削除されるため絶対に変更しない**

## JS ファイル構成と規則

- **`_` プレフィックス** = ソースファイル（モジュール）。直接ブラウザには読み込まれない
- **プレフィックスなし** = Vite の出力ファイル（`common.js`）。**手動編集しない**
- モジュールは **named export のみ**。自己実行コード（即時副作用）は書かない
- 各モジュールの初期化は `_main.js` で行う：
  - `window.addEventListener('load', ...)` — 画像など全アセットの読み込み完了後に必要な処理
  - `document.addEventListener('DOMContentLoaded', ...)` — DOM 構築完了後でよい処理
- `_const.js` にサイト全体の定数を集約し、必要なモジュールから個別に import する

## Prettier 設定（`.prettierrc`）

```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100,
  "endOfLine": "lf"
}
```

- `development/css/*.css`（コンパイル済み CSS）は `.prettierignore` で除外済み

## SCSS（Live Sass Compiler）

VS Code 拡張機能経由のみ（CLI 不可）。保存時に自動コンパイル。

- **出力先:** `/development/css/`（ソースマップなし、last 2 versions で自動プレフィックス付与）

## インデント規則（`.editorconfig`）

- 全ファイル: **スペース 2 つ**
- **Pug ファイルのみ: タブ**（例外）

## 必要になったら作成する設定ファイル

`.vscode/settings.json` で参照されているが未作成。該当ツールが必要な時点で作成する：

- `.eslintrc`
- `.stylelintrc`
- `.markuplintrc`
