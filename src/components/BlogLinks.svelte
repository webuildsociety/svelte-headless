<script>
  import { page } from '$app/stores';
  $: note = $page.data;
</script>

{#if note.links.length}    
  <div class="flex flex-col gap-5 md:w-2/3 mx-auto">
    <ul>
      {#each note.links as link}
        <li>
          <a class="link" href={link.pathname} data-sveltekit-reload>
            {link.title}
          </a>
        </li>
      {/each}
    </ul>
  </div>
{/if}
