<script>
  import "../app.css";
  import Header from '$components/Header.svelte';
  import Footer from '$components/Footer.svelte';
  import { page } from '$app/stores';

  const defaultTitle = "Svelte Headless CMS";
  const defaultDescription = "Quick, easy, free headless CMS for SvelteKit";
  const defaultImgUrl = '/img/svelte-headless.png';

  let note = $state(page.data);
	let { children } = $props();
</script>

<svelte:head>
  <title>{note?.title || defaultTitle}</title>
  <meta name="description" content={note?.description || defaultDescription}>
  <link rel="canonical" href={note?.url}>
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="article">
  <meta property="og:title" content={note?.title || defaultTitle}>
  <meta property="og:description" content={note?.description || defaultDescription}>
  <meta property="og:url" content={note?.url}>
  <meta property="og:image" content={"https://svelteheadless.com" + (note?.imgUrl || defaultImgUrl)}>

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content={note?.title || defaultTitle}>
  <meta name="twitter:description" content={note?.description || defaultDescription}>
  <meta name="twitter:image" content={"https://svelteheadless.com" + (note?.imgUrl || defaultImgUrl)}>
  <meta name="twitter:imageAlt" content={note?.title || "Svelte Headless CMS"}>

  {@html '<script type="application/ld+json">' + JSON.stringify({
    "@context": "https://schema.org/",
    "@type": "Article",
    "headline": note?.title || defaultTitle,
    "description": note?.description || defaultDescription,
    "image": "https://svelteheadless.com" + (note?.imgUrl || defaultImgUrl),
    "url": note?.url
  }) + '</script>'}

</svelte:head>

<Header />

{@render children()}

<Footer />
