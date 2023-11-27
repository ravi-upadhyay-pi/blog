<script lang="ts">
  import { createElement, type FunctionComponent } from 'react';
  import { createRoot, type Root } from 'react-dom/client';
  import { afterUpdate, onDestroy } from 'svelte';

  export let component: FunctionComponent;

  let container: HTMLElement;
  let root: Root;

  afterUpdate(() => {
    const root = createRoot(container);
    root.render(createElement(component, {}, []));
  });

  onDestroy(() => {
    root.unmount();
  });
</script>

<div bind:this={container} />
