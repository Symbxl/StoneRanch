import type { Metadata } from "next";
import "./globals.css";
import ThemeRegistry from "./theme/ThemeRegistry";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Stone Ranch Roofing | Utah's Trusted Roofing Experts",
  description:
    "Stone Ranch Roofing is Utah's choice for reliable roofs. Residential roofing, commercial roofing, repairs, gutters, soffits and fascias. Free estimates statewide.",
  keywords: [
    "Utah roofing",
    "Salt Lake City roofer",
    "residential roofing Utah",
    "commercial roofing Utah",
    "roof repair Utah",
    "gutter installation Utah",
    "Stone Ranch Roofing",
  ],
  openGraph: {
    title: "Stone Ranch Roofing | Utah's Trusted Roofing Experts",
    description:
      "Premium roof replacements, repairs, and storm-damage restoration. Honest, reliable builders serving Utah statewide.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
