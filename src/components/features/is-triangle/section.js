/* eslint-disable */

import React from "react";
import {
  containsOnlySpaces,
  convertToNumber,
  fixToTwoDigitsAfterDecimalPoint,
  isNotANumber,
} from "../../../utils/app-utils";
import * as AppConstants from "../../../config/app-config";
// import user_avatar from "../../../images/user_avatar.svg";
import { useState } from "react";

function Section() {
  const [firstAngleInput, setFirstAngleInput] = useState("");
  const [secondAngleInput, setSecondAngleInput] = useState("");
  const [thirdAngleInput, setThirdAngleInput] = useState("");
  const [outputMessage, setOutputMessage] = useState("");

  //   <-- Validity Functions Begins -->

  /**
   * Function to check validity of calculate button
   * @returns boolean
   */
  function isTriangleButtonInvalid() {
    return (
      firstAngleInput.length < 1 ||
      secondAngleInput.length < 1 ||
      thirdAngleInput.length < 1
    );
  }

  /**
   * Function to check number input validity
   * @param input
   * @returns boolean
   */
  function isNumbererInputValid(input) {
    if (isNotANumber(input) || containsOnlySpaces(input)) {
      invalidInputErrorHandler();
      return false;
    }
    return true;
  }
  //   <-- Validity Functions Ends -->

  //   <-- Error Handling Functions Begins -->

  /**
   * Function to handle invalid input
   */
  function invalidInputErrorHandler() {
    setOutputMessage(AppConstants.DEFAULT_CONSTANTS.INVALID_INPUT_MESSAGE);
  }

  //   <-- Error Handling Functions Ends -->

  //   <-- Change Handler Functions Begins -->

  /**
   * Function to handle first angle input change
   * @param event
   */
  function firstAngleInputChangeHandler(event) {
    let inputFirstAngle = event.target.value;
    if (isNumbererInputValid(inputFirstAngle)) {
      setOutputMessage("");
      setFirstAngleInput(inputFirstAngle);
    } else {
      invalidInputErrorHandler();
      setFirstAngleInput("");
    }
  }

  /**
   * Function to handle second angle input change
   * @param event
   */
  function secondAngleInputChangeHandler(event) {
    let inputSecondAngle = event.target.value;
    if (isNumbererInputValid(inputSecondAngle)) {
      setOutputMessage("");
      setSecondAngleInput(inputSecondAngle);
    } else {
      invalidInputErrorHandler();
      setSecondAngleInput("");
    }
  }

  /**
   * Function to handle third angle input change
   * @param event
   */
  function thirdAngleInputChangeHandler(event) {
    let inputThirdAngle = event.target.value;
    if (isNumbererInputValid(inputThirdAngle)) {
      setOutputMessage("");
      setThirdAngleInput(inputThirdAngle);
    } else {
      invalidInputErrorHandler();
      setThirdAngleInput("");
    }
  }

  //   <-- Change Handler Functions Ends -->

  //   <-- Click Handler Functions Begins -->

  /**
   * Function to handle when is triangle button is clicked
   * @param firstAngle
   * @param secondAngle
   * @param thirdAngle
   */
  function isTriangleButtonClickHandler(firstAngle, secondAngle, thirdAngle) {
    firstAngle = convertToNumber(firstAngle);
    secondAngle = convertToNumber(secondAngle);
    thirdAngle = convertToNumber(thirdAngle);

    let message = "";

    if (
      calculateSumOfAngles(firstAngle, secondAngle, thirdAngle) ===
      fixToTwoDigitsAfterDecimalPoint(
        AppConstants.DEFAULT_CONSTANTS.SUM_OF_ANGLES_OF_TRIANGLE
      )
    ) {
      message = AppConstants.DEFAULT_CONSTANTS.IS_TRIANGLE_MESSAGE;
    } else {
      message = AppConstants.DEFAULT_CONSTANTS.IS_NOT_TRIANGLE_MESSAGE;
    }
    setOutputMessage(message);
  }

  /**
   * Function to calculate sum of angles of a triangle
   * @param {*} firstAngle
   * @param {*} secondAngle
   * @param {*} thirdAngle
   * @returns message
   */
  function calculateSumOfAngles(firstAngle, secondAngle, thirdAngle) {
    return fixToTwoDigitsAfterDecimalPoint(
      firstAngle + secondAngle + thirdAngle
    );
  }

  //   <-- Click Handler Functions Ends -->

  //   <-- Render Functions Begins -->

  /**
   * Function to render user avatar
   * @returns user avatar image
   */
  //   function renderUserAvatar() {
  //     return (
  //       <div className="container user-avatar">
  //         <img src={user_avatar} alt="User Avatar" />
  //       </div>
  //     );
  //   }

  /**
   * Function to render app description
   * @returns app description
   */
  function renderAppDescriptionSection() {
    return (
      <div className="sub-section">
        <h3>{AppConstants.DEFAULT_CONSTANTS.IS_TRIANGLE_APP_DESCRIPTION}</h3>
      </div>
    );
  }

  /**
   * Function to angles input labels section
   * @returns angles input labels section
   */
  function renderTriangleAnglesInputLabelsSection() {
    return (
      <div className="sub-section">
        <label htmlFor="first-angle-intput" className="first-angle-label">
          first angle:
        </label>
        <input
          id="first-angle-intput"
          value={firstAngleInput}
          onChange={firstAngleInputChangeHandler}
          type={"number"}
          min={0}
        ></input>

        <label htmlFor="second-angle-intput" className="second-angle-label">
          second angle:
        </label>
        <input
          id="second-angle-intput"
          value={secondAngleInput}
          onChange={secondAngleInputChangeHandler}
          type={"number"}
          min={0}
        ></input>

        <label htmlFor="third-angle-intput" className="third-angle-label">
          third angle:
        </label>
        <input
          id="third-angle-intput"
          value={thirdAngleInput}
          onChange={thirdAngleInputChangeHandler}
          type={"number"}
          min={0}
        ></input>
      </div>
    );
  }

  /**
   * Function to render is triangle button
   * @returns is triangle button
   */
  function renderIsTriangleButton() {
    return (
      <button
        className={`${
          isTriangleButtonInvalid() ? "btn-disabled" : "btn-enabled"
        }`}
        disabled={isTriangleButtonInvalid()}
        onClick={() =>
          isTriangleButtonClickHandler(
            firstAngleInput,
            secondAngleInput,
            thirdAngleInput
          )
        }
      >
        is triangle?
      </button>
    );
  }

  /**
   * Function to render output message
   * @returns output message
   */
  function renderOutput() {
    return (
      <h2
        className={`${
          outputMessage === AppConstants.DEFAULT_CONSTANTS.IS_TRIANGLE_MESSAGE
            ? "output-msg"
            : "error-msg"
        }`}
      >
        {outputMessage}
      </h2>
    );
  }
  //   <-- Rendering Is Triangle? page -->
  return (
    <section className="sub-section">
      {renderAppDescriptionSection()}
      {renderTriangleAnglesInputLabelsSection()}
      {renderIsTriangleButton()}
      {renderOutput()}
    </section>
  );
}
export default Section;
