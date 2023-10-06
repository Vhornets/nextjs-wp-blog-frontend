import { NextResponse } from "next/server";
import { getPosts } from "utils/getPosts";

export async function POST(request) {
  const req = await request.json();
  const posts = await getPosts(req.category || "", req.page);

  return NextResponse.json(posts);
}
