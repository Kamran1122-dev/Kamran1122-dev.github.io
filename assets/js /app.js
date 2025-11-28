const app = document.getElementById('app');

async function loadPage(page) {
  try {
    const res = await fetch(`/pages/${page}.html`);
    if (!res.ok) throw new Error('Page not found');
    const content = await res.text();
    app.innerHTML = content;
  } catch (err) {
    app.innerHTML = '<h2>404 - Page Not Found</h2>';
  }
}

function navigate() {
  const hash = location.hash.replace('#', '') || 'home';
  loadPage(hash);
}

window.addEventListener('hashchange', navigate);
window.addEventListener('load', navigate);
