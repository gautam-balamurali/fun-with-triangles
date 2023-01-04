/* eslint-disable */

import React from "react";
import * as AppConstants from "../../../config/app-config";
import { useState } from "react";
import triangle_quiz from "../../../images/quiz.svg";

function Section() {
  const [scoreInput, setScoreInput] = useState("");
  const [userAnswers, setUserAnswers] = useState(
    AppConstants.TRIANGLE_QUIZ_USER_ANSWERS_DICTIONARY
  );
  const [isInputDisabled, setIsInputDisabled] = useState(false);

  //TODO: Implement this after studying forms in react completely.
  // const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  const ref = React.useRef();

  //   <-- Click Handler Functions Begins -->

  /**
   * Function to handle submit button click
   * @param {*} event
   */
  function submitButtonClickHandler(event) {
    event.preventDefault();
    let score = 0;

    Object.keys(AppConstants.TRIANGLE_QUIZ_CORRECT_ANSWERS_DICTIONARY).forEach(
      (answerKey) => {
        if (
          userAnswers[answerKey] ===
          AppConstants.TRIANGLE_QUIZ_CORRECT_ANSWERS_DICTIONARY[answerKey]
        )
          score = score + 1;
      }
    );
    if (score === 10) {
      setScoreInput(
        `${AppConstants.DEFAULT_CONSTANTS.TRIANGLE_QUIZ_SCORE_MESSAGE} ${score}. If you're a triangle, you'll be acute one.😉`
      );
    } else if (score > 4 && score < 10) {
      setScoreInput(
        `${AppConstants.DEFAULT_CONSTANTS.TRIANGLE_QUIZ_SCORE_MESSAGE} ${score}. Better luck next time!👍🏼`
      );
    } else {
      setScoreInput(
        `${AppConstants.DEFAULT_CONSTANTS.TRIANGLE_QUIZ_SCORE_MESSAGE} ${score}. Brush up your 9th grade geometry and come back again.🫠`
      );
    }
    setIsInputDisabled(true);
  }

  /**
   * Function to handle play again button click
   * @param {*} event
   * TODO: Implement this after studying forms in react completely.
   */
  function playAgainButtonClickHandler(event) {
    event.preventDefault();
    ref.current.reset();
    setScoreInput("");
    setUserAnswers(AppConstants.TRIANGLE_QUIZ_USER_ANSWERS_DICTIONARY);
    setIsInputDisabled(false);
  }

  /**
   * Function to handle form input change
   * @param {*} event
   */
  function formInputChangeHandler(event) {
    setScoreInput("");

    const key = event.target.name;
    const value = event.target.value;

    let userAnswersUpdated = { ...userAnswers };
    userAnswersUpdated[key] = value;

    setUserAnswers(userAnswersUpdated);
  }

  //   <-- Click Handler Functions Ends -->

  //   <-- Render Functions Begins -->

  /**
   * Function to render submit button
   * @returns button
   */
  function renderSubmitButton() {
    let isDisabled = false;

    Object.keys(AppConstants.TRIANGLE_QUIZ_CORRECT_ANSWERS_DICTIONARY).forEach(
      (answerKey) => {
        if (userAnswers[answerKey] === "") {
          isDisabled = true;
        }
      }
    );

    if (
      scoreInput.includes(
        AppConstants.DEFAULT_CONSTANTS.TRIANGLE_QUIZ_SCORE_MESSAGE
      )
    ) {
      isDisabled = true;
    }

    if (isDisabled) {
      return (
        <button className="btn-disabled" disabled={true}>
          submit answers
        </button>
      );
    } else {
      return <button className="btn-enabled">submit answers</button>;
    }
  }

  /**
   * Function to render user avatar
   * @returns user avatar image
   */
  function renderUserAvatar() {
    return (
      <div className="container user-avatar">
        <img src={triangle_quiz} alt="User Avatar" />
      </div>
    );
  }

  /**
   * Function to render app description
   * @returns app description
   */
  function renderAppDescriptionSection() {
    return (
      <div className="sub-section">
        <h3>{AppConstants.DEFAULT_CONSTANTS.TRIANGLE_QUIZ_APP_DESCRIPTION}</h3>
      </div>
    );
  }

  /**
   * Function to render play again button
   * @returns play again button
   * TODO: Implement this after studying forms in react completely.
   */
  function renderPlayAgainButton() {
    if (
      scoreInput.includes(
        AppConstants.DEFAULT_CONSTANTS.TRIANGLE_QUIZ_SCORE_MESSAGE
      )
    ) {
      return (
        <button className="btn-enabled" onClick={playAgainButtonClickHandler}>
          play again?
        </button>
      );
    }
    return null;
  }

  /**
   * Function to render quiz form section
   * @returns quiz form section
   */
  function renderQuizFormSection() {
    return (
      <form ref={ref} className="quiz-form" onSubmit={submitButtonClickHandler}>
        <div className="question-container">
          <p>
            1. What is the third angle for the triangle where angle1 = 45° and
            angle2 = 45°?
          </p>
          <label>
            <input
              type="radio"
              disabled={isInputDisabled}
              name="question1"
              onChange={formInputChangeHandler}
              value="45°"
            />
            45°
          </label>
          <label>
            <input
              type="radio"
              disabled={isInputDisabled}
              name="question1"
              onChange={formInputChangeHandler}
              value="90°"
            />
            90°
          </label>
          <label>
            <input
              type="radio"
              disabled={isInputDisabled}
              name="question1"
              onChange={formInputChangeHandler}
              value="60°"
            />
            60°
          </label>
        </div>
        <div className="question-container">
          <p>
            2. What is the third angle for the triangle where angle1 = 45° and
            angle2 = 45°?
          </p>
          <label>
            <input
              type="radio"
              disabled={isInputDisabled}
              name="question2"
              onChange={formInputChangeHandler}
              value="obtuse"
            />
            obtuse
          </label>
          <label>
            <input
              type="radio"
              disabled={isInputDisabled}
              name="question2"
              onChange={formInputChangeHandler}
              value="acute"
            />
            acute
          </label>
          <label>
            <input
              type="radio"
              disabled={isInputDisabled}
              name="question2"
              onChange={formInputChangeHandler}
              value="right angled"
            />
            right angled
          </label>
        </div>
        <div className="question-container">
          <p>3. A triangle can have</p>
          <label>
            <input
              type="radio"
              disabled={isInputDisabled}
              name="question3"
              onChange={formInputChangeHandler}
              value="one right angle"
            />
            one right angle
          </label>
          <label>
            <input
              type="radio"
              disabled={isInputDisabled}
              name="question3"
              onChange={formInputChangeHandler}
              value="two right angles"
            />
            two right angles
          </label>
        </div>
        <div className="question-container">
          <p>4. Which of the following can form a right angled triangle?</p>
          <label>
            <input
              type="radio"
              disabled={isInputDisabled}
              name="question4"
              onChange={formInputChangeHandler}
              value="14, 15, 26"
            />
            14, 15, 26
          </label>
          <label>
            <input
              type="radio"
              disabled={isInputDisabled}
              name="question4"
              onChange={formInputChangeHandler}
              value="12, 16, 20"
            />
            12, 16, 20
          </label>
        </div>
        <div className="question-container">
          <p>5. Which of the following triangles are always similar?</p>
          <label>
            <input
              type="radio"
              disabled={isInputDisabled}
              name="question5"
              onChange={formInputChangeHandler}
              value="Equilateral triangle"
            />
            Equilateral triangle
          </label>
          <label>
            <input
              type="radio"
              disabled={isInputDisabled}
              name="question5"
              onChange={formInputChangeHandler}
              value="Isosceles triangle"
            />
            Isosceles triangle
          </label>
        </div>
        <div className="question-container">
          <p>
            6. If one angle of a triangle is obtuse, then which one of the
            following is the possible measure of remaining angles?
          </p>
          <label>
            <input
              type="radio"
              disabled={isInputDisabled}
              name="question6"
              onChange={formInputChangeHandler}
              value="100°"
            />
            100°
          </label>
          <label>
            <input
              type="radio"
              disabled={isInputDisabled}
              name="question6"
              onChange={formInputChangeHandler}
              value="85°"
            />
            85°
          </label>
        </div>
        <div className="question-container">
          <p>
            7. If the largest angle in a triangle is 70°, what is the least
            possible value of the smallest angle of the triangle?
          </p>
          <label>
            <input
              type="radio"
              disabled={isInputDisabled}
              name="question7"
              onChange={formInputChangeHandler}
              value="30°"
            />
            30°
          </label>
          <label>
            <input
              type="radio"
              disabled={isInputDisabled}
              name="question7"
              onChange={formInputChangeHandler}
              value="10°"
            />
            10°
          </label>
        </div>
        <div className="question-container">
          <p>8. The perimeter of scalene triangle with sides a, b, c is</p>
          <label>
            <input
              type="radio"
              disabled={isInputDisabled}
              name="question8"
              onChange={formInputChangeHandler}
              value="a + b + c"
            />
            a+b+c
          </label>
          <label>
            <input
              type="radio"
              disabled={isInputDisabled}
              name="question8"
              onChange={formInputChangeHandler}
              value="2a"
            />
            2a
          </label>
          <label>
            <input
              type="radio"
              disabled={isInputDisabled}
              name="question8"
              onChange={formInputChangeHandler}
              value="None of these"
            />
            None of these
          </label>
        </div>
        <div className="question-container">
          <p>9. A scalene triangle has ___ lines of symmetry</p>
          <label>
            <input
              type="radio"
              disabled={isInputDisabled}
              name="question9"
              onChange={formInputChangeHandler}
              value="two"
            />
            two
          </label>
          <label>
            <input
              type="radio"
              disabled={isInputDisabled}
              name="question9"
              onChange={formInputChangeHandler}
              value="no"
            />
            no
          </label>
          <label>
            <input
              type="radio"
              disabled={isInputDisabled}
              name="question9"
              onChange={formInputChangeHandler}
              value="15"
            />
            15
          </label>
        </div>
        <div className="question-container">
          <p>
            10. There is a right triangle PQR where: angle Q = 90°; angle P =
            angle R. What is the measure of angles P and R?
          </p>
          <label>
            <input
              type="radio"
              disabled={isInputDisabled}
              name="question10"
              onChange={formInputChangeHandler}
              value="85°"
            />
            85°
          </label>
          <label>
            <input
              type="radio"
              disabled={isInputDisabled}
              name="question10"
              onChange={formInputChangeHandler}
              value="65°"
            />
            65°
          </label>
          <label>
            <input
              type="radio"
              disabled={isInputDisabled}
              name="question10"
              onChange={formInputChangeHandler}
              value="45°"
            />
            45°
          </label>
        </div>
        {renderSubmitButton()}
        {/* //TODO: Implement this after studying forms in react completely. */}
        {/* {renderPlayAgainButton()} */}
      </form>
    );
  }

  /**
   * Function to render output message
   * @returns output message
   */
  function renderOutput() {
    return <h2 className="output-msg">{scoreInput}</h2>;
  }

  //   <-- Render Functions Ends -->

  //   <-- Rendering Quiz on Triangles page -->
  return (
    <section className="sub-section">
      {renderUserAvatar()}
      {renderAppDescriptionSection()}
      {renderQuizFormSection()}
      {renderOutput()}
    </section>
  );
}

export default Section;
