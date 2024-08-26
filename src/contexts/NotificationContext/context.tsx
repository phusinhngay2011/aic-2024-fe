"use client";
import { ClassName, Style } from "@types";
import { NotificationArgsProps } from "antd";
import { createContext } from "react";

export type NotificationPlacement = NotificationArgsProps['placement'];
export type NotificationType = 'success' | 'error' | 'info' | 'warning';
export type NotificationOpts = {
  type?: NotificationType;
  icon?: React.ReactNode;
  message: React.ReactNode;
  description?: React.ReactNode;
  placement?: NotificationPlacement;
  duration?: number;
  style?: Style;
  className?: ClassName;
}
export type NotificationContextFields = {
  open: (opts: NotificationOpts) => void;
};

export const NotificationContext = createContext<NotificationContextFields>({
  open: (opts: NotificationOpts) => {
    throw new Error("Not implemented yet");
  }
});
