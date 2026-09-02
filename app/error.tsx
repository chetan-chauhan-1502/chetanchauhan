"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-6 text-center">
      <h2 className="text-4xl font-black">Something went wrong</h2>
      <p className="mt-4 text-muted-foreground">
        Please try again or return to the portfolio.
      </p>
      <div className="mt-8 flex gap-4">
        <button
          type="button"
          onClick={() => reset()}
          className="rounded-xl bg-foreground px-5 py-3 font-semibold text-background"
        >
          Try again
        </button>
        <Link
          href="/"
          className="rounded-xl border border-border px-5 py-3 font-semibold"
        >
          Go home
        </Link>
      </div>
    </section>
  );
}
