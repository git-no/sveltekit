<script>
  export const title = 'svelte & tailwind';
</script>

<footer class="bg-footer_ border-t border-slate-300 bg-slate-200">
  <div class="container mx-auto px-5">
    <div class="flex flex-col items-center py-28 md:flex-row">
      <h3
        class="mb-10 text-center text-4xl font-bold lowercase leading-tight tracking-tighter text-slate-900 md:mb-0 md:w-1/2 md:pr-4 md:text-left md:text-[2.5rem]">
        <a class="link decoration-transparent" href="/">{title}</a>
      </h3>
      <div class="flex flex-col items-center justify-center md:w-1/2 md:flex-row md:pl-4">
        <a
          class="btn bg-slate-800 text-white  hover:bg-slate-900 hover:shadow-lg hover:shadow-slate-900/20 hover:active:bg-slate-800"
          href="/login active:shadow-none">
          Login
        </a>
        <a class="btn btn-main" href="/contact"> Contact </a>
      </div>
    </div>
  </div>
</footer>
