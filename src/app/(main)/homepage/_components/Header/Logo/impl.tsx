'use client';

import { Image, Typography } from '@components';
import './styles.scss';

export function Logo() {
	return (
		<div className="logo">
			<Image
				className='signin__background'
				alt='background signin'
				src='/gif/weight_lifting.gif'
				preview={false}
				height='60px'
				width='auto'
			/>
			<Typography type='title' className='logo__text' level={4}>
				PTQ
			</Typography>
		</div>
	);
}
