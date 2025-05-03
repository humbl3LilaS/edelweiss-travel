import { Outlet } from "react-router";
import SideBar from "../../components/side-bar";

const AdminLayout = () => {
	return (
		<div className={"admin-layout"}>
			<div>Mobile nav</div>
			<SideBar />
			<div className={"children"}>
				<Outlet />
			</div>
		</div>
	);
};

export default AdminLayout;
