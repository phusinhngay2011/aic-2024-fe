"use client";

import { AntdRegistry } from "@ant-design/nextjs-registry";
import { config } from "@configs";
import { LoadingProvider, NotificationProvider } from "@contexts";
import { BaseLayoutProps } from "@types";
import { ConfigProvider } from 'antd';

import { SessionProvider } from "next-auth/react";
export function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <ConfigProvider theme={config}>
      <SessionProvider>
        <LoadingProvider>
          <NotificationProvider>
            <AntdRegistry>{children}</AntdRegistry>
          </NotificationProvider>
        </LoadingProvider>
      </SessionProvider>
    </ConfigProvider>
  );
}
