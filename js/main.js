/*  top button */
let Top = document.querySelector('.btn-top');

Top.addEventListener('click', (e)=>{
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth'});
});

if(window.scrollY = 0){
  Top.style.display ='none';
} else {
  Top.style.display = 'block';
  /* openBtn */
}