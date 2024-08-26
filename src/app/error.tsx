'use client' // Error components must be Client Components

import { Button } from '@components';
import { Alert, Divider, Flex, Result } from 'antd';
import Link from 'next/link';

const { ErrorBoundary: AntdErrorBoundary } = Alert;

const ThrowError: React.FC<{ error: Error }> = ({ error }: { error: Error }) => {
    if (error) {
        throw error;
    }
    return (
        <></>
    );
};

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    return (
        <Result
            status="warning"
            title="There are some problems with your operation."
            extra={
                <Flex justify='center' align='center' gap='middle' vertical >
                    <Flex gap='small'>
                        <Button
                            onClick={
                                // Attempt to recover by trying to re-render the segment
                                () => reset()
                            }
                        >
                            Try again
                        </Button>
                        <Link href={'/'}>
                            <Button
                                type='primary'
                            >
                                Homepage
                            </Button>
                        </Link>
                    </Flex>

                    <Divider style={{
                        borderColor: 'var(--primary-color)'
                    }} />

                    {
                        error &&
                        <AntdErrorBoundary>
                            <ThrowError error={error} />
                        </AntdErrorBoundary>
                    }
                </Flex>

            }
        />
    )
}