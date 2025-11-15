/* ----- MENU BURGER ----- */
const burger=document.getElementById('burger');
const nav=document.querySelector('.nav-links');
burger.onclick=()=>nav.classList.toggle('active');

/* ----- ANNÉE DYNAMIQUE ----- */
document.getElementById('year').textContent=new Date().getFullYear();

/* ----- FERMETURE MENU APRÈS CLIC ----- */
document.querySelectorAll('.nav-links a').forEach(l=>l.addEventListener('click',()=>nav.classList.remove('active')));