'use client';

import { Button } from '@components';
import { Checkbox, Form, Input } from 'antd';
import CryptoJS from "crypto-js";
import { signIn } from "next-auth/react";
import React, { useCallback, useEffect } from 'react';
import { LoginFieldProps, LoginFormProps } from './types';

export function LoginForm({ submit, setSubmit, onFinish, onFinishFailed, setConfirmLoading }: LoginFormProps) {
	const submitButtonRef = React.useRef<HTMLButtonElement>(null);

	const onFinishForm = useCallback((values: LoginFieldProps) => {
		setConfirmLoading(true);
		signIn("56-credentials", {
			email: values.username,
			password: CryptoJS.MD5(values.password || ''),
		}).then(onFulfilled => {
			if (onFulfilled?.ok) {
				if (onFinish) {
					onFinish(values);
				}
			} else {

			}
		});
	}, [onFinish, setConfirmLoading]);

	useEffect(() => {
		if (submit) {
			submitButtonRef?.current?.click();
			setSubmit(false);
		}
	}, [setSubmit, submit]);

	return (
		<Form
			name="basic"
			// labelCol={{ span: 6 }}
			// wrapperCol={{ span: 16 }}
			initialValues={{ remember: true }}
			onFinish={onFinishForm}
			onFinishFailed={onFinishFailed}
			autoComplete="off"
		>
			<Form.Item<LoginFieldProps>
				// label="Username"
				name="username"
				rules={[{ required: true, message: 'Please input your username!' }]}
			>
				<Input placeholder='Username' size='large' />
			</Form.Item>

			<Form.Item<LoginFieldProps>
				// label="Password"
				name="password"
				rules={[{ required: true, message: 'Please input your password!' }]}
			>
				<Input.Password placeholder='Password' size='large' />
			</Form.Item>

			<Form.Item<LoginFieldProps>
				name="remember"
				valuePropName="checked"
			// wrapperCol={{ offset: 8, span: 16 }}
			// style={{ display: 'none' }}
			>
				<Checkbox>Remember me</Checkbox>
			</Form.Item>

			<Form.Item style={{ display: 'none' }}>
				<Button type="primary" htmlType="submit" ref={submitButtonRef}>
					Submit
				</Button>
			</Form.Item>
		</Form>
	);
}
