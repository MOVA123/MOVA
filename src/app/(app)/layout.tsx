import type { Metadata } from "next"

export const metadata: Metadata={
  title: {
    default:'Dashboard | Dollo',
    template:'%s | Dollo'
  },
  icons: {
    icon: '/assets/icons/logo.ico'
  }
}

export default function Layout({
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
