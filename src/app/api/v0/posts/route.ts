import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET() {
  const { data, error } = await supabase.from("posts").select("*");

  if (error) return NextResponse.error();

  return NextResponse.json(data);
}
