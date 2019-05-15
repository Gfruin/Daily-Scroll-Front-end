import React from 'react'

const Articles = (props) => {
	const articleList = props.articles.map((article) => {
		return (
			<li key={article._id}>
				<span>{article.title}</span><br/>
				<span>{article.description}</span><br/>
				<button onClick={props.deleteArticle.bind(null, article._id)}>Delete</button>
				<button onClick={props.showModal.bind(null, article)}>Edit</button>
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