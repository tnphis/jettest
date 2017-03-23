//Non-ES6 libs and assets
require('../../bower_components/tuktuk/tuktuk')
require('../../bower_components/tuktuk/tuktuk.css')
require('../../bower_components/tuktuk/tuktuk.grid.css')
require('../../bower_components/tuktuk/tuktuk.icons.css')
require('../css/tuktuk.theme.custom.css')
require('../css/app.styl')

//Main imports
import React from 'react'
import {render} from 'react-dom'
import {Router, Route, IndexRoute, hashHistory} from 'react-router'
import {Provider} from 'react-redux'

//App imports
import {Root} from './components/root.jsx'
import BooksList from './containers/bookslist.jsx'
import AddBook from './containers/addbook.jsx'
import mainstore from './store'

class App extends React.Component {
	componentDidMount() {
		let indicator = document.getElementById('loadingIndicator')
		indicator.parentNode.removeChild(indicator)
	}
	render() {
		return (
			<Router history={hashHistory}>
				<Route path="/" component={Root}>
					<IndexRoute component={BooksList}/>
					<Route path="bookslist" component={BooksList}/>
					<Route path="addbook" component={AddBook}/>
				</Route>
			</Router>
		)
	}
}

render(
	<Provider store={mainstore}>
		<App/>
	</Provider>,
	window.document.getElementById('app')
)
