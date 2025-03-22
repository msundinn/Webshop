export interface IBook {
  id: number;
  title: string;
  author: string;
  cover: string;
  year: number;
  format: string;
  genre: string;
  lang: string;
  pages: number;
  description?: string;
  price: number;
  stock: number;
}
