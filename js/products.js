import { product1 } from "./glide.js";

let products = [];
async function productsFunc() {
  products = (await localStorage.getItem("products"))
    ? JSON.parse(localStorage.getItem("products"))
    : [];
  const productsContainer = document.getElementById("product-list");
  let results = "";

  products.forEach((item) => {
    results += `
    <li class="product-item glide__slide">
      <div class="product-image">
        <a href="#">
          <img class="img1" src=${item.img.singleImage} alt="">
          <img class="img2" src=${item.img.thumbs[1]} alt="">
        </a>
      </div>
      <div class="product-info">
        <a href="#" class="product-title">${item.name}</a>
        <ul class="product-star">
          <li><i class="bi bi-star-fill"></i></li>
          <li><i class="bi bi-star-fill"></i></li>
          <li><i class="bi bi-star-fill"></i></li>
          <li><i class="bi bi-star-fill"></i></li>
          <li><i class="bi bi-star-half"></i></li>
        </ul>
        <div class="product-prices">
          <strong class="new-price">$${item.price.newPrice.toFixed(2)}</strong>
          <span class="old-price">$${item.price.oldPrice.toFixed(2)}</span>
        </div>
        <span class="discount">-${item.discount}%</span>
        <div class="product-links">
          <button><i class="bi bi-cart-fill"></i></button>
          <button><i class="bi bi-heart-fill"></i></button>
          <a href="#">
            <i class="bi bi-eye-fill"></i>
          </a>
          <a href="#">
            <i class="bi bi-share-fill"></i>
          </a>
        </div>
      </div>
    </li>
    `;
    productsContainer.innerHTML = results;
  });
  product1();
}

export default productsFunc();
