const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function insertCategories(categories: { name: string }[]) {
  try {
    await prisma.category.createMany({
      data: categories,
      skipDuplicates: true,
    });
    console.log("Categories inserted successfully");
  } catch (error) {
    console.error("Error inserting categories: ", error);
  }
}

async function main() {
  const categories = [
    { name: "repair" },
    { name: "Hardware" },
    { name: "software" },
    { name: "Data recovery" },
    { name: "DevOps" },
    { name: "Cybersecurity" },
    { name: "Data Science" },
  ];

  try {
    await insertCategories(categories);

    console.log("successfully seeded categories");
  } catch (error) {
    console.error("Error seeding the categories: ", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
