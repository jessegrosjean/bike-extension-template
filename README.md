!!! Work in Progress

# Bike Extension Template

This is a template project for building Bike 2 extensions.

Bike extensions run in a unique environment. This project is setup to get you
started quickly with a working extension that follows best practices.

## Getting Started

1. Clone this repository
2. Update `manifest.json` with unique `id`
3. Run `npm install` to install dependencies
4. Run `npm run dev` to build the extension in watch mode
5. Run `npm run build` to build the extension for production

The built extension is named by `id` and placed into `./out`. You can modify
`./build.js` to instead place the extension into Bike's Extenssions folder where
it will be live reloaded as you make changes.

## Extension Contexts

Bike extensions can contribute code in three contexts:

- `@app`: This where you define core extension logic. Interact with outline
  editors, clipboard, and networking with the proper permissions. Use `import {
  SYMBOL } from '@app'` to access Bike's app context API.

- `@dom`: This is where you define custom views using HTML/DOM. Code runs in a
  WebView hosted in Bike's UI. These views don't load automatically, they are
  loaded from APIs such as `presentSheet` in the `app` context. Use `import {
  SYMBOL } from '@dom'` to access Bike dom context API.

- `@style`: This is where you define editor stylesheets. Most extensions are
  unlikely to do this and can delete `src/style`. Use `import { SYMBOL } from
  '@style'` to access Bike style context API.

Each context coresponds to a folder in `src`. You can delete a folder if your
extension doesn't use that context. The `tsconfig.json` file in each folder is
important to make type checking work.

# Next Steps

1. Modify or remove `src/app/main.ts` file for `@app` extension code.
2. Modify, add, or remove `src/dom/*.ts|tsx` files for `@dom` extension code.
3. Modify or remove `src/style/main.ts` file for `@style` extension code.

This project depends on the
[`bike-extension-api`](https://github.com/jessegrosjean/bike-extension-api)
package. That package provides type definitions for each of the three extension
contexts in addition to build and configuration tools.