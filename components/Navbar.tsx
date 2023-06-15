import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <div className="fixed z-50 shadow-lg navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="/">Breaking News</Link>
            </li>
            <li>
              <Link href="/search-news">Search News</Link>
            </li>
            <li className="cursor-not-allowed disabled">
              <Link href="/search-apple-news" className="pointer-events-none">
                Search Apple News
              </Link>
            </li>
            <li tabIndex={0}>
              <a className="justify-between">
                Category
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2">
                <li className="bg-[#2A303C] rounded-none">
                  <Link href="/category/technology">Technology</Link>
                </li>
                <li className="bg-[#2A303C]">
                  <Link href="/category/business">Business</Link>
                </li>
                <li className="bg-[#2A303C]">
                  <Link href="/category/general">General</Link>
                </li>
                <li className="bg-[#2A303C]">
                  <Link href="/category/health">Health</Link>
                </li>
                <li className="bg-[#2A303C]">
                  <Link href="/category/science">Science</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <a className="text-xl normal-case btn btn-ghost">VitoNews</a>
      </div>
      <div className="hidden navbar-center lg:flex">
        <ul className="px-1 menu menu-horizontal">
          <li>
            <Link href="/">Breaking News</Link>
          </li>
          <li>
            <Link href="/search-news">Search News</Link>
          </li>
          <li className="cursor-not-allowed disabled">
            <Link href="/search-apple-news" className="pointer-events-none">
              Search Apple News
            </Link>
          </li>

          <li tabIndex={0}>
            <a>
              Category
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2 ">
              <li className="bg-[#2A303C] rounded-none">
                <Link href="/category/technology">Technology</Link>
              </li>
              <li className="bg-[#2A303C]">
                <Link href="/category/business">Business</Link>
              </li>
              <li className="bg-[#2A303C]">
                <Link href="/category/general">General</Link>
              </li>
              <li className="bg-[#2A303C]">
                <Link href="/category/health">Health</Link>
              </li>
              <li className="bg-[#2A303C]">
                <Link href="/category/science">Science</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Get started</a>
      </div>
    </div>
  );
}
