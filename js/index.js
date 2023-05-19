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