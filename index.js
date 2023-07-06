const bookmarkButton = document.querySelector('[data-js="bookmark-button"]');

bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.toggle("bookmark--active");
});
