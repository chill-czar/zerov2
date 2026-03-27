import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist, Inter, Space_Grotesk } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";
import { TopNavBar } from "~/components/landing/top-nav-bar";
import { Footer } from "~/components/landing/footer";

export const metadata: Metadata = {
  title: "ZERO PMO | Architectural Authority",
  description: "The definitive architectural standard for executive real estate asset management.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  other: {
    // Material Symbols icon font — not supported by next/font, loaded via link
    "font-preconnect-gstatic": "",
  },
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} ${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen bg-background text-on-background font-body selection:bg-primary selection:text-on-primary">
        <TRPCReactProvider>
          <div className="relative flex min-h-screen flex-col">
            <TopNavBar />
            <main className="flex-1 w-full overflow-hidden">
              {children}
            </main>
            <Footer />
          </div>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
