import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { PHProvider } from "./providers/posthog";
import dynamic from "next/dynamic";

const inter = Inter({ subsets: ["latin"] });

const PostHogPageView = dynamic(() => import("./PostHogPageView"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "Sivan Chakravarthy - Developer & Musician",
  description: "Developer, builder, engineer and musician based in India",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <PHProvider>
        <body
          className={`${inter.className} bg-background text-foreground min-h-screen flex flex-col`}
        >
          <PostHogPageView />

          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
        </body>
      </PHProvider>
    </html>
  );
}
