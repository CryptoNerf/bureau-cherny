(() => {
  // Контакты собираются в браузере, чтобы их не было в исходном HTML для сборщиков адресов.
  const contacts = {
    phone: ['+7', '903', '160', '76', '30'].join(' '),
    email: ['ivan.chorny', 'gmail.com'].join('@'),
  };
  document.querySelectorAll('[data-contact]').forEach((node) => {
    node.textContent = contacts[node.dataset.contact];
  });

  const stage = document.querySelector('.gallery-stage');
  const count = document.querySelector('.gallery-count');
  const slides = stage.querySelectorAll('img');
  let current = 0;

  const show = (index) => {
    slides[current].classList.remove('is-active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('is-active');
    count.textContent = `${current + 1} / ${slides.length}`;
  };

  stage.addEventListener('click', () => show(current + 1));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') show(current + 1);
    if (event.key === 'ArrowLeft') show(current - 1);
  });

  let touchX = null;
  stage.addEventListener('touchstart', (event) => {
    touchX = event.touches[0].clientX;
  }, { passive: true });
  stage.addEventListener('touchend', (event) => {
    if (touchX === null) return;
    const dx = event.changedTouches[0].clientX - touchX;
    touchX = null;
    if (Math.abs(dx) < 40) return;
    show(current + (dx < 0 ? 1 : -1));
    event.preventDefault();
  });
})();
