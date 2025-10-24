import React from "react";
import Brokrage from "./Brokrage";
import Hero from "./Hero";
import Ecc from "./Ecc.js";
import OpeningCharge from "./OpeningCharge.js";
import AnnualCharge from "./AnnualCharge.js";
import OptionalCharge from "./OptionalCharges.js";
import Explained from "./Explained.js";
function PricingPage() {
  return (
    <>
      <Hero />
      <Brokrage />
      <Ecc/>
      <OpeningCharge/>
      <AnnualCharge/>
      <OptionalCharge/>
      <Explained/>
    </>
  );
}

export default PricingPage;
 