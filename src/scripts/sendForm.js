const sendingBtn = document.querySelector('.email-form__btn');
sendingBtn.onclick = (e) => {
  e.preventDefault();
  triggerModal();
  sendForm();
};

const triggerModal = () => {
  const modal = document.querySelector('.modal');

  if( modal.classList.contains('open') ) {
    modal.classList.remove('open');
  } else {
    modal.classList.add('open');
  }

}

const modalCross = document.querySelector('.popap__close');
modalCross.onclick = () => triggerModal();

const modalBtn = document.querySelector('.popap__btn');
modalBtn.onclick = () => triggerModal();

function validateEmail(inputValue) {
  const format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let isEmailValid;

  inputValue.match(format) ? isEmailValid = true : isEmailValid = false;

  return isEmailValid;
}

const sendForm = async () => {
  const email = document.querySelector(".email-form__input");
  const titleModal = document.querySelector(".popap__title");
  const textModal = document.querySelector(".popap__text");
  let isEmailValid = validateEmail(email.value);
  const success = {
    title: "SUCCESS!",
    text: "You have successfully subscribed to the email newsletter"
  };
  const failing = {
    title: "FAIL!",
    text: `Something went wrong :(
      Make sure you have entered your email correctly and try again`
  };

  if (isEmailValid) {
    await fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then( () => {
        titleModal.innerText = success.title;
        textModal.innerText = success.text;
      })
      .catch(() => {
        titleModal.innerText = failing.title;
        textModal.innerText = failing.text;
      });
  } else {
    titleModal.innerText = failing.title;
    textModal.innerText = failing.text;  
  }
}
