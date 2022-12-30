import menuList from "./menu.json";
import 'material-icons/iconfont/material-icons.css';
import { createList } from "./createMenuMarkUp";
import storageApi from "./storage";

const THEME_KEY = "defaultTheme";

const listWrapper = document.querySelector(".gallery");
const toggleEl = document.querySelector("#theme-switch-toggle");


const markUp = createList(menuList)
listWrapper.innerHTML = markUp.join("");
initPage ();


const onToggle = event => {
    const {checked} = event.target;
    document.body.className = checked ? "dark-theme" : "light-theme";
    storageApi.save(THEME_KEY, checked);
}
toggleEl.addEventListener("input", onToggle);

function initPage () {
    const savedChecked = storageApi.load(THEME_KEY);
    document.body.className = savedChecked ? "dark-theme" : "light-theme";
    toggleEl.checked = savedChecked;

}
