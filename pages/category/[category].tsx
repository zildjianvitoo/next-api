import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import Axios from "axios";
import { NewsArticle, NewsResponse } from "@/models/NewsArticle";
import NewsGrid from "@/components/NewsGrid";
import Head from "next/head";
import Alert from "@/components/Alert";
import { useRouter } from "next/router";

interface CategoryProps {
  articles: NewsArticle[];
}

export default function Category({ articles }: CategoryProps) {
  const router = useRouter();
  const { category } = router.query;
  return (
    <>
      <Head>
        <title key="title">{category?.toString().toUpperCase()}</title>
      </Head>

      <section className="flex flex-col justify-center max-w-full ">
        <div className="flex flex-col mt-32 ">
          <h1 className="text-3xl lg:text-4xl font-bold w-[80%] mx-auto pb-1 h-full text-gradient">
            Category: {category}
          </h1>
          <Alert message="StaticSideRendering" />
          <NewsGrid articles={articles.slice(15, 28)} />
        </div>
      </section>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const { category } = params;
  const { data } = await Axios.get<NewsResponse>(
    `https://newsapi.org/v2/everything?q=${category}&apiKey=${process.env.NEWS_API_KEY}`
  );
  const { articles } = data;
  return {
    props: {
      articles,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const pathsCategory = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];

  const paths = pathsCategory.map((path) => ({ params: { category: path } }));

  return {
    paths,

    fallback: false,
  };
};
