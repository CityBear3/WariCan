import type { Metadata } from "next";
import { Providers } from "./providers";
import { App } from "./app";

export const metadata: Metadata = {
  title: "WariCan",
  description: "produced by Shinobies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ height: "100%" }}>
      <body style={{ height: "100%" }}>
        <Providers>
          <App>{children}</App>
        </Providers>
      </body>
    </html>
  );
}
