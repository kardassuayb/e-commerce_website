function zoomFunc() {
  const singleImageWrapper = document.querySelector(".single-image-wrapper");
  const singleImage = document.querySelector("#single-image");

  singleImageWrapper.addEventListener("mousemove", function (e) {
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;

    singleImage.style.transformOrigin = `${x}px ${y}px`;
    singleImage.style.transform = "scale(3)";
  });
  singleImageWrapper.addEventListener("mouseleave", function () {
    singleImage.style.transform = "scale(1)";
  });
}
export default zoomFunc();
