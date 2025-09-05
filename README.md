## 環境

基本2024/08/29時点での最新をインストール

### JavaScriptランタイム

Bun
.npmrcとpackage.jsonのenginesを組み合わせることでnpm installをした場合にエラーが出るようにしています
bun installをつかいましょう
https://bun.sh/

### Node

バージョン：22.7.0
2024/08/29時点での最新安定版をインストール

### FrameWork

- React
  バージョン：18.3.1
- Next.js
  バージョン：14.2.7
  VueよりもReactのほうが使いやすく話者も多いためReactを採用
  NextはReactを使用する上で簡単に環境構築ができるため採用
  サーバーサイド機能を用いない場合はAstroにするかも検討

### Linter,Formatter

- Biome
  バージョン：1.8.3
  prettierやESLintの設定それぞれ書くのが面倒
  VSCode拡張機能があるためそれを導入し、保存時のフォーマットも実行可能
  とりあえずrecommended:trueで様子見
  https://biomejs.dev/ja/

### VSCode拡張機能

- Code Spell Checker
  Spellミス防止
- Biome
  保存時にBiomeを実行するため

## HTMLバリデーション

DockerにNu Html Checkerをいれて提出前にざっとチェック
https://blog.webico.work/nu-html-checker-docker

## ここから先はお好みで

### 状態管理

- jotai
  バージョン：2.9.3

### スタイリング系

- Ark UI
  バージョン3.10.0
  Zag.jsを用いたUIコンポーネントライブラリ
  ChakuraUIはemotionを用いているためNext.jsに代表されるRSCに対応していない
  こちらはその問題を解消するために開発されたものでRSCに対応している
  案件で使うにはやや実験的か...？
  スタイルレスのためスタイリングは別の仕組みを考える必要がある
  https://ark-ui.com/

- PandaCSS
  ゼロランタイムCSS in JSライブラリ
  静的にcssが作られるのでNextと相性がよい
  コード補完がちゃんとしているのでユーティリティクラス名を調べる必要がない
  ArkUIをPandaCSSで装飾する形を想定している
  https://panda-css.com/

- ReactIcons
  汎用的なアイコン類は都度書き出してもらうよりも共通のものをデザイナーエンジニアで参照したほうが効率的
  Figmaプラグインもあるためデザイナーにいれてもらいましょう
  https://www.figma.com/community/plugin/1340641815879885011/react-icons-for-figma
  https://react-icons.github.io/react-icons/

- ChakraUI
  バージョン：2.8.2
  ※ ArkUI+PandaCSSと選択
  シンプルめなUIコンポーネント
  Figma拡張もある
  MUIよりパーツは少なめなため複雑な構成は自力で書く必要がある
  v3.0ではArkUIとPandaCSSを取り込んだ形式になるらしい
  https://v2.chakra-ui.com/

## フォルダ構成

app配下はルーティングに集中
コンポーネントはすべてappの外側に置くことで他ページでも再利用しやすくする

## コンポーネント

静的書き出しをする場合は全部ClientComponentでもよさそう
今後のことを考えるならServerComponentとClientComponentを分けたほうがよい
