import { routing } from "@configs";
import "@styles/colors/color-palettes.scss";
import "@styles/colors/index.scss";
import "@styles/global.scss";
import "@styles/loading.scss";
import { BaseLayoutProps } from "@types";
import { Layout as AntdLayout } from "antd";
import Loading from "app/loading";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import { Content, Footer, Header } from "./_components";

export const metadata: Metadata = {
  title: 'Homepage',
  description: 'Homepage',
};

export default async function HomepageLayout({
  children,
}: Readonly<BaseLayoutProps>) {
  const session = (await getServerSession()) || {};
  const isAuth = Object.keys(session).length !== 0;
  if (Object.keys(session).length == 0) {
    redirect(routing.auth.SIGN_IN);
  }
  return (
    <Suspense fallback={<Loading />}>
      <AntdLayout >
        <Header isAuth={isAuth} />
        <Content style={{
          minHeight: "calc(100vh - 62px - 64px)",
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
          justifyContent: 'center'

        }}>
          {children}
        </Content>
        <Footer />
      </AntdLayout>
    </Suspense>

  );
}
