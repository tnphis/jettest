export function deleteBook(id) {
	return {
		type: "DELETE",
		//Promises are really unnecessary for localStorage but potentially useful in more complex cases
		payload: new Promise((resolve, reject) => {
			try {
				//Repeating myself here but not that big of a deal
				let books = JSON.parse(localStorage.getItem('books'))
				if (!books) {
					books = []
					localStorage.setItem('books', '[]')
					resolve(id)
				}

				let book_index = books.findIndex(function(book) {
					return book.id == id
				})

				books.splice(book_index, 1)
				localStorage.setItem('books', JSON.stringify(books))
				//to make refreshBooks inside reducer work!!
				resolve(books)
			} catch(e) {
				console.log(e)
				reject('Unhandled error. Developers may look in the console for details')
			}
		})
	}
}
