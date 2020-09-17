import React from 'react';
import quizQuestion from '../asset/quizQuestion';
//function to count the question numbers
function QuestionCount(props) {

  return (
    <div className="questionCount">
      Question <span>{props.counter}</span> of <span>{props.total}</span>
       {props.counter === quizQuestion.length ? (<a className="result-link" href="" onClick={props.viewreults}>View Results</a>) : (<div className="bottom-footer"></div>)}
    </div>
  );
//quizQuestion.length allows dynamicity, numbers of questions can easily varied
}

export default QuestionCount;