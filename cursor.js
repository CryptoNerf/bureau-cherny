(() => {
  const label = document.getElementById('bureau-cursor');
  const finePointer = window.matchMedia('(any-hover: hover) and (any-pointer: fine)');
  const reset = () => {
    document.documentElement.classList.remove('custom-cursor');
  };
  window.addEventListener('pointermove', (event) => {
    if (!finePointer.matches || event.pointerType === 'touch') return;
    label.style.left = `${event.clientX}px`;
    label.style.top = `${event.clientY}px`;
    document.documentElement.classList.add('custom-cursor');
  }, { passive: true });
  document.documentElement.addEventListener('pointerleave', reset);
  window.addEventListener('blur', reset);
  window.addEventListener('pagehide', reset);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) reset();
  });
  finePointer.addEventListener('change', reset);
})();
