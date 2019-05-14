import React from 'react'

const Articles = (props) => {
	const articleList = props.articles.map((article) => {
		return (
			<li key={movie._id}>
			<span>{article.title}</span><br/>
			<span>{article.description}</span><br/>
			</li>

			)
	})
	return(
		<ul>
			{articleList}
		</ul>
		)
}
export default Articles