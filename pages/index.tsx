import Image from "next/image";
import Head from "next/head";
import { GetServerSideProps } from "next";
import { NewsArticle, NewsResponse } from "@/models/NewsArticle";
import Axios from "axios";
import Card from "@/components/Card";
import Alert from "@/components/Alert";
import NewsGrid from "@/components/NewsGrid";

interface HomeProps {
  articles: NewsArticle[];
}

export default function Home({ articles }: HomeProps) {
  return (
    <>
      <Head>
        <title>Breaking news</title>
      </Head>

      <section className="flex flex-col justify-center max-w-full ">
        <div className="flex flex-col mt-32 ">
          <h1 className="text-3xl lg:text-4xl font-bold w-[80%] mx-auto h-full text-gradient">
            Breaking News
          </h1>
          <Alert />
          <NewsGrid articles={articles} />
        </div>
      </section>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const day = new Date().getDate() - 3;
  const month = new Date().getMonth() + 1;

  const validDay = day < 10 ? `0${day}` : day;
  const validMonth = month < 10 ? `0${month}` : month;

  const { data } = await Axios.get<NewsResponse>(
    `https://newsapi.org/v2/everything?q=apple&from=2023-06-14&to=2023-${validMonth}-${validDay}&sortBy=popularity&apiKey=${process.env.NEWS_API_KEY}`
  );
  const { articles } = data;
  return {
    props: {
      articles: articles.slice(45, 58),
    },
  };
};
