export interface BookApi {
  title: string;
  author: string;
  genre: string;
  description: string;
  isbn: string;
  image: string;
  published: string;
  publisher: string;
}

export interface BooksApiResponse {
  status: string;
  code: number;
  total: number;
  data: BookApi[];
}