import Link from "next/link";
export default function Home() {
  return (
    <div className="container mx-auto mt-3">
      <h1 className="bg-red-100 text-3xl p-5 border">Technical Agency</h1>
      <Link href="/services" className="border px-2 py-1 rounded-sm m-4">
        Services
      </Link>
      <Link href="/blogs" className="border px-2 py-1 rounded-sm m-4">
        Blogs
      </Link>
      <Link href="/about" className="border px-2 py-1 rounded-sm m-4">
        About Us
      </Link>
    </div>
  );
}
