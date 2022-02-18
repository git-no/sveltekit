# SvelteKit Tailwind Template

A tempalte a s starter kit of SvelteKit with tailwind installation. Example at [sveltekit-tailwind-template-start](https://sveltekit-tailwind-template-start.vercel.app).

## Integrated

- SvelteKit
- Tailwind (incl. CSS auto format)
- Prettier 
- Components (home page, error page, footer)

## Installation 

Clone[sveltekit-tailwind-template](https://github.com/git-no/sveltekit-tailwind-template) from github or install SvelteKit and Tailwind maually:

```
npm init svelte@next sveltekit  
cd sveltekit   
npm install   
git init && git add -A && git commit -m "Initial commit"

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init tailwind.config.cjs -p
mv postcss.config.js postcss.config.cjs
```
Make sure to configure `app.css`and `tailwind-config.json`. The tailwind installation is described [here](https://tailwindcss.com/docs/guides/sveltekit).

The github repository includes some additional styles.


## Next 

We are working on:

- Header with navigation
- Contact page
- Markdown support
- Night/Day (Darkmode)
- Cookies
- Cookies Banner
- Typescript Support
... 

## References

Some helpful resources

- [UI component library](https://sveltesociety.dev/components/)
- [Darkmode](https://flowbite.com/docs/customize/dark-mode/)
- [Buttons](https://flowbite.com/docs/components/buttons/)