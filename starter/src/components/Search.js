import PropTypes from 'prop-types';
import { useState } from "react";
import { Link } from 'react-router-dom';
import * as BooksAPI from "../utils/BooksAPI";
import Book from "./Book";

const Search = ({books, changeShelf}) => {

    const [bookSearchList, setBookSearchList] = useState([]);

    const bookSearch = (value) => {
        if(value !== "") {
            BooksAPI.search(value).then((book) => {
                if(book.error){
                  setBookSearchList([]);
                } else {
                  setBookSearchList(book);
                }
            });
        } else {
            setBookSearchList([]);
        }
    }

    const bookSearchDisplay = bookSearchList.map((bookSearch) => {
        books.map((book) => {
            if (book.id === bookSearch.id) {
              bookSearch.shelf = book.shelf;
            }
            return book;
        });
        return bookSearch;
    });
    
    return (
        <div className="search-books">
            <div className="search-books-bar">
              <Link to="/" className="close-search">
                Close
              </Link>
              <div className="search-books-input-wrapper">
                <input
                  type="text"
                  placeholder="Search by title, author, or ISBN"
                  onChange={(event) => bookSearch(event.target.value)}
                />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                    {
                        bookSearchDisplay.map((book) => (
                            <Book key={book.id} book={book} shelf={book.shelf ? book.shelf : 'none'} changeShelf={changeShelf}/>
                        ))
                    }
              </ol>
            </div>
        </div>
    );
}

Search.propTypes = {
  books: PropTypes.array.isRequired,
  changeShelf: PropTypes.func.isRequired
}

export default Search;

