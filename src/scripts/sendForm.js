const sendingBtn = document.querySelector('.email-form__btn');
sendingBtn.onclick = (e) => {
  e.preventDefault();
  triggerModal();
};

const modalCross = document.querySelector('.popap__close');
modalCross.onclick = () => triggerModal();

const modalBtn = document.querySelector('.popap__btn');
modalBtn.onclick = () => triggerModal();

const triggerModal = () => {
  const modal = document.querySelector('.modal');

  if( modal.classList.contains('open') ) {
    modal.classList.remove('open');
  } else {
    modal.classList.add('open');
  }

}
