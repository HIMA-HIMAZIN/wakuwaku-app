"use client";

import Image from "next/image";
import Link from "next/link";
import "./Card.css";

import Checkbox from '@mui/material/Checkbox';

import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
type CardProps = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  updated_at: string;
};
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
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
          <Checkbox
            {...label}
            className="bookmark"
            icon={<BookmarkBorderIcon />}
            checkedIcon={<BookmarkIcon />}
            defaultChecked
            sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
          />        
        </h2>
        <p className="description">{description}</p>
        <p className="date">{time}</p>
      </section>
    </article>
  );
}
