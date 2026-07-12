/// <reference types="vite/client" />

// vite-imagetools `?responsive` picture object.
interface ResponsivePicture {
  sources: Record<string, string>;
  img: { src: string; w: number; h: number };
}

declare module "*?responsive" {
  const value: ResponsivePicture;
  export default value;
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export {};
