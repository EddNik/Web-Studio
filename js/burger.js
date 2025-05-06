(() => {
  const refs = {
    openModalBtn: document.querySelector('.burger-btn'),
    closeModalBtn: document.querySelector('.mobile-close-btn'),
    modal: document.querySelector('.mobile-menu'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('open');
  }
})();
