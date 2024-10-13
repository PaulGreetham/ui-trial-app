import * as React from "react";
import localFont from "next/font/local";
import "./globals.css";
import { HamburgerMenu } from "@/components/ui/hamburger";
import { X } from "lucide-react";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerClose, DrawerTrigger } from "@/components/ui/drawer";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {/* Ensure DrawerTrigger is within the Drawer context */}
          <Drawer>
            {/* Flex container for Hamburger and Theme Toggle */}
            <div className="flex items-center p-2">
              {/* Hamburger Menu as a Trigger inside Drawer */}
              <DrawerTrigger asChild>
                <HamburgerMenu />
              </DrawerTrigger>

              {/* ThemeToggle next to Hamburger Menu */}
              <ThemeToggle />
            </div>

            {/* Drawer Content */}
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Navigation</DrawerTitle>
                <DrawerClose asChild>
                  <button className="absolute top-7 right-2 p-2">
                    <X className="h-6 w-6" />
                  </button>
                </DrawerClose>
              </DrawerHeader>

              <nav className="p-4">
                <ul>
                  <li><a href="/" className="block p-2">Home</a></li>
                  <li><a href="/about" className="block p-2">About</a></li>
                  <li><a href="/services" className="block p-2">Services</a></li>
                  <li><a href="/contact" className="block p-2">Contact</a></li>
                  <li><a href="/" className="block p-2">Home</a></li>
                  <li><a href="/about" className="block p-2">About</a></li>
                  <li><a href="/services" className="block p-2">Services</a></li>
                  <li><a href="/contact" className="block p-2">Contact</a></li>
                </ul>
              </nav>
            </DrawerContent>
          </Drawer>

          {/* Main Content */}
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
