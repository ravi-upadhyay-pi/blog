<script lang="ts">
  import PageLoading from './shared/PageLoading.svelte';
  import { setupRoutes } from './shared/router';

  const store = setupRoutes(
    [['/', '/blog']],
    [
      ['/blog/:id', () => import('./blog/BlogPage.svelte')],
      ['/blog', () => import('./blog/ListPage.svelte')],
      ['/resume', () => import('./resume/ResumePage.svelte')],
      ['*', () => import('./shared/NotFound.svelte')]
    ],
    PageLoading
  );
</script>

<svelte:component this={$store.component} />
