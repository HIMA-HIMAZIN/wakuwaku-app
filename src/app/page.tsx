import './page.css'
import Img from 'next/image'
import { type } from 'os'
import { Article } from "@/components/article";

export default function Home() {
  return (
    <>
      <div className='blog-home'>
        <header>
          <h1 className='name' >HIMA-HIMAZIN</h1>
          <div className='image-icon'>
            <Img
              src="/home.svg"
              width={40}
              height={40}
              alt="HOME"
            />
            <Img
              src="/document.svg"
              width={40}
              height={40}
              alt="Document"
            />
            <Img
              src="/book.svg"
              width={40}
              height={40}
              alt="Book"
            />
            <Img
              src="/settings.svg"
              width={40}
              height={40}
              alt="Setting"
            />
          </div>
          
        </header>
        <main>
          <h1 className = "title">Blog</h1>
          <div className="blog">
            <Article  title="こんにちは" synopsis="けつの穴からオタマジャクシが出てきたんですけど集合体恐怖症だった自分はその場で失神してしまいました。" date="2023/08/22" />
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
          </div>
        </main>
        <footer>
          <div className='member'>
            <Img
              src="/kato.jpg"
              width={150}
              height={150}
              alt="kato"
              className='mamber-icon'
            />
            <Img
              src="/kassi1.jpg"
              width={150}
              height={150}
              alt="kassi"
              className='mamber-icon'
            />
            <Img
              src="/mine.jpg"
              width={150}
              height={150}
              alt="mine"
              className='mamber-icon'
            />
            <Img
              src="/hima.jpg"
              width={150}
              height={150}
              alt="hima"
              className='mamber-icon'
            />
            <Img
              src="/hisa.jpg"
              width={150}
              height={150}
              alt="hisa"
              className='mamber-icon'
            />
          
          </div>
          <div className='note'>※大山の写真  募集中！！！！</div>
          <div className="next">Next</div>
          
        </footer>
      </div>
    </>
  )
}
