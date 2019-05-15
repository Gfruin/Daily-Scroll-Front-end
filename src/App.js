import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ArticleContainer from './ArticleContainer/index'
import Register from './Register'
import Login from './Login'

class App extends Component {
	constructor() {
		super();
		this.state = {
			logged: false,
			username: ''
		}
	}
	login = (username) => {
		this.setState({
			logged: true,
			username: username

		})
	}
	render() {
  		return (
			<div className="App">
     	 	<ArticleContainer/>
     	 	<Register/>
     	 	<Login login={this.login}/>
    	 	</div>
  		);
	}
}
  




export default App;
