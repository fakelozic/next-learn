import Link from "next/link";
export default function AppDevelopment() {
  return (
    <>
      <h1 className="container mx-auto bg-red-100 text-3xl p-5 border">
        Web Development Services
      </h1>
      <Link href="/" className="border px-2 py-1 rounded-sm m-4">
        Home
      </Link>
      <Link href="/services" className="border px-2 py-1 rounded-sm m-4">
        All Services
      </Link>
    </>
  );
}
