const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const row = await prisma.showcases.findUnique({
    where: {
      id: 30,
    },
  });
  console.log(row);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
