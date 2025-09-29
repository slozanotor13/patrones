
export interface Address {
  street: string;
  city: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  address: Address;
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
   