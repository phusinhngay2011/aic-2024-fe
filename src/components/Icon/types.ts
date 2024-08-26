import { BaseComponentProps } from "@types";

export type IconName =
    | 'step-backward-outlined'
    | 'step-forward-outlined'
    | 'stock-outlined'
    | 'stop-outlined'
    | 'strikethrough-outlined'
    | 'subnode-outlined'
    | 'swap-outlined'
    | 'switcher-outlined'
    | 'sync-outlined'
    | 'table-outlined'
    | 'tablet-outlined'
    | 'tag-outlined'
    | 'tags-outlined'
    | 'team-outlined'
    | 'thunderbolt-outlined'
    | 'to-top-outlined'
    | 'tool-outlined'
    | 'trademark-outlined'
    | 'transaction-outlined'
    | 'translation-outlined'
    | 'trophy-outlined'
    | 'unlock-outlined'
    | 'up-circle-outlined'
    | 'up-outlined'
    | 'upload-outlined'
    | 'usb-outlined'
    | 'user-add-outlined'
    | 'user-delete-outlined'
    | 'user-outlined'
    | 'user-switch-outlined'
    | 'usergroup-add-outlined'
    | 'usergroup-delete-outlined'
    | 'vertical-align-bottom-outlined'
    | 'vertical-align-middle-outlined'
    | 'vertical-align-top-outlined'
    | 'wallet-outlined'
    | 'warning-outlined'
    | 'weibo-circle-outlined'
    | 'weibo-outlined'
    | 'wechat-outlined'
    | 'windows-outlined'
    | 'woman-outlined'
    | 'yahoo-outlined'
    | 'youtube-outlined';

export type IconProps = Omit<BaseComponentProps, 'children'> & {
    name: IconName;
    rotate?: number;
    spin?: boolean;

}