<script>
  import { page } from '$app/state';

  let note = $derived(page.data);
</script>

  <!-- Basic menu for other notes in the same folder -->
  {#if note?.links?.length}
    <hr />
    <h4 class="italic">Related</h4>
    <div class="flex flex-wrap gap-3">
      {#each note.links as subnote}
        <div class="flex flex-row gap-2 items-center">
          <a href={"/" + subnote.path} class="w-20 h-20">
            {#if subnote.imgUrl}
              <img src={subnote.imgUrl} alt={subnote.title} class="w-10" />
            {:else}
              <img src="/logo.png" alt={subnote.title} class="w-10" />
            {/if}
          </a>
          <a href={"/" + subnote.path}>{subnote.title}</a>
        </div>
      {/each}
    </div>
  {/if}
