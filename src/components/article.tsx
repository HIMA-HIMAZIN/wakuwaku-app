import { useRouter } from "next/navigation";
import Img from 'next/image'
import styles from "@/styles/article.module.css";

type ArticleProps = {
  title : string;
  synopsis :string ;
  date : number | string  ;
  children?: React.ReactNode;
};

export function Article({ title,synopsis,date, children}: ArticleProps) {

  return (
    <div className="news" >
      <Img
        className="compo-image"
        src="/isat.jpg"
        width={150}
        height={150}
        alt="Document"
      />
      <div className="compo-title">
        {title}
      </div>
      <div className="synopsis">
        {synopsis}
      </div>
      <footer className="compo-footer">
        <div className="date">
          {date}
        </div>
      </footer>
    </div>
  );
}
