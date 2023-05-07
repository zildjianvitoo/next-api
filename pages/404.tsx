import Link from "next/link";
import React from "react";

type Props = {};

export default function Page404({}: Props) {
  return (
    <div className="w-full h-[80vh] flex justify-center items-center">
      <h1 className="font-semibold text-3xl">
        404 Page tidak ditemukan silahkan kembali ke{" "}
        <Link href="/" className="text-violet-400 hover:text-violet-600">
          HOME
        </Link>
      </h1>
    </div>
  );
}
