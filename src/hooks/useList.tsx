import API from "@services/api.services";
import { isAxiosError } from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Food } from "@customTypes/index";

const useList = () => {
  const [list, setList] = useState<Food[]>([]);
  const url = "https://tomato-food-delivery-backend-h5s0.onrender.com";

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

  return {list, url, removeFoodItem}
}

export default useList
