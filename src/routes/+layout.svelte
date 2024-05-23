<script>
  import "../app.css";
  import Header from '$components/Header.svelte';
  import Footer from '$components/Footer.svelte';

  export let data;
  $: note = data; // Make the note reactive so that layout.svelte refreshes with url changes

</script>

<svelte:head>
  {#if note.head_html}
    {@html note.head_html}
  {/if}
</svelte:head>

<Header />

<div class="my-9">
  
  <div class="flex flex-col gap-5 md:w-2/3 mx-auto content">
    
    {#if note._id}

      {#if note.picture}
        <img src={note.img.src} alt={note.img.alt} class="rounded-xl" />
      {/if}

      <!-- Pass the pullnote HTML through -->
      {@html note.content_html}

    {:else}

      <!-- This keeps non-pullnote folders working -->
      <slot />

    {/if}
  
    <!-- Basic menu for other notes in the same folder -->
    {#if note.links}
      <hr />
      <h4 class="italic">Related docs</h4>
      <div class="flex flex-col gap-3">
        {#each note.links as subnote}
          <div class="flex flex-row gap-2 items-center">
            <a href={subnote.href} class="w-20 h-20">
              {#if subnote.img.src}
                <img src={subnote.img.src} alt={subnote.img.alt} class="w-10" />
              {/if}
            </a>
            <a href={subnote.href}>{subnote.title}</a>
          </div>
        {/each}
      </div>
    {/if}

  </div>

</div>

<Footer />