"use client";
import { Style } from '@types';
import { FloatButton as AntdFloatButton } from 'antd';
import { useMemo } from 'react';
import { FloatButtonBackTopProps, FloatButtonGroupProps, FloatButtonProps } from './types';

export function FloatButton({ ...props }: FloatButtonProps) {
    return <AntdFloatButton {...props} />
}

export function FloatButtonGroup({ children, right, style, ...props }: FloatButtonGroupProps) {
    const groupStyles: Style = useMemo(() => ({ ...style, insetInlineEnd: right ?? undefined }), [right, style]);
    return <AntdFloatButton.Group style={groupStyles} {...props} >{children}</AntdFloatButton.Group>
}

export function FloatButtonBackTop({ ...props }: FloatButtonBackTopProps) {
    return <AntdFloatButton.BackTop {...props} />
}