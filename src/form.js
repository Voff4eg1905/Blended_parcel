const form = document.querySelector(".js-contact-form");
// console.log(form);
const userData = {};

const onInput = event => {
    const {name, value} = event.target;
    // console.log(event.target);
    // console.log(event.target.name);
    // console.log(event.target.value);
    userData[name] = value;
    console.log(userData);
    localStorage.setItem("userInfo", JSON.stringify(userData));
}

form.addEventListener("input", onInput);