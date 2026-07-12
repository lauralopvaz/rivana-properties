import { getResponsiveImage } from '@/data/journal-responsive-images';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  loading?: 'lazy' | 'eager';
  fetchPriority?: 'high' | 'low' | 'auto';
  width?: number;
  height?: number;
}

/**
 * Renders a <picture> with AVIF + WebP + JPG srcsets at 480/800/1200/1600 widths
 * when the image is registered in the journal responsive map. Falls back to a
 * plain <img> for images without responsive variants. Preserves the existing
 * className, alt text, and loading semantics of the previous <img> usage.
 */
export const ResponsiveImage = ({
  src,
  alt,
  className,
  sizes = '(min-width: 1024px) 1200px, 100vw',
  loading = 'lazy',
  fetchPriority,
  width = 1280,
  height = 800,
}: ResponsiveImageProps) => {
  const picture = getResponsiveImage(src);

  if (!picture) {
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        loading={loading}
        // @ts-expect-error - fetchpriority is valid HTML but not yet in React types
        fetchpriority={fetchPriority}
        decoding="async"
        width={width}
        height={height}
        sizes={sizes}
      />
    );
  }

  return (
    <picture>
      {Object.entries(picture.sources).map(([format, srcSet]) => (
        <source key={format} type={`image/${format}`} srcSet={srcSet} sizes={sizes} />
      ))}
      <img
        src={picture.img.src}
        alt={alt}
        className={className}
        loading={loading}
        // @ts-expect-error - fetchpriority is valid HTML but not yet in React types
        fetchpriority={fetchPriority}
        decoding="async"
        width={picture.img.w}
        height={picture.img.h}
        sizes={sizes}
      />
    </picture>
  );
};