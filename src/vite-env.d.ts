/// <reference types="vite/client" />

declare global {
  // vite-imagetools `?responsive` picture object.
  interface ResponsivePicture {
    sources: Record<string, string>;
    img: { src: string; w: number; h: number };
  }

  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

declare module "*?responsive" {
  const value: ResponsivePicture;
  export default value;
}

export {};
