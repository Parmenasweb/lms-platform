// pages/api/course.ts
import prisma from "@/lib/db"; // Adjust the import based on your prisma setup

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const categoryId = searchParams.get("categoryId");

  try {
    const courses = await prisma.course.findMany({
      where: {
        ...(categoryId && { categoryId: String(categoryId) }),
      },
      include: {
        category: true,
        chapters: true,
      },
    });

    return Response.json(courses);
  } catch (error) {
    return new Response("Failed to fetch courses", { status: 500 });
  }
}
