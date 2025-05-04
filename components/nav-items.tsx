import { NavLink } from "react-router";
import { sidebarItems } from "~/constants";
import { cn } from "../lib/util";

type NavItemsProps = {
	handleClick?: () => void;
};
const NavItems = ({ handleClick }: NavItemsProps) => {
	return (
		<div className={"container"}>
			<nav>
				{sidebarItems.map((item) => (
					<NavLink to={item.href} key={item.id} className={"block w-full"}>
						{({ isActive }) => (
							<span
								className={cn("group nav-item", {
									"bg-primary-100 !text-white": isActive,
								})}
								onClick={handleClick}
								onKeyDown={handleClick}
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
							</span>
						)}
					</NavLink>
				))}
			</nav>
		</div>
	);
};

export default NavItems;
