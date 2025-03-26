import { Outlet } from "react-router-dom";
import Navbar from "@components/Navbar";
import Sidebar from "@components/Sidebar";
import { ToastContainer } from 'react-toastify';

const AppTemplate = () => {
	return (
		<>
			<Navbar />
			<hr />
			<div className="app-content flex">
				<Sidebar />
				<div className="wrapper w-[70%] mt-[50px]" style={{ marginLeft: "max(5vw, 25px)" }}>
					<Outlet />
				</div>
			</div>
			<ToastContainer />
		</>
	);
};

export default AppTemplate;
