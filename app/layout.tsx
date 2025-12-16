import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { PHProvider } from "./providers/posthog";
import PostHogPageView from "./PostHogPageView";
import { Analytics } from "@vercel/analytics/react";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sivan Chakravarthy - Developer & Musician",
  description: "Developer, builder, engineer and musician based in India",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isProd = process.env.NODE_ENV === "production";

  return (
    <html lang="en" className="scroll-smooth">
      <PHProvider>
        <body
          className={`${inter.className} bg-background text-foreground min-h-screen flex flex-col`}
        >
          <Suspense fallback={null}>
            <PostHogPageView />
          </Suspense>

          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
          {isProd ? <Analytics /> : <></>}
        </body>
      </PHProvider>
    </html>
  );
}
