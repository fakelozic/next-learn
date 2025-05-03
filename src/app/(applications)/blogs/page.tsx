import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs",
  description: "...",
};

import Link from "next/link";
export default async function Blogs({ params }: any) {
  return (
    <div className="container mx-auto mt-4">
      <h1 className="bg-red-100 text-3xl p-5 border">Blogs</h1>
      <div className="mt-4">
        <Link href="/" className="border px-2 py-1 rounded-sm m-4">
          Home
        </Link>
        <Link href="/services" className="border px-2 py-1 rounded-sm m-4">
          Services
        </Link>
      </div>
      <ul className="mt-4">
        <li>
          <Link href="/blogs/1" className="inline-block my-2 ml-5">
            Blog 1
          </Link>
        </li>
        <li>
          <Link href="/blogs/2" className="inline-block my-2 ml-5">
            Blog 2
          </Link>
        </li>
        <li>
          <Link href="/blogs/3" className="inline-block my-2 ml-5">
            Blog 3
          </Link>
        </li>
      </ul>
    </div>
  );
}
