import React from 'react'

const NewsArticles = (props) => {
	const newsArticleList = props.newsArticles.map((newsArticle, i) => {
		return (
			<div key={i}>
				<span>{newsArticle.title}</span><br/>
				<span>{newsArticle.description}</span><br/>
				<a href={newsArticle.url} target="_blank">View Source Article</a>
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