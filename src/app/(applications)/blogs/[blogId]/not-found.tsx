"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function BlogNotFound() {
  const path = usePathname();
  const pathArray = path.split("/");
  return (
    <div className="container mx-auto h-[86vh] flex flex-col items-center justify-center">
      <h1>404 | Blog <b>{pathArray[pathArray.length - 1]}</b> Not Found</h1>
      <Link className="block mt-5 text-blue-600 underline" href="/blogs">
        All Blogs
      </Link>
    </div>
  );
}
