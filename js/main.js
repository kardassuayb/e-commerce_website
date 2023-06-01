import headerFunc from "./header.js";
import productsFunc from "./products.js";
import productsFunc2 from "./products2.js";
import searchFunc from "./search.js";

//! add products to localStorage start

(async function () {
  const products = await fetch("../js/data.json");
  const data = await products.json();

  data ? localStorage.setItem("products", JSON.stringify(data)) : [];
  productsFunc();
  searchFunc(data);
})();
//! add products to localStorage end

//! add cartItems to localStorage start
const cartItems = document.querySelector(".header-cart-count");
cartItems.innerHTML = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart")).length
  : "0";
//! add cartItems to localStorage end

//! modal-dialog start
const modalDialogDOM = document.querySelector(".modal-dialog");
const modalContentDOM = document.querySelector(".modal-dialog .modal-content");
const btnCloseDialog = document.querySelector(".modal-dialog .modal-close");

btnCloseDialog.addEventListener("click", () => {
  modalDialogDOM.classList.remove("show");
});

document.addEventListener("click", (e) => {
  if (!e.composedPath().includes(modalContentDOM)) {
    modalDialogDOM.classList.remove("show");
  }
});

setTimeout(() => {
  modalDialogDOM.classList.add("show");
}, 3000);

//! modal-dialog end
