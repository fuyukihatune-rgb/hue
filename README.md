# Hue

いくつかの質問に答えると、いまのあなたの心の状態を「**色相**」という色で映し出す、自己内省のための小さな道具。
澄んでいるか、少し濁っているか。結果はカード画像にして X などにシェアできます。

- ビルド不要・1ファイル完結（`index.html` + `manifest.json` + `sw.js`）
- 記録はすべて端末内（localStorage キー `hue_v1`）。広告・追跡・ログインなし。オフライン対応（PWA）
- 7問 → 計測演出 → 色相（澄明〜深濁）＋濁度指数 → **結果カード画像を生成して Web Share / X 共有**
- 任意で毎日記録 → 月のカラーグリッドで振り返り
- 濁っていたら Still（呼吸）/ Anchor（思考の整理）へ導線

## 注意

このアプリは**娯楽・セルフチェック**のためのもので、医療診断ではありません。また、ある作品から着想を得た**非公式のオマージュ**であり、特定の作品・企業の公式なものではなく、権利者とも一切関係ありません。固有の名称・ロゴ・画像等は使用していません。

## アイコンの作り直し

```sh
convert -background none icons/icon.svg -resize 192x192 icons/icon-192.png
convert -background none icons/icon.svg -resize 512x512 icons/icon-512.png
```

## デプロイ（Cloudflare Pages）

1. このリポジトリを Cloudflare Pages に接続
2. ビルド設定：フレームワークなし／ビルドコマンド空欄／出力ディレクトリ `/`
3. カスタムドメイン（例：`hue.xdcyw.net`）を割り当て

© 2026 田中志 / Ataraxia Works

## アップデート履歴

## 2026-06-16
- OGタグ追加（og:title / og:description / og:image / og:url / og:type / twitter:card）
- キーボードアクセシビリティ改善（:focus-visible スタイル追加）
- manifest.json 整備（scope・categories・orientation 修正）
