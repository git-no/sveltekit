<script>
  import ContactCard from '$lib/contact-form/ContactCard.svelte';
  const title = 'sveltekit';
</script>

<svelte:head>
  <title>Contact - {title}</title>
</svelte:head>

<main class="container mx-auto px-5">
  <section class="flex min-h-screen flex-col items-center justify-center pt-16 pb-16 md:pb-12">
    <h1 class="uppercase_ text-5xl font-bold leading-tight tracking-tighter text-stone-900 md:pr-8 md:text-8xl"><a href="/">{title}</a></h1>
    <ContactCard subline="Feel free to contact us." />
  </section>
</main>
