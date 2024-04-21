import PropTypes from 'prop-types';
import Book from "./Book";

const BookShelve = ({books, shelf, changeShelf}) => {

    const bookOnShelf = books.filter((book) =>
        book.shelf === shelf.key
    );

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{shelf.value}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {bookOnShelf.map((book) => (
                        <Book key={book.id} book={book} shelf={shelf.key} changeShelf={changeShelf}/>
                    ))}
                </ol>
            </div>
        </div>
    );
}

BookShelve.propTypes = {
    books: PropTypes.array.isRequired,
    shelf: PropTypes.object.isRequired,
    changeShelf: PropTypes.func.isRequired
}

export default BookShelve;