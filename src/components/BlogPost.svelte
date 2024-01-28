<script>
  import { page } from '$app/stores';
  $: note = $page.data;
</script>

<div class="flex flex-col gap-5 md:w-2/3 mx-auto">
  <a href={note.category.pathname}>
    {note.category.title}
  </a>

  <h1>{note.title}</h1>

  {#if note.picture}
    <img src={note.img.src} alt={note.img.alt} />
  {/if}

  {@html note.content_html}

</div>
