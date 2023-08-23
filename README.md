# 作ってワクワク Blog  日記
## 2023/8/22

### 進捗  :

環境構築  

### 質問１：

 globals.cssがlayout.tsxと繋がっているという事を考えるとpage.tsxのcssはpage.cssとして加えるのか。

### 解答１：

加えていつも通り書く。

### 原因 : 

1. globals.cssの役割を理解していなかった。

### 得た知識 :

1. globals.cssは、ウェブサイトやアプリケーション内の異なるページやコンポーネント全体に影響を与える、共通のスタイルやレイアウトのことを書く場所。

## 2023 / 8 / 23

### 進捗  :

大枠のhtml.cssを作成。
コンポーネント作成開始

### 質問１：

githabにレポジトリが反映されてない

### 解答１：

vscode上でソース管理を選択し、コミットメッセージを記入した後、コミットするとgithabにレポジトリが作られる。

### 原因１：

知らなかった。。。

### 質問２：

publicに入っている四つの画像をheader内に表示したいが、 
```ts
<img src = “./home.svg”/>
``` 
でやっても正しく表示されず、  

```ts
import Homes from "home.svg"
```
とすると,モジュールが見つからないので原因を知りたい。

### 解答２：  

```ts
import Img from 'next/image'

<Img
    src="/home.svg"
    width={500}
    height={500}
    alt="HOME"
/>
```

上記のようにimportしたImgを使って

```ts
src,width,height,alt　
```
を設定すると表示できる

### 原因２：
```ts
import Img from 'next/image'

<Img
    src="/home.svg"
/>
```
上記のように
```ts
width,height,alt　
```
を設定していなかった。

### 質問３：
```ts
import Img from 'next/image'

<Img
    src="/home.svg"
    width={500}
    height={500}
    alt="HOME"
/>
```
コンポーネント作成時にpageと同様、imgは上記のように書くのですか？

###　解答３：

コンポーネントとpageはどちらもリアクトコンポーネントなので中身はほぼ一緒と考えて良く、上記のコードと同じく書けば良い。

### 原因３：

pageとcomponentは別物だと認識していた。


### 質問４：

```ts
<Img
    src="/isat.svg"
    width={500}
    height={500}
    alt="ISAT"
/>
```
コンポーネント内で使用する画像をコンポーネントの幅最大FULLとして設定したいが、
```ts
width={500}
height={500}
```
以上のコードのように{}内に何かしら数値を入れなければならない、  

```ts
width={full}
height={500}

width={100%}
height={500}

width= full
height={500}
```
以上のように書いてしまうとエラーが起きてしまう。  
この場合どのようにしてコンポーネントの幅に合わせるのか。

### 解答４：

```ts
<Img
    src="/isat.svg"
    fill
    alt="ISAT"
/>
```
```css
position: "relative";
```
親要素のcssに以上のコードを入れた場合のみfillと書ける。
これが親要素の枠に合わせるという意味。

### 得た知識

[Next.jsの<image>について](https://nextjs.org/docs/pages/api-reference/components/image)

```ts
"next/image"
```
next/image はサーバーサイドで画像のサイズを最適化してくれるもの。  
癖が強い（詳細は不明）

```ts
"use client";
```
use clientは、クライアントの処理行いたい場合のみ使用  
※極力使用しないように頑張る！！！

コンポーネントを作成する際も<"next/image">は使用できる  
コンポーネントとpageはどちらもリアクトコンポーネントなので中身は一緒。 
layoutもリアクトコンポーネントだが、特別な機能を与えられている。

### 明日聞く内容　自由に書くところ

なんかコンポーネントのcssが読み込まれないお。

fillを書いて親要素の幅に合わせようとしたら、画面全体多分bodyに合わせられてしまったお。

なんか、、、う、、、うん、、、ん〜〜

![alt text](/public/8:23.1.png)
![alt text](/public/8:23.2.png)
## 2023 / 8 / 24

### 進捗 :

### 質問１：

### 解答１：

### 原因１：
