import React from "react";
import "./FormStyles.css";

export default function Form() {
  return (
    <div className="form">
      <form>
        <label htmlFor="">Your Name</label>
        <input type="text" />
        <label htmlFor="">Email</label>
        <input type="email" />
        <label htmlFor="">Subject</label>
        <input type="text" />
        <label htmlFor="">Details</label>
        <textarea rows="6" placeholder="Type a short message here"></textarea>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
}
