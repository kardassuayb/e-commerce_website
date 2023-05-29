function colorsFunc() {
  const colorsDOM = document.querySelectorAll(".color-wrapper");
  colorsDOM.forEach((color) => {
    color.addEventListener("click", function () {
      colorsDOM.forEach((color) => {
        color.classList.remove("active");
      });
      color.classList.add("active");
    });
  });
}

export default colorsFunc();
