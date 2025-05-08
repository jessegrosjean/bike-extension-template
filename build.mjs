import { buildExtension } from "bike-extension-api/scripts/build-extension.mjs";

const installExtension = false;

if (installExtension) {
    await buildExtension("~/Library/Containers/com.hogbaysoftware.Bike/Data/Library/Application\ Support/Bike/Extensions")
} else {
    await buildExtension("out")
}