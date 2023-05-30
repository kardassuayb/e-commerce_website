function tabsFunc() {
  const tabButton = document.querySelectorAll(".tab-button");
  const contentDOM = document.querySelectorAll(".content");
  const tabsBUttons = document.querySelector(".tab-list");

  tabsBUttons.addEventListener("click", function (e) {
    e.preventDefault();
    const id = e.target.dataset.id;
    if (id) {
      tabButton.forEach((button) => button.classList.remove("active"));
      e.target.classList.add("active");
      contentDOM.forEach((content) => content.classList.remove("active"));
      const element = document.getElementById(id);
      element.classList.add("active");
    }
  });
}
export default tabsFunc();
