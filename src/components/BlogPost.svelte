<script>
  import { page } from '$app/stores';
  $: note = $page.data;
</script>

<div class="flex flex-col gap-5 md:w-2/3 mx-auto">
  {#if !note.is_root}
    <a href={note.category.pathname} data-sveltekit-reload>
      {note.category.title}
    </a>
  {/if}

  <h1>{note.title}</h1>

  {#if note.picture}
    <img src={note.img.src} alt={note.img.alt} />
  {/if}

  {@html note.content_html}

</div>
