import { useState } from "react";

import Step from "./Step";
import Slider from "./Slider";
import "./style.css";
import { Form } from "react-router-dom"

export default function SliderApp() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const _handleIndexChange = (index) => {
    setCurrentIndex(index);
  };

  const _handleNext = (currentIndex) => {
    setCurrentIndex(currentIndex + 1);
  };

  const _handleComplete = () => {};

  return (
    <div className="SliderApp">
      <div className="container">
        <Step currentIndex={currentIndex} />
      </div>
      <Slider onChange={_handleIndexChange} currentIndex={currentIndex} />

      <div className="form-container">
        <Form
          currentIndex={currentIndex}
          handleNext={_handleNext}
          handleComplete={_handleComplete}
        />
      </div>
    </div>
  );
}