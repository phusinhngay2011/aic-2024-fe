import { BaseComponentProps } from "@types";

export type ImageCardModel = {
    id: string;
    thumbnail: string;
    title: string;
}

export type ImageCardProps = Omit<BaseComponentProps, 'children'> & ImageCardModel & {
    type: 'large' | 'medium';
};