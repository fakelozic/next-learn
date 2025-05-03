import Link from "next/link";
export default async function Comment({ params }: any) {
  const { blogId } = await params;
  return (
    <div className="container mx-auto mt-4">
      <h1 className="bg-red-100 text-3xl p-5 border">
        All Comments for Blog {blogId}
      </h1>
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
      <div className="border p-2 mb-2">
        <b>Comment: </b>
        <Link href={`/blogs/${blogId}/comments/1`}>
          Lorem ipsum dolor, sit amet consectetur...
        </Link>
      </div>
      <div className="border p-2 mb-2">
        <b>Comment: </b>
        <Link href={`/blogs/${blogId}/comments/2`}>
          Lorem ipsum dolor, sit amet consectetur...
        </Link>
      </div>
    </div>
  );
}
