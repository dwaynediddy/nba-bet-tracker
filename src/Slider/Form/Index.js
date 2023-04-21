import React from "react";
import FormElement from "./FormElement";
import "./style.css";
const formEls = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"];
const Form = ({ currentIndex, handleNext, handleComplete }) => {
  return (
    <div className="form-container">
      <h3>{formEls[currentIndex]}</h3>
      {currentIndex === formEls.length - 1 ? (
        <FormElement
          value={"Complete"}
          onClick={() => handleComplete(currentIndex)}
        />
      ) : (
        <FormElement value={"Next"} onClick={() => handleNext(currentIndex)} />
      )}
    </div>
  );
};

export default Form;
