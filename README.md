# Bike Extension Template

This is a template project for building Bike 2 extensions.

Bike extensions run in a unique environment with unique conventions. This
project is setup to get you started quickly with a working extension.

## Getting Started

1. Clone this repository
2. Update `manifest.json`
3. Run `npm install` to install dependencies
4. Run `npm run dev` to build the extension in watch mode
5. Run `npm run build` to build the extension for production

The build extension placed into `./out`. Extension are named by `id` from the
`manifest.json` file.

## Extension Contexts

Bike extensions can contribute code in three contexts:

- `@app`: Code that runs directly in Bike app. This is where you can interact
  with the outline, editor, clipboard, etc. Code in this context should use
  `import { SYMBOL } from '@app'` to access Bike app context API.

- `@dom`: Code that runs in a WebView hosted in Bike's UI. This is where you can
  interact with HTML/DOM to show custom UI. Code in this context should use
  `import { SYMBOL } from '@dom'` to access Bike dom context API.

- `@style`: Code that defines the outline editor's stylesheet. These styles are
  not CSS, they are defined using Typescript code. Code in this context should
  use `import { SYMBOL } from '@style'` to access Bike style context API.

Each context coresponds to a folder in `src`. You can delete a folder if your
extension will not add code in that context. The `tsconfig.json` file in each
folder is important to make API type checking work.

# Next Steps

1. Modify or remove `src/app/main.ts` file for `@app` extension code.
2. Modify or remove `src/style/main.ts` file for `@style` extension code.
3. Modify, add, or remove `src/dom/*.ts|tsx` files for `@dom` extension code.

This project depends on the `bike-extension-api` package. That package provides type
definitions for each extension context.