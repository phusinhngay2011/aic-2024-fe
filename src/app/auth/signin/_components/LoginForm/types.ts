import { FormProps } from "antd";

export type LoginFieldProps = {
    username?: string;
    password?: string;
    remember?: string;
};

export type OnFinishLoginFormType = FormProps<LoginFieldProps>['onFinish'];
export type OnFinishFailedLoginFormType = FormProps<LoginFieldProps>['onFinishFailed'];


export type LoginFormProps = {
    submit: boolean;
    setSubmit: (submit: boolean) => void;
    onFinish: OnFinishLoginFormType;
    onFinishFailed: OnFinishFailedLoginFormType;
    setConfirmLoading: (loading: boolean) => void;
}