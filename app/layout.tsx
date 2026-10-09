import type { Metadata } from "next";
import type { ReactNode } from "react";
import { site } from "../data/site";
import "./globals.css";

export const metadata: Metadata = {
  title: site.name,
  // TODO: owner-approved meta description.
  robots: { index: false, follow: false }, // TODO: remove at launch after owner approval.
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
