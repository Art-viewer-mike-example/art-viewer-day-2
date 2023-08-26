import { fetchHandler } from "./fetch-funcs";

export default function app(mainEl) {
  const mainTitle = document.createElement('h1')
  mainTitle.textContent = 'Art Viewer';
  mainEl.append(mainTitle);

  // TODO: remove this code when we fetch for real
  fetchHandler('https://api.artic.edu/api/v1/artworks/129884').then(console.log);
  fetchHandler('https://api.artic.edu/api/v1/artworks/bad-url').then(console.log);
}