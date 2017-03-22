export function addBook(fields) {
	return {
		type: "ADD",
		//Promises are really unnecessary for localStorage but potentially useful in more complex cases
		payload: new Promise((resolve, reject) => {
			try {
				//Repeating myself here but not that big of a deal
				let books = JSON.parse(localStorage.getItem('books'))

				//Rudimentary id handling
				let maxid = 0

				if (!books) {
					books = []
					localStorage.setItem('books', '[]')
				}

				//no case matching, intentional
				let bookExists = books.some(function(book) {
					return (book.author == fields.author && book.title == fields.title)
				})

				if (bookExists) {
					reject('Эта книга уже есть в списке!')
				} else {
					let ids_array = books.map(function(book) {
						return book.id
					})

					let max_id = ids_array.reduce(function(acc, val) {
						return Math.max(acc, val)
					}, 0)

					max_id += 1

					books.push({
						...fields,
						id: max_id
					})

					localStorage.setItem('books', JSON.stringify(books))
					resolve(fields)
				}
			} catch(e) {
				console.log(e)
				reject('Unhandled error. Developers may look in the console for details')
			}
		})
	}
}
