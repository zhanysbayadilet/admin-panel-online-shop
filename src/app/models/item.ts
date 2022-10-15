export class Item{
  id?: number
  name: string
  size: string
  description: number
  color: string
  images: string
  price: number
  owner?: {
    id?: number
    firstname: string
    lastname: string
    number: number
    email: string
    address: string
    password: string
  }
}
