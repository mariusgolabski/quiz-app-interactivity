const bookmarkButton = document.querySelector('[data-js="bookmark-button"]');

bookmarkButton.addEventListener("click", () => {
  console.log("click");
  bookmarkButton.classList.toggle("bookmark--active");
});
