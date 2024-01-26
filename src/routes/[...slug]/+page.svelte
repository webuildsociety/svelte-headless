<script>
  import { page } from '$app/stores';
  import BlogLinks from '$components/BlogLinks.svelte';

  $: note = $page.data;

</script>

<div class="flex flex-col gap-5 md:w-2/3 mx-auto">
  <a href={note.category.pathname} data-sveltekit-reload>
    {note.category.title}
  </a>

  <h1>{note.title}</h1>

  {#if note.picture}
    <img src={note.img.src} alt={note.img.alt} />
  {/if}

  {@html note.content_html}

  <h2>Related articles</h2>
  <BlogLinks />

</div>
