import React from 'react'

const NewsArticles = (props) => {
	const newsArticleList = props.newsArticles.map((newsArticle) => {
		return (
			<li key={newsArticle._id}>
				<span>{newsArticle.title}</span><br/>
				<span>{newsArticle.description}</span><br/>
				<a href={newsArticle.url} target="_blank">View Source Article</a>
			</li>

		)
	})

	return(
		<ul>
			{newsArticleList}
		</ul>
	)
}
export default NewsArticles