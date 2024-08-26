import { BaseLayout, LoadingLayout, SiteLayout } from "@layouts";
import "@styles/colors/index.scss";
import "@styles/global.scss";
import "@styles/loading.scss";
import { Metadata } from "next";
import { Suspense } from "react";
import Loading from "./loading";

export const metadata: Metadata = {
  title: 'Homepage',
  description: 'Homepage',
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <BaseLayout>
        <SiteLayout>
          <body>
            <LoadingLayout>
              <Suspense fallback={<Loading />}>
                {children}
              </Suspense>
            </LoadingLayout>
          </body>
        </SiteLayout>
      </BaseLayout>
    </html>
  );
}
