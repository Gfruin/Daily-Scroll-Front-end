import React, { Component } from 'react';

class CreateArticle extends Component {
	constructor() {
		super();

		this.state = {
			title: '',
			description: '',
			category: ''

		}
	}
	updateArticle = (e) => {
		this.setState({[e.currentTarget.name]: e.currentTarget.value})
	}

	render(){
		return (
			<form onSubmit={this.props.addArticle.bind(null,this.state)}>
				<label>
					Article:
					<input type="text" name="title" onChange={this.updateArticle}/>
				</label>
				<label>
					Description:
					<input type="text" name="description" onChange={this.updateArticle}/>
				</label>
				<select name="category" onChange={this.updateArticle}>
  					<option value="education">Education</option> 
  					<option value="technology">Technology</option>
  					<option value="politics">Politics</option>
  					<option value="business">Business</option> 
  					<option value="local">Local</option>
  					<option value="national">National</option>
  					<option value="international">International</option> 
  					<option value="opinion">Opinion</option>
  					<option value="entertainment">Entertainment</option>
  					<option value="health">Health</option> 
  					<option value="science">Science</option>
  					<option value="sports">Sports</option>
				</select>
					<input type="submit"/>
			</form>

			)
	}
}

export default CreateArticle
