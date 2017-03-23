import React from 'react'
import {connect} from 'react-redux'

import {refreshBooks} from '../actions/books_REFRESH'
import {deleteBook} from '../actions/books_DELETE'

class BooksList extends React.Component {
	componentWillMount() {
		this.props.refresh()
	}
	deleteBook(book) {
		if (confirm('Подтвердите удаление книги "' + book.title + '" автора ' + book.author)) {
			this.props.deleteBook(book.id)
		}
	}
	render() {
		var self = this
		return (
			<div className="row text center padding-top">
				<div className="column_12">
					<button onClick={this.props.refresh}><span className="icon refresh"></span>Обновить</button>
					<table className="jettest-table">
						<thead>
							<tr className="bck dark">
								<th>Обложка</th>
								<th>Автор</th>
								<th>Название</th>
								<th style={{'width': '40px'}}><span className="icon trash"></span></th>
							</tr>
						</thead>
						<tbody>
							{!this.props.books || this.props.books.length == 0 ?
							(<tr>
								<td colSpan="4">Пока тут пусто</td>
							</tr>) :
							this.props.books.map(function(book, index) {return (
								<tr key={'row_' + index}>
									{/*This is begging to be a separate component but it would have
									to be fully integrated with redux due to the delete button
									- or just consist of 3 tds*/}
									<td key={'pic_td' + index}>
										{book.pic ? <img style={{'maxWidth': '145px', 'maxHeight': '205px'}} src={book.pic}></img> : null}
									</td>
									<td key={'author_td' + index}>{book.author}</td>
									<td key={'title_td' + index}>{book.title}</td>
									<td key={'delete_td' + index}>
										<button key={'delete_btn' + index} onClick={() => self.deleteBook(book)} className="tiny alert">
											<span key={'delete_icon' + index} className="icon trash"></span>
										</button>
									</td>
								</tr>)
							})}
						</tbody>
					</table>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
      books: state.books
	}
}

const mapActionsToProps = (dispatch) => {
    return {
		refresh: () => {
			dispatch(refreshBooks())
		},
		deleteBook: (id) => {
			dispatch(deleteBook(id))
		}
	}
}

export default connect(mapStateToProps, mapActionsToProps)(BooksList)
