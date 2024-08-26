'use client';

import { SiteProvider } from '@contexts';
import { BaseLayoutProps } from '@types';
import { Head } from 'components';

export function SiteLayout({ children }: BaseLayoutProps) {
	return (
		<SiteProvider>
			<Head />
			{children}
		</SiteProvider>
	);
}
