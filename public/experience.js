(() => {
  const buttons = [...document.querySelectorAll('[data-filter]')];
  const cards = [...document.querySelectorAll('.brand-card')];
  const search = document.getElementById('brand-search');
  const count = document.getElementById('result-count');
  const empty = document.getElementById('empty-state');
  let filter = 'All';
  function update() {
    const query = search.value.trim().toLowerCase();
    let visible = 0;
    cards.forEach(card => {
      card.hidden = (filter !== 'All' && card.dataset.industry !== filter) || !(card.innerHTML + ' ' + card.textContent).toLowerCase().includes(query);
      if (!card.hidden) visible++;
    });
    count.textContent = `${visible} selected ${visible === 1 ? 'profile' : 'profiles'}`;
    empty.hidden = visible !== 0;
  }
  buttons.forEach(button => button.addEventListener('click', () => {
    filter = button.dataset.filter;
    buttons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    update();
  }));
  search.addEventListener('input', update);
  document.getElementById('print-experience').addEventListener('click', () => window.print());
  let openStates;
  window.addEventListener('beforeprint', () => {
    openStates = [...document.querySelectorAll('details')].map(el => [el, el.open]);
    openStates.forEach(([el]) => { el.open = true; });
  });
  window.addEventListener('afterprint', () => openStates?.forEach(([el, open]) => { el.open = open; }));
})();
