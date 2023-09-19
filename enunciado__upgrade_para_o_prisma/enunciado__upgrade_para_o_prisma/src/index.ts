import prisma from "database/prismadb";


(async () => {
  const posts = await prisma.posts.findMany();
  console.log("Posts encontrados no banco:", posts);
})();