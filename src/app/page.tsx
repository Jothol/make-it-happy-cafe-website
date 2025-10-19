import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-dvh flex justify-center px-4">
      <section className="text-center">
        <div className="p-6">
          <Image
            src="/images/make-it-happy-cafe-logo.png"
            alt="Make It Happy Café logo"
            priority
            width={400}
            height={150}
            className="mx-auto h-auto w-full max-w-[400px]"
            sizes="(max-width: 480px) 90vw, (max-width: 768px) 60vw, 400px"
          />
        </div>

        <h1 className="text-4xl font-bold tracking-tight">A café built on inclusion.</h1>

        <div className="mt-4 mx-auto max-w-prose space-y-4">
          <p className="text-lg text-neutral-700">
            A gourmet cafe staffed by adults with special needs.
            More information will be available soon.
          </p>

          <p className="text-sm text-neutral-600">
            <strong>First location:</strong> Oconomowoc, WI — Target launch: Spring 2026
          </p>
        </div>

        <footer className="mt-12 pt-6 border-t text-sm text-neutral-600">
          © {new Date().getFullYear()} Make It Happy Café. All rights reserved.
        </footer>
      </section>
    </main>
  );
}
