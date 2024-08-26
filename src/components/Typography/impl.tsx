"use client";

import { Typography as AntdTypo } from 'antd';
import { useCallback, useMemo } from 'react';
import { TypographyProps } from "./types";

const { Title, Paragraph, Text } = AntdTypo;

export function Typography({ type, children, decorations, color = 'primary', ...props }: TypographyProps) {

	const decords = useMemo(() => {
		const textDecorations = {
			code: false, delete: false, keyboard: false, mark: false, strong: false, italic: false, underline: false,
		}
		if (decorations) {
			const items = Array.isArray(decorations) ? decorations : [decorations];
			for (let i = 0; i < items.length; i++) {
				const decoration = items[i];
				if (decoration in textDecorations) {
					textDecorations[decoration] = true;
				} else {
					console.error(`Invalid decoration '${decoration}'. Available options are: code, delete, keyboard, mark, strong, italic, underline.`);
				}
			}
		}
		return textDecorations;
	}, [decorations]);

	const typo: React.FC<Pick<TypographyProps, 'children'>> = useCallback(({ children }) => {
		switch (type) {
			case 'title':
				return <Title {...decords} {...props}>{children}</Title>;
			case 'paragraph':
				return <Paragraph {...decords} {...props}>{children}</Paragraph>;
			default:
				return <Text {...decords} {...props}>{children}</Text>;
		}
	}, [decords, props, type]);

	return (
		typo({ children, ...props })
	);
}
