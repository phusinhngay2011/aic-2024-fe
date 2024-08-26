import { BaseComponentProps } from "@types";

export type TypographyColor = 'primary' | 'secondary' | 'success' | 'warning' | 'danger';;

export type TypographyType = 'title' | 'paragraph' | 'text'

export type TypographyDecoration = 'code' | 'delete' | 'keyboard' | 'mark' | 'strong' | 'italic' | 'underline';

export type TypographyProps = BaseComponentProps & {
    type?: TypographyType;
    color?: TypographyColor;
    decorations?: TypographyDecoration | TypographyDecoration[];
    disabled?: boolean;
    
    // Only works for 'title' type
    level?: 1 | 2 | 3 | 4 | 5;
}