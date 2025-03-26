import { useState } from "react";
import { NavLink } from "react-router-dom"
import { assets } from "@assets/assets"

const Sidebar = () => {
  const [ active, setActive ] = useState("list");
  return (
    <header className="sidebar w-[18%] min-h-screen border-[1.5] border-[#a9a9a9] border-e border-t-0" style={{ fontSize: "max(1vw, 10px)" }}>
      <div className="sidebar-options pt-[50px] pl-[15%] flex flex-col gap-5">
        <NavLink onClick={() => setActive("list")} to="/" className={`sidebar-option flex items-center gap-[12px] border border-[#a9a9a9] border-e-0 py-2 px-2.5 rounde-s-[3px] cursor-pointer ${active === "list" ? "bg-[#fff3ed] border border-tomato" : ""}`}>
          <img src={assets.order_icon} alt="Order Icon" />
          <p className="hidden md:block">List Items</p>
        </NavLink>
        <NavLink onClick={() => setActive("add")} to="/add" className={`sidebar-option flex items-center gap-[12px] border border-[#a9a9a9] border-e-0 py-2 px-2.5 rounde-s-[3px] cursor-pointer ${active === "add" ? "bg-[#fff3ed] border border-tomato" : ""}`}>
          <img src={assets.add_icon} alt="Add Icon" />
          <p className="hidden md:block">Add Items</p>
        </NavLink>
        <NavLink onClick={() => setActive("orders")} to="/orders" className={`sidebar-option flex items-center gap-[12px] border border-[#a9a9a9] border-e-0 py-2 px-2.5 rounde-s-[3px] cursor-pointer ${active === "orders" ? "bg-[#fff3ed] border border-tomato" : ""}`}>
          <img src={assets.order_icon} alt="Order Icon" />
          <p className="hidden md:block">Orders</p>
        </NavLink>
      </div>
    </header>
  )
}

export default Sidebar