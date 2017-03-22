const booksReducer = (state = {
	books: []
}, action) => {
	//Working with localStorage within the actions rather than resolvers simulates working with a server
	switch (action.type) {
		case 'ADD_FULFILLED':
			//this creates a lot of problems with the unmounted list component
			//it refreshes on navigation anyway
			//refreshBooks()
			alert('Книга добавлена')
			break
		case 'DELETE_FULFILLED':
			refreshBooks()
			break
		case 'REFRESH_FULFILLED':
			refreshBooks()
			break
		case 'ADD_REJECTED':
			alertError()
			break
		case 'DELETE_REJECTED':
			alertError()
			break
		case 'REFRESH_REJECTED':
			alertError()
			break
	}

	//superbasic
	function alertError() {
		alert(action.payload)
	}

	function refreshBooks(payload) {
		state = {
			...state,
			'books': action.payload
		}
	}

	return state;
}

export default booksReducer;
