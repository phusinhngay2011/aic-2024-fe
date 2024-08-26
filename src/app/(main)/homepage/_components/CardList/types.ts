import { ImageCardModel } from "@components/ImageCard/types";
import { BaseComponentProps } from "@types";

export type CardListProps = BaseComponentProps & {
    items: ImageCardModel[];
    loading: boolean;
    hasSearched: boolean;
};