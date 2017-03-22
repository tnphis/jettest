import React from 'react'
import {connect} from 'react-redux'

import {addBook} from '../actions/books_ADD'

class AddBook extends React.Component {
	constructor(props) {
		super()
		this.state = {
			fields: {}
		}

		this.handleChange = this.handleChange.bind(this)
	}
	addBook(e) {
		e.preventDefault()
		this.props.addBook(this.state.fields)
	}
	handleChange(e, field) {
		var currentFields = this.state.fields
		currentFields[field] = e.target.value

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
								<label htmlFor="pic">Обложка</label>
							</div>
							<div className="column_9">
								<input type="file" name="pic" id="pic"/>
							</div>
						</div>
						<div className="row padding-top padding-bottom">
							<div className="column_12 text center">
								<button type="submit" className="bck theme">Добавить</button>
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
