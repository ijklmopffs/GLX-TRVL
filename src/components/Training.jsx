import React from "react";
import "./TrainingStyles.css";
import pod from "../assets/pod.jpg";
import moon from "../assets/moon.jpg";
import { Link } from "react-router-dom";

export default function Training() {
  return (
    <div className="training">
      <div className="left">
        <h1>Training</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          corrupti laboriosam aliquid. Perferendis cumque illo necessitatibus,
          eligendi quidem amet ullam qui magnam, sit aliquam fugit?
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="image-stack top">
            <img src={moon} className="img" alt="" />
          </div>
          <div className="image-stack bottom">
            <img src={pod} className="img" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
