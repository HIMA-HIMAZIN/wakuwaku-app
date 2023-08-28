# 作ってワクワク Blog  日記
## 重要知識
githubで自分のブランチを選択、そこからsyncforkを押してupdateするその後github desktopで更新。

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
なし
### 質問１：

### 解答１：

###　得た知識：
```ts
<Img
    className="compo-image"
    src="/isat.jpg"
    fill
    alt="Document"
/>
```
ではなく[プレースホルダー](https://wa3.i-3-i.info/word118.html)を意識して
```ts
<div className="thumbnail">
    <Image src={image} alt="" fill sizes="100vw" priority />
</div>
```
以上のように書く。

```ts
priority
```

priorityはBoolean型です。  
true の場合、画像は優先度が高いとみvなされ、プリロードされます。  
falseの場合、遅延読み込みは自動的に無効になります。  
デフォルトはfalseです。

h1やh2タグはNext.jsの場合文字の大きさは変わらない。
ではなぜh1,h2タグを使うのかと言うと、多くのサイトの場合見出しのデザインはサイト内全て共通として表示するのでglobals.cssでh1,h2に関しての設定をするためである。
## 2023 / 8 / 25

### 進捗 :
コードの解読
## 2023 / 8 / 26

### 進捗 :
コード解読に関しての知識の共有
### 得た知識

.env.local ファイルは、Next.js プロジェクトなどの環境で使用される場合に、クライアントサイドには公開されてはいけない機密情報（API キー、トークン、パスワードなど）を含む環境変数を設定するためのファイル

utilsフォルダではfoldUUIDを16進数にしたり、文字変更をして短くしている。

types.supabase.d.tsでは以下のようにタイプ宣言をしている。
しかしこれらは予想でしかなく、入れ物をこちら側で作っていると言うことを念頭に置きながら思考する必要がある。
```ts
interface Post {
    id: string;
    updated_at: string;
    title: string;
    content: string;
    thumbnail: string;
  }
  
  export type { Post };
  
```

## 2023 / 8 / 26

### 進捗 :
解読をしたコードを元にアレンジをし、各CSSが何に対応しているかの確認。

## 2023 / 8 / 27

### 進捗 :
cssの変数設定に関してと、今後のための「ここに行く」コンポーネントの下書き作成

## 2023 / 8 / 27

### 進捗 :
dialoginfoコンポーネントの修正追加

### 質問　　：
コンポーネント表示時にコンポーネント以外を灰色にする方法

思考回路　：

コンポーネント全体の背景を灰色にした結果コンポーネント内に色が反映されてしまう。

### 解答　：
```ts
<div className={styles.screen}>
  <div className={styles.container}>
  <div className={styles.main}>{children}</div>
</div>
</div>
```
```scss

.screen {
  @apply h-full w-screen backdrop-brightness-75  flex  m-auto inset-0 fixed;
}

.container {
  max-width: 22rem;
  border: 5px solid var.$blue;

  @apply inset-0 h-fit m-auto p-5
    rounded-3xl backdrop-blur bg-white;
}

```

以上のように"backdrop-brightness-75"これ使えば！OK!

relativeとabsoluteを忘れずに意識することが重要。

## 2023 / 8 / 28

### 進捗 :
![alt text](/public/nannno.jpeg)

### 反省 :

知識がないと調べるにも調べるためのキーワードが分からない。
キーワードを思いついても記事がない。
フルコミットをするよりも、午前から午後までドキュメントを読んだり、それを元に下書きをWAKUWAKU-APPで作って、夜に下書きを元に本番を書いた方がいい説ある。今からドキュメントや記事を読んで明日から、コンポを作ってみる。毎日久木君に質問をするべきではない、シンプルに説明が分かりやすいから怠惰になってしまう。
エラーも読めるようにならなければならない。

## キーワード　：
### priority　
priorityはBoolean型です。  
true の場合、画像は優先度が高いとみvなされ、プリロードされます。  
falseの場合、遅延読み込みは自動的に無効になります。  
デフォルトはfalseです。
```ts
priority
```
以上を追加するとpriority= trueと同じ意味になる。
### preload(プリロード)
先取り、先読み

### "next/image"
next/image はサーバーサイドで画像のサイズを最適化してくれるもの。  
癖が強い（詳細は不明）

### "use client"
use clientは、クライアントの処理行いたい場合のみ使用  
※極力使用しないように頑張る！！！

### LCP 
Largest Contentful Paintの略で、ページをいくつかのブロック要素で分けた中で最も読み込み容量が大きい要素のこと

### "line-clamp-2"
コンテンツの行数を制限します。今回の場合は二行に制限したいのでline-clamp-2と書く。

### "section"
まとめる時使う

### "Layout / page / template の関係性

![alt text](/public/IMG_0085.png)

Layoutは合流地点
TemplateはPageに共通している部分　ヘッター/フッター
Pageはそれぞれ違う表示に関して。


### "fetch"
アクセスをする

### "await"
非同期処理　通常並列処理をしているが、awaitを書くと指定した処理を待たせることができる。
親要素には必ず"async"を記入する必要がある。

### "json()"
括弧の中のものを以下のようにして渡す。
ある意味テンプレートのようなものだと思えばいい
![alt text](/public/json.png)

" || "
```ts
thumbnail={post.thumbnail || "mine.jpg"}
```
[演算子について](https://zenn.dev/fujii0112/articles/78fe69c4c30731)

文字列が入れば文字列が優先される。
```ts
post.thumbnail
```
がnull、何も入っていなかった場合に"mine.jpg"が表示される。
いわゆるデフォルトの値を設定できる。

### "Promise"
非同期処理
```ts
async function getPosts(): Promise<Post[]> {
  const res = await fetch(`${baseUrl}/api/v0/posts`, { cache: "no-store" });
  if (!res.ok) throw new Error(`${res.status}`);
  return res.json();
}
```
以上のコードを簡単にすると
```ts
sync function getPosts(): Promise<Post[]> {}
```
{}内の処理が終わるまで待つ。と言うこと。

### [React Hookに関して](https://qiita.com/seira/items/2fbad56e84bda885c84c)
基礎知識

### [Primsaとは](https://zenn.dev/smish0000/articles/f1a6f463417b65)

- オープンソースのORM(Object-relational mapping)
- Node上のアプリケーションで直接DBに接続し、クエリー発行が可能
- RDB周りの処理をより簡単に行えるようにし、開発者の生産性を向上させることを目的に開発
- Next.jsアプリケーションでDBを扱う際に特に有用
- Schemaファイルから型情報が生成され、クエリ結果がタイプセーフになる

[詳しくは](https://zenn.dev/smish0000/articles/f1a6f463417b65)

### クエリーとは
そもそものSQLとクエリの違い
- SQL：データベースを操作するための言語
- クエリ：SQLを実行したときにデータベースに送る命令文

具体例　：　日本語で「処理しなさい」と命令をした場合の、命令文である「処理しなさい」という言葉がクエリ、日本語のことがSQLである

### クエリするとは
ソフトウェアに対するデータの問い合わせや要求などを一定の形式で文字に表現すること

### tailwindCSSに関しての捉え方

上がcss 下がtailwindCSS　

```scss
.box{
  .bg-white{
    background-color: white ;
  }
}
```
```scss
.box{
    @apply bg-white  
}
```

これ同じことやってます。

