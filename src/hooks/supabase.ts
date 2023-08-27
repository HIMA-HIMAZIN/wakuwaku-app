import type { Post } from "@/types/supabase";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL!;

async function getPosts(): Promise<Post[]> {
  const res = await fetch(`${baseUrl}/api/v0/posts`, { cache: "no-store" });
  if (!res.ok) throw new Error(`${res.status}`);
  return res.json();
}

export { getPosts };
