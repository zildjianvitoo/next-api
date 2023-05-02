import React from "react";
import { signIn, useSession } from "next-auth/react";

export default function Dashboard() {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      signIn();
    },
  });

  if (!session) {
    return null;
  }

  return (
    <>
      <h1>Login as {session.user.name}</h1>
      <h3>Your email {session.user.email}</h3>
    </>
  );
}
