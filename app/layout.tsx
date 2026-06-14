import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prithvi Pathania — Software Developer Portfolio",
  description:
    "Software Development Student at SAIT. Proficient in Java, Python, React, and modern web technologies. Explore my projects, skills, and experience.",
  keywords: [
    "Prithvi Pathania",
    "Software Developer",
    "Portfolio",
    "Java",
    "Python",
    "React",
    "Next.js",
    "SAIT",
  ],
  authors: [{ name: "Prithvi Pathania" }],
  openGraph: {
    title: "Prithvi Pathania — Software Developer Portfolio",
    description:
      "Software Development Student at SAIT. Proficient in Java, Python, React, and modern web technologies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
