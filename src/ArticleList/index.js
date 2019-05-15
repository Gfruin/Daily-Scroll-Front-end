import React from 'react'

const Articles = (props) => {
	const articleList = props.articles.map((article) => {
		return (
			<div key={article._id}>
			<span>{article.title}</span><br/>
			<span>{article.description}</span><br/>
			</div>

			)
	})
	return(
		<ul>
			{articleList}
		</ul>
		)
}
export default Articles