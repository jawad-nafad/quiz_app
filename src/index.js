import React, {Component} from "react"; 
import ReactDOM from "react-dom"; 
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Theory from './components/Theory';
import Navbar from './components/Navbar';
import App from './quizRender/App';

//final compilation
class MANEZCO_APP extends Component { 
	render() {
		
		return (
			<>
		 	<Router>
			<Navbar/>
			<Route path={"/"} exact component={Theory} />
            <Route path={"/quiz_app/theory"}  component={Theory} />
            <Route path={"/quiz_app/quiz"} component={App} />           
			</Router> 
			
		</>
		) 
	} 
 
} 

ReactDOM.render(<MANEZCO_APP/>, document.getElementById("root")); 
