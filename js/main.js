import headerFunc from "./header.js";
import productsFunc from "./products.js";

//! add products to localStorage start

async function getData() {
  const products = await fetch("../js/data.json");
  const data = await products.json();

  data ? localStorage.setItem("products", JSON.stringify(data)) : [];
}

getData();

//! add products to localStorage end
