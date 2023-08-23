import './page.css'
import Next from 'next/image'
import { type } from 'os'

export default function Home() {
  return (
    <>
      <div className='blog-home'>
        <header>
          <h1 >HIMA-HIMAZIN</h1>
         </header>
        <main>
          <h1 className = "title">Blog</h1>
          <div className="blog">
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
          </div>
        </main>
        <footer>
          <div className="next">Next</div>
        </footer>
      </div>
    </>
  )
}
