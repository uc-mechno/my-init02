## 初めに

よく使う JavaScriptのテンプレートです。  
Vite でモジュールをバンドルし、本番用の `common.js` を生成することを想定しています。  

---

## ディレクトリ構成

```
├── .editorconfig               # インデント・改行設定
├── .gitignore
├── .prettierrc                 # Prettier設定
├── .prettierignore
├── .vscode/                    # VSCode設定
│   ├── settings.json
│   └── cspell.json
├── package.json
├── vite.config.js              # Viteバンドル設定
└── assets/
    └── js/
        ├── _main.js            # Viteエントリーポイント
        ├── _const.js           # グローバル定数（URL・サイト名など）
        ├── _accordion.js       # アコーディオンモジュール
        ├── _modal.js           # モーダルモジュール
        ├── _slider.js          # スライダーモジュール
        └── common.js           # ビルド出力（自動生成・編集不可）
```

## 使い方

### JavaScript

```bash
npm install       # 初回のみ
npm run dev       # 開発サーバー起動
npm run build     # 本番ビルド（assets/js/common.js を生成）
npm run preview   # ビルド結果のプレビュー
```

- `assets/js/_main.js` がエントリーポイント。モジュールの import と初期化はここに書く
- 新しいモジュールは `_foo.js` として作成し、`_main.js` で import する


## 説明

### JS モジュールの規則

- **`_` プレフィックスのファイル** = ソースファイル（モジュール）
- **プレフィックスなし** = Vite のビルド出力。手動で編集しない
- モジュールは `export` のみ。自己実行コードは書かない
- 初期化タイミングの使い分け：
  - `window.addEventListener('load', ...)` — 画像など全アセット読み込み後が必要な処理
  - `document.addEventListener('DOMContentLoaded', ...)` — DOM 構築後でよい処理

### 定数管理

`assets/js/_const.js` にサイト全体で使う定数（URL・サイト名・WordPress テーマパスなど）を集約し、各モジュールから個別に import する。
