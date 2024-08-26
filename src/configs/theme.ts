import type { ThemeConfig } from 'antd';
import { theme } from 'antd';

const { darkAlgorithm, compactAlgorithm } = theme;
const { getDesignToken, useToken } = theme;

export const config: ThemeConfig = {
    token: {
        // Seed Token
        colorPrimary: 'var(--primary-color)',
        borderRadius: 6,

        // Alias Token
        colorBgContainer: '#fafafa',
        colorLink: 'var(--primary-color)',
        colorBorder: 'var(--primary-color)',
    },
};
