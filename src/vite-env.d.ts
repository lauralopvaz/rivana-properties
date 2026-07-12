/// <reference types="vite/client" />
/// <reference types="vite-imagetools/client" />

declare module "*?responsive" {
  const value: import("vite-imagetools/dist/types").Picture;
  export default value;
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export {};
