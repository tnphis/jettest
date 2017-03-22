import React from 'react'

import {Header} from './header.jsx'

export class Root extends React.Component {
	render() {return (
		<section className="jettest-main bck light" style={{'height': 'inherit'}}>
			{/*Tuktuk likes semantic tags...*/}
			<Header/>
			<article>
				{this.props.children}
			</article>
		</section>
	)}
}
