"use client";

import { Image } from '@components';

export function Logo() {
	return (
		<Image
			className='login__logo'
			alt='logo'
			src='/logo.png'
			height='60px'
			width={'auto'}
			preview={false}
		/>
	);
}
