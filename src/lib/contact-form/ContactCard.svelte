<script>
  import ContactForm from './ContactForm.svelte';

  export let subline;
</script>

<div class="mt-20 min-w-[100%] overflow-hidden rounded bg-stone-100 shadow-lg sm:w-[550px] sm:min-w-[550px]">
  <div class="px-6 py-4">
    <h2 class="my-3 text-3xl font-bold leading-tight tracking-tighter text-stone-900 md:pr-8 md:text-4xl">Contact</h2>
    <p hidden={!subline} class="mb-5 text-base text-stone-700">
      {subline}
    </p>
    <ContactForm />
  </div>
</div>
