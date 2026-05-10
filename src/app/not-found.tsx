import Link from "next/link";

export default function NotFound() {
  return (
    <main className="section-shell flex min-h-screen flex-col items-start justify-center">
      <p className="mono mb-4 text-sm font-bold uppercase text-[var(--accent)]">
        404
      </p>
      <h1 className="max-w-2xl text-5xl font-black tracking-normal text-balance">
        This page is not part of the proof graph yet.
      </h1>
      <Link
        className="mt-8 rounded-md border border-[var(--line)] bg-white px-5 py-3 text-sm font-bold text-slate-950"
        href="/"
      >
        Return home
      </Link>
    </main>
  );
}
