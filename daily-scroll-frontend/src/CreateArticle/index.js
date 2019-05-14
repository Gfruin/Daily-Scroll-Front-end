import React, { Component } from 'react';

class CreateArticle extends Component {
	constructor() {
		super();

		this.state = {
			title: '',
			description: ''

		}
	}
	updateArticle = (e) => {
		this.setState({[e.currentTarget.name]: e.currentTarget.value})
	}

	render(){
		return (
			<form>
				<label>
					Article:
					<input type="text" name="title" onChange={this.updateArticle}/>
				</label>
				<label>
					Description:
					<input type="text" name="description" onChange={this.updateArticle}/>
				</label>
				<input type ="Submit"/>
			</form>

			)
	}
}
