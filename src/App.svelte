<script lang="ts">
  import { setupRoutes } from "./router";
  import PageLoading from "./component/PageLoading.svelte";

  const store = setupRoutes(
    [["/", "/blog"]],
    [
      ["/blog/:id", () => import("./blog/BlogPage.svelte")],
      ["/blog", () => import("./blog/ListPage.svelte")],
      ["*", () => import("./component/NotFound.svelte")],
    ],
    PageLoading
  );
</script>

<svelte:component this={$store.component} />
