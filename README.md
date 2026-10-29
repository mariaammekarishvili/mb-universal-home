# MB Universal Home

React and TypeScript website built with Vite.

## Run locally

Install Node.js, then run:

```bash
npm ci
npm run dev
```

Open the local URL printed by Vite.

## Build

```bash
npm run build
```

Business phone, email, and social links are maintained in `src/data/BusinessContact.ts`.

## Deploy to GoDaddy Node.js Hosting

```bash
npm run zip:godaddy
```

This checks that the site builds, then creates `mb-universal-home-godaddy.zip` with the app source (no `node_modules`, no `dist`). In GoDaddy Node.js Hosting, choose **Upload ZIP** and upload that file. GoDaddy runs `npm install`, `npm run build` and `npm start` (which runs `server.js`). The zip includes `.airo/config.json`, which tells GoDaddy to serve the site with `npm start` instead of the Vite dev server. `vite.config.ts` uses GoDaddy's `PORT` if Vite is run there anyway.

When GoDaddy deploys from GitHub it keeps its own `.airo/config.json`, so `.airo/` is gitignored. Committing it makes GoDaddy's git pull fail.

GoDaddy installs only `dependencies`, so packages the build needs (Vite, TypeScript, React types) must stay in `dependencies`, not `devDependencies`.
