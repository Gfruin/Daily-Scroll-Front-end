import React from 'react'

const EditArticle = (props) => {
	return(
		<div>
			<h4> Edit Article </h4>
			<form onSubmit={props.closeAndEdit}>
				<label>
				Edit Article:
				<input type="text" name="title" onChange={props.handleFormChange} value={props.articleToEdit.title}/>
				</label>
				<label>
         		Edit Description:
          		<textarea type="text" name="description" onChange={props.handleFormChange} value={props.articleToEdit.description}/>
       			</label>
       			<input type="Submit"/>
			</form>
		</div>


		)
}










export default EditArticle