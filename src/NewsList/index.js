import React from 'react'

const NewsArticles = (props) => {
	const newsArticleList = props.newsArticles.map((newsArticle, i) => {
		return (
			<div key={i}>
				<main className="articleView"><br/>
					<h3>{newsArticle.title}</h3>
					<p className="source"> Source: {newsArticle.source}</p><br/>
					<p className="description"> Description: {newsArticle.description}</p><br/>
					<a href={newsArticle.url} target="_blank">View Source Article</a>
				</main>
			</div>

		)
	})

	return(
		<ul>
			{newsArticleList}
		</ul>
	)
}
export default NewsArticles