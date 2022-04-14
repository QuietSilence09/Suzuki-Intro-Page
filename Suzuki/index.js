const slides = document.querySelectorAll('.slides');
const dots = document.querySelectorAll('.dot');

console.log(dots);
console.log(slides);
const setActive = index =>{
    for (const slide of slides) {
        slide.classList.remove('active')
    }
    slides[index].classList.add('active');
    for (const dot of dots) {
        dot.classList.remove('active');
    }
    dots[index].classList.add('active');
}
for (let index = 0; index < dots.length; index++) {
    const element = dots[index];
    element.addEventListener('click', () => setActive(index))
}
/*
function setActive(i){
    for (slide of slides){
        slide.classList.remove('active');
    }  
    slides[i].classList.add('active');
    for(dot of dots)
    
    
}
*/