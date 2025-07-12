<script>
  import { page } from '$app/state';
  import SubPages from '$components/SubPages.svelte';

  let note = $derived(page.data);
</script>

<div class="my-9">
  
  <div class="flex flex-col gap-5 md:w-2/3 mx-auto content">
    

    {#if note.imgUrl}
      <img src={note.imgUrl} alt={note.title} class="rounded-xl" />
    {/if}

    <!-- Pass the pullnote HTML through -->
    {@html note.content}

    <SubPages />

  </div>

</div>
