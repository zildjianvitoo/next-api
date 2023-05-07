import React from "react";
import { NewsArticle } from "@/models/NewsArticle";
import Card from "./Card";

interface NewsGridProps {
  articles: NewsArticle[];
}

export default function NewsGrid({ articles }: NewsGridProps) {
  return (
    <div className="flex px-4 flex-wrap justify-center gap-x-10 ">
      {articles?.length === 0 && <p>Tidak ada berita</p>}
      {articles
        ?.filter((article: NewsArticle) => article.urlToImage !== null)
        .map((article: NewsArticle) => {
          return (
            <Card
              key={article.title}
              title={article.title}
              image={article.urlToImage}
              url={article.url}
              description={article.description}
              publishedAt={article.publishedAt}
            />
          );
        })}
    </div>
  );
}
