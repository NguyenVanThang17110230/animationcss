//change image
function imgSlider(anything){
    document.querySelector('.img-product').src = anything;
}
//chang class active
const c = document.querySelectorAll('.a');
current=1;
var manual = function(ma){
    c.forEach((c) => {
        c.classList.remove('activeImg');
    })
    c[ma].classList.add('activeImg'); 
}
c.forEach((c,i)=>{
    c.addEventListener("click",()=>{
        manual(i);
        current=i;
    });
});
//
c.forEach((c,i)=>{
    c.addEventListener("click",()=>{
        c.classList.add('activeImg');

    });
});
