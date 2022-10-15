export class Client{
  id?: number
  firstname: string
  lastname: string
  number: number
  email: string
  address: string
  password: string
  items?: [
    {
      id?: number
      name: string
      size: string
      description: number
      color: string
      images: string
      price: number
    }
  ]
}
