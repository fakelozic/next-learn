import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { template: "%s | Technical Agency", default: "Technical Agency" },
  description: "...",
};

import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        {children}
      </body>
    </html>
  );
}
