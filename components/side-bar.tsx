import { SidebarComponent } from "@syncfusion/ej2-react-navigations";
import { Link } from "react-router";
import { USER_PLACEHOLDER } from "~/constants";
import NavItems from "./nav-items";

const SideBar = () => {
	return (
		<aside className={"w-full max-w-[270px] hidden lg:block"}>
			<SidebarComponent width={270} enableGestures={false}>
				<div className={"nav-items"}>
					<Link to="/" className={"link-logo"}>
						<img
							src={"/assets/icons/logo.svg"}
							alt={"Logo"}
							className={"size-[30px]"}
						/>
						<h1>EdelweissTravel</h1>
					</Link>

					<NavItems />

					<div className={"flex items-center gap-2.5 pb-8"}>
						<article className={"flex items-center gap-2"}>
							<img
								src={USER_PLACEHOLDER.imageUrl}
								alt={`User ${USER_PLACEHOLDER.name}`}
								className={"size-10 aspect-square rounded-full"}
							/>
							<div className={"overflow-hidden"}>
								<h2
									className={
										"text-sm md:text-base font-semibold text-dark-200 truncate"
									}
								>
									{USER_PLACEHOLDER.name}
								</h2>
								<p
									className={
										"text-gray-100 text-xs md:text-sm font-normal truncate"
									}
								>
									{USER_PLACEHOLDER.email}
								</p>
							</div>
						</article>

						<button className={"cursor-pointer"} type="button">
							<img src="/assets/icons/logout.svg" alt="logout" />
						</button>
					</div>
				</div>
			</SidebarComponent>
		</aside>
	);
};

export default SideBar;
