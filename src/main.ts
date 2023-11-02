import App from './App.svelte';
import './style/main.scss';
import './style/theme.scss';

const app = new App({
  target: document.getElementById('app') as HTMLElement
});

export default app;
