import React, { Component } from "react";
import { Link } from "react-router-dom";

class quizApp extends Component {
  state = {};
  render() {
    return (
      <div className="quiz-app">
        <h3 className="title-quiz">Quiz App</h3>
        <Link className="quiz-content" to="/quiz-app/content">
          <button className="btn btn-outline-light quizapp-start-btn">
            شروع کن
          </button>
        </Link>
      </div>
    );
  }
}

export default quizApp;
