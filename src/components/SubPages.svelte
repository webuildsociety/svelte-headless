<script>
  import { page } from '$app/state';

  let note = $derived(page.data);
</script>

  <!-- Basic menu for other notes in the same folder -->
  {#if note?.links?.length}
    <hr />
    <h4 class="italic">Related</h4>
    <div class="flex flex-wrap gap-10">
      {#each note.links as subnote}
        <div class="flex flex-wrap gap-2 items-center">
          <a href={"/" + subnote.path}>
            {#if subnote?.imgUrl}
              <img src={subnote.imgUrl} alt={subnote?.title} class="w-6" />
            {:else}
              <img src="/logo.png" alt={subnote?.title} class="w-6" />
            {/if}
          </a>
          <a href={"/" + subnote.path}>{subnote.title}</a>
        </div>
      {/each}
    </div>
  {/if}
