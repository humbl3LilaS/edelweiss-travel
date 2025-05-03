import { NavLink } from "react-router";
import { sidebarItems } from "~/constants";
import { cn } from "../lib/util";

const NavItems = () => {
	return (
		<div className={"container"}>
			<nav>
				{sidebarItems.map((item) => (
					<NavLink to={item.href} key={item.id}>
						{({ isActive }) => (
							<div
								className={cn("group nav-item", {
									"bg-primary-100 !text-white": isActive,
								})}
							>
								<img
									src={item.icon}
									alt={item.label}
									className={cn(
										"size-5 group-hover:brightness-0 group-hover:invert",
										isActive ? "brightness-0 invert" : "text-dark-200",
									)}
								/>
								<span>{item.label}</span>
							</div>
						)}
					</NavLink>
				))}
			</nav>
		</div>
	);
};

export default NavItems;
