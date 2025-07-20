<script>
  import { page } from '$app/state';

  let note = $derived(page.data);
</script>

  <!-- Basic menu for other notes in the same folder -->
  {#if note?.list?.siblings?.length}
    <hr />
    <div class="flex flex-col gap-10">

      {#each note.list?.parents as parent}
        <div class="flex flex-wrap gap-2 items-center">
          <a href={"/" + parent.path} class="text-sm">/ {parent.title}</a>
        </div>
      {/each}

      {#if note.list?.isFolder}
        {#each note.list?.children as child}
        <div class="flex flex-wrap gap-2 items-center">
          <a href={"/" + child.path}>
            {#if child?.imgUrl}
              <img src={child.imgUrl} alt={child?.title} class="w-6" />
            {:else}
              <img src="/logo.png" alt={child?.title} class="w-6" />
            {/if}
          </a>
            <a href={"/" + child.path}>{child.title}</a>
          </div>
        {/each}
      {:else}
            

        {#each note.list?.siblings as subnote}
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
      {/if}
    </div>
  {/if}
