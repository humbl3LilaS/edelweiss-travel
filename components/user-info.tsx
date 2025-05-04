import { USER_PLACEHOLDER } from "~/constants";

const UserInfo = () => {
	return (
		<div className={"flex items-center gap-2.5 pb-8"}>
			<article className={"flex items-center gap-2"}>
				<img
					src={USER_PLACEHOLDER.imageUrl}
					alt={`User ${USER_PLACEHOLDER.name}`}
					className={"size-10 aspect-square rounded-full"}
				/>
				<div className={"overflow-hidden"}>
					<h2 className={"text-sm md:text-base font-semibold text-dark-200 truncate"}>
						{USER_PLACEHOLDER.name}
					</h2>
					<p className={"text-gray-100 text-xs md:text-sm font-normal truncate"}>
						{USER_PLACEHOLDER.email}
					</p>
				</div>
			</article>

			<button className={"cursor-pointer"} type="button">
				<img src="/assets/icons/logout.svg" alt="logout" />
			</button>
		</div>
	);
};

export default UserInfo;
