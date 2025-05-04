import { Dashboard_STATS_PLACEHOLDER, PLACEHOLDER_TRIPS, USER_PLACEHOLDER } from "~/constants";
import { Header, StatsCard, TripCard } from "../../components";
// TODO: Implement My own Dark Theme Toggler
const Home = () => {
	return (
		<main className={"dashboard wrapper"}>
			{/*{TODO: I should Refactor all the title, description and title into constant file and should manage the content form there}*/}
			<Header
				title={`Welcome ${USER_PLACEHOLDER.name ?? "Guest"} 👋`}
				description={"Track activity, trends and popular destination in real time"}
			/>
			<section>
				<div className={"grid grid-cols-1 md:grid-cols-3 gap-6"}>
					<StatsCard
						header={"Total Users"}
						total={Dashboard_STATS_PLACEHOLDER.totalUsers}
						currentMonthCount={Dashboard_STATS_PLACEHOLDER.userJoined.currentMonth}
						lastMonthCount={Dashboard_STATS_PLACEHOLDER.userJoined.lastMonth}
					/>

					<StatsCard
						header={"Trip Created"}
						total={Dashboard_STATS_PLACEHOLDER.totalTrips}
						currentMonthCount={Dashboard_STATS_PLACEHOLDER.tripsCreated.currentMonth}
						lastMonthCount={Dashboard_STATS_PLACEHOLDER.tripsCreated.lastMonth}
					/>

					<StatsCard
						header={"Active Users Today"}
						total={Dashboard_STATS_PLACEHOLDER.userRole.total}
						currentMonthCount={Dashboard_STATS_PLACEHOLDER.userRole.currentMonth}
						lastMonthCount={Dashboard_STATS_PLACEHOLDER.userRole.lastMonth}
					/>
				</div>
			</section>
			<section className={"container"}>
				<h2 className={"text-xl font-semibold text-dark-100"}>Created Trip</h2>
				<div className={"trip-grid"}>
					{PLACEHOLDER_TRIPS.slice(0, 4).map((trip) => (
						<TripCard key={trip.id} data={trip} />
					))}
				</div>
			</section>
		</main>
	);
};

export default Home;
