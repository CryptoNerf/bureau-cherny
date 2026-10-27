(() => {
  // Контакты собираются в браузере, чтобы их не было в исходном HTML для сборщиков адресов.
  const contacts = {
    phone: ['+7', '903', '160', '76', '30'].join(' '),
    email: ['ivan.chorny', 'gmail.com'].join('@'),
  };
  document.querySelectorAll('[data-contact]').forEach((node) => {
    node.textContent = contacts[node.dataset.contact];
  });

  // Яндекс Метрика запускается только после согласия посетителя (152-ФЗ).
  const KEY = 'cookie-consent';
  const readChoice = () => { try { return localStorage.getItem(KEY); } catch { return null; } };
  const writeChoice = (value) => {
    try { value === null ? localStorage.removeItem(KEY) : localStorage.setItem(KEY, value); } catch {}
  };

  const loadMetrika = () => {
    (function(m,e,t,r,i,k,a){
      m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
      m[i].l=1*new Date();
      for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
      k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
    })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=113824878', 'ym');

    ym(113824878, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", referrer: document.referrer, url: location.href, accurateTrackBounce:true, trackLinks:true});
  };

  const banner = document.querySelector('.cookie');
  const choice = readChoice();
  if (choice === 'accepted') {
    loadMetrika();
  } else if (!choice && banner) {
    banner.hidden = false;
    banner.addEventListener('click', (event) => {
      const button = event.target.closest('[data-consent]');
      if (!button) return;
      writeChoice(button.dataset.consent);
      banner.hidden = true;
      if (button.dataset.consent === 'accepted') loadMetrika();
    });
  }

  // Отзыв согласия на странице политики: забываем выбор и удаляем cookies и данные Метрики.
  const revoke = document.querySelector('[data-consent-revoke]');
  if (revoke) {
    const status = document.querySelector('[data-consent-status]');
    const showStatus = () => {
      status.textContent = readChoice() === 'accepted' ? 'Сейчас согласие дано.' : 'Сейчас согласие не дано, Яндекс Метрика не работает.';
    };
    showStatus();
    revoke.addEventListener('click', () => {
      writeChoice('declined');
      const host = location.hostname;
      document.cookie.split(';').map((c) => c.split('=')[0].trim()).filter((name) => name.startsWith('_ym')).forEach((name) => {
        for (const domain of ['', `; domain=${host}`, `; domain=.${host}`]) {
          document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${domain}`;
        }
      });
      try { Object.keys(localStorage).filter((k) => k.startsWith('_ym')).forEach((k) => localStorage.removeItem(k)); } catch {}
      status.textContent = 'Согласие отозвано. Cookies Яндекс Метрики удалены, статистика по вам больше не собирается.';
    });
  }
})();
