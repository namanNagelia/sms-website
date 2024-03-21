const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const firstPlayer = await prisma.player_INFO.findMany();
  console.log(firstPlayer);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
