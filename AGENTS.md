# AGENTS.md

## 概要

Viteベースのバンドラーテンプレート。ソースファイルは `assets/js/` に置き、ビルド出力は `assets/js/common.js`。

## コマンド

```sh
npm run build    # assets/js/_main.js → assets/js/common.js にバンドル
npm run dev      # Vite 開発サーバー起動
npm run preview  # プロダクションビルドのプレビュー
```

## ディレクトリ構成

```
assets/js/
├── _main.js       # エントリポイント（モジュールのインポートとイベントリスナーの登録）
├── _const.js      # グローバル定数（SITE_URL, CURRENT_URL, SITE_NAME, WP_PATH, THEMES_PATH）
├── _accordion.js  # モジュール – named export のみ、自己実行しない
├── _modal.js      # モジュール – named export のみ、自己実行しない
├── _slider.js     # モジュール – named export のみ、自己実行しない
└── common.js      # ビルド出力 – 手動編集禁止
```

アンダースコア付きファイルがソース（Sass パーシャルと同じ命名規則）。`common.js` が唯一のビルド成果物。

## 規約

- **エントリと出力の関係**: `_main.js` が Vite のエントリ。出力ファイル名は `vite.config.js` の input キー名で決まる（`common: resolve(..., '_main.js')` → `common.js`）。
- **モジュール追加手順**: `_foo.js` を named export 形式で作成し、`_main.js` の適切なイベントリスナー内でインポート・呼び出す。
- **定数の使い方**: 定数が必要な各モジュール内で `./_const.js` からインポートする。`_main.js` で実際に使わない定数は `_main.js` にインポートしない（tree-shaking で除去されるだけでなく、不要な依存になる）。
- **イベントリスナーの使い分け** （`_main.js` 内）:
  - `window.addEventListener('load', ...)` – 画像など全リソースの読み込み完了後に必要な処理
  - `document.addEventListener('DOMContentLoaded', ...)` – DOM構築完了後に実行する処理

## Vite 設定の注意点

- `outDir: 'assets'`、`emptyOutDir: false` – ビルド時にソースファイルを削除しないための設定。
- 出力パス: `entryFileNames/chunkFileNames` → `js/[name].js`。
- ソースと出力が同じディレクトリを共有しているため、**`emptyOutDir: true` に変更すると全ソースファイルが消える**。絶対に変更しない。

## .gitignore

`common.js` は無視される（ツリー内のすべての `common.js` にマッチ）。`node_modules` と `.DS_Store` も除外済み。
