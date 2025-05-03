import Link from "next/link";
export default async function FilePath({ params }: any) {
  const { filePath } = await params;
  return (
    <div className="container mx-auto mt-4">
      <h1 className="bg-red-100 text-3xl p-5 border">
        File <span className="text-xl text-gray-600">/{filePath?.join("/")}</span>
      </h1>
      <div className="mt-4">
        <Link href="/" className="border px-2 py-1 rounded-sm m-4">
          Home
        </Link>
      </div>
    </div>
  );
}
