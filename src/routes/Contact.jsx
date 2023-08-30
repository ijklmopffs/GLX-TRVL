import React from "react";
import Navbar from "../components/Navbar";
import Heroimg from "../components/Heroimg";
import Footer from "../components/Footer";
import Form from "../components/Form";

export default function Contact() {
  return (
    <div>
      <Navbar />
      <Heroimg heading="CONTACT." text="Contact GLX Travel" />
      <Form />
      <Footer />
    </div>
  );
}
