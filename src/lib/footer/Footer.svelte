<script>
  export const title = 'svelte & tailwind';
</script>

<footer class="bg-footer border-t border-stone-300 bg-stone-200">
  <div class="container mx-auto px-5">
    <div class="flex flex-col items-center py-28 md:flex-row">
      <h3
        class="mb-10 text-center text-4xl font-bold lowercase leading-tight tracking-tighter text-stone-900 md:mb-0 md:w-1/2 md:pr-4 md:text-left md:text-[2.5rem]">
        <a href="/">{title}</a>
      </h3>
      <div class="flex flex-col items-center justify-center md:w-1/2 md:flex-row md:pl-4">
        <!-- <a class="btn bg-stone-900 text-white" href="/login"> Login </a> -->
        <a class="btn bg-stone-900 text-white hover:bg-stone-800 hover:shadow-lg hover:shadow-stone-800/50 active:bg-stone-900 active:shadow" href="/contact">
          Contact
        </a>
      </div>
    </div>
  </div>
</footer>
