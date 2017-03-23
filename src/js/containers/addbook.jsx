import React from 'react'
import {connect} from 'react-redux'

import {addBook} from '../actions/books_ADD'

class AddBook extends React.Component {
	constructor(props) {
		super()
		this.state = {
			fields: {}
		}

		this.clearPic = this.clearPic.bind(this)
		this.handleChange = this.handleChange.bind(this)
		this.handleFileChange = this.handleFileChange.bind(this)
	}
	addBook(e) {
		e.preventDefault()
		this.props.addBook(this.state.fields)
	}
	clearPic(e) {
		e.preventDefault()
		document.getElementById('pic').value = null
		this.updateFields('pic', null)
	}
	handleChange(e, field) {
		this.updateFields(field, e.target.value)
	}
	handleFileChange(e) {
		if (e.target.files && e.target.files[0]) {
			var self = this
			document.getElementById('book_submit_button').disabled = true
			let fr = new FileReader
			fr.readAsDataURL(e.target.files[0])
			fr.onload = function() {
				self.updateFields('pic', fr.result)
				document.getElementById('book_submit_button').disabled = null
			}

		} else {
			this.updateFields('pic', null)
		}
	}
	updateFields(field, value) {
		let currentFields = this.state.fields
		currentFields[field] = value
		this.setState({
			fields: currentFields
		})
	}
	render() {
		return (
			<div className="row text center padding-top">
				<div className="column_12">
					<form onSubmit={this.addBook.bind(this)}>
						<div className="row">
							<div className="column_3 text left jettest-form-label">
								<label htmlFor="author">Автор</label>
							</div>
							<div className="column_9">
								<input
									type="text"
									name="author"
									onChange={(e) => this.handleChange(e, 'author')}
									placeholder="Автор"
									id="author"
									required
								/>
							</div>
						</div>
						<div className="row">
							<div className="column_3 text left jettest-form-label">
								<label htmlFor="title">Название</label>
							</div>
							<div className="column_9">
								<input
									type="text"
									name="title"
									onChange={(e) => this.handleChange(e, 'title')}
									placeholder="Название"
									id="title"
									required
								/>
							</div>
						</div>
						<div className="row padding-top">
							<div className="column_3 text left">
								<label htmlFor="pic">Обложка</label><hr/>
								<small style={{'fontSize': '.75em'}}>Выберите файл с изображением обложки. Оптимальный размер - 145x205px.</small>
							</div>
							<div className="column_8">
								<input
									type="file"
									name="pic"
									id="pic"
									onChange={this.handleFileChange}
								/>
							</div>
							<div className="column_1">
								<button type="button" className="tiny alert" onClick={this.clearPic}><span className="icon remove"></span></button>
							</div>
						</div>
						<div className="row padding-top padding-bottom">
							<div className="column_12 text center">
								<button id="book_submit_button" type="submit" className="bck theme">Добавить</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {} //nuthin to map...
}

const mapActionsToProps = (dispatch) => {
    return {
		addBook: (fields) => {
			dispatch(addBook(fields))
		}
	}
}

export default connect(mapStateToProps, mapActionsToProps)(AddBook)
