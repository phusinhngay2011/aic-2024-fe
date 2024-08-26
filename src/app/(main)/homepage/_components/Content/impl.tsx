'use client';

import { SyncOutlined } from "@ant-design/icons";
import { ImageCardModel } from "@components/ImageCard/types";
import { FloatButton, theme } from "antd";
import { Content as AntdContent } from "antd/es/layout/layout";
import { useState } from "react";
import { CardList } from "../CardList";
import { SearchEngine } from "../SearchEngine";
import { SearchValue } from "../SearchEngine/types";
import './styles.scss';
import { ContentProps } from "./types";

export function Content({ children, ...props }: ContentProps) {
	const {
		token: { colorBgContainer, borderRadiusLG },
	} = theme.useToken();

	const [search, setSearch] = useState<SearchValue>({
		text: '',
	});

	const [imageCards, setImageCards] = useState<ImageCardModel[]>([]);
	const [hasSearched, setHasSearched] = useState(false); // State to track if a search has been performed

	const [loadingItems, setLoadingItems] = useState(false);


	return (
		<AntdContent className="content" {...props}>
			<SearchEngine
				search={search}
				setSearch={setSearch}
				setImageCards={setImageCards}
				setLoadingItems={setLoadingItems}
				hasSearched={hasSearched}
				setHasSearched={setHasSearched}
			/>
			{/* Application's main content here*/}
			<div
				style={{
					flex: 1,
					background: colorBgContainer,
					padding: 24,
					borderRadius: borderRadiusLG,
				}}
			>
				<CardList
					loading={loadingItems}
					items={imageCards}
					hasSearched={hasSearched}
				/>
				{children}
			</div>

			<FloatButton.Group shape="square" style={{ insetInlineEnd: 24 }}>
				<FloatButton icon={<SyncOutlined />} />
				<FloatButton.BackTop visibilityHeight={1024} />
			</FloatButton.Group>

		</AntdContent>
	);
}
