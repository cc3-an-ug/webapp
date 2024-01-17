import clsx from 'clsx';

import {
  getImageDimensions,
  type SanityImageSource,
} from '@sanity/asset-utils';
import urlBuilder from '@sanity/image-url';

import { client } from '@/config/sanity';

export function DocsImage({
  value,
  isInline,
}: {
  value: SanityImageSource;
  isInline?: boolean;
}) {
  const { width, height } = getImageDimensions(value);

  const url = urlBuilder(client)
    .image(value)
    .width(Math.min(width, 2000))
    .fit('max')
    .auto('format')
    .url();

  return (
    <a href={url} rel="noreferrer" target="_blank">
      <img
        alt=""
        src={url}
        className={clsx(isInline && 'inline-block', 'mx-auto')}
        style={{ aspectRatio: width / height }}
      />
    </a>
  );
}
