import "@styles/colors/index.scss";
import "@styles/global.scss";
import "@styles/loading.scss";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Sign-in',
    description: 'Sign-in',
};

export default function AuthLayout({ children }: React.PropsWithChildren) {
    return (
        <>
            {children}
        </>
    );
}
