import { Card } from "@/components/cards/Card";
import {Button} from "@/components/buttons/Button";
import { getPosts } from "@/hooks/supabase";
import { foldUUID } from "@/utils/converter";
import  { CustomizedDialogs } from "@/components/customization/Customization";
import { BasicButtons} from "@/components/uibutton/uibutton";
import type { Post } from "@/types/supabase";
import "./page.css";

export default async function Home() {
  const posts = (await getPosts()) as Post[];

  return (
    <div className="box">
      <header className="header">
        <div className="title">Supabase Blog</div>
        <div className="subtitle">新着記事</div>
      </header>
      <main className="main">
        <div className="compo">
          {posts.map((post) => (
            <Card
              key={post.id}
              id={foldUUID(post.id.toString())}
              title={post.title}
              description={post.content}
              thumbnail={post.thumbnail || "/shingeki_naga.png"}
              updated_at={post.updated_at}
            />
          ))}
        </div>
        <div className= " flex m-10 grid-cols-2 gap-5 ">
          <Button id="" text="キープ" color="red"/>
          <Button id="" text="行く！！！！" color="god"/>
        </div>
        <div>
          <CustomizedDialogs/>
          <BasicButtons/>
        </div>
      </main>
      <footer className="footer">
        <p>© 2023 Supabase Blog</p>
      </footer>
    </div>
  );
}
