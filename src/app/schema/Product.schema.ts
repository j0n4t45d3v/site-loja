export type Product = {
  id: number,
  image: string,
  name: string,
  description: string,
  price: number,
}

export type CartProduct = {
  quantity: number,
} & Product;
