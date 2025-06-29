"use client";

import { useState } from "react";
import Header from "@/components/ui/header";
import { Button } from "@/components/ui/button";

export default function GetStarted() {
  const [step, setStep] = useState<"intro" | "choose" | "form">("intro");
  const [loanType, setLoanType] = useState("");

  const handleLoanSelect = (type: string) => {
    setLoanType(type);
    setStep("form");
  };

  const Highlight = ({ children }: { children: string }) => (
    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500 opacity-80 font-semibold">
      {children}
    </span>
  );

  const Emphasis = ({ children }: { children: string }) => (
    <span className="font-medium text-blue-700 dark:text-green-300">
      {children}
    </span>
  );

  const loanOptions = [
    { label: "Home", icon: "🏠" },
    { label: "Personal", icon: "👤" },
    { label: "Vehicle", icon: "🚗" },
    { label: "Education", icon: "🎓" },
  ];

  return (
    <div className="min-h-screen px-6 py-16 bg-gradient-to-b from-blue-50 to-green-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white">
      <Header />

      <div className="max-w-3xl mx-auto space-y-10 mt-10">
        {step === "intro" && (
          <>
            <h1 className="text-4xl font-bold text-center">
              Welcome to <Highlight>AGS Financials</Highlight>
            </h1>
            <p className="text-lg text-center text-gray-600 dark:text-gray-300">
              We help people across <Highlight>Karnataka</Highlight> choose the
              right loan — whether it’s for a <Emphasis>new home</Emphasis>,{" "}
              <Emphasis>personal needs</Emphasis>, or{" "}
              <Emphasis>education</Emphasis>. Our guidance is{" "}
              <Emphasis>fast</Emphasis>, <Emphasis>free</Emphasis>, and{" "}
              <Emphasis>personalized</Emphasis>.
            </p>
            <div className="text-center">
              <Button
                className="mt-6 w-full sm:w-auto bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-3 px-6 rounded-md font-semibold hover:brightness-110 transition"
                onClick={() => setStep("choose")}
              >
                proceed
              </Button>
            </div>
          </>
        )}

        {step === "choose" && (
          <>
            <h2 className="text-3xl font-semibold text-center">
              Select a <Emphasis>Loan Type</Emphasis>
            </h2>
            <div className="grid grid-cols-2 gap-4 mt-6">
              {loanOptions.map(({ label, icon }) => (
                <button
                  key={label}
                  onClick={() => handleLoanSelect(label)}
                  className="bg-white dark:bg-gray-800 flex flex-col items-center justify-center p-6 rounded-xl shadow hover:ring-2 hover:ring-blue-500 transition text-lg font-medium"
                >
                  <div className="text-3xl mb-2">{icon}</div>
                  {label} Loan
                </button>
              ))}
            </div>
          </>
        )}

        {step === "form" && (
          <>
            <h2 className="text-3xl font-semibold text-center">
              Apply for a <Highlight>{loanType}</Highlight> Loan
            </h2>
            <form className="space-y-6 bg-white dark:bg-gray-900/60 shadow-xl rounded-xl p-8 mt-4">
              <div>
                <label className="block font-medium">Full Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 mt-1 rounded-md bg-gray-50 dark:bg-gray-800 border dark:border-gray-700"
                />
              </div>
              <div>
                <label className="block font-medium">Loan Amount (₹)</label>
                <input
                  type="number"
                  required
                  className="w-full px-4 py-2 mt-1 rounded-md bg-gray-50 dark:bg-gray-800 border dark:border-gray-700"
                />
              </div>
              <div>
                <label className="block font-medium">City / Town</label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Bengaluru"
                  className="w-full px-4 py-2 mt-1 rounded-md bg-gray-50 dark:bg-gray-800 border dark:border-gray-700"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-semibold"
              >
                Submit Application
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
