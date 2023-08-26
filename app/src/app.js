export default function app(mainEl) {
  const mainTitle = document.createElement('h1')
  mainTitle.textContent = 'Art Viewer';
  mainEl.append(mainTitle);
}