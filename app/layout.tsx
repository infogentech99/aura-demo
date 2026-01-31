import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Hargun Weds Ria - InviteArc",
  description: "Premium wedding invitation templates by InviteArc",

  openGraph: {
    images: [
      {
        url: "https://res.cloudinary.com/dx2di0mvx/image/upload/w_1200,h_630,c_fill,q_auto,f_jpg/v1769836114/newmoon_b7pdb5.png",
        width: 1200,
        height: 630,
        alt: "Hargun Weds Ria Invitation",
      },
    ],
    title: "Hargun Weds Ria - InviteArc",
    description: "Premium wedding invitation templates by InviteArc",
    url: "https://hargunwedsria.invitearc.com/",
    siteName: "InviteArc",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
