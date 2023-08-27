import { Card } from "@/components/cards/Card";
import { getPosts } from "@/hooks/supabase";
import { foldUUID } from "@/utils/converter";
import type { Post } from "@/types/supabase";

export default async function Home() {
  const posts = (await getPosts()) as Post[];

  return (
    <main>
      <div className="grid auto-rows-fr grid-cols-1 gap-5 md:grid-cols-3">
        {posts.map((post) => (
          <Card
            key={post.id}
            id={foldUUID(post.id.toString())}
            title={post.title}
            description={post.content}
            thumbnail={post.thumbnail || "mine.jpg"}
          />
        ))}
      </div>
    </main>
  );
}
