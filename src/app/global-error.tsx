

/**
 * 
    global-error.js is only enabled in production. 
    In development, our error overlay will show instead.
 */
'use client'

import { Button } from '@components';
import { Alert, Divider, Flex, Result } from 'antd';

const { ErrorBoundary } = Alert;

const ThrowError: React.FC<{ error: Error }> = ({ error }: { error: Error }) => {
    if (error) {
        throw error;
    }
    return (
        <></>
    );
};

export default function GlobalError({
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
                    <Button
                        onClick={
                            // Attempt to recover by trying to re-render the segment
                            () => reset()
                        }
                    >
                        Try again
                    </Button>

                    <Divider style={{
                        borderColor: 'var(--primary-color)'
                    }} />

                    {
                        error &&
                        <ErrorBoundary>
                            <ThrowError error={error} />
                        </ErrorBoundary>
                    }
                </Flex>

            }
        />
    )
}