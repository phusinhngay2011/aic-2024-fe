'use client';

import { Image, Typography } from '@components';
import { background, routing } from '@configs';
import { useNotif } from "@contexts";
import { Flex, Modal } from "antd";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { LoginForm, OnFinishFailedLoginFormType, OnFinishLoginFormType } from "./_components";
import './styles.scss';

export default function SignInPage() {
    const router = useRouter();
    const { open } = useNotif();
    const [submit, setSubmit] = useState(false);
    const [_, setOpen] = useState(true);
    const [confirmLoading, setConfirmLoading] = useState(false);

    const onFinish: OnFinishLoginFormType = useCallback(
        (values: any) => {
            setOpen(false);
            setConfirmLoading(false);
            router.push(routing.homepage.HOMEPAGE);
        }, [router]);

    const onFinishFailed: OnFinishFailedLoginFormType = useCallback(
        (errorInfo: any) => {
            console.log('Failed:', errorInfo);
        }, []);

    const handleOk = useCallback(() => {
        setSubmit(true)
        setConfirmLoading(true);
    }, []);

    // const handleCancel = () => {
    //     router.push(routing.homepage.HOMEPAGE);
    // };

    return (
        <div className='signin'>
            <Image
                className='signin__background'
                alt='background signin'
                src={background.SIGNIN}
                preview={false}
                height='100%'
                width='100%'
            />
            <Modal
                title={
                    <Flex gap='middle' align='center'>
                        {/* <Logo /> */}
                        <Image
                            className='signin__background'
                            alt='background signin'
                            src='/gif/gopher-dance.gif'
                            preview={false}
                            height='60px'
                            width='auto'
                        />

                        <Typography type='title' level={3} style={{ margin: 0 }}>
                            Log-in
                        </Typography>
                    </Flex>
                }
                open={true}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                // onCancel={handleCancel}
                okText='Sign in'
                // cancelText='Back to homepage'
                centered
                mask
            >
                <LoginForm
                    submit={submit}
                    setSubmit={setSubmit}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    setConfirmLoading={setConfirmLoading}
                />
            </Modal>
        </div>
    );
}
