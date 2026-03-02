async function loadHTMLFragment(file, targetSelector) {
  try {
    const response = await fetch(file);
    if (!response.ok) {
      throw new Error(`Failed to load ${file}: ${response.status}`);
    }
    const html = await response.text();
    const targetElement = document.querySelector(targetSelector);
    if (targetElement) {
      targetElement.innerHTML = html;
    } else {
      console.error(`Target element not found: ${targetSelector}`);
    }
  } catch (error) {
    console.error(`Error loading ${file}:`, error);
  }
}

async function loadAllFragments() {
  const fragments = [
    ['html/navigation.html', '#navigation-container'],
    ['html/hero.html', '#hero-container'],
    ['html/menu.html', '#menu-container'],
    ['html/about.html', '#about-container'],
    ['html/privatisation.html', '#privatisation-container'],
    ['html/find.html', '#find-container'],
    ['html/reviews.html', '#reviews-container'],
    ['html/media-banner.html', '#media-banner-container'],
    ['html/footer.html', '#footer-container'],
  ];

  const fragmentPromises = fragments
    .filter(([, selector]) => document.querySelector(selector))
    .map(([file, selector]) => loadHTMLFragment(file, selector));
  await Promise.all(fragmentPromises);
  
  window.dispatchEvent(new CustomEvent('fragmentsLoaded'));
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadAllFragments);
} else {
  loadAllFragments();
}

