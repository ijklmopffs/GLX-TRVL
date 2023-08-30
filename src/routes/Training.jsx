import React from "react";
import Navbar from "../components/Navbar";
import Heroimg from "../components/Heroimg";
import Footer from "../components/Footer";
import TrainingCard from "../components/Training";

export default function Training() {
  return (
    <div>
      <Navbar />
      <Heroimg heading="TRAINING" text="Pre-flight & In-flight Training." />
      <TrainingCard />
      <Footer />
    </div>
  );
}
