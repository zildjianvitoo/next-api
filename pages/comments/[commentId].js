import { comments } from "@/data/comments";
import Link from "next/link";
import Header from "@/components/Header";
import Head from "next/head";

export default function CommentDetail({ comment }) {
  return (
    <>
      <Head>
        <title>Detail comment {comment.id}</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
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

  if (!comment) {
    return {
      notFound: true,
    };
  }

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

CommentDetail.getLayout = function getLayout(page) {
  return (
    <>
      <Header />
      {page}
    </>
  );
};
