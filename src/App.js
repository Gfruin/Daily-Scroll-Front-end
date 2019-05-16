import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ArticleContainer from './ArticleContainer/index'
import Register from './Register'
import Login from './Login'
import NewsContainer from './NewsContainer'
class App extends Component {
	constructor	() {
		super();
		this.state = {
			logged: false,
			username: '',
		}
	}
	login = (username) => {
		this.setState({
			logged: true,
			username: username

		})
	}

	showRegister = () => {
		console.log( "<-----here is the showModal");
		this.setState({
			registered: true
		})
	}
	render() {
  		return (
			<div className="App">
     	 		{this.state.logged == true ? <ArticleContainer/> : null}
     	 		{this.state.logged == true ? <Register/> : null}
     	 		{this.state.logged == true ? <Login login={this.login}/> : null}
     	 		<NewsContainer/>
    	 	</div>
  		);
	}
}
  




export default App;
