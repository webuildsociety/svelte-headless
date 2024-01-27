# Svelte Headless
Example site showing how to create a simple blog site that plugs into a headless CMS.

## Getting started
- Clone this repo with `git clone git@github.com:webuildsociety/svelte-headless.git`
- Install with `npm install`
- Run with `npm run dev`

## To make it your own
- We use [Tailwind](https://tailwindcss.com/) for CSS styling, as it's faster to code and less prone to mistakes than standard CSS. Add your own styling in `app.css`
- We use [Pullnote](https://pullnote.com) as the content management system, as it's headless and free. Setup your own, and replace the key `PULLNOTE_KEY`` in `+layout.server.js`
- Non-CMS pages can be added normally with additional folders under `routes`
- Replace +page.svelte with your home-page and adjust `Header.svelte` for `Footer.svelte` for site-wide consistency

## To get it live
- Get a free github repository and use GitHub desktop to upload your version of this code
- Register a domain (we use [Fasthosts](https://fasthosts.co.uk)) and add an A record to point it at 76.76.21.21
- Setup a [Vercel](https://vercel.com) account and point it at your github account and domain
