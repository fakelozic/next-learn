import Link from "next/link";
export default function NotFound() {
  return (
    <div className="container mx-auto h-[86vh] flex flex-col items-center justify-center">
      <h1>404 | Not Found</h1>
      <Link className="block mt-5 text-blue-600 underline" href='/'>Home</Link>
    </div>
  );
}
