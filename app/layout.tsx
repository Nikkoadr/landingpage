import "./globals.css";

export const metadata = {
  title: "SMK Muhammadiyah Kandanghaur",
  description: "SMK Pusat Keunggulan",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="antialiased">{children}</body>
    </html>
  );
}
