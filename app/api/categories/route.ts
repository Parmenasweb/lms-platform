import prisma from "@/lib/db";

export async function GET(req: Request) {
  try {
    const categories = await prisma.category.findMany();
    return Response.json(categories);
  } catch (error) {
    return new Response("Failed to fetch categories", { status: 500 });
  }
}
