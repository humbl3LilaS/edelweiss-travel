import { useLocation } from "react-router";
import { cn } from "../lib/util";

type HeaderProps = {
	title: string;
	description: string;
};
const Header = ({ title, description }: HeaderProps) => {
	const { pathname } = useLocation();
	return (
		<header>
			<div>
				<h1
					className={cn(
						"text-dark-100",
						pathname === "/"
							? "text-2xl md:text-4xl font-bold"
							: "text-xl md:text-2xl font-semibold",
					)}
				>
					{title}
				</h1>
				<p
					className={cn(
						"mt-2 text-gray-100 font-normal",
						pathname === "/" ? "text-base md:text-lg" : "text-sm md:text-lg",
					)}
				>
					{description}
				</p>
			</div>
		</header>
	);
};

export default Header;
