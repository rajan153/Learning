import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // ... you will write your Prisma Client queries here
  const response = await prisma.post.findMany({
    take: 1, //how many posts you wanna show in signle page
    skip: 0, //it's offset, 2nd page will show posts from 2nd post (How many posts you wanna skip)
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
