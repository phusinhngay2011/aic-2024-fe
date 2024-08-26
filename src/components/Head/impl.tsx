"use client";

import { useSite } from "@contexts";

export function Head() {
	const { siteName, description } = useSite();
	return (
		// eslint-disable-next-line @next/next/no-head-element
		<head>
			<title>{siteName}</title>
			<meta name="description" content={description} />
		</head>
	);
}
