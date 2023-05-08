import Card from "@/components/Card";
import NewsGrid from "@/components/NewsGrid";
import { NewsArticle } from "@/models/NewsArticle";
import Axios from "axios";
import Head from "next/head";
import { FormEvent, useState, useEffect, useRef } from "react";

type Props = {};

export default function SearchNews({}: Props) {
  const [searchResults, setSearchResults] = useState<NewsArticle[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const searchQuery: string = e.target[0].value;
    if (searchQuery) {
      try {
        setLoading(true);
        const { data } = await Axios.get<NewsArticle[]>(
          `/api/search-news?q=${searchQuery}`
        );
        setSearchResults(data.slice(0, 15));
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <>
      <Head>
        <title>Search News</title>
      </Head>
      <main className="flex ">
        <section className="mt-32 flex flex-col items-center justify-center w-full px-8">
          <div className="flex flex-col  mx-auto w-full gap-y-4">
            <h1 className="w-[70%] lg:mx-auto text-3xl lg:text-4xl font-bold mx-auto text-gradient">
              Search News
            </h1>
            <form
              className="mx-auto w-full lg:max-w-[70%]"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                placeholder="contoh: politik,olahraga"
                className="mx-auto py-7 input  w-full bg-[#242933] placeholder:opacity-40"
              />

              <button
                className="btn mt-4 w-24"
                type="submit"
                disabled={isLoading}
              >
                cari
              </button>
            </form>
            <NewsGrid articles={searchResults} />
          </div>
        </section>
      </main>
    </>
  );
}

// export async function getStaticProps() {
//   const { data } = await Axios.get<NewsArticle[]>(
//     "localhost:3000/api/search-news"
//   );
//   console.log(data.slice(0, 9));
// }
