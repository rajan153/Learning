import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  log: [
    {
      emit: "event",
      level: "query",
    },
  ],
});

async function main() {
  // ... you will write your Prisma Client queries here
  const response = await prisma.user.findMany({
    take: 2,
  });
  console.log(response);
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

prisma.$on("query", async (e) => {
  console.log(`${e.query} ${e.params}`);
});
