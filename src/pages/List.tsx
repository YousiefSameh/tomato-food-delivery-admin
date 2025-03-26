import API from "@services/api.services";
import { isAxiosError } from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Food } from "@customTypes/index";

const List = () => {
  const [list, setList] = useState<Food[]>([]);
  const url = "http://localhost:4000";

	const fetchList = async () => {
		try {
			const response = await API.get("/food");
			setList(response.data.data);
		} catch (error) {
			if (isAxiosError(error)) {
				toast.error("Error: " + error.response?.data.message);
			} else {
				toast.error("Unexpected Error!");
			}
		}
	};

  const removeFoodItem = async (id: string) => {
    try {
      const response = await API.post("/food/remove", { id });
      await fetchList();
      toast.success(response.data.message);
    } catch (error) {
      if (isAxiosError(error)) {
        toast.error(error.response?.data.message);
      }
    }
  }

	useEffect(() => {
		fetchList();
	}, []);
	return (
		<div className="list add flex flex-col gap-2.5">
      <table className="list-table w-full">
        <thead>
          <tr className="list-table-format title hidden md:grid grid-cols-[0.5fr_2fr_1fr_1fr_0.5fr] items-center gap-2.5 py-3 px-[15px] border border-[#cacaca] text-[13px] bg-[#f9f9f9] text-left">
            <th>Image</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          { list.map((food, index) => {
            return (
              <tr className="list-table-format grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[0.5fr_2fr_1fr_1fr_0.5fr] items-center gap-[15px] md:gap-2.5 py-3 px-[15px] border border-[#cacaca] text-[13px]" key={index}>
                <td><img src={`${url}/image/${food.image}`} className="w-[50px]" alt={food.name} /></td>
                <td>{food.name}</td>
                <td>{food.category}</td>
                <td>${food.price}</td>
                <td className="text-red-600 cursor-pointer" onClick={() => removeFoodItem(food._id)}>Remove</td>
              </tr>
            )
          }) }
        </tbody>
      </table>
		</div>
	);
};

export default List;
