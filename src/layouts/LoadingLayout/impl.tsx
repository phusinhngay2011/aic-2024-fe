"use client";
import { Loader } from '@components';
import { useLoading } from '@contexts';
import { BaseLayoutProps } from '@types';
import './styles.scss';

export function LoadingLayout({ children }: BaseLayoutProps) {
  const { loading } = useLoading();
  return (
    <>
      <div className={`
          loading-layout 
          loading-layout--${loading && 'display'}
        `}
      >
        <Loader />
      </div>
      {children}
    </>
  );
}
