import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Heroimg from "../components/Heroimg";
import PricingCards from "../components/Pricing";

export default function Pricing() {
  return (
    <div>
      <Navbar />
      <Heroimg heading="PRICING" text="Choose your trip." />
      <PricingCards />
      <Footer />
    </div>
  );
}
