const form = document.querySelector('[data-js="form"]');
const cardList = document.querySelector('[data-js="card-list"]');

const questionElement = document.querySelector('[data-js="question"]');
const answerElement = document.querySelector('[data-js="answer"]');

const textQuestionMaxLength = questionElement.getAttribute("maxlength");
const textAnswerMaxLength = answerElement.getAttribute("maxlength");

const questionAmountLeftElement = document.querySelector(
  '[data-js="question-amount-left"]'
);
const answerAmountLeftElement = document.querySelector(
  '[data-js="answer-amount-left"]'
);

questionAmountLeftElement.textContent = textQuestionMaxLength;
answerAmountLeftElement.textContent = textAnswerMaxLength;

// function calcAndSetCharactersLeft(element, amountElement, max) {
//   element.addEventListener("input", (event) => {
//     const inputLenght = event.target.value.length;
//     console.log(inputLenght);
//     amountElement.textContent = max - inputLenght;
//   });
// }

const calcAndSetCharactersLeft = (element, amountElement, max) => {
  element.addEventListener("input", (event) => {
    const inputLenght = event.target.value.length;
    amountElement.textContent = max - inputLenght;
  });
};

calcAndSetCharactersLeft(
  questionElement,
  questionAmountLeftElement,
  textQuestionMaxLength
);

calcAndSetCharactersLeft(
  answerElement,
  answerAmountLeftElement,
  textAnswerMaxLength
);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  createNewCard(data);
  event.target.reset();
  questionElement.focus();
});

function createNewCard(data) {
  const cardItem = document.createElement("li");
  cardItem.classList.add("card-list__item");

  cardItem.innerHTML = `<article class="card">
      <h2 class="card__question">
          ${data.question}
      </h2>
      <button
          class="card__button-answer"
          type="button"
          data-js="answer-button"
      >
          Show answer
      </button>
      <p class="card__answer" data-js="card-answer">${data.answer}</p>
      <ul class="card__tag-list">
          <li class="card__tag-list-item">#${data.tag}</li>
      </ul>
      <div class="card__button-bookmark">
          <button
          class="bookmark"
          aria-label="bookmark"
          type="button"
          data-js="bookmark-button"
          >
          <svg
              class="bookmark__icon"
              xmlns="http://www.w3.org/2000/svg"
              viewbox="0 0 24 24"
          >
              <path
              d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"
              />
          </svg>
          </button>
      </div>
    </article>`;
  cardList.prepend(cardItem);
}
