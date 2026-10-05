import "./globals.css";
import BrickBackground from "@/components/BrickBackground";

export const metadata = {
  title: "Make It Happy Café",
  description:
    "Opening Spring of 2027.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-dvh bg-white text-neutral-900 antialiased">
        <BrickBackground
          brickWidth={120}
          brickHeight={40}
          stroke="#d4d4d4"
          strokeWidth={1}
          phoneScale={0.6}
        />
        {children}
      </body>
    </html>
  );
}
