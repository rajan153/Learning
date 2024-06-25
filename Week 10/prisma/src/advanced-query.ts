import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // ... you will write your Prisma Client queries here
  const response = await prisma.user.findMany({
    where: {
      email: {
        endsWith: "gmail.com",
      },
      posts: {
        some: {
          published: true,
        },
      },
    },
    include:{
        posts:{
            where:{
                published:true,
            }
        }
    },
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
