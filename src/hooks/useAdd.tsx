import { useState } from "react";
import { isAxiosError } from "axios";
import API from "@services/api.services";
import { toast } from "react-toastify";

const useAdd = () => {
	const [image, setImage] = useState<File | null>(null);
	const [data, setData] = useState({
		name: "",
		description: "",
		price: "",
		category: "Salad",
	});

	interface FormData {
		name: string;
		description: string;
		price: string;
		category: string;
	}

	const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
		const name = event.target.name as keyof FormData;
		const value = event.target.value;
		setData((data) => ({ ...data, [name]: value }));
	};

  const onChangeFileHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setImage(files[0]);
    } else {
      setImage(null);
    }
  }

	const SubmitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
  
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", data.price);
    formData.append("category", data.category);
    if (image) {
      formData.append("image", image);
    }

    try {
      const response = await API.post("/food/add", formData);
      if (response.data.success) {
        setData({
          name: "",
          description: "",
          price: "",
          category: "Salad",
        });
        setImage(null);
        toast.success(response.data.message)
      }
    } catch (error) {
      if (isAxiosError(error)) {
        toast.error(error.response?.data.message)
      }
    }
  };
  
	return {data, image, setImage, onChangeHandler, onChangeFileHandler, SubmitHandler};
};

export default useAdd;
