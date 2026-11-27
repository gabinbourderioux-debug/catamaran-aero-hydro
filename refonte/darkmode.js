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

(function () {
  document.addEventListener('DOMContentLoaded', () => {
    const tactile = window.matchMedia('(hover: none)');
    document.querySelectorAll('nav.sommaire li.deroulant > a').forEach(a => {
      a.addEventListener('click', e => {
        const li = a.parentElement;
        if (tactile.matches && !li.classList.contains('ouvert')) {
          e.preventDefault();
          document.querySelectorAll('nav.sommaire .deroulant.ouvert').forEach(x => x.classList.remove('ouvert'));
          li.classList.add('ouvert');
        }
      });
    });
    document.addEventListener('click', e => {
      if (!e.target.closest('nav.sommaire li.deroulant'))
        document.querySelectorAll('nav.sommaire .deroulant.ouvert').forEach(x => x.classList.remove('ouvert'));
    });
  });
})();
