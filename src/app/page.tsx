import Image from "next/image";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <header className="mb-10">
        <div className="py-6">
          <Image
            src="/images/make-it-happy-cafe-logo.png"
            alt="Make It Happy Café logo"
            priority
            // Set a fixed rendered width; keep aspect by letting height auto
            style={{ width: 200, height: "auto" }}
            // Help the browser pick the right size across breakpoints
            sizes="(max-width: 640px) 160px, 200px"
            width="0"
            height="0"
          />
        </div>
      </header>

      <section className="space-y-6">
        <h1 className="text-4xl font-bold tracking-tight">A café built on inclusion.</h1>
        <p className="text-lg text-neutral-700">
          We’re opening our first location soon, staffed by adults with special needs.
          Sign up to hear when doors open, view our menu, and learn how to support the mission.
        </p>

        <div className="mt-10 space-y-2 text-sm text-neutral-600">
          <p><strong>First location:</strong> Your City, ST — Target launch: Winter 2025</p>
        </div>
      </section>

      <footer className="mt-20 border-t pt-6 text-sm text-neutral-600">
        <p>© {new Date().getFullYear()} Make It Happy Café. All rights reserved.</p>
      </footer>
    </main>
  );
}
