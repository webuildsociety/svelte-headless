<script>
  import "../app.css";
  import { page } from '$app/stores'; // Import the page store to access route-specific data.
  import Header from '$components/Header.svelte';
  import Footer from '$components/Footer.svelte';
</script>
<svelte:head>
  {@html $page.data.head_html}
</svelte:head>

<Header />

<div class="my-9">
  <slot />
</div>

<Footer />