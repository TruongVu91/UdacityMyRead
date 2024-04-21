import PropTypes from 'prop-types';
import { useState } from "react";

const Book = ({book, shelf, changeShelf}) => {

    const [shelfValue, setShelfValue] = useState(shelf);

    const handleChangeShelf = (e) => {
        e.preventDefault();
        const selfName = e.target.value;
        setShelfValue(selfName);
        changeShelf(book, selfName)
    }

    return (
        <li>
            <div className="book">
                <div className="book-top">
                    <div
                    className="book-cover"
                    style={{
                        width: 128,
                        height: 193,
                        backgroundImage:
                        `url(${book.imageLinks ? book.imageLinks.thumbnail : "No Image Link"})`,
                    }}
                    ></div>
                    <div className="book-shelf-changer">
                    <select value={shelfValue} onChange={handleChangeShelf}>
                        <option value="moveto" disabled>
                        Move to...
                        </option>
                        <option value="currentlyReading">
                        Currently Reading
                        </option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors}</div>
            </div>
        </li>
    );
}

Book.propTypes = {
    book: PropTypes.object.isRequired,
    shelf: PropTypes.string.isRequired,
    changeShelf: PropTypes.func.isRequired
}

export default Book;