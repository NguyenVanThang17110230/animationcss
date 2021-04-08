
//
var slides = document.querySelectorAll('.box');
var squares = document.querySelectorAll('.square');
let current = 1;

// var manual = function(ma){
//     console.log('dau');
//     // slides.forEach((slide) => {
//     //     slide.classList.remove('active');
//     //     squares.forEach((square)=>{
//     //         square.classList.remove('active');
//     //     })
//     // })
//     slides[ma].classList.add('active');
//     squares[ma].classList.add('active');
// }

squares.forEach((square,i)=>{
    square.addEventListener("click",()=>{
        // manual(i);
        current=i;
        console.log('aaaaa ');
        slides.forEach((slide) => {
        slide.classList.remove('active');
        squares.forEach((square)=>{
                square.classList.remove('active');
            })
        })
        slides[i].classList.add('active');
        squares[i].classList.add('active');
    });
});

var repeat = function(activeClass){
    let active = document.getElementsByClassName('active');
    let i = 1;
    var repeater = () => {
        setTimeout(function(){
            [...active].forEach((activeSlide)=>{
                activeSlide.classList.remove('active');
            });
            slides[i].classList.add('active');
            squares[i].classList.add('active');
            i++;
            if(slides.length == i){
                i = 0;
            }
            if(i>= slides.length){
                return;
            }
            repeater();
        },10000);
    }
    repeater();

}
repeat();

