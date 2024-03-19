import React from "react";
import NewsArticles from "@/components/homePage/newsArticles";

const newsData = [
  {
    title: "Golden Bears Add Two Signees in 2023 Class",
    date: "2022-11-09",
    premium: false,
    imageURL:
      "https://d195hqvwre713v.cloudfront.net/images/2022/11/9/2223MBB-NSD-Twitter-both_copy_LogDa.jpg",
    redirectURL:
      "https://calbears.com/news/2022/11/9/mens-basketball-golden-bears-add-two-signees-in-2023-class.aspx",
  },
  {
    title: "USC adds transfer Sheppard, high school guard Bradley",
    date: "Not Provided",
    premium: false,
    imageURL:
      "https://dims.apnews.com/dims4/default/e154906/2147483647/strip/true/crop/3000x2000+0+0/resize/599x399!/quality/90/?url=https%3A%2F%2Fstorage.googleapis.com%2Fafs-prod%2Fmedia%2Fc249631e4aaa49679af3795d27bb0cc3%2F3000.jpeg",
    redirectURL:
      "https://apnews.com/article/sports-mens-college-basketball-college-basketball-southern-california-trojans-mens-basketball-california-c1e9175c6b0a89dc0d533f042473caac",
  },
];

export default function HomePage() {
  console.log(newsData[0].title);
  return (
    <div className="mt-12">
      <h1 className="text-4xl font-dinAlternate text-white text-center underline">
        Newsletter
      </h1>
      <div className="grid grid-cols-2 gap-2 justify-center">
        {Array(4)
          .fill(null)
          .map((_, index) => (
            <div className="justify-center items-center">
              <NewsArticles
                title={newsData[0].title}
                date={newsData[0].date}
                premium={false}
                imageURL={newsData[0].imageURL}
                redirectURL={newsData[0].redirectURL}
              />
            </div>
          ))}
      </div>
    </div>
  );
}
