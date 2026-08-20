(function () {
  const href = 'client/custom/modules/endless-dream-travel/img/favicon.svg?v=1.0.28';
  const links = [...document.querySelectorAll('link[rel~="icon"]')];
  if (!links.length) {
    const link = document.createElement('link');
    link.rel = 'icon';
    link.type = 'image/svg+xml';
    document.head.appendChild(link);
    links.push(link);
  }
  for (const link of links) link.href = href;
})();
