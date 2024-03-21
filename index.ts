const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// POST function
async function postNews(newsData: any) {
  const newNews = await prisma.news.create({
    data: newsData,
  });
  console.log(newNews);
  return newNews;
}

// GET function
async function getNews(newsId: number) {
  const news = await prisma.news.findUnique({
    where: {
      News_Id: newsId,
    },
  });
  console.log(news);
  return news;
}

// DELETE function
async function deleteNews(newsId: number) {
  const deletedNews = await prisma.news.delete({
    where: {
      News_Id: newsId,
    },
  });
  console.log(deletedNews);
  return deletedNews;
}

// Usage
const newsData = {
  News_Id: 1,
  News_Match_Id: 2,
  News_Team_Id: 3,
  News_Player_Id: 4,
  News_Name: "Sample News",
};

getNews(1)
  .then(() => deleteNews(1))
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
