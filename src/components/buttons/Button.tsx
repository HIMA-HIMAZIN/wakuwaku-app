import Link from "next/link";
import "./Button.css";
import { type } from "os";

type ButtonProps = {
    id: string;
    text: string;
    color: string;
};

export function Button({ id, text , color }: ButtonProps) {
    return (
   
        <article className = {color} >  
          <Link className = "text" href={`/${id}`}>{text}</Link>
        </article>
    );
};

