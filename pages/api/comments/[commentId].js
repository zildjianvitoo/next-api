import { comments } from "@/data/comments";

export default function handler(req, res) {
  const { commentId } = req.query;
  if (req.method === "GET") {
    const comment = comments.find((comment) => comment.id == commentId);
    res.status(200).json(comment);
  } else if (req.method === "DELETE") {
    const deletedComment = comments.find((comment) => comment.id == commentId);
    const index = comments.findIndex((comment) => comment.id == commentId);
    console.log(index);
    comments.splice(index, 1);
    const newComment = comments.filter(
      (comment) => comment.id != deletedComment.id
    );

    res.status(200).json(newComment);
  }
}
