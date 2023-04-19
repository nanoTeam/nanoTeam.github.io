// 🤬 POUR LE MOMENT L'HISTORIQUE EST STATIQUE JE VAIS LE RENDRE DYNAMIQUE AVEC JSON 
// JE VIENS DE MODIFIER LE CODE TOUT ENTIER POUR QUE ME RETROUVE 

let singupPage = document.querySelector('.signup-section');
let loginPage = document.querySelector('.login-section');
let connectLink = document.querySelector('.connectLink');
let signupLink = document.querySelector('.signupLink');
let menu = document.querySelector('.menu-box');
let menuBtn = document.querySelector('.menu-btn');

// script de changement des pages signup et login 
connectLink.addEventListener('click',() =>{
    singupPage.style.display = 'none';
    loginPage.style.display = 'flex';
})
signupLink.addEventListener('click',() =>{
    loginPage.style.display = 'none';
    singupPage.style.display = 'flex';
})
// script de changement des pages signup et login 
// script du menu 
menuBtn.addEventListener('click',() =>{
    menu.classList.toggle("active-menu");
 
})
// script du menu 