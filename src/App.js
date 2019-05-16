import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ArticleContainer from './ArticleContainer/index'
import Register from './Register'
import Login from './Login'
import NewsContainer from './NewsContainer'
import Logout from './Logout'
class App extends Component {
	constructor	() {
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
	logout = (username) => {
		this.setState({
			logged: false,
			username: username,

		})
	}

	render() {
  		return (
			<div className="App">
				<Logout logout={this.logout}/>
     	 		{this.state.logged ? <ArticleContainer/> : null}
     	 		{this.state.logged == false ? <Register/> : null}
     	 		{this.state.logged == false ? <Login login={this.login}/> : null}
     	 		<NewsContainer logged={this.state.logged}/>
    	 	</div>
  		);
	}
}
  




export default App;
