import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "...",
};

import Link from "next/link";
export default function Services() {
  return (
    <div className="container mx-auto mt-3">
      <h1 className="bg-red-100 text-3xl p-5 border">Services</h1>
      <div className="mt-3">
        <Link href="/" className="border px-2 py-1 rounded-sm m-4">
          Home
        </Link>
        <Link
          href="/services/app-development"
          className="border px-2 py-1 rounded-sm m-4"
        >
          App Development
        </Link>
        <Link
          href="/services/web-development"
          className="border px-2 py-1 rounded-sm m-4"
        >
          Web Development
        </Link>
        <Link href="/services/seo" className="border px-2 py-1 rounded-sm m-4">
          SEO
        </Link>
      </div>
    </div>
  );
}
