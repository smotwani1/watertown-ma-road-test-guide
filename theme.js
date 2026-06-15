// Dark-mode toggle, shared across pages. The pre-paint theme is set by an
// inline script in each page's <head> to avoid a flash of the wrong theme.
(function () {
  var root = document.documentElement;
  var btn = document.getElementById('themeToggle');
  function sync() {
    var dark = root.getAttribute('data-theme') === 'dark';
    if (btn) {
      btn.setAttribute('aria-pressed', dark ? 'true' : 'false');
      btn.textContent = dark ? '\u2600' : '\u263E'; // sun when dark, moon when light
    }
  }
  sync();
  if (btn) {
    btn.addEventListener('click', function () {
      var dark = root.getAttribute('data-theme') === 'dark';
      if (dark) { root.removeAttribute('data-theme'); }
      else { root.setAttribute('data-theme', 'dark'); }
      try { localStorage.setItem('theme', dark ? 'light' : 'dark'); } catch (e) {}
      sync();
    });
  }
})();
