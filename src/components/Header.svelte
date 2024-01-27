<script>
  import { page } from '$app/stores';
</script>
<div class="flex flex-1 flex-row items-center md:w-2/3 mx-auto my-5 gap-5">

  <h1>{$page.data.title}</h1>

  <a href="/blog" class="flex-grow text-right underline">Blog</a>
  <a href="/getting-started" class="underline">Getting Started</a>
  {#if !($page.data.is_root)}
    <a href={$page.data.category.pathname} class="underline" data-sveltekit-reload>
      {$page.data.category.title}
    </a>
  {/if}
</div>
<hr />
