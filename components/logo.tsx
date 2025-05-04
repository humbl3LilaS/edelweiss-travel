import { Link } from "react-router";

const Logo = () => {
	return (
		<Link to="/" className={"link-logo"}>
			<img src={"/assets/icons/logo.svg"} alt={"Logo"} className={"size-[30px]"} />
			<h1>EdelweissTravel</h1>
		</Link>
	);
};

export default Logo;
