"use client";

import { BaseProviderProps } from "@types";
import { notification } from "antd";
import { useCallback } from "react";
import { NotificationContext, NotificationOpts } from "./context";

type NotifProviderProps = BaseProviderProps;

export function NotificationProvider({ children }: NotifProviderProps) {
  const [api, contextHolder] = notification.useNotification();
  const open = useCallback(({ ...props }: NotificationOpts) => {
    api.open({ ...props });
  }, [api]);
  return (
    <NotificationContext.Provider
      value={{
        open
      }}
    >
      {contextHolder}
      {children}
    </NotificationContext.Provider>
  );
}
