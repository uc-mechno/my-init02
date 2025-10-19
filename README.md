# 初めに
今更ですが、初期設定ファイルなどをまとめたリポジトリです。  
最近、あの設定ファイルはどこだっけ、みたいなのが多くなってきたので、まとめてみたのが経緯です。   
基本的にはローカルにパッケージをインストールせず、グローバルにインストールしたパッケージでの運用を想定しています。  
もしくは、パッケージ自体をインストールしない環境でも、VSCodeの拡張機能だけでの運用も想定しています。  
  
---

## ディレクトリ構成
```
├── .editorconfig           # EditorConfig設定
├── .markuplintrc           # HTMLリンター設定
├── .prettierignore         # Prettier除外設定
├── .prettierrc             # Prettier設定
├── bs-config.js            # BrowserSync設定
├── index.html              # 静的HTML確認用
├── index.php               # 動的PHP確認用
├── README.md               # このファイル
├── .vscode/                # VSCode設定
│   ├── cspell.json         # スペルチェック辞書
│   ├── csscomb.json        # CSSComb設定
│   ├── tasks.json          # PHPサーバの設定
│   └── settings.json       # VSCode拡張設定
```

## VSCodeプラグイン
- [Live Sass Compiler](https://marketplace.visualstudio.com/items?itemName=glenn2223.live-sass)（Sassコンパイラ）
- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)（エディタ統一設定）
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)（コード整形）
- [CSSComb](https://marketplace.visualstudio.com/items?itemName=naumstory.vscode-csscomb)（CSS/Sass整形）
- [Markuplint](https://marketplace.visualstudio.com/items?itemName=yusukehirao.vscode-markuplint)（HTMLリンター）
- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)（スペルチェック）

## 設定Tips

- `.editorconfig`：エディタのインデントや改行コードなどを統一します。VSCode拡張「EditorConfig for VS Code」で自動適用。
  - 例：`indent_style = space` や `end_of_line = lf` などを設定。

- `.prettierrc`：Prettierの詳細な整形ルールを記述します。
  - 例：`{"singleQuote": true, "semi": false}` など。

- `.prettierignore`：Prettierの整形対象外ディレクトリやファイルを指定します。
  - 例：`css/` や `sass/` ディレクトリを除外。

- `.markuplintrc`：HTMLリンター（Markuplint）のルールを記述します。
  - 例：タグの閉じ忘れや属性の書き方などをチェック。

- `.vscode/settings.json`：VSCode拡張機能の設定やフォーマッタの指定を行います。
  - 保存時に自動整形（`editor.formatOnSave`）や、拡張ごとの設定を記述。
  - コメント付きJSON（JSONC）形式なので一部ツールは注意。

- `.vscode/cspell.json`：スペルチェック辞書。よく使う単語や略語を追加できます。

- `.vscode/csscomb.json`：CSSCombの整形ルールを記述します。

### 使い方
- 設定ファイルはプロジェクトルートまたは`.vscode/`配下に配置してください。

## BrowserSyncの使い方
- ローカル開発時にCSSやHTMLの変更を即座にブラウザへ反映するため、BrowserSyncを利用できます。
- グローバルにインストールされている前提になります(ローカルでも問題ありません)
- `npx browser-sync init`で`bs-config.js`が作られます（既に作ってあります）

### インストール方法（グローバル）
```
% npm install -g browser-sync
```
### bs-config.jsファイル作成
```
% npx browser-sync init
```

### 動的サイト起動方法1
- 別途PHPなどでローカルサーバを立ち上げてください
- Vscodeの拡張機能でPHPサーバを立ち上げてもいい（その際はポート番号の設定をする）
```
 % php -S localhost:8000
```
立ち上げ後
```
% browser-sync start --config bs-config.js
```
MAMPやLocalでも同じようにポート番号の設定をしていただければ立ち上がります

### 静的もしくは動的切り替え
`bs-config.js`のコメントアウトを切り替えてください。

```js
//静的サイト
files: ["assets/css/*.scss", "assets/js/*.js", "./**/*.html"],
server: {
  baseDir: "./",
},

//動的サイト
// files: ["assets/css/*.scss", "assets/js/*.js", "./**/*.php"],
// proxy: "localhost:8000",
```

### 動的サイト起動方法2
`tasks.json`より起動する方法
- VS Code のコマンドパレット（Cmd+Shift+P）で 「Run Task」 を選択

---

## 補足
VSCodeにPHPのサーバを簡易的に立ち上げる拡張機能が用意されているので、PHPでサーバを立ち上げるのができなかったらこちらを使うのもあり。
- [PHP Server](https://marketplace.visualstudio.com/items?itemName=brapifra.phpserver)（PHPサーバ）
