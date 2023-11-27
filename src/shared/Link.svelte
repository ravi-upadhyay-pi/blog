<script lang="ts">
  import page from 'page';

  export let href: string;

  function pushHistory() {
    page(href);
  }
</script>

<a {href} on:click|preventDefault={pushHistory}>
  <slot />
</a>
