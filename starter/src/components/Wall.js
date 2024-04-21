import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import BookShelve from "./BookShelve";

const Wall = ({books, shelfsName, changeShelf}) => {
    return (
        <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    {
                        shelfsName.map((shelf) => {
                            return <BookShelve key={shelf.key} books={books} shelf={shelf} changeShelf={changeShelf}/>
                        })
                    }
                </div>
            </div>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
        </div>
    );
}

Wall.propTypes = {
    books: PropTypes.array.isRequired,
    shelfsName: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
}

export default Wall;

