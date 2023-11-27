<script>
  import { createElement } from 'react';
  import ReactComponent from '../shared/ReactComponent.svelte';
  import { Resume } from './Resume';
</script>

<ReactComponent component={() => createElement(Resume)} />
