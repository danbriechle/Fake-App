import { describe, it, expect } from "vitest";
import { BookModel } from "@/models/book";

const RAW = {
  title: "mip moop",
  author: "woopy",
  genre: "doop",
  description: "bloop mip",
  isbn: "9780000000001",
  image: "broken/image/url",
  published: "09-20-2025",
  publisher: "bop boop"
}

describe("BookModel", () => {
  it("constructs from BookApi and generates a picsum image seeded by ISBN", () => {
    const bookModel = new BookModel(RAW);

    expect(bookModel).toBeInstanceOf(BookModel)
    expect(bookModel.title).toBe(RAW.title)
    expect(bookModel.author).toBe(RAW.author)
    expect(bookModel.genre).toBe(RAW.genre)
    expect(bookModel.isbn).toBe(RAW.isbn)
    expect(bookModel.image).toBe(`https://picsum.photos/seed/${encodeURIComponent(RAW.isbn)}/480/320`)
    expect(bookModel.published).toBe(RAW.published)
    expect(bookModel.publisher).toBe(RAW.publisher)
  })

  it("bookList maps an array of raw books to BookModel instances", () => {
    const list = BookModel.bookList([RAW, { ...RAW, isbn: "9780000000001", title: "mip moop" }])
    expect(list).toHaveLength(2)
    expect(list[0]).toBeInstanceOf(BookModel)
    expect(list[1]).toBeInstanceOf(BookModel)
    expect(list[1].title).toBe("mip moop")
  })
})
