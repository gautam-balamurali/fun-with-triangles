/* eslint-disable */

import React from "react";
import {
  calculateSumOfSquares,
  containsOnlySpaces,
  convertToInteger,
  convertToNumber,
  fixToTwoDigitsAfterDecimalPoint,
  getSquareRoot,
  isNotANumber,
} from "../../../utils/app-utils";
import * as AppConstants from "../../../config/app-config";
import calc_hypotenuse from "../../../images/hypotenuse.svg";
import { useState } from "react";

function Section() {
  const [baseValueInput, setBaseValueInput] = useState("");
  const [heightValueInput, setHeightValueInput] = useState("");
  const [outputMessage, setOutputMessage] = useState("");

  //   <-- Validity Functions Begins -->

  /**
   * Function to check validity of calculate hypotenuse button
   * @returns boolean
   */
  function isCalculateHypotenuseButtonInvalid() {
    return baseValueInput.length < 1 || heightValueInput.length < 1;
  }

  /**
   * Function to check number input validity
   * @param input
   * @returns boolean
   */
  function isNumberInputValid(input) {
    if (
      isNotANumber(input) ||
      containsOnlySpaces(input) ||
      convertToInteger(input) <= 0 ||
      input === ""
    ) {
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
   * Function to handle base value input change
   * @param event
   */
  function baseValueInputChangeHandler(event) {
    let inputBaseValue = event.target.value;
    if (isNumberInputValid(inputBaseValue)) {
      setOutputMessage("");
      setBaseValueInput(inputBaseValue);
    } else {
      invalidInputErrorHandler();
      setBaseValueInput("");
    }
  }

  /**
   * Function to handle height value input change
   * @param event
   */
  function heightValueInputChangeHandler(event) {
    let inputHeightValue = event.target.value;
    if (isNumberInputValid(inputHeightValue)) {
      setOutputMessage("");
      setHeightValueInput(inputHeightValue);
    } else {
      invalidInputErrorHandler();
      setHeightValueInput("");
    }
  }

  //   <-- Change Handler Functions Ends -->

  //   <-- Click Handler Functions Begins -->

  /**
   * Function to handle when calculate hypotenuse button is clicked
   * @param baseValue
   * @param heightValue
   */
  function calculateHypotenuseButtonClickHandler(baseValue, heightValue) {
    baseValue = convertToNumber(baseValue);
    heightValue = convertToNumber(heightValue);

    const lengthOfHypotenuse = calculateHypotenuse(baseValue, heightValue);

    setOutputMessage(
      `${
        AppConstants.DEFAULT_CONSTANTS.HYPOTENUSE_VALUE_MESSAGE
      } ${fixToTwoDigitsAfterDecimalPoint(lengthOfHypotenuse)}`
    );
  }

  /**
   * Function to calculate hypotenuse of a triangle
   * @param baseValue
   * @param heightValue
   * @returns hypotenuse
   */
  function calculateHypotenuse(baseValue, heightValue) {
    const sumOfSquares = calculateSumOfSquares(baseValue, heightValue);
    const lengthOfHypotenuse = getSquareRoot(sumOfSquares);
    return lengthOfHypotenuse;
  }

  //   <-- Click Handler Functions Ends -->

  //   <-- Render Functions Begins -->

  /**
   * Function to render user avatar
   * @returns user avatar image
   */
  function renderUserAvatar() {
    return (
      <div className="container user-avatar">
        <img src={calc_hypotenuse} alt="User Avatar" />
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
        <h3>{AppConstants.DEFAULT_CONSTANTS.HYPOTENUSE_FORMULA}</h3>
      </div>
    );
  }

  /**
   * Function to render values input labels section
   * @returns values input labels section
   */
  function renderCalculateHypotenuseValuesInputLabelsSection() {
    return (
      <div className="sub-section">
        <label htmlFor="base-value-intput" className="base-value-label">
          base value:
        </label>
        <input
          id="base-value-intput"
          value={baseValueInput}
          onChange={baseValueInputChangeHandler}
          type={"number"}
          min={0}
          placeholder="enter a value"
        ></input>

        <label htmlFor="height-value-intput" className="height-value-label">
          height value:
        </label>
        <input
          id="height-value-intput"
          value={heightValueInput}
          onChange={heightValueInputChangeHandler}
          type={"number"}
          min={0}
          placeholder="enter a value"
        ></input>
      </div>
    );
  }

  /**
   * Function to render calculate hypotenuse button
   * @returns calculate hypotenuse button
   */
  function renderCalculateHypotenuseButton() {
    return (
      <button
        className={`${
          isCalculateHypotenuseButtonInvalid() ? "btn-disabled" : "btn-enabled"
        }`}
        disabled={isCalculateHypotenuseButtonInvalid()}
        onClick={() =>
          calculateHypotenuseButtonClickHandler(
            baseValueInput,
            heightValueInput
          )
        }
      >
        calculate hypotenuse
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
          outputMessage.includes(
            AppConstants.DEFAULT_CONSTANTS.HYPOTENUSE_VALUE_MESSAGE
          )
            ? "output-msg"
            : "error-msg"
        }`}
      >
        {outputMessage}
      </h2>
    );
  }
  //   <-- Rendering Calculate Hypotenuse page -->
  return (
    <section className="sub-section">
      {renderUserAvatar()}
      {renderAppDescriptionSection()}
      {renderCalculateHypotenuseValuesInputLabelsSection()}
      {renderCalculateHypotenuseButton()}
      {renderOutput()}
    </section>
  );
}
export default Section;
