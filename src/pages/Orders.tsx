import { useEffect, useState } from "react"
import API from "@services/api.services";
import { IOrder } from "@customTypes/order.types";
import { isAxiosError } from "axios";
import { toast } from "react-toastify";
import { assets } from "@assets/assets";

const Orders = () => {
  const [ orders, setOrders ] = useState<IOrder[]>([]);

  type TResponse = { success: boolean, orders: IOrder[] }

  const fetchAllOrders = async () => {
    try {
      const res = await API.get<TResponse>("/order/list");
      setOrders(res.data.orders);
    } catch (error) {
      if (isAxiosError(error)) {
        toast.error(error.response?.data.message);
      }
    }
  }

  useEffect(() => {
    fetchAllOrders();
  }, [])

  return (
    <div className="order add">
      <h3>Order Page</h3>
      <div className="order-list">
        { orders.map((order, index) => (
          <div key={index} className="order-item grid grid-cols-[1fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] items-start gap-7.5 border border-tomato py-[15px] px-2 lg:p-5 my-7.5 text-[12px] md:text-sm text-[#505050]">
            <img src={assets.parcel_icon} className="w-[40px] lg:w-[50px]" alt="Parcel Icon" />
            <div>
              <p className="order-item-food font-semibold">
                { order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return item.name + " x " + item.quantity;
                  } else {
                    return item.name + " x " + item.quantity + ", ";
                  }
                }) }
              </p>
              <p className="order-item-name mt-7.5 font-semibold">{ order.address.firstName + "  " + order.address.lastName }</p>
              <div className="order-item-address mb-2.5">
                <p>{order.address.street + ", "}</p>
                <p>{order.address.city + ", " + order.address.state + ", " + order.address.country + ", " + order.address.zipcode}</p>
              </div>
              <p className="order-item-phone">{order.address.phone}</p>
            </div>
            <p>Items: { order.items.length }</p>
            <p>${order.amount}.00</p>
            <select name="" id="" className="border-none p-[5px] lg:p-3 outline-none rounded-sm text-[10px] lg:text-sm bg-[#ffe1e1] text-[#454545] transition-colors cursor-pointer hover:bg-tomato hover:text-white">
              <option value="Food Processing">Food Processing</option>
              <option value="Out For Delivery">Out For Delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        )) }
      </div>
    </div>
  )
}

export default Orders