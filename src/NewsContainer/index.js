import React, { Component } from 'react'

class NewsContainer extends Component {
	constructor() {
		super()

		this.state = {
			newsArticles: [],
			searchTerm: ''
		}
	}
	handleChange = (e) => {
		this.setState({[e.target.name]: e.target.value})
	}
	handleSubmit = async (e) => {
		e.preventDefault()
		try {
			const newsResponse = await fetch(process.env.REACT_APP_BACKEND_URL + '/api/v1/articles/news-everything/:' + this.state.searchTerm)
			if(newsResponse.status !== 200) {
				throw Error(newsResponse.statusText)
			}
			const newsParsed = await newsResponse.json()
			this.setState({newsArticles: newsParsed.data})
			console.log(newsParsed);

		} catch(err) {
			console.log(err)
		}
	}
	render() {
		return(
			<div>
				<form onSubmit={this.handleSubmit}>
					<input type='text' name='searchTerm' onChange={this.handleChange}/>
					<button type='submit'> Search Bitch! </button>
				</form>
			</div>
			)
	}


}




export default NewsContainer