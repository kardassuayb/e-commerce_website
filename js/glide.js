export function product1() {
  const config = {
    type: "carousel",
    startAt: 0,
    perView: 4,
    gap: 20,
    autoplay: 3000,
    breakpoints: {
      992: {
        perView: 3,
      },
      768: {
        perView: 2,
      },
      576: {
        perView: 1,
      },
    },
  };

  new Glide(".product-carousel", config).mount();
}

export function product2() {
  const config2 = {
    type: "carousel",
    startAt: 0,
    perView: 4,
    gap: 20,
    autoplay: 3000,
    breakpoints: {
      992: {
        perView: 3,
      },
      768: {
        perView: 2,
      },
      576: {
        perView: 1,
      },
    },
  };

  new Glide(".product-carousel2", config2).mount();
}
