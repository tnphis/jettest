export function refreshBooks() {
	return {
		type: "REFRESH",
		//Promises are really unnecessary for localStorage but potentially useful in more complex cases
		payload: new Promise((resolve, reject) => {
			try {
				//Repeating myself here but not that big of a deal
				let books = JSON.parse(localStorage.getItem('books'))

				if (!books) {
					books = []
					localStorage.setItem('books', '[]')
				}

				resolve(books)
			} catch(e) {
				console.log(e)
				reject('Unhandled error. Developers may look in the console for details')
			}
		})
	}
}
