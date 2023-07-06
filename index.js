const bookmarkButton = document.querySelector('[data-js="bookmark-button"]');
const answerButton = document.querySelector('[data-js="answer-button"]');
const cardAnswer = document.querySelector('[data-js="card-answer"]');

bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.toggle("bookmark--active");
});

answerButton.addEventListener("click", () => {
  cardAnswer.classList.toggle("card__answer--active");
});
