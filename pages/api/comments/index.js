import { comments } from "@/data/comments";

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(comments);
  } else if (req.method === "POST") {
    const { name, comment } = req.body;
    const newComment = {
      id: Date.now(),
      name: name,
      text: comment,
    };
    comments.push(newComment);
    res.status(201).json(newComment);
  }
}
