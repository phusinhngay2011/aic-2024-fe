import { BaseComponentProps } from "@types";

export type ButtonType = "primary" | "dashed" | "link" | "text" | "default"
export type ButtonHTMLType = "submit" | "button" | "reset"
export type ButtonShape = "default" | "circle" | "round";
export type ButtonSize = "large" | "middle" | "small";

export type ButtonProps = BaseComponentProps & {
    type?: ButtonType;
    onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    icon?: React.ReactNode;
    iconPosition?: 'start' | 'end';
    danger?: boolean;
    ghost?: boolean;
    loading?: boolean;
    htmlType?: ButtonHTMLType;
}