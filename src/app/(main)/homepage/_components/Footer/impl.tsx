'use client';

import { Footer as AntdFooter } from "antd/es/layout/layout";

export function Footer() {
	return (
		<AntdFooter style={{ textAlign: 'center' }}>
			AIC2024 ©{new Date().getFullYear()} Created by PTQ
		</AntdFooter>
	);
}
