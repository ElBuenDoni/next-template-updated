const features = [
  {
    name: "Next.js",
    description: "App Router with Cache Components and Partial Prefetching.",
  },
  {
    name: "TypeScript",
    description: "Strict mode, checked with tsc.",
  },
  {
    name: "Tailwind CSS",
    description: "Wired through the Turbopack loader.",
  },
  {
    name: "Oxlint",
    description: "Fast linting, with optional type-aware rules.",
  },
  {
    name: "Oxfmt",
    description: "Fast, Prettier-compatible formatting.",
  },
];

export default function Page() {
  return (
    <section className="space-y-8">
      <div className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight">
          Your project starts here
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400">
          Edit this page and the layout to begin. Run{" "}
          <code className="rounded bg-neutral-100 px-1.5 py-0.5 text-sm dark:bg-neutral-800">
            pnpm check
          </code>{" "}
          before every commit.
        </p>
      </div>

      <ul className="grid gap-4 sm:grid-cols-2">
        {features.map((feature) => (
          <li
            key={feature.name}
            className="rounded-lg border border-neutral-200 p-4 dark:border-neutral-800"
          >
            <h2 className="font-semibold">{feature.name}</h2>
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
              {feature.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
