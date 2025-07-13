# Svelte Headless
Example site showing how to create a simple blog site in Svelte 5 that plugs into a headless CMS.
See this running at [svelteheadless.com](https://www.svelteheadless.com/).

## Getting started
- Clone [this repo](https://github.com/webuildsociety/svelte-headless) with `git clone git@github.com:webuildsociety/svelte-headless.git your_new_name`
- Install with `npm install`
- Copy example.env to `.env` and put your own pullnote api_key in (they are free from pullnote.com)
- Run with `npm run dev`

*See [how it works](https://svelteheadless.com/how-it-works) for a walkthrough of the code.*

## Make it your own
- We use [Tailwind](https://tailwindcss.com/) for CSS styling, as it's faster to code and less prone to mistakes than standard CSS. Add your own styling in `app.css`
- Edit content using the javascript markdown editor at [Pullnote](https://pullnote.com)
- Non-CMS pages can be added as normal under `routes`
- Replace `/src/routes/+page.svelte` with your home-page and adjust `Header.svelte` and `Footer.svelte` to suit

## Get it live
*We use Vercel for hosting (but you can just as easily host on Netlify, Cloudflare Pages or your own GCP / AWS VM.*)
- Get a free [github](https://github.com) account and use [GitHub desktop](https://desktop.github.com/) to upload to your repo
- Register a domain (we use [Fasthosts](https://fasthosts.co.uk)) and add an A record to point it at Vercel's public IP address `76.76.21.21`
- Setup a [Vercel](https://vercel.com) account and point it at your github account and domain
- Et Voila! You're live on the internet with an editable blog.
