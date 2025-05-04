import { ChipDirective, ChipListComponent, ChipsDirective } from "@syncfusion/ej2-react-buttons";
import { Link } from "react-router";
import { cn } from "~/lib/util";

type TripData = {
	id: number;
	name: string;
	imageUrls: string[];
	itinerary: Array<{ location: string }>;
	tags: string[];
	travelStyle: string;
	estimatedPrice: string;
};
type TripCardProps = { data: TripData };
const TripCard = ({ data }: TripCardProps) => {
	return (
		<article className={"trip-card"}>
			<Link to={`/trips/${data.id}`}>
				<img src={data.imageUrls[0]} alt={`Trip ${data.id}`} />
			</Link>
			<div className={"trip-card__content"}>
				<h2>
					<Link to={`/trips/${data.id}`}>{data.name}</Link>
					<figure className={"flex items-center gap-x-1"}>
						<img
							src={"/assets/icons/location-mark.svg"}
							className={"size-4"}
							alt={"location"}
						/>
						<figcaption>{data.itinerary[0].location}</figcaption>
					</figure>
				</h2>
			</div>
			<div className={"mt-5 pl-[18px] pr-3.5 pb-5"}>
				<ChipListComponent id={"travel-chip"}>
					<ChipsDirective>
						{data.tags.map((tag, idx) => (
							<ChipDirective
								key={`id-${tag}`}
								text={tag}
								cssClass={cn(
									idx === 1
										? "!bg-pink-50 !text-pink-500"
										: "!bg-success-50 !text-success-500",
								)}
							/>
						))}
					</ChipsDirective>
				</ChipListComponent>
			</div>
			<div className={"tripCard-pill"}>
				<span className={"sr-only"}>Estimated Price</span>
				<span>{data.estimatedPrice}</span>
			</div>
		</article>
	);
};

export default TripCard;
