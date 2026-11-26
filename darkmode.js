(function () {
  const root = document.documentElement;
  root.dataset.theme = localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';
  document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('bascule-theme');
    if (!btn) return;
    const maj = () => { btn.textContent = root.dataset.theme === 'dark' ? '\u2600\uFE0F Jour' : '\uD83C\uDF19 Nuit'; };
    maj();
    btn.addEventListener('click', () => {
      root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', root.dataset.theme);
      maj();
    });
  });
})();
