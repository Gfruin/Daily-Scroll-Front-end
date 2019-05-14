import React, { Component } from 'react'
import CreateArticle from '../CreateArticle/'

class ArticleContainer extends Component {
	constructor() {
		super();
		this.state = {
			articles: [],

		}
	}
	render() {
		return(
			<div>
				<CreateArticle/>
			</div>

		)
	}
}

export default ArticleContainer;
