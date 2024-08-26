import { useContext } from 'react';
import { NotificationContext } from './context';

export function useNotif() {
	return useContext(NotificationContext);
}
