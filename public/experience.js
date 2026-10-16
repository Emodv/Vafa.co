(() => {
  const buttons = [...document.querySelectorAll('[data-filter]')];
  const cards = [...document.querySelectorAll('.brand-card')];
  const count = document.getElementById('result-count');
  const empty = document.getElementById('empty-state');
  buttons.forEach(button => button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    buttons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    let visible = 0;
    cards.forEach(card => {
      card.hidden = filter !== 'All' && card.dataset.industry !== filter;
      if (!card.hidden) visible++;
    });
    count.textContent = `${visible} selected ${visible === 1 ? 'profile' : 'profiles'}`;
    empty.hidden = visible !== 0;
  }));
})();
