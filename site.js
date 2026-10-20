(() => {
  // Контакты собираются в браузере, чтобы их не было в исходном HTML для сборщиков адресов.
  const contacts = {
    phone: ['+7', '903', '160', '76', '30'].join(' '),
    email: ['ivan.chorny', 'gmail.com'].join('@'),
  };
  document.querySelectorAll('[data-contact]').forEach((node) => {
    node.textContent = contacts[node.dataset.contact];
  });
})();
