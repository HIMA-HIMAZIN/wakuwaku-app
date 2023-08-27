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
      <article className ={color} >
        <div className="button" >
            <Link href={`/${id}`}>{text}</Link>
        </div>
      </article>
    );
};

