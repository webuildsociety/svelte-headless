<script>
  import { page } from '$app/state';
  let note = $state(page.data);
</script>

<div class="w-full bg-[#ace0f1] flex justify-center items-center">
  <img src="/svelte-headless.png" alt="Svelte Headless" />
</div>


<div class="flex flex-col gap-5 md:w-2/3 mx-auto my-9">

  <!-- Pass the pullnote HTML through -->
  {@html note.content}

  <!-- Basic menu for other notes in the same folder -->
  {#if note?.links?.length}
    <hr />
    <h4 class="italic">Related docs</h4>
    <div class="flex flex-col gap-3">
      {#each note.links as subnote}
        <div class="flex flex-row gap-2 items-center">
          <a href={"/" + subnote.path} class="w-20 h-20">
            {#if subnote.imgUrl}
              <img src={subnote.imgUrl} alt={subnote.title} class="w-10" />
            {/if}
          </a>
          <a href={"/" + subnote.path}>{subnote.title}</a>
        </div>
      {/each}
    </div>
  {/if}

</div>
