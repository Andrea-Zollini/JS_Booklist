class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class Store {

    static getBooks() {
        let books;
        if (localStorage.getItem('books') === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }

    static storeBook(book) {
        const books = Store.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }

    static deleteBook(isbn) {
        const books = Store.getBooks();
        books.forEach((book, index) => {
            if (book.isbn === isbn) {
                books.splice(index, 1);
            }
        });
        localStorage.setItem('books', JSON.stringify(books));
    }
}

class UI {
    static showBooks() {
        const books = Store.getBooks();

        books.forEach((book) => UI.addBook(book))
    }

    static addBook(book) {
        const list = document.querySelector('#book_list');
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="align-middle">${book.title}</td>
            <td class="align-middle">${book.author}</td>
            <td class="align-middle">${book.isbn}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `
        list.append(row);
    }

    static deleteBook(el) {
        if (el.classList.contains('delete')) {
            el.parentElement.parentElement.remove();
        }
    }

    static createAlert(message, className) {
        const form = document.getElementById('book_form');
        const alert = document.createElement('div');
        alert.classList.add('alert', `alert-${className}`, 'mt-3');
        alert.textContent = message;
        form.append(alert);
        setTimeout(() => {
            alert.remove();
        }, 2000);
    }

    static clearFields() {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
    }

}

// Event: Form submit
const form = document.querySelector('#book_form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    // Form validation
    if (title === '' || author === '' || isbn === '') {
        UI.createAlert('Fill out all the fields', 'danger');
    } else {
        const newBook = new Book(title, author, isbn);
        UI.addBook(newBook);
        Store.storeBook(newBook);
        UI.createAlert('Book added successfully', 'success');
        UI.clearFields();
    }

});
// Event: display books
document.addEventListener('DOMContentLoaded', UI.showBooks);
// Event: delete book
document.querySelector('#book_list').addEventListener('click', (e) => {
    UI.deleteBook(e.target);
    Store.deleteBook(e.target.parentElement.previousElementSibling.textContent);
    UI.createAlert('Book removed successfully', 'success');
})