# プロジェクト概要
ファイルサーバーにしているRaspberry Piの、余っているリソースの有効活用の一つとして、繋いだモニタ現在時刻と週間天気予報を表示するだけのページ

# 機能
- 現在地を指定すると、その地点の習慣天気予報を表示してくれる
- 現在時刻（実行端末依存）を表示してくれる
- 背景に、犬の画像が表示されるけどほぼ見えない

# 技術スタック
## Open Meteo (Weather Forecast API)
-  [https://open-meteo.com/en/docs/](https://open-meteo.com/en/docs/)
- 天気情報
- 世界中の天気を返してくれるAPI
- ライセンス表示 [Weather data by Open-Meteo.com](https://open-meteo.com/)
## Open Meteo (Geocoding API) 
- [https://open-meteo.com/en/docs/geocoding-api/](https://open-meteo.com/en/docs/geocoding-api/)
- 緯度経度検索
- 地名からその緯度経度を返してくれるAPI
- ライセンス表示 [Weather data by Open-Meteo.com](https://open-meteo.com/)
## DOG CEO
- [https://dog.ceo/](https://dog.ceo/)
- 背景画像
- 犬の写真をランダムに返してくれるAPI
## Node.js
- https://nodejs.org/en
## Next.js / React.js
- https://nextjs.org/
- https://ja.react.dev/
## useInterval
- https://usehooks-ts.com/react-hook/use-interval
- setIntervalをuseEffect使って実行するの結構面倒なんだけどそれをいい感じにしてくれるライブラリ
## LocalStorage
- 天気予報地点の保存とかに利用

# Setup
## Install
```bash
$ nodenv install 20.6.0
$ npm install
```
## Development
```bash
$ npm run dev
```
Open [http://localhost:3000](http://localhost:3000) 

# 使用方法
## 天気を表示する地点の設定
1. 右下の歯車アイコンをクリックする
2. 設定画面の２行目にある「Weather Spot」の入力欄に、アルファベットで地名を入力する
3. 「Search」ボタンをクリックする
4. ちょっと待つと座標リストが表示されるので、目的の地点をクリックする
5. 設定画面を閉じると天気予報が表示されいてる

# デモ
- Netlify にて公開中
- [https://rassdashboard.netlify.app/](https://rassdashboard.netlify.app/)

# コントリビューション
- ご意見・ご感想
  - ほめて箱まで [https://www.mottohomete.net/kkotaro0111](https://www.mottohomete.net/kkotaro0111)
  - ほめて！
- ご要望
  - Issueまで [https://github.com/kkotaro0111/rasp-dashboard/issues](https://github.com/kkotaro0111/rasp-dashboard/issues)
- プルリク
  - ご自由にどうぞ [https://github.com/kkotaro0111/rasp-dashboard/pulls](https://github.com/kkotaro0111/rasp-dashboard/pulls)

# ライセンス
- Copyright (c) 2024 Kotaro Kawashima
- [The MIT License – Open Source Initiative](https://opensource.org/license/mit)
  - 日本語訳（参考） [licenses\.opensource\.jp/MIT/MIT\.html](https://licenses.opensource.jp/MIT/MIT.html)
