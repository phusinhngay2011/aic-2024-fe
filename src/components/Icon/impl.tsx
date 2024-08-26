"use client";
import {
    StepBackwardOutlined,
    StepForwardOutlined,
    StockOutlined,
    StopOutlined,
    StrikethroughOutlined,
    SubnodeOutlined,
    SwapOutlined,
    SwitcherOutlined,
    SyncOutlined,
    TableOutlined,
    TabletOutlined,
    TagOutlined,
    TagsOutlined,
    TeamOutlined,
    ThunderboltOutlined,
    ToTopOutlined,
    ToolOutlined,
    TrademarkOutlined,
    TransactionOutlined,
    TranslationOutlined,
    TrophyOutlined,
    UnlockOutlined,
    UpCircleOutlined,
    UpOutlined,
    UploadOutlined,
    UsbOutlined,
    UserAddOutlined,
    UserDeleteOutlined,
    UserOutlined,
    UserSwitchOutlined,
    UsergroupAddOutlined,
    UsergroupDeleteOutlined,
    VerticalAlignBottomOutlined,
    VerticalAlignMiddleOutlined,
    VerticalAlignTopOutlined,
    WalletOutlined,
    WarningOutlined,
    WechatOutlined,
    WeiboCircleOutlined,
    WeiboOutlined,
    WindowsOutlined,
    WomanOutlined,
    YahooOutlined,
    YoutubeOutlined,
} from "@ant-design/icons";
import { IconProps } from "./types";

export function Icon({ name, ...props }: IconProps) {
    switch (name) {
        case "step-backward-outlined":
            return <StepBackwardOutlined {...props} />;
        case "step-forward-outlined":
            return <StepForwardOutlined {...props} />;
        case "stock-outlined":
            return <StockOutlined {...props} />;
        case "stop-outlined":
            return <StopOutlined {...props} />;
        case "strikethrough-outlined":
            return <StrikethroughOutlined {...props} />;
        case "subnode-outlined":
            return <SubnodeOutlined {...props} />;
        case "swap-outlined":
            return <SwapOutlined {...props} />;
        case "switcher-outlined":
            return <SwitcherOutlined {...props} />;
        case "sync-outlined":
            return <SyncOutlined {...props} />;
        case "table-outlined":
            return <TableOutlined {...props} />;
        case "tablet-outlined":
            return <TabletOutlined {...props} />;
        case "tag-outlined":
            return <TagOutlined {...props} />;
        case "tags-outlined":
            return <TagsOutlined {...props} />;
        case "team-outlined":
            return <TeamOutlined {...props} />;
        case "thunderbolt-outlined":
            return <ThunderboltOutlined {...props} />;
        case "to-top-outlined":
            return <ToTopOutlined {...props} />;
        case "tool-outlined":
            return <ToolOutlined {...props} />;
        case "trademark-outlined":
            return <TrademarkOutlined {...props} />;
        case "transaction-outlined":
            return <TransactionOutlined {...props} />;
        case "translation-outlined":
            return <TranslationOutlined {...props} />;
        case "trophy-outlined":
            return <TrophyOutlined {...props} />;
        case "unlock-outlined":
            return <UnlockOutlined {...props} />;
        case "up-circle-outlined":
            return <UpCircleOutlined {...props} />;
        case "up-outlined":
            return <UpOutlined {...props} />;
        case "upload-outlined":
            return <UploadOutlined {...props} />;
        case "usb-outlined":
            return <UsbOutlined {...props} />;
        case "user-add-outlined":
            return <UserAddOutlined {...props} />;
        case "user-delete-outlined":
            return <UserDeleteOutlined {...props} />;
        case "user-outlined":
            return <UserOutlined {...props} />;
        case "user-switch-outlined":
            return <UserSwitchOutlined {...props} />;
        case "usergroup-add-outlined":
            return <UsergroupAddOutlined {...props} />;
        case "usergroup-delete-outlined":
            return <UsergroupDeleteOutlined {...props} />;
        case "vertical-align-bottom-outlined":
            return <VerticalAlignBottomOutlined {...props} />;
        case "vertical-align-middle-outlined":
            return <VerticalAlignMiddleOutlined {...props} />;
        case "vertical-align-top-outlined":
            return <VerticalAlignTopOutlined {...props} />;
        case "wallet-outlined":
            return <WalletOutlined {...props} />;
        case "warning-outlined":
            return <WarningOutlined {...props} />;
        case "weibo-circle-outlined":
            return <WeiboCircleOutlined {...props} />;
        case "weibo-outlined":
            return <WeiboOutlined {...props} />;
        case "wechat-outlined":
            return <WechatOutlined {...props} />;
        case "windows-outlined":
            return <WindowsOutlined {...props} />;
        case "woman-outlined":
            return <WomanOutlined {...props} />;
        case "yahoo-outlined":
            return <YahooOutlined {...props} />;
        case "youtube-outlined":
            return <YoutubeOutlined {...props} />;
        default:
            return <></>;
    }
}
