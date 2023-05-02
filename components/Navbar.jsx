import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

function Navbar() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const handleSignIn = (e) => {
    e.preventDefault();
    signIn("github");
  };

  const handleSignOut = (e) => {
    e.preventDefault();
    setTimeout(() => {
      signOut();
    }, 1000);
    router.push("/");
  };

  return (
    <nav className="header">
      <h1 className="logo">
        <a href="#">NextAuth</a>
      </h1>
      <ul className={`main-nav`}>
        <li>
          <Link href="/">home</Link>
        </li>

        <li>
          <Link href="/blog">Blog</Link>
        </li>
        {!session && status !== "authenticated" && (
          <li>
            <Link href="/api/auth/signin" onClick={handleSignIn}>
              Sign In
            </Link>
          </li>
        )}

        {session && status === "authenticated" && (
          <>
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link href="/api/auth/signout" onClick={handleSignOut}>
                Sign Out
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
