import { comments } from "@/data/comments";
import Link from "next/link";

export default function CommentDetail({ comment }) {
  return (
    <>
      <h1>
        {comment.id} {comment.name}
      </h1>
      <h2>{comment.text}</h2>
      <Link href="/comments">
        <p>back to list of comment</p>
      </Link>
    </>
  );
}

export async function getStaticProps({ params }) {
  const { commentId } = params;
  const comment = comments.find((comment) => comment.id == commentId);

  return {
    props: {
      comment,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { commentId: "1" } },
      { params: { commentId: "2" } },
      { params: { commentId: "3" } },
    ],
    fallback: "blocking",
  };
}
