import React, { Component } from 'react'
import NewsArticles from '../NewsList'

class NewsContainer extends Component {
	constructor() {
		super()

		this.state = {
			newsArticles: [],
			searchTerm: '',
			searchCountry: '',
			newSearch: false
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
			console.log(this.state.searchTerm, "here is the searchTerm");
			if(this.state.newSearch == false) {
				this.setState({newSearch: true})
			} 
			console.log(this.state.newSearch);

		} catch(err) {
			console.log(err)
		}
	}
	render() {
		return(
			<div>
				<form onSubmit={this.handleSubmit}>
					<input type='text' name='searchTerm' onChange={this.handleChange}/>
					<button type='submit'> Search! </button>
				</form>
				<NewsArticles newsArticles={this.state.newsArticles}/>
			</div>
			)
	}


}




export default NewsContainer