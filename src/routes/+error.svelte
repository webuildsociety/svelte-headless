<script>
  import "../app.css";
  import { page } from '$app/stores';
</script>

<div class="system">
  <h1>{$page.error.message}</h1>
  <h2>#{$page.status} Error</h2>
</div>
