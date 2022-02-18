<script>
  import { sendFormspree } from './sendMail';
  import { createFieldValidator } from './validation.js';
  import { emailValidator, requiredValidator } from './validators.js';

  const [validity, validate] = createFieldValidator(requiredValidator(), emailValidator());

  let email = null;
  let success = false;
  let processing = false;

  const onSubmit = async (e) => {
    if (!e.isTrusted || !$validity.valid) {
      return;
    }

    processing = true;

    const formData = new FormData(e.target);
    success = await sendFormspree(formData);

    processing = false;
  };
</script>

{#if !success}
  <form on:submit|preventDefault={onSubmit}>
    <label for="message" class="text-stone-600"> Your Message </label>
    <textarea
      id="message"
      name="message"
      rows={8}
      required
      data-field="text"
      class="mb-5 h-48 w-full rounded-md border border-stone-300 p-2 focus:border-amber-400 focus:outline-none" />
    <label for="email" class="text-stone-600"> Your E-Mail Address </label>
    <input
      id="email"
      type="email"
      name="email"
      autoComplete="off"
      autoCorrect="off"
      required
      bind:value={email}
      use:validate={email}
      data-field="email"
      class="mb-5 h-8 w-full rounded-md border border-stone-300 p-2 focus:border-amber-400 focus:outline-none" />
    {#if $validity.dirty && !$validity.valid}
      <div class=" -mt-3 mb-5 rounded-lg bg-red-100 px-4 py-3 font-bold text-red-600" role="alert">
        {$validity.message}
      </div>
    {/if}

    {#if processing}
      <button
        type="button"
        class="btn hover: ml-0 inline-flex cursor-not-allowed items-center bg-amber-500 leading-6 text-white transition duration-150 ease-in-out active:scale-100"
        disabled="true">
        <svg class="-mb-1animate-spin -ml-1 mr-3 mb-1 h-4 w-4 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" />
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
        Processing
      </button>
    {:else}
      <button type="submit" class="btn btn-main ml-0 text-white"> Submit </button>
      <a
        class="btn mx-3 px-8 py-3 hover:bg-amber-400 hover:shadow-lg hover:shadow-amber-400/50 focus:ring-amber-400 active:bg-amber-500 active:shadow-none active:text-white"
        href="/">Cancel</a>
    {/if}
  </form>
{:else}
  <div class="rounded-lg bg-green-100 px-4 py-3 leading-normal text-green-700" role="alert">
    <p>Thank you. Your message was sent successfully. <a href="/">Click here to visit the home page</a>.</p>
  </div>
{/if}
