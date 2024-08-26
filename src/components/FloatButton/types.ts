import { FloatButtonGroupProps as AntFloatButtonGroupProps, FloatButtonProps as AntFloatButtonProps, BackTopProps, } from 'antd';

export type FloatButtonProps = AntFloatButtonProps;
export type FloatButtonGroupProps = AntFloatButtonGroupProps & {
    right?: number;
};
export type FloatButtonBackTopProps = FloatButtonProps & BackTopProps;