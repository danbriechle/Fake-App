import Link from "next/link"

export default function HomePage() {
  return (
    <main style={{ padding: 24 }}>
        <Link href="/resources/books" className="inline-flex items-center rounded border px-3 py-2 mt-4"> Books </Link>
    </main>
  )
}
