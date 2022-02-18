<script context="module">
  // import { browser, dev } from '$app/env';

  // we don't need any JS on this page, though we'll load
  // it in dev so that we get hot module replacement...
  // export const hydrate = dev;

  // ...but if the client-side router is already loaded
  // (i.e. we came here from elsewhere in the app), use it
  // export const router = browser;

  // since there's no dynamic data here, we can prerender
  // it so that it gets served as a static asset in prod
  export const prerender = true;
</script>

<script>
  const title = 'sveltekit';
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<main class="container mx-auto px-5">
  <section class="flex min-h-screen flex-col items-center pt-[40vh] pb-16 md:flex-row md:justify-between md:pt-16 md:pb-12">
    <h1 class="uppercase_ text-6xl font-bold leading-tight tracking-tighter text-stone-900 md:pr-8 md:text-8xl"><a href="/">{title}</a></h1>
  </section>
</main>
