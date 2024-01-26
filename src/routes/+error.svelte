<script>
  import "../app.css";
  import { page } from '$app/stores';

  import Header from '$components/Header.svelte';
  import Footer from '$components/Footer.svelte';
</script>

<Header />

<div class="system">
  <h1>{$page.error.message}</h1>
  <h2>#{$page.status} Error</h2>
</div>

<Footer />
