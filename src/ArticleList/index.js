import React from 'react'
import Button from 'react-bootstrap/Button';

const Articles = (props) => {
	const articleList = props.articles.map((article) => {
		return (
			<div key={article._id}>
				<main className="articleView"><br/>
					<h2>{article.title}</h2>
					<p className="category">{article.category}</p><br/>
					<p>{article.description}</p><br/>
					<button onClick={props.deleteArticle.bind(null, article._id)}>Delete</button>
					<button onClick={props.showModal.bind(null, article)}>Edit</button>
					<button onClick={props.displayShow}> Show Article</button>
				</main>
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