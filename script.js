
// Load correct CSS file

if (window.matchMedia('(prefers-color-scheme: dark)').media === 'not all') {
  document.documentElement.style.display = 'none';
  document.head.insertAdjacentHTML(
    'beforeend',
    '<link rel="stylesheet" href="./resources/css/light.css" onload="document.documentElement.style.display = \'\'">'
  );
}
