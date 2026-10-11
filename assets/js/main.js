/* Lumi Divine Esthetic · interações da landing page (JavaScript puro, sem dependências) */
(() => {
  'use strict';

  const body = document.body;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  /* ---------- WhatsApp: mensagens prontas ----------
     O número fica no href de cada link (funciona mesmo sem JavaScript).
     Aqui só acrescentamos o texto da mensagem. */
  const MSG_AGENDAR = 'Olá! Vim pelo site e gostaria de agendar uma avaliação.';
  const msgAssunto = (assunto) => `Olá! Vim pelo site e gostaria de saber mais sobre ${assunto}.`;

  document.querySelectorAll('a[data-wa], a[data-wa-assunto]').forEach((link) => {
    const base = link.getAttribute('href').split('?')[0];
    const texto = link.dataset.waAssunto ? msgAssunto(link.dataset.waAssunto) : MSG_AGENDAR;
    link.setAttribute('href', `${base}?text=${encodeURIComponent(texto)}`);
  });

  /* ---------- Cabeçalho com fundo ao rolar ---------- */
  const header = document.querySelector('[data-header]');
  const updateHeader = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  /* ---------- Menu do celular ---------- */
  const toggle = document.querySelector('[data-menu-toggle]');
  const menu = document.querySelector('[data-menu]');
  const toggleLabel = toggle.querySelector('.visually-hidden');
  const desktop = window.matchMedia('(min-width: 960px)');

  const setMenu = (open) => {
    toggle.setAttribute('aria-expanded', String(open));
    toggleLabel.textContent = open ? 'Fechar menu' : 'Abrir menu';
    menu.classList.toggle('is-open', open);
    body.classList.toggle('menu-open', open);
    if (open) menu.querySelector('a').focus({ preventScroll: true });
  };

  toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
  menu.addEventListener('click', (event) => {
    if (event.target.closest('a')) setMenu(false);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menu.classList.contains('is-open')) {
      setMenu(false);
      toggle.focus();
    }
  });
  desktop.addEventListener('change', () => setMenu(false));

  /* ---------- Entradas suaves ao rolar ---------- */
  const reveals = document.querySelectorAll('.reveal');
  const showAll = () => reveals.forEach((el) => el.classList.add('in', 'settled'));

  if ('IntersectionObserver' in window && !reduceMotion.matches) {
    const revealObserver = new IntersectionObserver((entries) => {
      let step = 0;
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        el.style.setProperty('--d', `${Math.min(step, 5) * 90}ms`);
        step += 1;
        el.classList.add('in');
        revealObserver.unobserve(el);
        window.setTimeout(() => el.classList.add('settled'), 1500);
      });
    }, { rootMargin: '0px 0px -6% 0px', threshold: 0.1 });

    reveals.forEach((el) => revealObserver.observe(el));
  } else {
    showAll();
  }

  reduceMotion.addEventListener('change', (event) => {
    if (event.matches) showAll();
  });

  /* ---------- Filtro de tratamentos ---------- */
  const chips = document.querySelectorAll('[data-filter]');
  const cardList = document.querySelector('[data-cards]');
  const cards = cardList ? cardList.querySelectorAll('.card') : [];
  const status = document.querySelector('[data-filter-status]');

  chips.forEach((chip) => {
    chip.addEventListener('click', () => {
      const filtro = chip.dataset.filter;
      let visiveis = 0;

      chips.forEach((c) => c.setAttribute('aria-pressed', String(c === chip)));
      cards.forEach((card) => {
        const mostrar = filtro === 'todos' || card.dataset.categoria === filtro;
        card.hidden = !mostrar;
        card.classList.remove('pop');
        if (mostrar) {
          visiveis += 1;
          if (!reduceMotion.matches) {
            void card.offsetWidth; // reinicia a animação
            card.classList.add('pop');
          }
        }
      });

      cardList.scrollLeft = 0;
      status.textContent = `Mostrando ${visiveis} ${visiveis === 1 ? 'tratamento' : 'tratamentos'}`;
    });
  });

  /* ---------- Link ativo no menu ---------- */
  const navLinks = [...document.querySelectorAll('.nav__link')];
  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  if ('IntersectionObserver' in window && sections.length) {
    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = `#${entry.target.id}`;
        navLinks.forEach((link) => {
          if (link.getAttribute('href') === id) link.setAttribute('aria-current', 'true');
          else link.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });

    sections.forEach((section) => navObserver.observe(section));
  }

  /* ---------- Botão flutuante do WhatsApp (aparece depois do topo) ---------- */
  const floatBtn = document.querySelector('[data-wa-float]');
  const hero = document.querySelector('.hero');

  if (floatBtn && hero && 'IntersectionObserver' in window) {
    new IntersectionObserver(([entry]) => {
      floatBtn.classList.toggle('is-visible', !entry.isIntersecting);
    }, { threshold: 0.05 }).observe(hero);
  } else if (floatBtn) {
    floatBtn.classList.add('is-visible');
  }

  /* ---------- Ano no rodapé ---------- */
  const year = document.querySelector('[data-year]');
  if (year) year.textContent = String(new Date().getFullYear());

  /* ---------- Pausa animações com a aba escondida ---------- */
  document.addEventListener('visibilitychange', () => {
    body.classList.toggle('paused', document.hidden);
  });
})();
