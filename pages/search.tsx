import { NewsArticle, NewsResponse } from "@/models/NewsArticle";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { GetStaticProps } from "next";
import { FormEvent } from "react";
import Axios from "axios";
import Card from "@/components/Card";

interface SearchNewsPageProps {
  articless: NewsArticle[];
}

export default function SearchNewsPage({ articless }: SearchNewsPageProps) {
  const [searchResults, setSearchResults] = useState<NewsArticle[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [input, setInput] = useState("");

  useEffect(() => {
    const fetchArticles = async () => {
      const res = await fetch(
        `https://newsapi.org/v2/everything?q=apple&from=2023-05-03&to=2023-05-03&sortBy=popularity&apiKey=ef07f09ec4ae4d66a2227dc810e7748b`
      );
      setLoading(true);
      const data = await res.json();
      setLoading(false);
      const { articles } = data;
      let newsArticles = [];
      newsArticles = articles?.filter((art: any) => {
        return art.title?.toLowerCase().includes(input.toLowerCase());
      });

      setSearchResults(newsArticles?.slice(0, 9));
    };
    fetchArticles();
  }, [input]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const inputValue = e.target[0].value;
    console.log(input);
    setInput(inputValue);
  };
  return (
    <>
      <Head>
        <title>Search news</title>
      </Head>
      <main className="flex ">
        <section className="mt-32 flex flex-col items-center justify-center w-full px-8">
          <div className="flex flex-col  mx-auto w-full gap-y-4">
            <h1 className="w-[70%] lg:mx-auto text-3xl lg:text-4xl font-bold mx-auto text-gradient">
              Search news
            </h1>
            <form
              className="mx-auto w-full lg:max-w-[70%]"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                placeholder="Cari berita"
                className="mx-auto py-7 input  w-full bg-[#242933]"
              />
              <button
                className="btn mt-4 w-24"
                type="submit"
                disabled={isLoading}
              >
                cari
              </button>
            </form>
            <div className="flex px-4 flex-wrap justify-center gap-x-10 ">
              {searchResults.length === 0 && <h1>Data tidak ditemukan</h1>}
              {searchResults.map((article: NewsArticle) => {
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
      </main>
    </>
  );
}

// export const getStaticProps: GetStaticProps<SearchNewsPageProps> = async () => {
//   const { data } = await Axios.get<NewsResponse>(
//     `https://newsapi.org/v2/everything?q=apple&from=2023-05-03&to=2023-05-03&sortBy=popularity&apiKey=${process.env.NEWS_API_KEY}`
//   );
//   const { articles } = data;
// };
