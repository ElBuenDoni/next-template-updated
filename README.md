# next-custom-template

A minimal Next.js starter with strict TypeScript, Tailwind CSS, [Oxlint](https://oxc.rs/docs/guide/usage/linter.html) and [Oxfmt](https://oxc.rs/docs/guide/usage/formatter.html), ready to be used as a GitHub template.

_Dependency ranges as of 2026-11-25._

## What's included

| Tool                                          | Version   |
| --------------------------------------------- | --------- |
| Next.js (App Router, Turbopack)               | ^16.4.6   |
| React / React DOM                             | ^19.3.1   |
| TypeScript (strict mode)                      | ^7.0.2    |
| Tailwind CSS (via `@tailwindcss/turbopack`)   | ^4.3.5    |
| Oxlint                                        | ^1.94.0   |
| Oxlint type-aware backend (`oxlint-tsgolint`) | ^7.0.2008 |
| Oxfmt                                         | ^0.79.0   |
| pnpm                                          | 12.21.0   |

It also ships with a neutral home page and root layout (header, main, footer) that you can replace.

## Requirements

- Node.js 24 or newer (the version is pinned in `.nvmrc`)
- pnpm 12.21.0 (set in `packageManager`; Corepack can install it for you)

## Getting started

1. Click **Use this template** on GitHub to create a new repository.
2. Clone it, select the Node.js version and install the dependencies:

   ```bash
   nvm use
   pnpm install
   ```

3. Start the development server:

   ```bash
   pnpm dev
   ```

4. Open <http://localhost:3000>.

## Scripts

| Script              | Description                                       |
| ------------------- | ------------------------------------------------- |
| `pnpm dev`          | Start the development server                      |
| `pnpm build`        | Create a production build                         |
| `pnpm start`        | Run the production build                          |
| `pnpm lint`         | Lint the code with Oxlint                         |
| `pnpm lint:fix`     | Lint and apply automatic fixes                    |
| `pnpm lint:types`   | Run Oxlint with type-aware rules (`--type-aware`) |
| `pnpm type:check`   | Type-check with `tsc --noEmit`                    |
| `pnpm format`       | Format the code with Oxfmt                        |
| `pnpm format:check` | Check formatting without changing files           |
| `pnpm check`        | Run lint, format check, type check and build      |

Run `pnpm check` before every commit.

## Configuration

- **Next.js** (`next.config.ts`):
  - **Cache Components** (`cacheComponents: true`): data fetching is dynamic by default; use the `use cache` directive to opt in to caching.
  - **Partial Prefetching** (`partialPrefetching: true`): links prefetch the static parts of each route.
  - **Tailwind CSS** is wired through the `@tailwindcss/turbopack` loader.
- **TypeScript** (`tsconfig.json`): strict mode, with the `@/*` alias pointing to `./src/*`.
- **Oxlint** (`oxlint.config.ts`): `correctness` rules as errors, `suspicious` rules as warnings, with the ESLint, TypeScript, Unicorn, Oxc, React, Next.js and jsx-a11y plugins. Type-aware rules are not part of `pnpm lint`; run them separately with `pnpm lint:types`.
- **Oxfmt** (`oxfmt.config.ts`): `printWidth` set to 80, to match Prettier's default.
- Oxfmt also sorts the keys of `package.json` by default, so run `pnpm format` after editing it.
- The project uses `"type": "module"`, so config files that use CommonJS must use the `.cjs` extension.

## Notes

- `next build` does not run the linter, so run `pnpm lint` yourself.
- Type-aware linting relies on `oxlint-tsgolint`, which is still in alpha, so it is kept out of the default `pnpm lint`.
- Oxfmt is a `0.x` package: a plain `pnpm update` only bumps patch versions.

## Keeping the template up to date

Before starting a new project, update the dependencies and check that everything still passes:

```bash
pnpm update
pnpm update --latest oxfmt
pnpm up tailwindcss @tailwindcss/turbopack
pnpm check
```

Keep `tailwindcss` and `@tailwindcss/turbopack` on the same version.

## License

[MIT](LICENSE)
