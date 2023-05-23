import { product2 } from "./glide.js";

let products2 = [];
async function productsFunc2() {
  products2 = (await localStorage.getItem("products"))
    ? JSON.parse(localStorage.getItem("products"))
    : [];
  const productsContainer2 = document.getElementById("product-list2");
  let results2 = "";

  products2.forEach((item) => {
    results2 += `
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
    productsContainer2.innerHTML = results2;
  });
  product2();
}

export default productsFunc2();
