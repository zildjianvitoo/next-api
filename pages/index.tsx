import Image from "next/image";
import Head from "next/head";
import { GetServerSideProps } from "next";
import { NewsArticle, NewsResponse } from "@/models/NewsArticle";
import Axios from "axios";
import Card from "@/components/Card";
import Alert from "@/components/Alert";

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
          <div className="flex px-4 flex-wrap justify-center gap-x-10 ">
            {articles.map((article: NewsArticle) => {
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
        </div>
      </section>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const { data } = await Axios.get<NewsResponse>(
    `https://newsapi.org/v2/everything?q=apple&from=2023-05-03&to=2023-05-03&sortBy=popularity&apiKey=${process.env.NEWS_API_KEY}`
  );
  const { articles } = data;
  return {
    props: {
      articles: articles.slice(45, 58),
    },
  };
};
