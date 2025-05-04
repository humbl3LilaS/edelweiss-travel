import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...classNames: ClassValue[]) {
	return twMerge(clsx(classNames));
}

export const calculateTrendPercentage = (
	countOfThisMonth: number,
	countOfLastMonth: number,
): TrendResult => {
	if (countOfLastMonth === 0) {
		return countOfThisMonth === 0
			? { trend: "no change", percentage: 0 }
			: { trend: "increment", percentage: 100 };
	}

	const change = countOfThisMonth - countOfLastMonth;
	const percentage = Math.abs((change / countOfLastMonth) * 100);

	if (change > 0) {
		return { trend: "increment", percentage };
	}

	if (change < 0) {
		return { trend: "decrement", percentage };
	}

	return { trend: "no change", percentage: 0 };
};
