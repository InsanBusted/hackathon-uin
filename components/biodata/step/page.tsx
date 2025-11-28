"use client";

import Image from "next/image";
import Stepper, { Step } from "../../Stepper";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

const StepRow = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const titles = ["Fill In Your Data", "Upload CV", "Targeted Field"];

  return (
    <div className="w-full flex flex-col items-center justify-center">
      {/* Header */}
      <div className="flex flex-col items-center justify-center gap-4">
        <h2 className="text-2xl font-bold bg-linear-to-r from-[#130F26] via-[#0A2F5A] to-[#64B5F6] bg-clip-text text-transparent">
          Start Here!
        </h2>
        <Image
          src="/image/arrowDown.png"
          width={20}
          height={20}
          alt="arrow down"
        />
      </div>

      {/* Stepper */}
      <div className="w-full flex flex-col p-6 bg-white">
        <div className="w-full mx-auto bg-linear-to-b from-[#63D9FA] to-[#F5F5F5] rounded-xl shadow-md p-6 md:p-8">
          <Stepper
            initialStep={1}
            onStepChange={(step) => setCurrentStep(step)}
            backButtonText="Previous"
            nextButtonText="Next"
          >
            <Step>
              <h2 className="text-lg font-semibold text-center bg-linear-to-r from-[#130F26] via-[#0A2F5A] to-[#64B5F6] bg-clip-text text-transparent">
                Fill In Your Data
              </h2>
            </Step>

            <Step>
              <h2 className="text-lg font-semibold text-center bg-linear-to-r from-[#130F26] via-[#0A2F5A] to-[#64B5F6] bg-clip-text text-transparent">
                Upload CV
              </h2>
            </Step>

            <Step>
              <h2 className="text-lg font-semibold text-center bg-linear-to-r from-[#130F26] via-[#0A2F5A] to-[#64B5F6] bg-clip-text text-transparent">
                Targeted Field
              </h2>
            </Step>
          </Stepper>
          {/* Dynamic Title */}
          <div className="flex flex-col mt-4">
            <h1 className="text-2xl md:font-bold bg-linear-to-r from-[#130F26] via-[#0A2F5A] to-[#64B5F6] bg-clip-text text-transparent">
              {titles[currentStep - 1]}
            </h1>

            {/* Contoh Section Konten Dinamis */}
            <p className="mt-2 text-sm text-gray-600">
              {currentStep === 1 &&
                "Silakan isi data diri Anda di formulir berikut."}
              {currentStep === 2 &&
                "Unggah dokumen yang dibutuhkan pada langkah ini."}
              {currentStep === 3 && "Periksa kembali data Anda sebelum submit."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepRow;
