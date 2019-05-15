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
			const response = await fetch(process.env.REACT_APP_BACKEND_URL + 'articles')
			if(response.status !== 200) {
				throw Error(response.statusText)
			}
			const articlesParsed = await response.json()
			this.setState({articles: articlesParsed.data})

		} catch(err) {
			console.log(err)
		}
	}
	render() {
		return(
			<div>
				<CreateArticle/>
				<Articles articles={this.state.articles}/>
			</div>

		)
	}
}

export default ArticleContainer;
