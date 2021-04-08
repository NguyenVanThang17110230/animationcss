const close = document.querySelector('.close');
const box = document.querySelector('.search-box');
const open = document.querySelector('.icon');
// document.onclick = function(e){
//     if(e.target.id !== 'gr-s' && e.target.id !=='search-icon'){
//         box.classList.remove('activeS');
//     }
// }
open.onclick = function(){
    box.classList.add('activeS');
}
close.onclick = function(){
    box.classList.remove('activeS');
}

window.addEventListener('scroll',function(){
    const header = document.querySelector('header');
    header.classList.toggle("sticky",window.scrollY>0);
});

