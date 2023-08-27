import Image from "next/image";
import Link from "next/link";
import "./Card.css";

type CardProps = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
};

export function Card({ id, title, description, thumbnail }: CardProps) {
  return (
    <article>
      <div className="thumbnail">
        <Image src={thumbnail} alt={title} fill />
      </div>
      <section>
        <h2>
          <Link href={`/${id}`}>{title}</Link>
        </h2>
        <p className="description">{description}</p>
      </section>
    </article>
  );
}
