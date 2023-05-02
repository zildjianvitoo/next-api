import React from "react";
import { getServerSession } from "next-auth/next";
import { getSession } from "next-auth/react";
import { authOptions } from "./api/auth/[...nextauth]";

export default function Blog({ data }) {
  return <h1>{data}</h1>;
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  console.log(session);

  if (!session) {
    return {
      redirect: {
        destination: "/api/auth/signin",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
      data: session && "List of Premium blog posts",
    },
  };
}
