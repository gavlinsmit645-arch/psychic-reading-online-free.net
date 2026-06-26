(function () {
  var header = document.getElementById('proHeader');
  var drawer = document.getElementById('proMobileDrawer');
  var toggle = document.getElementById('proMobileToggle');
  var closeBtn = document.getElementById('proMobileClose');
  var btt = document.getElementById('proBackTop');

  function openDrawer() {
    if (!drawer) return;
    drawer.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }
  function closeDrawer() {
    if (!drawer) return;
    drawer.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  if (toggle) toggle.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (drawer) drawer.addEventListener('click', function (e) {
    if (e.target === drawer) closeDrawer();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeDrawer();
  });

  function onScroll() {
    if (header) {
      if (window.scrollY > 20) header.classList.add('is-scrolled');
      else header.classList.remove('is-scrolled');
    }
    if (btt) {
      if (window.scrollY > 400) btt.classList.add('is-visible');
      else btt.classList.remove('is-visible');
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (btt) {
    btt.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
})();
