<script>
  import "../app.css";
  import Header from '$components/Header.svelte';
  import Footer from '$components/Footer.svelte';

  export let data;
  $: note = data; // Make the note reactive so that layout.svelte refreshes with url changes

</script>

<svelte:head>
  {@html note.head_html}
</svelte:head>

<Header />

<div class="my-9">
  
  <div class="flex flex-col gap-5 md:w-2/3 mx-auto content">
  
    {#if note.picture}
      <img src={note.img.src} alt={note.img.alt} class="rounded-xl" />
    {/if}
  
    {#if note._id}

      <!-- Pass the pullnote HTML through -->
      {@html note.content_html}

    {:else}

      <!-- This keeps non-pullnote folders working -->
      <slot />

    {/if}
  
    <!-- Basic menu for other notes in the same folder -->
    <ul>
      {#each note.links as subnote}
        <li><a href={subnote.href}>{subnote.title}</a></li>
      {/each}
    </ul>

  </div>

</div>

<Footer />