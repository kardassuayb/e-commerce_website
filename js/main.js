import headerFunc from "./header.js";
import productsFunc from "./products.js";
import productsFunc2 from "./products2.js";

//! add products to localStorage start

async function getData() {
  const products = await fetch("../js/data.json");
  const data = await products.json();

  data ? localStorage.setItem("products", JSON.stringify(data)) : [];
}

getData();

const products = localStorage.getItem("products");

const cartItems = document.querySelector(".header-cart-count");
cartItems.innerHTML = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart")).length
  : "0";
//! add products to localStorage end
