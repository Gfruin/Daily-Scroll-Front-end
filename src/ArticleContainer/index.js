import React, { Component } from 'react'
import CreateArticle from '../CreateArticle/'
import Articles from '../ArticleList'

class ArticleContainer extends Component {
	constructor() {
		super();
		this.state = {
			articles: [],


		}
	}
	componentDidMount(){
		this.getArticles()	
	}
	getArticles = async () => {
		try {
			const response = await fetch(process.env.REACT_APP_BACKEND_URL + '/api/v1/articles')
			if(response.status !== 200) {
				throw Error(response.statusText)
			}
			const articlesParsed = await response.json()
			this.setState({articles: articlesParsed.data})

		} catch(err) {
			console.log(err)
		}
	}

	addArticle = async (article,e) => {
		e.preventDefault()
		console.log(article);
		try {
			const createdArticle = await fetch(process.env.REACT_APP_BACKEND_URL + '/api/v1/articles', {
				method: 'POST',
				credentials: 'include',
				body: JSON.stringify(article),
				headers: {
					'Content-type': 'application/json'
				}
			})
			console.log(createdArticle);
			const parsedResponse = await createdArticle.json();
			console.log(parsedResponse);

			this.setState({articles: [...this.state.articles, parsedResponse.data]})

		} catch(err) {
			console.log(err)
		}
	}
	render() {
		return(
			<div>
				<CreateArticle addArticle={this.addArticle}/>
				<Articles articles={this.state.articles}/>
			</div>

		)
	}
}

export default ArticleContainer;
