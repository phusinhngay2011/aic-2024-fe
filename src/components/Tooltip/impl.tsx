"use client";

import { Tooltip as AntdTooltip } from 'antd';
import { TooltipProps } from "./types";

export function Tooltip({ children, ...props }: TooltipProps) {
	return <AntdTooltip {...props}>{children}</AntdTooltip>
}
