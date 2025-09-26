import Link from "next/link"
import { fetchBooks } from "@/services/faker"

type Book = {
  title: string; author: string; genre: string;
  description: string; isbn: string; image: string;
  published: string; publisher: string;
}


export default async function BooksPage() {
  const res = await fetchBooks(4) as { data: Book[] };
  const books = res.data ?? [];

  return (
    <main className="p-6">
      <h1 className="text-2xl font-semibold">Books</h1>

      <ul className="mt-6 grid grid-cols-4 gap-6">
        {books.map((book) => (
          <li key={`${book.isbn}`} className="group border border-white/10">
            <div className="aspect-[3/2] w-full overflow-hidden bg-neutral-800">
              <img
                src={book.image}
                alt={book.title}
                className="h-full w-full"
              />
            </div>

            <div className="p-4">
              <h2 className="text-lg font-semibold">{book.title}</h2>
              <p className="mt-1 text-sm text-gray-400">{book.author} · {book.genre}</p>
              <p className="mt-3 text-sm overflow-hidden">
                {book.description}
              </p>

              <div className="mt-4 text-xs text-gray-400">
                <p className="truncate">ISBN: {book.isbn}</p>
                <p>{book.publisher}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}