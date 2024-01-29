# Svelte Headless
Example site showing how to create a simple blog site that plugs into a headless CMS.
See this running at [svelteheadless.com](https://www.svelteheadless.com/).

## Getting started
- Clone this repo with `git clone git@github.com:webuildsociety/svelte-headless.git`
- Install with `npm install`
- Run with `npm run dev`

*See [how it works](https://svelteheadless.com/how-it-works) for a walkthrough of the code.*

## Make it your own
- We use [Tailwind](https://tailwindcss.com/) for CSS styling, as it's faster to code and less prone to mistakes than standard CSS. Add your own styling in `app.css`
- We use [Pullnote](https://pullnote.com) as the content management system, as it's headless and free. Setup your own, and replace the `PULLNOTE_KEY` in `+layout.server.js`
- Non-CMS pages can be added as normal using additional folders under `routes`
- Replace `+page.svelte` with your home-page or adjust `Header.svelte` and `Footer.svelte` to suit

## Get it live
*We use Vercel for hosting, but you can just as easily host on Netlify, Cloudflare Pages or your own GCP / AWS VM.*
- Get a free [github](https://github.com) account and use [GitHub desktop](https://desktop.github.com/) to upload to your repo
- Register a domain (we use [Fasthosts](https://fasthosts.co.uk)) and add an A record to point it at Vercel's public IP address `76.76.21.21`
- Setup a [Vercel](https://vercel.com) account and point it at your github account and domain
- Et Voila! You're live on the internet with an editable blog.
