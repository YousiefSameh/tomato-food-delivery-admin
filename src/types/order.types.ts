interface IOrderItem {
  _id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  price: number;
  quantity: number;
}

interface IOrder {
  _id: string;
  userId: string;
  items: IOrderItem[];
  amount: number;
  address: {
    firstName: string;
    lastName: string;
    street: string;
    city: string;
    state: string;
    country: string;
    zipcode: string;
    phone: string;
  };
  status: string;
  date: string;
  payment: boolean;
}

export { type IOrder, type IOrderItem };