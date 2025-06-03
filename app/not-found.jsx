"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-black text-white">
      <h1 className="text-6xl font-extrabold mb-4 animate-bounce">404</h1>
      <p className="text-2xl font-semibold mb-6">
        Uh oh — looks like you’re off the grid.
      </p>
      <p className="mb-8 text-muted-foreground max-w-md">
        The page you’re looking for doesn’t exist or may have been moved. Let’s
        get you back to safety.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition"
      >
        Return Home
      </Link>
    </div>
  );
}
