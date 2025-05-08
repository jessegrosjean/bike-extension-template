# Bike Extension Template

🚧 **Work in Progress**

This is a template project for building **Bike 2** extensions.

Bike extensions run in a specialized environment. This template provides a
working extension setup with best practices to help you get started quickly.

## Getting Started

1. Clone this repository.
2. Open `manifest.json` and update with unique `id`.
3. Install dependencies: `npm install`.
4. Start development build in watch mode: `npm run dev`.
5. Create a production build: `npm run build`.

The built extension is named by `id` and placed into `./out`.

> 💡 You can modify `./build.js` to output directly into Bike's Extensions folder.

## Extension Contexts

Bike extensions contribute code in three separate contexts, each with its own
purpose and environment:

### @app: Application Logic

- Runs in Bike's native app environment.
- Interact with outlines, clipboard, networking, etc.
- Some API's require appropriate `manifest.json` permissions.
- Import @app context API using `import { SYMBOL } from '@app'`.

### @dom: DOM/HTML Views

- Runs inside a WebView embedded in Bike’s UI.
- WebViews are sandboxed and have no network access.
- Use this context to define HTML/DOM-based views, such as panels or sheets.
- These views are loaded dynamically from APIs in the @app context.
- Import @dom context API using  `import { SYMBOL } from '@dom'`.

### @style: Outline Editor Styles

- Used to define custom stylesheets for Bike’s outline editor.
- Most extensions will not need this; delete the src/style folder if unused.
- Import @style context API using  `import { SYMBOL } from '@style'`.

> 📞 @app and @dom code from same extension can communicate using `postMessage`.  
> 🗂 Each context corresponds to a subfolder in `src/`. Delete unused folders.  
> ✅ Each folder contains a `tsconfig.json` file to enable type checking.  

# Next Steps

1. Modify or remove `src/app/main.ts` for `@app` logic.
2. Modify, add, or remove files under `src/dom` for UI components.
3. Modify or remove `src/style/main.ts` for stylesheet code.

This project depends on the
[`bike-extension-api`](https://github.com/jessegrosjean/bike-extension-api)
package. That package provides type definitions for each of the three extension
contexts in addition to build and configuration tools.