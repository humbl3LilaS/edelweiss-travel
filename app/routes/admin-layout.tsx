import { Outlet } from "react-router";
import { MobileSideBar, SideBar } from "../../components";

const AdminLayout = () => {
	return (
		<div className={"admin-layout"}>
			<MobileSideBar />
			<SideBar />
			<div className={"children"}>
				<Outlet />
			</div>
		</div>
	);
};

export default AdminLayout;
