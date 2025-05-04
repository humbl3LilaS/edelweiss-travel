import { calculateTrendPercentage, cn } from "../lib/util";

type StatsCardProps = {
	header: string;
	total: number;
	currentMonthCount: number;
	lastMonthCount: number;
};
const StatsCard = ({ header, total, currentMonthCount, lastMonthCount }: StatsCardProps) => {
	const { trend, percentage } = calculateTrendPercentage(currentMonthCount, lastMonthCount);
	const isDecrement = trend === "decrement";
	return (
		<article className={"stats-card"}>
			<h2 className={"text-base font-medium"}>{header}</h2>
			<div className={"content"}>
				<div className={"flex flex-col gap-y-4"}>
					<p className={"text-4xl font-semibold"}>{total}</p>
					<div className={"flex items-center gap-x-2"}>
						<figure className={"flex items-center gap-x-1"}>
							<img
								src={`/assets/icons/${isDecrement ? "arrow-down-red.svg" : "arrow-up-green.svg"}`}
								alt={`Arrow Pointing ${isDecrement ? "Down" : "Up"}`}
							/>
							<figcaption
								className={cn(
									"text-sm font-medium",
									isDecrement ? "text-red-500" : "text-success-700",
								)}
							>
								{Math.round(percentage)}%
							</figcaption>
						</figure>
						<p className={"text-sm font-medium text-gray-100 truncate"}>
							vs last month
						</p>
					</div>
				</div>
				{/*{//TODO: Late Replace the place holder with chart lib}*/}
				<img
					src={`/assets/icons/${isDecrement ? "decrement.svg" : "increment.svg"}`}
					alt={"trend graph"}
					className={"w-full h-full md:h-32 xl:w-32 xl:h-full"}
				/>
			</div>
		</article>
	);
};

export default StatsCard;
