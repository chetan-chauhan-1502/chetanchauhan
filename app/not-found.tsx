import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-6 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-muted-foreground">
        404
      </p>
      <h1 className="mt-4 text-4xl font-black">Page not found</h1>
      <p className="mt-4 text-muted-foreground">
        The page you requested does not exist.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-xl bg-foreground px-5 py-3 font-semibold text-background"
      >
        Return to Chetan Chauhan&apos;s portfolio
      </Link>
    </section>
  );
}
