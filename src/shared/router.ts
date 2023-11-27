import page from 'page';
import { readonly, writable } from 'svelte/store';
import { type ComponentType } from 'svelte';

export interface CurrentRoute {
  context: PageJS.Context;
  component: ComponentType;
}

export interface SvelteModule {
  default: ComponentType;
}

export type RedirectRoute = [/*from=*/ string, /*to=*/ string];

export type RouteMapping = [/*path=*/ string, /*component=*/ () => Promise<SvelteModule>];

const store = writable<CurrentRoute>();

export const ROUTE_STORE = readonly(store);

export function setupRoutes(
  redirectRoutes: RedirectRoute[],
  routeMappings: RouteMapping[],
  pageLoadingComponent: ComponentType
) {
  page.stop();
  store.update((val) => ({
    ...val,
    component: pageLoadingComponent,
  }));
  for (const [from, to] of redirectRoutes) {
    page(from, to);
  }
  for (const [path, module] of routeMappings) {
    page(path, async (context) => {
      store.set({
        context,
        component: pageLoadingComponent,
      });
      const component = (await module()).default;
      store.set({
        context,
        component,
      });
    });
  }
  page.start({ click: false });
  return ROUTE_STORE;
}
