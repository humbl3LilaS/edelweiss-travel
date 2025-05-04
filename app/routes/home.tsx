import { USER_PLACEHOLDER } from "~/constants";
import { Header } from "../../components";

const Home = () => {
	return (
		<main className={"dashboard wrapper"}>
			{/*{TODO: I should Refactor all the title, description and title into constant file and should manage the content form there}*/}
			<Header
				title={`Welcome ${USER_PLACEHOLDER.name ?? "Guest"} 👋`}
				description={"Track activity, trends and popular destination in real time"}
			/>
			<p>Home Page</p>
		</main>
	);
};

export default Home;
