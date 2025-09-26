import type { BookApi } from "@/types/book-api";

export class BookModel {
  title: string;
  author: string;
  genre: string;
  description: string;
  isbn: string;
  image: string;
  published: string;
  publisher: string;

  private readonly seed: string;

  constructor(raw: BookApi) {
    this.seed = raw.isbn;
    this.title = raw.title;
    this.author = raw.author;
    this.genre = raw.genre;
    this.description = raw.description;
    this.isbn = raw.isbn;
    this.image = `https://picsum.photos/seed/${encodeURIComponent(this.seed)}/480/320`
    this.published = raw.published;
    this.publisher = raw.publisher;
  }

  static bookList(list: BookApi[]) {
    return list.map(b => new BookModel(b));
  }
}
