<script lang="ts">
  import { ROUTE_STORE } from "../router";
  import SvelteMarkdown from "svelte-markdown";

  const blogId: string = $ROUTE_STORE.context.params["id"];
  const url = "/blog/" + blogId + ".md";
  const content = fetch(url).then((response) => response.text());
</script>

<div class="container">
  {#await content}
    Loading page.
  {:then fetchedContent}
    <SvelteMarkdown source={fetchedContent} />
  {/await}
</div>

<style lang="scss">
  .container {
    margin-block: 24px;
    max-width: 50em;
    overflow-x: auto;
    width: 80%;
  }

  .container > :global(pre) {
    background-color: aliceblue;
    border: 1px solid #bbb;
    border-radius: 2px;
    padding: 4px 8px;
    max-width: 100%;
    overflow-x: auto;
  }

  .container > :global(hr) {
    margin-block: 12px;
    border: 1px solid var(--color-primary);
  }
</style>
