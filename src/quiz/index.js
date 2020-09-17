//This module prepares the baseline of the quiz by all important modules created
import React from 'react';
import Question from '../components/QuestionBox';
import QuestionCount from '../components/QuestionCount';
import AnswerOption from '../components/AnswerOption';
import quizQuestions from '../asset/quizQuestion/index';

function Quiz(props) {

  function renderAnswerOptions(key,index) {
    return (
      <AnswerOption
        index ={index}
        key={key.content}
        answerContent={key.content}
        answerType={key.type}
        answer={props.answer}
        questionId={props.questionId}
        selectedAnswer={props.selectedAnswer}
        onAnswerSelected={props.onAnswerSelected}
      />
    );
  }


  return (
      <div key={props.questionId} className="quiz-story">
        <QuestionCount counter={props.counter} viewreults={props.viewreults}
          counter={props.questionId}
          total={props.questionTotal}
        />
		<div className='quiz-container'>
        <Question  content={props.question} />
        <ul className="answerOptions">
          {props.answerOptions.map(renderAnswerOptions)}
        </ul>
        <div className="bottom-footer" >
          {props.counter > 0 ? (<button id="previous-btn" onClick={props.setPreviousQuestion} >Previous</button>) : (<div></div>)}

          {props.counter < (quizQuestions.length-1) ? (<button id="next-btn" onClick={props.setNextQuestion} >Next</button>) : (<div></div>)}
      </div>
      </div>
      </div>
  );
}


export default Quiz;