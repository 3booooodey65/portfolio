# Abdalrahman Mater Portfolio

A fully responsive personal portfolio built with [React](https://react.dev/) and [Tailwind CSS](https://tailwindcss.com/).

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm run dev
```

Vite will print a local development URL (defaults to `http://localhost:5173`). Open it in your browser to view the portfolio and Tailwind-powered styling in real time.

### 3. Build for production (optional)

```bash
npm run build
```

This generates an optimized production build in the `dist` directory.

## Troubleshooting `npm install`

If you encounter a permissions error similar to:

```
npm ERR! code EEXIST
npm ERR! syscall rename
...
npm ERR! Invalid response body while trying to fetch https://registry.npmjs.org/debug: EACCES: permission denied
```

It usually means the local npm cache has files owned by another user. You can fix it by clearing the cache and resetting the permissions:

```bash
npm cache clean --force
rm -rf ~/.npm/_cacache
sudo chown -R "$(whoami)" ~/.npm
npm install
```

If you prefer not to change ownership, run the install once with elevated privileges instead:

```bash
sudo npm install
```

After the cache and permissions are reset, `npm install` should complete successfully.

The site includes sections for skills, ongoing learning, featured projects, and contact details, along with a smooth-scrolling navigation experience.
