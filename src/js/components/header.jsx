import React from 'react'
import {Link} from 'react-router'

export class Header extends React.Component {
	constructor(props) {
		super(props)
		this.data_attr = {
			'data-tuktuk': 'menu'
		}
	}

	render() {return (
		<div className="jettest-header bck theme">
			<header className="row text center">
				<nav {...this.data_attr} className="text bold">
					 <Link to="/bookslist" activeClassName="active"><span className="icon list"></span>Список книг</Link>
					 <Link to="/addbook" activeClassName="active" className="margin-left"><span className="icon plus-sign"></span>Добавить книгу</Link>
				</nav>
			</header>
		</div>
	)}
}
