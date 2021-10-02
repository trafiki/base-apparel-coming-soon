const form = document.getElementById('comingsoon__form');
const emailInput = document.querySelector('.comingsoon__email-input');
const errorIcon = document.querySelector('.comingsoon__error-icon');
const errorText = document.querySelector('.comingsoon__error');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const isEmail =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emailInput.value);

  console.log(emailInput.value, isEmail);

  if(!isEmail) {
    errorIcon.style.opacity = "1";
    errorText.style.opacity = "1";
    emailInput.classList.add("comingsoon__email-input--error");
  } else{
    errorIcon.style.opacity = "0";
    errorText.style.opacity = "0";
    emailInput.classList.remove("comingsoon__email-input--error");
  }
});
