import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-dvh flex justify-center px-4">
      <section className="m-4 text-center">
        <div className="mb-4 mx-auto inline-block rounded-xl bg-gray-900">
          <Image
            src="/images/make-it-happy-cafe-logo-white.png"
            alt="Make It Happy Café logo"
            priority
            width={500}
            height={150}
            className="p-2 pl-8 pr-8 h-auto w-full max-w-[500px]"
            sizes="(max-width: 480px) 90vw, (max-width: 768px) 60vw, 400px"
          />
        </div>

        <h1 className="text-3xl font-bold tracking-tight">Careers for IDD.</h1>

        <div className="mt-4 mx-auto max-w-prose space-y-4 bg-white/30 rounded-2xl p-4 sm:p-6">
          <p className="text-lg text-neutral-700">
            Many young adults with intellectual and developmental disabilities have a desire
            for a meaningful career that is uniquely their own. Make It Happy Café fulfills
            this need by creating a locally based healthy and unique café experience in which
            the exceptional abilities of each IDD employee are elevated through an innovative
            work environment.
          </p>

          <div className="mt-10 flex flex-col items-center gap-6 md:flex-row md:items-center">
            <div className="shrink-0">
              <Image
                src="/images/mug-image.png"
                alt="Mug"
                priority
                width={500}
                height={500}
                className="h-auto w-56 sm:w-72 md:w-65"
                sizes="(max-width: 768px) 45vw, (max-width: 1200px) 30vw, 320px"
              />
            </div>

            <div className="flex-1 flex items-center justify-center">
              <p className="text-lg text-neutral-700 text-center">
                Check again soon for more information about our menu and mission.
              </p>
            </div>
          </div>

          <p className="mt-12 text-sm text-neutral-600">
            <strong>Target launch:</strong> Oconomowoc, WI — Summer 2026
          </p>
        </div>

        <footer className="pt-6 border-t text-sm text-neutral-600">
          © {new Date().getFullYear()} Make It Happy Café. All rights reserved.
        </footer>
      </section>
    </main>
  );
}
