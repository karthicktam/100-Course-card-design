import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "./styles.css";

export default function App() {
  return (
    <div className="courses-container">
      <div className="course">
        <div className="course-preview">
          <h6>Course</h6>
          <h2>Javascript Fundamentals</h2>
          <p>
            View all chapters <FontAwesomeIcon icon={faChevronRight} />
          </p>
        </div>

        <div className="course-info">
          <div className="progress-container">
            <div className="progress"></div>
            <span className="progress-text">6/9 Challenges</span>
          </div>

          <h6>Chapter 6</h6>
          <h2>Callbacks & Closures</h2>
          <button className="btn">Continue</button>
        </div>
      </div>
    </div>
  );
}
