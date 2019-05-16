import React, { Component } from 'react'
import CreateArticle from '../CreateArticle/'
import Articles from '../ArticleList'
import EditArticle from '../EditArticle'

class ArticleContainer extends Component {
	constructor() {
		super();
		this.state = {
			articles: [],
			articleToEdit: {
				_id: null,
				title: '',
				description: '',
				category: ''
			},
			modalShowing: false,
			displayCreate: false,
			displayShow: false,
			displayIndex: false

		}
	}
	componentDidMount(){
		this.getArticles()	
	}
	getArticles = async () => {
		try {
			const response = await fetch(process.env.REACT_APP_BACKEND_URL + '/api/v1/articles')
			if(response.status !== 200) {
				throw Error(response.statusText)
			}
			const articlesParsed = await response.json()
			this.setState({articles: articlesParsed.data})

		} catch(err) {
			console.log(err)
		}
	}

	addArticle = async (article,e) => {
		e.preventDefault()
		console.log(article);
		try {
			const createdArticle = await fetch(process.env.REACT_APP_BACKEND_URL + '/api/v1/articles', {
				method: 'POST',
				credentials: 'include',
				body: JSON.stringify(article),
				headers: {
					'Content-Type': 'application/json'
				}
			})
			console.log(createdArticle);
			const parsedResponse = await createdArticle.json();
			console.log(parsedResponse);

			this.setState({articles: [...this.state.articles, parsedResponse.data.newArticle]})

			this.displayIndex();

		} catch(err) {
			console.log(err)
		}
	}

	closeAndEdit = async (e) => {
		e.preventDefault();

		try {
			const editResponse = await fetch(process.env.REACT_APP_BACKEND_URL + '/api/v1/articles/' + this.state.articleToEdit._id, {
				method: 'PUT',
				credentials: 'include',
				body: JSON.stringify(this.state.articleToEdit),
				headers: {
					'Content-Type': 'application/json'
				}
			})

			const parsedResponse = await editResponse.json();

			const editedArticleArray = this.state.articles.map((article) => {
				if(article._id === this.state.articleToEdit._id) {
					article = parsedResponse.data
				}
				return article

			})
			this.setState({
				articles: editedArticleArray,
				modalShowing: false
			})
		}catch(err) {
			console.log(err);
		}
	}

	handleFormChange = (e) => {
		this.setState({
			articleToEdit: {
				...this.state.articleToEdit,
				[e.target.name]: e.target.value
			}
		})
	}

	showModal = (article) => {
		console.log(article, "<-----here is the showModal");
		this.setState({
			modalShowing: true,
			articleToEdit: article
		})

	}


	deleteArticle = async (id, e) => {
		console.log(id, 'this is the id');
		e.preventDefault();
		try {
			const deleteArticle = await fetch(process.env.REACT_APP_BACKEND_URL + '/api/v1/articles/' + id, {
				method: 'DELETE',
				credentials: 'include'
			});
			console.log(deleteArticle, 'this means the deleteArticle was hit');
			const deleteArticleJson = await deleteArticle.json();
			this.setState({articles: this.state.articles.filter((article, i) => article._id !== id)})

		}catch(err) {
			console.log(err)
		}
	}
	displayShow = () => {
		this.setState({
			displayShow: true,
			displayCreate:false,
			displayIndex: false
		})
	}
	displayCreate = () => {
		this.setState({
			displayShow: false,
			displayCreate:true,
			displayIndex: false
		})
	}
	displayIndex = () => {

		console.log("displayIndex fired")

		this.setState({
			displayShow: false,
			displayCreate:false,
			displayIndex: true
		})
	}
	resetDisplay = () => {
		this.setState({
			displayShow: false,
			displayCreate:false,
			displayIndex: false
		})
	}

	render() {
		return(
			<div>
				<div onClick={this.displayCreate}>
				CreateArticle
				</div>
				{ this.state.modalShowing == false && this.state.displayCreate == true ?<CreateArticle 
						addArticle={this.addArticle} 
						displayIndex={this.displayIndex} /> : null}
				 { this.state.modalShowing == false && this.state.displayIndex == true ? <Articles 
					articles={this.state.articles} 
					showModal={this.showModal}
					deleteArticle={this.deleteArticle} /> : null }


				{
					this.state.modalShowing 
					?
					<EditArticle 
						articleToEdit={this.state.articleToEdit} 
						closeAndEdit={this.closeAndEdit} 
						handleFormChange={this.handleFormChange}

					/> 
					: 
					null
				}
			</div>

		)
	}
}

export default ArticleContainer;
