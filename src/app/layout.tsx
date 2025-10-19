import "./globals.css";

export const metadata = {
  title: "Make It Happy Café — Inclusive Work, Great Coffee",
  description:
    "A café staffed by adults with special needs. First location opening soon — join our newsletter for updates.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-dvh bg-white text-neutral-900 antialiased">
        {children}
      </body>
    </html>
  );
}
