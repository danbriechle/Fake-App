import Link from "next/link"
export default async function BooksPage() {
  return (
    <main className="p-6">
      <Link href="/" className="inline-flex items-center rounded border px-3 py-2 mt-4">Home</Link>
      <h1 className="text-2xl font-semibold">Books</h1>
      
    </main>
  );
}