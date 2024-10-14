/// <reference types="astro/client" />
declare global {
  interface Window {
    lastScrollY: number;
  }
}

export {}; // This ensures the file is treated as a module