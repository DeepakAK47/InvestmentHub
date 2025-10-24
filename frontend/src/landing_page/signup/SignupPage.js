import React from "react";
import ExploreDifferentAccount from "./ExploreDifferentAccount";
import Hero from "./Hero";
import InvestmentOption from "./InvestmentOption";
import QuestionAndAnswer from "./QuestionAndAnswer";
import SignUpNow from "./SignUpNow";
import StepOfOpenAccount from "./StepOfOpenAccount";
import BenefitSection from "./BenefitSection.js";
import OpenAccount from "../OpenAccount";

function SignupPage() {
  return (
    <>
      <Hero />
      <SignUpNow />
      <InvestmentOption />
      <StepOfOpenAccount />
      <BenefitSection/>
      <ExploreDifferentAccount />
      <QuestionAndAnswer />
      <OpenAccount/>
    </>
  );
}

export default SignupPage; 
  