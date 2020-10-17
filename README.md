# InVision Screens List Bookmarklet

## 概要
InVisionの共有URLからスクリーン（ページ）の一覧をすべて取得して整形するブックマークレットです。

## 特徴
- プロジェクト名、ディバイダー名、スクリーン名、スクリーンURLを取得して整形します。
- 各項目の接頭辞、接尾辞を変更可能です。

例：
```
---
# Project Title

## Divider Title 1

Screens Title A
https://projects.invisionapp.com/share/xxxxxxxxxxx#/000000000

Screens Title B
https://projects.invisionapp.com/share/xxxxxxxxxxx#/000000000

## Divider Title 2

Screens Title A
https://projects.invisionapp.com/share/xxxxxxxxxxx#/000000000

Screens Title B
https://projects.invisionapp.com/share/xxxxxxxxxxx#/000000000
---
```

## 使い方
- 不要なブックマークのアドレスを[main.min.js](./main.min.js)のコードに書き換える <sup><a name="1">[^1](#notes_1)</a></sup>
- InVisionのプロジェクトを開く
- ヘッダーにある「Share」ボタンを押す
- モーダル下部の「public share link」か「Link Settings」リンクを押して共有URLを発行する
- 共有URLにアクセスし、画面右下の「Screens」ボタンを押す
- URLが`https://projects.invisionapp.com/share/[Share ID]]#/screens?browse`になっている事を確認する
- ブックマークレットを実行する

各項目の接頭辞、接尾辞を変更したい場合は、[main.js](./main.js)を書き換えてブックマークレット化してください。

## 開発環境
- MacOS 10.15.6
- Safari 14.0
- jQuery 2.2.4

Mac OSのSafariで動作確認済みです。

## 注意事項
InVisionの仕様変更により、動作しなくなる可能性があります。

## 脚注
<a name="notes_1">[^1](#1)</a>: 速度を重視して[Closure Compiler](https://closure-compiler.appspot.com/home)でコードの圧縮・最適化をしています。  

## 作者
- [GitHub](https://github.com/kskg)
- [Twitter](https://twitter.com/kskg)

ご意見、ご感想はお気軽にください。開発の参考にさせていただきます🤓

## ライセンス
MIT