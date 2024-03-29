import type { ImgAttributes } from "astro:assets";
import type { ImageMetadata, ImageInputFormat } from "astro";

interface Props extends ImgAttributes {
  src: ImageMetadata;
  alt: string;
  widths: number[];
}

export interface ImageProps extends Props {
  format?: ImageInputFormat;
}

export interface PictureProps extends Props {
  formats?: ImageInputFormat[];
}
