import React from 'react';
//function to displaying questions, reusable to anywhere in the app
function Question(props) {

  return (
    <div>
     <h2 className="question">{props.content}</h2>

  </div>
  );
}


export default Question;