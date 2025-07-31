export interface Book {
  id: number;
  title: string;
  author: string;
  publishedAt: string;
  detail: string;
  synopsis: string;
  type: string; 
}
export interface CoffeeType {
  id: number;
  type: string;
}

export interface CoffeeOrder {
  id: number;
  typecoffee_id: number;
  count: number;
  description: string;
  customer_name: string;
}