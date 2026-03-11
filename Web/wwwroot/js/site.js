document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelector('header').classList.toggle('hidden');
    document.querySelector('footer').classList.toggle('hidden');
    document.querySelector('.burn-in-controls')?.classList.toggle('hidden');
  }
});
