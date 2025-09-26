import "./globals.css";
import { Toaster } from "react-hot-toast";

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
      <body className="antialiased">
        {children}
        {/* 🔔 Global toaster biar bisa dipanggil dari mana saja */}
        <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
      </body>
    </html>
  );
}
