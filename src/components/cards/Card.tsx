import Image from "next/image";
import Link from "next/link";
import "./Card.css";

type CardProps = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  updated_at: string;
};

export function Card({ id, title, description, thumbnail ,updated_at}: CardProps) {
  const date = updated_at.substring(10, 0);
  const time = date.replace(/-/g, "/");

  return (
    <article>
      <div className="thumbnail">
        <Link href={`/${id}`} className="link">
          <Image src={thumbnail} alt={title} fill />
        </Link>
      </div>
      <section>
        <h2>
          <Link href={`/${id}`}>{title}</Link>
        </h2>
        <p className="description">{description}</p>
        <p className="date">{time}</p>
      </section>
    </article>
  );
}
