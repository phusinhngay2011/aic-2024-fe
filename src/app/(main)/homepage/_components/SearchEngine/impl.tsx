'use client';
import { Image, Typography } from '@components';
import { Badge, DatePicker, Flex, Input, Tag } from 'antd';
import { Dayjs } from 'dayjs';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import './styles.scss';
import { SearchEngineProps } from './types';
const { Search } = Input;

const { RangePicker } = DatePicker;

export function SearchEngine({
	search,
	setSearch,
	hasSearched,
	setHasSearched,
	setImageCards,
	setLoadingItems,
}: SearchEngineProps) {
	const itemRef = useRef<HTMLDivElement>(null);
	const tagsData = useMemo(() => ['Location', 'Time',], []);

	const [isSticky, setIsSticky] = useState(false);
	const [selectedTags, setSelectedTags] = useState<string[]>([]);

	const handleKeyPress = useCallback(async (event: any) => {
		if (event.key === 'Enter') {
			// Prevent the default form submission behavior
			event.preventDefault();

			if (!hasSearched) {
				setHasSearched(true);
			}

			setLoadingItems(true);
			fetch('/images.json')
				.then((response) => response.json())
				.then((data) => {
					// Extract the URLs and set them in the state
					const urls = data.slice(0, 50).map((item: any) => item.url);
					setImageCards(urls.map((it: any) => ({
						thumbnail: it
					})));
				})
				.catch((error) => {
					console.error('Error fetching images:', error);
				})
				.finally(() => setLoadingItems(false));
		}
	}, [hasSearched, setHasSearched, setImageCards, setLoadingItems]);

	const handleClickSuffix = useCallback((event: any) => {
		event.stopPropagation(); // Prevents the event from bubbling up to the parent
	}, []);

	const setSearchText = useCallback((value: string) => setSearch({
		...search,
		text: value
	}), [search, setSearch]);

	const setLocationText = useCallback((value: string) => setSearch({
		...search,
		location: value
	}), [search, setSearch]);

	const onChangeRangePicker = useCallback((dates: [Dayjs | null, Dayjs | null] | null, dateStrings: [string, string]) => {
		setSearch({
			...search,
			dateRange: dateStrings[0] && dateStrings[1] ? {
				from: dateStrings[0],
				to: dateStrings[1]
			} : undefined
		});
	}, [search, setSearch]);

	const onChangeSelectTag = useCallback((tag: string, checked: boolean) => {
		const nextSelectedTags = checked
			? [...selectedTags, tag]
			: selectedTags.filter((t: any) => t !== tag);

		if (!checked) {
			if (tag === 'Location') {
				setLocationText('')
			}
			else if (tag === 'Time') {
				onChangeRangePicker(null, ['', '']);
			}
		}
		setSelectedTags(nextSelectedTags);
	}, [onChangeRangePicker, selectedTags, setLocationText]);

	useEffect(() => {
		const handleScroll = () => {
			if (itemRef.current) {
				const rect = itemRef.current.getBoundingClientRect();
				const stickyOffset = 35; // Offset where the item becomes sticky
				setIsSticky(rect.top <= stickyOffset);
			}
		};

		window.addEventListener('scroll', handleScroll);
		handleScroll(); // Initial check
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	console.log('value: ', search);
	return (
		<>
			<div className='search-engine' tabIndex={1} ref={itemRef}>
				<Search
					className='search-engine__input'
					value={search.text}
					onChange={e => setSearchText(e.target.value)}
					placeholder="Type something..."
					enterButton={
						<Flex gap='middle' align='center' justify='center' style={isSticky ? {
							minWidth: 100
						} : {}} >

							<Image
								alt='background signin'
								src='/gif/weight_lifting.gif'
								preview={false}
								height='30px'
								width='auto'
								style={isSticky ? {
									transition: 'all 0.3s ease-out',
									opacity: 1,
									transform: 'translateX(0) scale(1, 1)'
								} : {
									opacity: 0,
									transform: 'translateX(-50px) scale(0, 0)'
								}}
							/>

							<Typography style={{
								color: 'white'
							}}>
								Search
							</Typography>
						</Flex>
					}
					size="large"
					loading={false}
					onPressEnter={handleKeyPress}

					allowClear
					suffix={
						<Flex
							gap='middle'
							style={{
								zIndex: 100000
							}}
							onClick={handleClickSuffix}
							className='search-engine__input__suffix'
						>
							{
								selectedTags.includes('Location') &&
								<Badge.Ribbon
									text="Location"
									placement='end'
									className='search-engine__input__suffix__ribbon-location'
								>
									<Tag
										onClose={() => {
											onChangeSelectTag('Location', false);
										}}
										closable
									>
										<Input
											placeholder="Location"
											className='search-engine__input__suffix__location'
											onChange={e => setLocationText(e.target.value)}
										/>
									</Tag>
								</Badge.Ribbon>
							}

							{
								selectedTags.includes('Time') &&
								<Badge.Ribbon
									text="Time"
									placement='end'
									className='search-engine__input__suffix__ribbon-time'
								>
									<Tag onClose={() => {
										onChangeSelectTag('Time', false);
									}}
										closable>
										<RangePicker
											className='search-engine__input__suffix__range_picker'
											onChange={onChangeRangePicker}
											allowEmpty={[true, true]}
										/>
									</Tag>
								</Badge.Ribbon>
							}
						</Flex>
					}
				/>

			</div>
			<div className='search-engine-tags' style={isSticky ? {
				flexDirection: 'column',
				marginLeft: -100,
				top: 30,
				width: 100,
				padding: '0 16px 12px 0'
			} : {
			}}>
				{
					isSticky &&
					<Typography type='title' level={5}>
						Filters
					</Typography>
				}
				{
					tagsData.map<React.ReactNode>((tag) => (
						<Tag.CheckableTag
							key={tag}
							checked={selectedTags.includes(tag)}
							onChange={(checked) => onChangeSelectTag(tag, checked)}

						>
							{tag}
						</Tag.CheckableTag>
					))
				}
			</div>
		</>
	);
}
