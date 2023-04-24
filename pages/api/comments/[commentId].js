import { comments } from "@/data/comments";

export default function handler(req, res) {
  const { commentId } = req.query;
  if (req.method === "GET") {
    const comment = comments.find((comment) => comment.id == commentId);
    res.status(200).json(comment);
  } else if (req.method === "DELETE") {
    const index = comments.findIndex((comment) => comment.id == commentId);

    comments.splice(index, 1);
    const newComment = comments.filter((comment) => comment.id != commentId);
    res.status(200).json(newComment);
  }
}
