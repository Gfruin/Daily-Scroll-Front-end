import React, { Component } from 'react';

class Register extends Component {
	constructor() {
		super();

		this.state = {
			username: '',
			password: ''
		}
	}
	handleChange = (e) => {
		this.setState({[e.target.name]: e.target.value})
	}
	handleSubmit = async (e) => {
		e.preventDefault();
		console.log("handleSubmit");
		try { 
			const registerResponse = await fetch(process.env.REACT_APP_BACKEND_URL + '/api/v1/auth/register', {
				method: 'POST',
				credentials: 'include',
				body: JSON.stringify(this.state),
				headers: {
					'Content-type': 'application/json'
				}
			})
			const parsedResponse = await registerResponse.json();
			console.log(parsedResponse);
			// if(parsedResponse.data === 'registration successful') {

			// }

		} catch(err) {
			console.log(err);
		}
	}
			render() {
		return(
			<form onSubmit={this.handleSubmit}>
			Username:
			<input type='text' name='username' onChange={this.handleChange}/>
			Password:
			<input type='password' name='password' onChange={this.handleChange}/>
			<button type='submit'> Register </button>
			</form>
			)
	}
}
export default Register