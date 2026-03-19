import type { Metadata } from "next";
import localFont from "next/font/local";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import PageTransition from "@/components/motion/page-transition";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/geist-sans.woff2",
  variable: "--font-geist-sans",
});

const geistMono = localFont({
  src: "./fonts/geist-mono.woff2",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: "Amohan Kannan | Developer Portfolio",
    template: "%s | Amohan Kannan",
  },
  description:
    "Modern developer portfolio built with Next.js, TypeScript, Tailwind CSS, shadcn/ui, and Framer Motion.",
  keywords: [
    "developer portfolio",
    "frontend developer",
    "next.js",
    "typescript",
    "portfolio",
  ],
  openGraph: {
    title: "Amohan Kannan | Developer Portfolio",
    description:
      "Frontend-focused developer portfolio with polished UI, strong structure, and modern product sensibilities.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amohan Kannan | Developer Portfolio",
    description:
      "Frontend-focused developer portfolio with polished UI, strong structure, and modern product sensibilities.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <ThemeProvider>
          <div className="relative flex min-h-screen flex-col overflow-hidden">
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.22),_transparent_35%),radial-gradient(circle_at_80%_20%,_rgba(34,211,238,0.14),_transparent_25%),linear-gradient(180deg,_rgba(17,24,39,0.65),_rgba(11,11,15,1))]" />
            <Navbar />
            <PageTransition>{children}</PageTransition>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
