import { DOMExtensionContext } from '@dom';

export async function activate(context: DOMExtensionContext) {
    context.element.textContent = 'Hello DOM Context World!';
}