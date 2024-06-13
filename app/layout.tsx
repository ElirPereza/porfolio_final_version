import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/provider/providers";
import { fontSans } from "@/components/others/fonts";
import clsx from "clsx";
import { Navbar } from "@/components/navbar";
import { Card } from "@nextui-org/react";


export const metadata: Metadata = {
  title: {
    default: "NEXTUI PORTFOLIO",
    template: 'Cualquier cosa',
  },
  description: 'portofolio personal jesus maldonado implementando nextjs y nextui',
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={clsx(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable
      )}>

        <Providers themeProps={{ children, attribute: "class", defaultTheme: "dark" }}>

          <div className="relative flex flex-col h-screen ">

            <Navbar />

            <Card className="container mx-auto min-w-[90%] h-full p-5 flex-grow border border-white" style={{ backgroundImage: 'url("space.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
              {children}
            </Card>
            <footer className="w-full flex items-center justify-center py-3 gap-2">

              <span className="text-default-600">Powered by</span>
              <p className="text-primary">Maldonado</p>

            </footer>
          </div>

        </Providers>

      </body>
    </html>
  );
}
