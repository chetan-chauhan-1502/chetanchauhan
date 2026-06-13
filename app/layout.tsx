import type { Metadata } from "next";
import { Geist } from "next/font/google";

import "./globals.css";
import ThemeProvider from "./providers/themeProvider";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Chetan Chauhan",
    template: "Chetan Chauhan",
  },
  description: "Frontend Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={geist.className}>
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Header />

            <main className="flex-1">{children}</main>

            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
