import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Next.js Template",
    template: "%s | Next.js Template",
  },
  description:
    "A minimal Next.js starter with strict TypeScript, Tailwind CSS, Oxlint and Oxfmt.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-white font-sans text-neutral-900 antialiased dark:bg-neutral-950 dark:text-neutral-100">
        <header className="border-b border-neutral-200 dark:border-neutral-800">
          <div className="mx-auto w-full max-w-3xl px-6 py-4 text-sm font-semibold">
            Next.js Template
          </div>
        </header>
        <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16">
          {children}
        </main>
        <footer className="border-t border-neutral-200 dark:border-neutral-800">
          <div className="mx-auto w-full max-w-3xl px-6 py-4 text-sm text-neutral-600 dark:text-neutral-400">
            Released under the MIT License.
          </div>
        </footer>
      </body>
    </html>
  );
}
