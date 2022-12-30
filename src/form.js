const form = document.querySelector('.js-contact-form');
// console.log(form);

initPage();

const onInput = event => {
  const { name, value } = event.target;
  let userData = localStorage.getItem('userInfo');
  userData = userData ? JSON.parse(userData) : {};
  userData[name] = value;
  localStorage.setItem('userInfo', JSON.stringify(userData));
};

const onFormSubmit = event => {
  event.preventDefault();
  const userData = {};
  const formInfo = new FormData(event.currentTarget);
  formInfo.forEach((value, key) => {
    userData[key] = value;
  });
  console.log(userData);
  localStorage.removeItem('userInfo');
  event.currentTarget.reset();
};

form.addEventListener('input', onInput);
form.addEventListener('submit', onFormSubmit);

function initPage() {
  let savedData = localStorage.getItem('userInfo');
  if (!savedData) {
    return;
  }
  savedData = JSON.parse(savedData);

  Object.entries(savedData).forEach(([name, value]) => {
    form.elements[name].value = value;
  });
}
