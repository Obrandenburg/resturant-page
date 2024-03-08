console.log('src index load');
import './stylesheet.css';
import { loadHome } from "./homeTab";
import { loadMenu } from "./menuTab";
import { loadContact } from "./contactTab";


loadHome();

const home = document.getElementById('home');
const menu = document.getElementById('menu');
const contact = document.getElementById('contact');

home.addEventListener('click', () => {
  loadHome();
});

menu.addEventListener('click', () => {
  loadMenu()
});

contact.addEventListener('click', ()=>{
  loadContact();
})

