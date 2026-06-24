
import type { Metadata } from "next";

import "./styles/styles.scss";
import { Topbar } from "./topbar";

export const metadata: Metadata = {
  title: "JonHirsch.dev",
  description: "My personal portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body>
        <div className="page">
          <Topbar />
          <div className={"page-content"}>{children}</div>
        </div>
      </body>
    </html>
  );
}
