'use client';

import { ImageCard, Loader, Typography } from '@components';
import { ImageCardModel, ImageCardProps } from '@components/ImageCard/types';
import { Empty, Statistic, Tabs } from 'antd';
import { useCallback, useEffect, useMemo, useState } from 'react';
import './styles.scss';
import { CardListProps } from './types';

type ThrottleFunction = (...args: any[]) => void;

const throttle = (func: ThrottleFunction, limit: number): ThrottleFunction => {
	let inThrottle: boolean;
	return function (this: any, ...args: any[]) {
		if (!inThrottle) {
			func.apply(this, args);
			inThrottle = true;
			setTimeout(() => {
				inThrottle = false;
			}, limit);
		}
	};
};

export function CardList({ loading, items, hasSearched }: CardListProps) {
	const itemsPerPage = useMemo(() => 20, []);

	const [visibleImages, setVisibleImages] = useState<ImageCardModel[]>(items.slice(0, itemsPerPage));
	const [hasMore, setHasMore] = useState(true);
	const [loadingItems, setLoadingItems] = useState(false);
	const isLoading = useMemo(() => loading || loadingItems, [loading, loadingItems]);
	const [currentDisplayType, setCurrentDisplayType] = useState('large');


	const cardDisplayItems = useMemo(() => [
		{
			label: `Large`,
			key: 'large',
		},
		{
			label: `Medium`,
			key: 'medium',
		},
	], []);

	// Throttled version of loadMoreImages
	// eslint-disable-next-line react-hooks/exhaustive-deps
	const loadMoreImages = useCallback(
		throttle(() => {
			console.log('load more')
			if (visibleImages.length < items.length) {
				const nextBatch = items.slice(visibleImages.length, visibleImages.length + 20);
				setVisibleImages((prev) => [...prev, ...nextBatch]);
			} else {
				setHasMore(false);
			}
		}, 1000), // 1 second throttle
		[visibleImages, items, throttle]
	);


	useEffect(() => {
		if (items) {
			setVisibleImages(items.slice(0, itemsPerPage));
		}
	}, [items, itemsPerPage]);

	useEffect(() => {
		const handleScroll = () => {
			if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 && hasMore) {
				loadMoreImages();
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [loadMoreImages, hasMore]);

	return (
		<div className='card-list'>
			{
				hasSearched &&
				<Statistic title="Items found: " value={items.length} loading={isLoading} />
			}

			<Tabs
				className='card-list-display-style'
				items={cardDisplayItems}
				activeKey={currentDisplayType}
				onChange={setCurrentDisplayType}
				tabPosition='right'
			/>

			{
				isLoading ? (
					<Loader className='card-list__loading' />
				) : (
					visibleImages.length === 0 ? (
						<Empty
							style={{
								justifyContent: 'center',
								alignSelf: 'center'
							}}
							image="/png/golang_80.png"
							imageStyle={{ height: 60 }}
							description={
								<Typography>
									{hasSearched ? 'No results found.' : 'Please enter a search query.'}
								</Typography>
							}
						>
						</Empty>
					) :
						<>
							<div className={`
								card-list__cards 
								grid-transition 
								${currentDisplayType === 'large' ? 'grid-large' : 'grid-small'}`
							}
							>
								{
									(
										visibleImages.map((it, index) => (
											<ImageCard
												type={currentDisplayType as ImageCardProps['type']}
												id={String(index)}
												key={index}
												thumbnail={it.thumbnail}
												title={it.title ?? 'Title'}
											/>
										)
										))
								}
							</div>
							{
								!hasMore &&
								<Empty
									image="/gif/stop.gif"
									description="It looks like you've reached the end"
								/>
							}
						</>)
			}
		</div>
	);
}
