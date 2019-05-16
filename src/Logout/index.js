import React, {Component} from 'react'


class Logout extends Component {
	constructor(){
		super();
		this.state = {
			username: '',
			password: '',
			logged: false,

		}
	}
	
	handleSubmit = async (e) => {
		e.preventDefault()
		try {
			const logoutResponse = await fetch(process.env.REACT_APP_BACKEND_URL + '/api/v1/auth/logout', {
				method: 'GET',
				credentials: 'include',
			})
			console.log(logoutResponse, "here is the logout response");
			this.props.logout(this.state.username, this.state.password, this.state.logged)
			console.log(this.state.username, this.state.password, this.state.logged);
			this.props.hideResults()
		} catch(err) {
			console.log(err);
		}
	}
	render() {
		return(
			<form onSubmit={this.handleSubmit}>
			<button type='submit'> Log out </button>
			</form>
			)
	}
}
export default Logout
