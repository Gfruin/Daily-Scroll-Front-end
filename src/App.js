import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ArticleContainer from './ArticleContainer/index'
import Register from './Register'
import Login from './Login'
import NewsContainer from './NewsContainer'
import Logout from './Logout'
import Button from 'react-bootstrap/Button';


class App extends Component {
	constructor	() {
		super();
		this.state = {
			logged: false,
			username: '',
			showResults: false
		}
	}
	login = (username) => {
		this.setState({
			logged: true,
			username: username

		})
	}
	logout = (username) => {
		this.setState({
			logged: false,
			username: username,

		})
	}

	displayResults = () => {
		this.setState({
			showResults: true
		})
	}

	hideResults = () => {
		this.setState({
			showResults: false
		})
	}

	render() {
  		return (
			<div className="App">
				<Logout logout={this.logout} hideResults={this.hideResults}/>
     	 		{this.state.logged ? <ArticleContainer hideResults={this.hideResults} /> : null}
     	 		{this.state.logged == false ? <Register hideResults={this.hideResults}/> : null}
     	 		{this.state.logged == false ? <Login login={this.login} hideResults={this.hideResults}/> : null}
     	 		<NewsContainer 
     	 			showResults={this.state.showResults} 
     	 			hideResults={this.hideResults}
     	 			displayResults={this.displayResults} />
    	 	</div>
  		);
	}
}
  




export default App;
