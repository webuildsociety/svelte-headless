<script>
  import { page } from '$app/stores';

  $: note = $page.data;

</script>

<div class="flex flex-col gap-5 md:w-2/3 mx-auto content">

  {#if note.picture}
    <img src={note.img.src} alt={note.img.alt} class="rounded-xl" />
  {/if}

  {@html note.content_html}

</div>
