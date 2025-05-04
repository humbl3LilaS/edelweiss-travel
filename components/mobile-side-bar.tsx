//@ts-nocheck I know this is stupid, but it works
import { SidebarComponent } from "@syncfusion/ej2-react-navigations";
import { UserInfo } from "./index";
import Logo from "./logo";
import NavItems from "./nav-items";

const MobileSideBar = () => {
	let sideBar: SidebarComponent;
	const toggleSidebar = () => {
		sideBar.toggle();
	};
	return (
		<div className="mobile-sidebar wrapper">
			<header>
				<Logo />

				<button onClick={toggleSidebar} type="button">
					<img src={"/assets/icons/menu.svg"} alt="Menu" className={"size-7"} />
				</button>

				<SidebarComponent
					width={270}
					// biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
					ref={(SideBar: SidebarComponent) => (sideBar = SideBar)}
					created={() => sideBar.hide()}
					closeOnDocumentClick={true}
					showBackdrop={true}
					type="over"
				>
					<div className={"nav-items"}>
						<Logo />
						<NavItems handleClick={toggleSidebar} />
						<UserInfo />
					</div>
				</SidebarComponent>
			</header>
		</div>
	);
};

export default MobileSideBar;
