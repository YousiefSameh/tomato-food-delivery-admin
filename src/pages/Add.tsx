import { assets } from "@assets/assets";
import useAdd from "@hooks/useAdd";

const Add = () => {
	const { image, onChangeHandler, onChangeFileHandler, SubmitHandler } =
		useAdd();
	return (
		<div className="add text-[#6d6d6d] text-base">
			<form
				className="flex flex-col gap-5"
				onSubmit={SubmitHandler}
				encType="multipart/form-data"
			>
				<div className="add-upload-image flex flex-col gap-2.5">
					<p>Upload Images</p>
					<label htmlFor="upload-image">
						<img
							src={image ? URL.createObjectURL(image) : assets.upload_area}
							className="w-[120px]"
							alt="Upload Area Icon"
						/>
					</label>
					<input
						onChange={onChangeFileHandler}
						type="file"
						id="upload-image"
						name="image"
						hidden
						required
					/>
				</div>
				<div
					className="add-product-name flex flex-col gap-2.5"
					style={{ width: "max(40%, 280px)" }}
				>
					<p>Product Name</p>
					<input
						onChange={onChangeHandler}
						type="text"
						name="name"
						className="p-2.5 border rounded-md"
						placeholder="Write Product Name Here ..."
						required
					/>
				</div>
				<div
					className="add-product-description flex flex-col gap-2.5"
					style={{ width: "max(40%, 280px)" }}
				>
					<p>Product Description</p>
					<textarea
						onChange={onChangeHandler}
						name="description"
						className="p-2.5 border rounded-md"
						rows={6}
						placeholder="Write Product Description Here ..."
					></textarea>
				</div>
				<div className="add-category-price flex gap-7.5">
					<div className="add-category flex flex-col gap-2.5">
						<p>Product Category</p>
						<select
							onChange={onChangeHandler}
							name="category"
							className="max-w-[120px] p-2.5 border rounded-md"
						>
							<option value="Salad">Salad</option>
							<option value="Rolls">Rolls</option>
							<option value="Desserts">Desserts</option>
							<option value="Sandwich">Sandwich</option>
							<option value="Cake">Cake</option>
							<option value="Pure Veg">Pure Veg</option>
							<option value="Pasta">Pasta</option>
							<option value="Noodles">Noodles</option>
						</select>
					</div>
					<div className="add-price flex flex-col gap-2.5">
						<p>Product Price</p>
						<input
							onChange={onChangeHandler}
							type="number"
							className="max-w-[120px] p-2.5 border rounded-md"
							name="price"
							placeholder="Write Product Price Here ..."
						/>
					</div>
				</div>
				<button
					type="submit"
					className="add-button max-w-[120px] border-none p-2.5 bg-tomato text-white cursor-pointer transition-colors hover:bg-tomato/90 rounded-md"
				>
					Add
				</button>
			</form>
		</div>
	);
};

export default Add;
