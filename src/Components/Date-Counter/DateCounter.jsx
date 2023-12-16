import { useState } from "react";
import "./DateCounter.css";

export default function DateCounter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const stepUp = () => {
    setStep((s) => s + 1);
  };

  const stepDown = () => {
    if (step > 0) {
      setStep((s) => s - 1);
    }
  };

  const countUp = () => {
    setCount((c) => c + step);
  };

  const countDown = () => {
    setCount((c) => c - step);
  };

  const handleReset = () => {
    setCount(0);
    setStep(1);
  };

  const date = new Date();

  date.setDate(date.getDate() + count);
  return (
    <>
      <div className="app">
        <div>
          <input
            type="range"
            min={1}
            max={10}
            value={step}
            onChange={(e) => setStep(Number(e.target.value))}
          />
          <span>Step: {step}</span>
        </div>
        <div>
          <button onClick={countDown}>-</button>
          <input
            type="text"
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
          />
          <button onClick={countUp}>+</button>
        </div>
        <div>
          <p>
            <span>
              {count === 0
                ? "Today is "
                : count > 0
                ? `${count} days from today is `
                : `${Math.abs(count)} days ago was `}
            </span>
            <span style={{ fontWeight: "bold" }}>{date.toDateString()}</span>
          </p>
        </div>
        <button onClick={handleReset}>Reset</button>
      </div>
    </>
  );
}
