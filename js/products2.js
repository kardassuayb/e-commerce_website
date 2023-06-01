import { product2 } from "./glide.js";

let cart = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

function addToCart(products) {
  const buttons = [...document.getElementsByClassName("add-to-cart")];
  const cartItems = document.querySelector(".header-cart-count");
  buttons.forEach((btn) => {
    const inCart = cart.find(
      (element) => element.id === Number(btn.dataset.id)
    );
    if (inCart) {
      btn.setAttribute("disabled", "disabled");
    } else {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        const id = e.target.dataset.id;
        const findProduct = products.find(
          (product) => product.id === Number(id)
        );
        cart.push({ ...findProduct, quantity: 1 });
        localStorage.setItem("cart", JSON.stringify(cart));
        btn.setAttribute("disabled", "disabled");
        cartItems.innerHTML = cart.length;
      });
    }
  });
}

function productRoute() {
  const productLinks = Array.from(
    document.getElementsByClassName("product-link")
  );

  productLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const id = e.target.dataset.id;
      localStorage.setItem("productId", JSON.stringify(id));
      window.location.href = "product-details.html";
    });
  });

  const productImages = Array.from(
    document.getElementsByClassName("product-image")
  );

  productImages.forEach((image) => {
    image.addEventListener("click", function (e) {
      e.preventDefault();
      const id =
        e.currentTarget.parentElement.querySelector(".product-link").dataset.id;
      localStorage.setItem("productId", JSON.stringify(id));
      window.location.href = "product-details.html";
    });
  });
}

function productsFunc2(products) {
  const productsContainer2 = document.getElementById("product-list2");
  let results2 = "";

  products.forEach((item) => {
    results2 += `
    <li class="product-item glide__slide">
      <div class="product-image">
        <a href="#" class="product-link" data-id=${item.id}>
          <img class="img1" src=${item.img.singleImage} alt="">
          <img class="img2" src=${item.img.thumbs[1]} alt="">
        </a>
      </div>
      <div class="product-info">
        <a href="#" class="product-title product-link" data-id=${item.id}>${
      item.name
    }</a>
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
          <button class="add-to-cart" data-id=${item.id}>
            <i class="bi bi-cart-fill"></i>
          </button>
          <button>
            <i class="bi bi-heart-fill"></i>
          </button>
          <a href="#" class="product-link" data-id=${item.id}>
            <i class="bi bi-eye-fill"></i>
          </a>
          <a href="#">
            <i class="bi bi-share-fill"></i>
          </a>
        </div>
      </div>
    </li>
    `;
    productsContainer2 ? (productsContainer2.innerHTML = results2) : "";
    addToCart(products);
  });
  product2();
  productRoute();
}

export default productsFunc2;
