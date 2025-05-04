import { SidebarComponent } from "@syncfusion/ej2-react-navigations";
import { Logo, NavItems, UserInfo } from "./index";

const SideBar = () => {
	return (
		<aside className={"w-full max-w-[270px] hidden lg:block"}>
			<SidebarComponent width={270} enableGestures={false}>
				<div className={"nav-items"}>
					<Logo />
					<NavItems />
					<UserInfo />
				</div>
			</SidebarComponent>
		</aside>
	);
};

export default SideBar;
