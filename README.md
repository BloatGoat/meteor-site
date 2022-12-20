## Meteor

## Contributing

If you see any typos or formatting errors in a post, or any other issue that need to be addressed, please do not hesitate to open a pull request and fix it!

## Development

To start the project locally, run:

```bash
pnpm dev
```

Open `http://localhost:3000` with your browser to see the result.

## Documentation

### Requirements

- Node.js >= 16
- pnpm 7

this starter uses pnpm by default, but this choice is yours. If you'd like to switch to Yarn/npm, delete the pnpm-lock.yaml file, delete the preinstall script, install the dependencies with Yarn/npm, change the CI workflow, and Husky Git hooks to use Yarn/npm commands.

### Directory Structure

- [`.github`](.github) — GitHub configuration including the CI workflow.<br>
- [`.husky`](.husky) — Husky configuration and hooks.<br>
- [`public`](./public) — Static assets such as robots.txt, images, and favicon.<br>
- [`src`](./src) — Application source code, including pages, components, styles.

### Scripts

- `pnpm dev` — Starts the application in development mode at `http://localhost:3000`.
- `pnpm build` — Creates an optimized production build of your application.
- `pnpm start` — Starts the application in production mode.
- `pnpm type-check` — Validate code using TypeScript compiler.
- `pnpm lint` — Runs ESLint for all files in the `src` directory.
- `pnpm format` — Runs Prettier for all files in the `src` directory.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Code of Conduct

[Open Source Code of Conduct](/code-of-conduct.md)
