import { BaseComponentProps } from "@types";
import { ImageProps as AntdImageProps } from 'antd';

export type ImageProps = Omit<BaseComponentProps, 'children'> & AntdImageProps;