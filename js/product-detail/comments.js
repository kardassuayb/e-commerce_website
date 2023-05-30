const comentReviewsFunc = function () {
  const starsDOM = document.querySelectorAll(".comment-form-rating .star");
  starsDOM.forEach((star) => {
    star.addEventListener("click", (e) => {
      e.preventDefault();
      starsDOM.forEach((item) => item.classList.remove("active"));
      star.classList.add("active");
    });
  });
};

const addNewCommentFunc = () => {
  let comments = [];
  let commentTextDOM = document.getElementById("comment-text");
  let commentNameDOM = document.getElementById("comment-name");
  let commentSubmitBtn = document.querySelector(".form-submit input");
  let commentListDOM = document.querySelector(".comment-list");
  let commentText = "";
  let commentName = "";

  commentTextDOM.addEventListener("input", (e) => {
    commentText = e.target.value;
  });
  commentNameDOM.addEventListener("input", (e) => {
    commentName = e.target.value;
  });

  commentSubmitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    comments = [{ name: commentName, text: commentText }];
    let result = "";
    comments.forEach((item) => {
      result += `
        <li class="comment-item">
            <div class="comment-avatar">
                <img src="images/avatars/avatar1.jpg" alt="">
            </div>
            <div class="comment-text">
                <ul class="comment-star">
                    <li><i class="bi bi-star-fill"></i></li>
                    <li><i class="bi bi-star-fill"></i></li>
                    <li><i class="bi bi-star-fill"></i></li>
                    <li><i class="bi bi-star-fill"></i></li>
                    <li><i class="bi bi-star-half"></i></li>
                </ul>
                <div class="comment-meta">
                    <strong>${item.name}</strong>
                    &nbsp; - &nbsp;
                    <time>April 23, 2023</time>
                </div>
                <div class="comment-desc">
                    <p>${item.text}</p>
                </div>
            </div>
        </li>
        `;
    });
    commentListDOM.innerHTML += result;
    commentNameDOM.value = "";
    commentTextDOM.value = "";
  });
};

function commentsFunc() {
  comentReviewsFunc();
  addNewCommentFunc();
}
export default commentsFunc();
