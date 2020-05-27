import React from "react";
import PropTypes from "prop-types";
import { CSSTransitionGroup } from "react-transition-group";
import Question from "../Question";
import QuestionCount from "../QuestionCount";
import AnswerOption from "../AnswerOption";
import "./Quiz.css";

function Quiz(props) {
  function renderAnswerOptions(key) {
    return (
      <AnswerOption
        key={key.content}
        answerContent={key.content}
        answerType={key.type}
        answer={props.answer}
        questionId={props.questionId}
        onAnswerSelected={props.onAnswerSelected}
        background={props.backfround}
      />
    );
  }

  return (
    <CSSTransitionGroup
      className="container"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
      background={props.background}
    >
      <div key={props.questionId}>
        <div className="question-area">
          <QuestionCount
            counter={props.questionId}
            total={props.questionTotal}
          />
          <Question content={props.question} />
        </div>
        <div className="answer-render-section">
          <li className="answerOptions">
            {props.answerOptions.map(renderAnswerOptions)}
          </li>
        </div>
      </div>
    </CSSTransitionGroup>
  );
}

Quiz.propTypes = {
  answer: PropTypes.string.isRequired,
  answerOptions: PropTypes.array.isRequired,
  question: PropTypes.string.isRequired,
  questionId: PropTypes.number.isRequired,
  questionTotal: PropTypes.number.isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
};

export default Quiz;
