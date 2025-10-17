export const metadata = {
  title: "Make It Happy Café — Inclusive Work, Great Coffee",
  description:
    "A café staffed by adults with special needs. First location opening soon — join our newsletter for updates.",
  metadataBase: new URL("https://your-domain.com"),
  openGraph: {
    title: "Make It Happy Café",
    description:
      "A café staffed by adults with special needs. Opening soon.",
    url: "https://your-domain.com",
    siteName: "Make It Happy Café",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Make It Happy Café",
    description:
      "A café staffed by adults with special needs. Opening soon.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased text-neutral-900 bg-white">
        {children}
      </body>
    </html>
  );
}
