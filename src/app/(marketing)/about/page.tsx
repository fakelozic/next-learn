import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "...",
};

import Link from "next/link";
export default function About() {
  return (
    <>
      <h1>About Page</h1>
      <Link href="/" className="border px-2 py-1 rounded-sm">
        Home
      </Link>
    </>
  );
}
