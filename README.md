# Svelte Headless
Example site showing how to create a simple blog site that plugs into a headless CMS.
See this running at (svelteheadless.com)[https://www.svelteheadless.com/].

## Getting started
- Clone this repo with `git clone git@github.com:webuildsociety/svelte-headless.git`
- Install with `npm install`
- Run with `npm run dev`

## Make it your own
- We use [Tailwind](https://tailwindcss.com/) for CSS styling, as it's faster to code and less prone to mistakes than standard CSS. Add your own styling in `app.css`
- We use [Pullnote](https://pullnote.com) as the content management system, as it's headless and free. Setup your own, and replace the key `PULLNOTE_KEY` in `+layout.server.js`
- Non-CMS pages can be added normally with additional folders under `routes`
- Replace `+page.svelte` with your home-page and adjust `Header.svelte` and `Footer.svelte` for site-wide consistency

## Get it live
- Get a free [github](https://github.com) account and use GitHub desktop to upload a version of this code to your repo
- Register a domain (we use [Fasthosts](https://fasthosts.co.uk)) and add an A record to point it at 76.76.21.21
- Setup a [Vercel](https://vercel.com) account and point it at your github account and domain
- Et Voila! You're live on the internet with an editable blog.
