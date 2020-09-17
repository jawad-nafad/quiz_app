/* import React from 'react'; 
import "../quiz/style.css"; 

const Result = ({score, playAgain}) => ( 
<div className="score-board"> 
	<div className="score"> Your score is {score} / 5 correct answer ! ! ! </div> 
	<button className="playBtn" onClick={playAgain} > Play Again </button> 
</div> 
) 

export default Result; 
 */

import React from 'react';

class Result extends React.Component {
 
  renderQuestions(){
    return  this.props.quizResult.map((_data,index) =>{
        return <div className="list-grp">{_data.question} <br/>correct answer is option: {_data.answerindex} :  and you have selected {this.props.answers[index]+1} { ((this.props.answers[index]+1) === _data.answerindex) ? (<span className="status">Excellent!!!</span>) : ''}</div>
    })
  }
  render (){
    return (
    <div  className="quiz-story">
      <div>
        <strong>Lets see your results</strong>!
        <div>{this.renderQuestions()}</div>
      </div>
    </div>
    )
  }
}

export default Result;