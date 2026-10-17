# Welcome to your Lovable project

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Open your project in the [Lovable editor](https://lovable.dev) and keep building.

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: connect the project to GitHub and every change made in Lovable is committed straight to your repository.
- **Full ownership**: this code is yours. Push to your repository and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Deploy to Vercel

This project is configured for Vercel with TanStack Start and Nitro.

### Deploy from Git

1. Push the repository to GitHub, GitLab, or Bitbucket.
2. Import the repository at [vercel.com/new](https://vercel.com/new).
3. Keep the detected framework as **TanStack Start**.
4. Deploy without adding a custom output directory or rewrite.

Every push to the production branch creates a production deployment. Other branches
receive preview deployments.

### Deploy with the Vercel CLI

```sh
npx vercel
npx vercel --prod
```

Before deploying, verify the same checks Vercel runs:

```sh
npm install
npm run lint
npm test
npm run build
```

This portfolio currently has no required environment variables. If server-side
secrets are added later, configure them in Vercel Project Settings and do not use
the `VITE_` prefix for private values.

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS
