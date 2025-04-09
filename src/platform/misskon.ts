import { Platform } from './base';

export class Misskon extends Platform {
  get isSupported(): boolean {
    return location.hostname.includes('misskon.com');
  }

  get galleryTitle(): string {
    return document.querySelector('h1')?.textContent?.trim() || 'Untitled';
  }

  get images(): string[] {
    const imageLinks = Array.from(document.querySelectorAll('.gallery-item a'));
    return imageLinks.map((a) => a.href);
  }
}
