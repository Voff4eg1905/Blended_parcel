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

form.addEventListener('input', onInput);

function initPage() {
  let savedData = localStorage.getItem('userInfo');
  if (!savedData) {
    return;
  }
  savedData = JSON.parse(savedData);

  Object.entries(savedData).forEach(([name, value]) => {
    console.log(name, value);
    form.elements[name].value = value;
  });
}
