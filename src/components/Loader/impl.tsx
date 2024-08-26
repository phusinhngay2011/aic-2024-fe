"use client";
import { BaseComponentProps } from '@types';
import './styles.scss';

export function Loader({ className, style }: BaseComponentProps) {
    return (
        <div className={`loader-comp ${className || ''}`} style={style}></div>
    )
}
