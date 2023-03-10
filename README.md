# Nuxt Template

An opinionated Vue.js full-stack and typesafe starter-kit that consists of:

- [Nuxt](https://nuxt.com)
- [Nuxt Icon](https://github.com/nuxt-modules/icon)
- [Nuxt Image](https://github.com/nuxt/image)
- [Nuxt Color Mode](https://color-mode.nuxtjs.org)
- [Nuxt Security](https://nuxt-security.vercel.app)
- [Pinia](https://pinia.esm.dev)
- [VueUse](https://vueuse.org)
- [Prisma](https://prisma.io)
- [Zod](https://zod.dev)
- [Unocss](https://uno.antfu.me)
- [Headless UI](https://headlessui.com)

- [ESLint](https://eslint.org)
- [Prettier](https://prettier.io)

## Setup

Make sure to install the dependencies:

```bash
# pnpm
pnpm install
```

### Enable Volar Takeover Mode

https://vuejs.org/guide/typescript/overview.html#volar-takeover-mode

## Development Server

Start the development server on http://localhost:3000

```bash
pnpm dev
```

### Database (PostgreSQL)

```bash
docker-compose up -d
```

## Production

Build the application for production:

```bash
pnpm build
```

Locally preview production build:

```bash
pnpm preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
