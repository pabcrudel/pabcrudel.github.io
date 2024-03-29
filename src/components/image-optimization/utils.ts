import type { SrcSetValue } from "node_modules/astro/dist/assets/types";

export function getSizes(widths: number[]) {
  let sizes = "";

  const length = widths.length;
  for (let i = 0; i < length; i++) {
    const nextIndex = i + 1;

    sizes += nextIndex !== length
      ? `(max-width:${widths[nextIndex]}px) ${widths[i]}px, `
      : widths[i] + "px";
  }
  return sizes;
}

export function getImageSource(entries: SrcSetValue[]) {
  const imageSource = [];

  const length = entries.length;
  for (let i = 0; i < length; i++) {
    const { url, attributes } = entries[i];
    const nextIndex = i + 1;

    const media = nextIndex !== length
      ? `(max-width:${entries[nextIndex].transform.width}px)`
      : null;

    imageSource.push({ url, attributes, media });
  }
  return imageSource;
}
