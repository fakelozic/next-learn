import Link from "next/link";
export default async function Comments({ params }: any) {
  const { blogId, commentId } = await params;
  console.log(await params)
  return (
    <div className="container mx-auto mt-4">
      <h1 className="bg-red-100 text-3xl p-5 border">Comment {commentId} for Blog {blogId}</h1>
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
