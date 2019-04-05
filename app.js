// Book Class : Represents a Book
    class Book {
        constructor(title,author,isbn) {
            this.title;
            this.author;
            this.isbn;
        }
    }

// UI Class: Handle UI Tasks
    class UI {
        static displayBooks(){
            const StoredBook =[
                {
                    title: 'Book One',
                    author: 'Delia Owens',
                    isbn:'1234578'
                },
                {
                    title: 'Book One',
                    author: 'Eric Carle',
                    isbn:'98765004'
                },
                {
                    title: 'Book One',
                    author: 'Werner Sonne',
                    isbn:'1234321567'
                }
            ];
            const books = StoredBook;

            books.forEach((book) => UI.addBookToList(book));
        }

        static addBookToList(book) {
            const list = document.querySelector('#book-list');
        
            const row = document.createElement('tr');

         row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;

            list.appendChild(row);
        }
        static deleteBook(el) {
            if(el.classList.contains('delete')) {
              el.parentElement.parentElement.remove();
            }
          }

       static clearFields() {
            document.querySelector('#title').value = '';
            document.querySelector('#author').value = '';
            document.querySelector('#isbn').value = '';
            }
         }

// Store Class: Handles Storage

// Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);
// Event: Add a Book
document.querySelector('#book-form').addEventListener('submit',(e)=>
{   
    // Prevent submit
    e.preventDefault();

    // Get form values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;
    //Instatiate book
    const book = new Book(title, author, isbn);

    // Add book to UI
    UI.addBookToList(book);

    //Method Clear fields
    UI.clearFields();
    
});
// Event: Remove A Book
document.querySelector('#book-list').addEventListener('click', (e) => {
    // Remove book from UI
    UI.deleteBook(e.target);
  
});