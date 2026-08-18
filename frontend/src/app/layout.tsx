import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SME Cyber Trust Readiness & Security Advisory Platform",
  description:
    "A cybersecurity assessment platform that helps SMEs understand their Cyber Trust preparedness, identify security gaps, and receive relevant security recommendations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}