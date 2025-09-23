'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal'); //(All) Selecciona todas las clases que sean iguales

const openModal = function () {
  //Funcion DRY para abrir el modal
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  //remove elimina la clase 'hidden' y permite mostrar lo oculto
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);

  const closeModal = function () {
    //Funcion DRY para cerrar el modal
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  };

  btnCloseModal.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);

  //Close modal with key = 'Escape' / 'ESC'
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
}
