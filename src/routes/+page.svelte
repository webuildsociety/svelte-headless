<script>
  import { page } from '$app/state';
  import SubPages from '$components/SubPages.svelte';

  let note = $state(page.data);
</script>

<div class="w-full bg-[#ace0f1] flex justify-center items-center">
  <img src="/svelte-headless.png" alt="Svelte Headless" />
</div>


<div class="flex flex-col gap-5 md:w-2/3 mx-auto my-9">

  <!-- Pass the pullnote HTML through -->
  {@html note.content}

  <SubPages />

</div>
