"use client";
import { Button as AntdButton } from 'antd';
import { forwardRef } from 'react';
import { ButtonProps } from './types';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button({ children, ...props }, ref) {
    return (
        <AntdButton ref={ref} {...props}>{children}</AntdButton>
    )
})