import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const id = url.searchParams.get("id"); // Get category from query params

  try {
    const comments = await prisma.comment.findMany({
      where: { postId: String(id) }, // Filter by category if provided
      orderBy: { content: "desc" },
    });
    return NextResponse.json(comments);
  } catch (error) {
    console.error("Error fetching posts:", error);
    return NextResponse.json(
      { error: "Error fetching posts" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const comment = await prisma.comment.create({
      data: {
        id: body.id,
        author: body.author,
        content: body.comment,
        date: body.date,
        postId: body.postId,
      },
    });
    return NextResponse.json({ message: comment }, { status: 200 });
  } catch (error) {
    console.error("Error creating post:", error);
    return NextResponse.json({ error: "Error creating post" }, { status: 500 });
  }
}
