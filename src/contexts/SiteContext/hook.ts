import { useContext } from 'react';
import { SiteContext } from './context';

export function useSite() {
	return useContext(SiteContext);
}
