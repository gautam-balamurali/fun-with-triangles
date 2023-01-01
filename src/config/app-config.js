/* eslint-disable */

const DEFAULT_CONSTANTS = {
  INVALID_INPUT_MESSAGE: "Input should be a valid number.",
  IS_TRIANGLE_APP_DESCRIPTION:
    "Input three angles and find whether the entered angles could make a triangle.",
  IS_TRIANGLE_MESSAGE: "Yo, the angles form a triangle!",
  IS_NOT_TRIANGLE_MESSAGE: "Oops! The angles don't form a triangle!",
  SUM_OF_ANGLES_OF_TRIANGLE: 180,
  TRIANGLE_QUIZ_SCORE_MESSAGE: "You scored:",
  TRIANGLE_QUIZ_APP_DESCRIPTION:
    "For each correct answer you will get 1 point.",
};

const TRIANGLE_QUIZ_CORRECT_ANSWERS_DICTIONARY = {
  question1: "90°",
  question2: "right angled",
  question3: "one right angle",
  question4: "12, 16, 20",
  question5: "Equilateral triangle",
  question6: "100°",
  question7: "30°",
  question8: "a + b + c",
  question9: "no",
  question10: "45°",
};

const TRIANGLE_QUIZ_USER_ANSWERS_DICTIONARY = {
  question1: "",
  question2: "",
  question3: "",
  question4: "",
  question5: "",
  question6: "",
  question7: "",
  question8: "",
  question9: "",
  question10: "",
};

export {
  DEFAULT_CONSTANTS,
  TRIANGLE_QUIZ_CORRECT_ANSWERS_DICTIONARY,
  TRIANGLE_QUIZ_USER_ANSWERS_DICTIONARY,
};
