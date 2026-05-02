import "./globals.css";

export const metadata = {
  title: "Arbroath AD 1320",
  description: "Luxury sea salt landing page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
