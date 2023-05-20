//! home sidebar start

const btnOpenSidebar = document.querySelector("#toggle-menu");
const sidebar = document.querySelector("#sidebar");
const btnCloseSidebar = document.querySelector("#close-sidebar");

btnOpenSidebar.addEventListener("click", ()=>{
    sidebar.style.left="0";
})
btnCloseSidebar.addEventListener("click", ()=>{
    sidebar.style.left="-100%";
})

/* click outside start */
document.addEventListener("click", (event)=>{
    if (!event.composedPath().includes(sidebar) && !event.composedPath().includes(btnOpenSidebar)) {
        sidebar.style.left="-100%";
    }
});
/* click outside end */

//! home sidebar end

//?----------------------------------------------------------------

//! search modal start
const btnOpenSearch = document.querySelector(".search-button");
const modalSearch = document.querySelector(".modal-search");
const btnCloseSearch = document.querySelector("#close-search");


btnOpenSearch.addEventListener("click", () => {
modalSearch.style.visibility="visible";
});

btnCloseSearch.addEventListener("click", () => {
    modalSearch.style.visibility="hidden";
});

/* click outside start */
document.addEventListener("click", (event)=>{
    if (!event.composedPath().includes(btnOpenSearch) && !event.composedPath().includes(modalSearch)) {
        modalSearch.style.visibility="hidden";
    }
});
/* click outside end */

//! search modal end

//?----------------------------------------------------------------

//! slider start

let slideIndex = 1;

setInterval(() => {
    showSlides(slideIndex += 1);
}, 4000);

function showSlides (n) {        
    const slides = document.getElementsByClassName("slider-item");
    const dots = document.getElementsByClassName("slider-dot");
    
    if ( n > slides.length ) {
        slideIndex = 1;
    }
    if ( n < 1 ) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++){
    slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "flex";
    dots[slideIndex -1].className+= " active";
}
showSlides(slideIndex);

function plusSlide(n){
    showSlides((slideIndex += n));
}

function currentSlide(n){
    showSlides(slideIndex = n);
}
//! slider end