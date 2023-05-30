import { thumbsActiveFunc } from "../js/product-detail/thumbsActive.js";
import zoomFunc from "../js/product-detail/zoom.js";
import { singleThumbs } from "../js/glide.js";
import colorsFunc from "../js/product-detail/colors.js";
import valuesFunc from "../js/product-detail/values.js";
import tabsFunc from "../js/product-detail/tabs.js";
import commentsFunc from "../js/product-detail/comments.js";

const productId = localStorage.getItem("productId")
  ? JSON.parse(localStorage.getItem("productId"))
  : localStorage.setItem("productId", JSON.stringify(1));

const products = localStorage.getItem("products")
  ? JSON.parse(localStorage.getItem("products"))
  : localStorage.setItem("products", JSON.stringify([]));

const findProduct = products.find((item) => item.id === Number(productId));

/* product title */
const productTitleDOM = document.querySelector(".product-title");

productTitleDOM.innerHTML = findProduct.name;

/* product price */
const newPriceDOM = document.querySelector(".new-price");
const oldPriceDOM = document.querySelector(".old-price");

newPriceDOM.innerHTML = findProduct.price.newPrice.toFixed(2);
oldPriceDOM.innerHTML = findProduct.price.oldPrice.toFixed(2);

/* product gallery */

const singleImageDOM = document.querySelector("#single-image");

singleImageDOM.src = findProduct.img.singleImage;

const galleryThumbs = document.querySelector(".gallery-thumbs");
let result = "";
findProduct.img.thumbs.forEach((item) => {
  result += `
  <li class="glide__slide">
    <img class="img-fluid" src=${item} alt="">
  </li>
  `;
});
galleryThumbs.innerHTML = result;
singleThumbs();
thumbsActiveFunc();

/* add to Cart */

let cart = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const findCart = cart.find((item) => item.id === findProduct.id);

const btnaddtoCart = document.getElementById("add-to-cart");
const quantityDOM = document.getElementById("quantity");
let cartItems = document.querySelector(".header-cart-count");

if (findCart) {
  btnaddtoCart.setAttribute("disabled", "disabled");
} else {
  btnaddtoCart.addEventListener("click", function () {
    cart.push({ ...findProduct, quantity: Number(quantityDOM.value) });
    btnaddtoCart.setAttribute("disabled", "disabled");
    localStorage.setItem("cart", JSON.stringify(cart));
    cartItems.innerHTML = cart.length;
  });
}
