import type { BooksApiResponse } from "@/types/book-api";
import { BookModel } from "@/models/book";

export async function fetchBooks(quantity?: number): Promise<{ data: BookModel[] }> {
  const FAKER_BASE_URL = "https://fakerapi.it/api/v2";
  const response = await fetch(`${FAKER_BASE_URL}/books?_quantity=${quantity}`);
  const json = (await response.json()) as BooksApiResponse;

  return { data: BookModel.bookList(json.data) };
}