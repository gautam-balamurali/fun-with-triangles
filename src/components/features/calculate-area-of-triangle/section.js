/* eslint-disable */

import React from "react";
import {
  containsOnlySpaces,
  convertToNumber,
  fixToTwoDigitsAfterDecimalPoint,
  isNotANumber,
} from "../../../utils/app-utils";
import * as AppConstants from "../../../config/app-config";
import calc_area from "../../../images/area.svg";
import { useState } from "react";

function Section() {
  const [baseValueInput, setBaseValueInput] = useState("");
  const [heightValueInput, setHeightValueInput] = useState("");
  const [outputMessage, setOutputMessage] = useState("");

  //   <-- Validity Functions Begins -->

  /**
   * Function to check validity of calculate area button
   * @returns boolean
   */
  function isCalculateAreaButtonInvalid() {
    return baseValueInput.length < 1 || heightValueInput.length < 1;
  }

  /**
   * Function to check number input validity
   * @param input
   * @returns boolean
   */
  function isNumberInputValid(input) {
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
   * Function to handle when calculate area button is clicked
   * @param baseValue
   * @param heightValue
   */
  function calculateAreaButtonClickHandler(baseValue, heightValue) {
    baseValue = convertToNumber(baseValue);
    heightValue = convertToNumber(heightValue);

    const area = calculateArea(baseValue, heightValue);

    setOutputMessage(
      `${
        AppConstants.DEFAULT_CONSTANTS.AREA_VALUE_MESSAGE
      } ${fixToTwoDigitsAfterDecimalPoint(area)}`
    );
  }

  /**
   * Function to calculate area of a triangle
   * @param baseValue
   * @param heightValue
   * @returns area
   */
  function calculateArea(baseValue, heightValue) {
    const product = baseValue * heightValue;
    const area = product / 2;
    return area;
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
        <img src={calc_area} alt="User Avatar" />
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
        <h3>{AppConstants.DEFAULT_CONSTANTS.AREA_FORMULA}</h3>
      </div>
    );
  }

  /**
   * Function to render values input labels section
   * @returns values input labels section
   */
  function renderCalculateAreaValuesInputLabelsSection() {
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
   * Function to render calculate area button
   * @returns calculate area button
   */
  function renderCalculateAreaButton() {
    return (
      <button
        className={`${
          isCalculateAreaButtonInvalid() ? "btn-disabled" : "btn-enabled"
        }`}
        disabled={isCalculateAreaButtonInvalid()}
        onClick={() =>
          calculateAreaButtonClickHandler(baseValueInput, heightValueInput)
        }
      >
        calculate area
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
            AppConstants.DEFAULT_CONSTANTS.AREA_VALUE_MESSAGE
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
      {renderCalculateAreaValuesInputLabelsSection()}
      {renderCalculateAreaButton()}
      {renderOutput()}
    </section>
  );
}
export default Section;
