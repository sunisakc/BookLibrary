// Book Class : Represents a Book
    class Book {
        constructor(title,autor,isbn) {
            this.title;
            this.autor;
            this.isbn;
        }
    }

// UI Class: Handle UI Tasks
    class UI {
        static displayBooks(){
            const StoredBook = [
                {
                    title: 'Book One',
                    autor: 'Delia Owens',
                    isbn:'1234578'
                },
                {
                    title: 'Book One',
                    autor: 'Eric Carle',
                    isbn:'98765004'
                },{
                    title: 'Book One',
                    autor: 'Werner Sonne',
                    isbn:'1234321567'
                }
            ];
            const books = StoredBook;

            books.forEach((book) => UI.addBookToList());
        }
    }

// Store Class: Handles Storage

// Event: Display Books

// Event: Add a Book

// Event: Remove A Book