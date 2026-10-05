import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-dvh flex justify-center px-4">
      <section className="m-4 text-center">
        <Image
            src="/images/make-it-happy-cafe-logo-new-transparent.png"
            alt="Make It Happy Café logo"
            priority
            width={500}
            height={150}
            className="p-2 pl-8 pr-8 h-auto w-full max-w-[500px]"
            sizes="(max-width: 480px) 90vw, (max-width: 768px) 60vw, 400px"
          />
        <div className="mt-4 mx-auto max-w-prose space-y-4 bg-white/30 rounded-2xl p-4 sm:p-6">
          <p className="text-xl text-neutral-700">
            Opening Spring of 2027.
          </p>
        </div>
      </section>
    </main>
  );
}
