import React from 'react'

const NewsArticles = (props) => {
	const newsArticleList = props.newsArticles.map((newsArticle, i) => {
		return (
			<div key={i}>
				<main className="articleView">{newsArticle.title}<br/>
					<p> Source: {newsArticle.source}</p><br/>
					<p> Description: {newsArticle.description}</p><br/>
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