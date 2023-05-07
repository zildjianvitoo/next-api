import { NewsArticle, NewsResponse } from "@/models/NewsArticle";
import Axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const searchQuery = req.query.q?.toString();
  if (!searchQuery) {
    return res.status(400).json({ error: "Input tidak boleh kosong" });
  }

  const { data } = await Axios.get<NewsResponse>(
    `https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${process.env.NEWS_API_KEY}`
  );
  const { articles } = data;
  return res.status(200).json(articles);
}
