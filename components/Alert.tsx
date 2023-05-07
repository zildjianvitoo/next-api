import { useRouter } from "next/router";
import React from "react";

type Props = {
  message?: string;
};

export default function Alert({ message = "ServerSideRendering" }: Props) {
  const router = useRouter();
  return (
    <>
      <div className="alert shadow-lg mt-8 w-[80%] mx-auto  ">
        <div>
          <label htmlFor="my-modal-4" className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="stroke-info flex-shrink-0 w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </label>
          <span className="text-xs lg:text-base leading-relaxed">
            Page ini dibuat menggunakan
            <span className="font-semibold"> {message}</span> dari
            <span className="font-semibold"> Next JS</span> +{" "}
            <span className="font-semibold text-gradient">Daisy UI.</span>
            {router.pathname !== "/" && (
              <>
                {" "}
                Dan data yang ditampilkan akan selalu diperbarui menggunakan{" "}
                <span className="font-semibold">
                  Incremental Static Generation{" "}
                </span>
                yang memungkinkan data akan diperbarui{" "}
                <span className="font-semibold">setiap 10 menit sekali</span>
              </>
            )}
          </span>
        </div>
      </div>
      {/* MODALLL */}
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <h3 className="text-lg font-bold">
            Keren ga bang websitenya bisa gini
          </h3>
          <p className="py-4">
            Sedang belajar Nextjs + Daisy UI + Axios Biar pas Projectan Nambah
            Gacor 😎
          </p>
        </label>
      </label>
    </>
  );
}
