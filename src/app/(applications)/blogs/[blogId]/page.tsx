import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: any) {
  const { blogId } = await params;
  return {
    title: `Blog ${blogId}`,
  };
}

export default async function Blogs({ params }: any) {
  const blogList = ["1", "2", "3", "jet", "car", "bike"];
  const { blogId } = await params;
  if (!blogList.includes(blogId)) {
    notFound();
  }
  return (
    <div className="container mx-auto mt-4">
      <h1 className="bg-red-100 text-3xl p-5 border">Blog {blogId}</h1>
      <div>
        <Link href="/" className="border px-2 py-1 rounded-sm m-4 inline-block">
          Home
        </Link>
        <Link
          href="/blogs"
          className="border px-2 py-1 rounded-sm m-4 inline-block"
        >
          All Blogs
        </Link>
        <Link
          href={`/blogs/${blogId}/comments`}
          className="border px-2 py-1 rounded-sm m-4 inline-block"
        >
          All Comments
        </Link>
      </div>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
        repellendus quasi facere est nemo, sunt, explicabo, magnam ipsam vero
        architecto assumenda excepturi! Labore provident ducimus quisquam, ab
        fuga odit nulla.
      </p>
    </div>
  );
}
