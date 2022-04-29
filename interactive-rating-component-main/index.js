"use strict";

const radioButtons = document.querySelectorAll(".rating__form__input--radio");
const labels = document.querySelectorAll(".rating__form__label--radio");
const form = document.querySelector(".rating__form");
const submissionMessage = document.querySelector(".submission__text--rating");
const submission = document.querySelector(".submission");
const ratingForm = document.querySelector(".rating");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const rating = e.target["rating"].value;
  submissionMessage.innerHTML = `You selected ${rating} out of 5`;
  submission.classList.remove("hide");
  ratingForm.classList.add("hide");
});

radioButtons.forEach((radioButton) => {
  radioButton.addEventListener("click", function (e) {
    labels.forEach((label) => {
      label.classList.remove("rating__form__label--radio--selected");
    });

    labels[e.target.value - 1].classList.add(
      "rating__form__label--radio--selected"
    );
  });
});
