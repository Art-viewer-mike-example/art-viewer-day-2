import {
  fetchAllArtByKeyword
} from "./fetch-funcs";

export default async function app(mainEl) {
  const mainTitle = document.createElement('h1')
  mainTitle.textContent = 'Art Viewer';
  mainEl.append(mainTitle);

  // TODO: remove this code when we fetch for real
  const artworks = await fetchAllArtByKeyword()
  console.log('Fetch #1, list')
  console.table(artworks)
}