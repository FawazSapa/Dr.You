import type { Metadata } from "next";
// layout.tsx
import "bootstrap/dist/css/bootstrap.min.css";

export const metadata: Metadata = {
  title: "Health Care",
  description: "Dr. You",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
