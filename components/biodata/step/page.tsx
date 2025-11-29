"use client";

import { useState } from "react";
import Image from "next/image";
import Stepper, { Step } from "@/components/Stepper";

const StepComponent: React.FC = () => {
  const [name, setName] = useState<string>("");

  return (
    <div>
      <Stepper
        initialStep={1}
        onStepChange={(step: number) => {
          console.log(step);
        }}
        onFinalStepCompleted={() => console.log("All steps completed!")}
        backButtonText="Previous"
        nextButtonText="Next"
      >
        <Step>
          <h2>Welcome to the React Bits stepper!</h2>
          <p>Check out the next step!</p>
        </Step>

        <Step>
          <h2>How about an input?</h2>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 rounded"
            placeholder="Your name?"
          />
        </Step>

        <Step>
          <h2>Final Step</h2>
          <p>You made it!</p>
        </Step>
      </Stepper>
    </div>
  );
};

export default StepComponent;
