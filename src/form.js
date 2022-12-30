import storageApi from './js/storage';

const STORAGE_KEY = 'userInfo';
const form = document.querySelector('.js-contact-form');

initPage();

const onInput = event => {
  const { name, value } = event.target;
  const userData = storageApi.load(STORAGE_KEY) ?? {};

  userData[name] = value;
  storageApi.save(STORAGE_KEY, userData);
};

const onFormSubmit = event => {
  event.preventDefault();
  const userData = {};
  const formInfo = new FormData(event.currentTarget);
  formInfo.forEach((value, key) => {
    userData[key] = value;
  });
  console.log(userData);
  storageApi.remove(STORAGE_KEY);
  event.currentTarget.reset();
};

form.addEventListener('input', onInput);
form.addEventListener('submit', onFormSubmit);

function initPage() {
  const savedData = storageApi.load(STORAGE_KEY);
  if (!savedData) {
    return;
  }

  Object.entries(savedData).forEach(([name, value]) => {
    form.elements[name].value = value;
  });
}
