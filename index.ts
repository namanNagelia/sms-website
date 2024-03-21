const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function getFirstFiveRows() {
  const rows = await prisma.Player_Roster_Phase1.findMany({
    take: 5,
  });
  console.log(rows);
  return rows;
}

getFirstFiveRows()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
