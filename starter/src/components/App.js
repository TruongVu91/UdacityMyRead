import "../css/App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import * as BooksAPI from "../utils/BooksAPI";
import Wall from "./Wall";
import Search from "./Search";

const App = () => {
  
  const shelfsName = [
    { key: 'currentlyReading', value: 'Currently Reading' },
    { key: 'wantToRead', value: 'Want to Read' },
    { key: 'read', value: 'Have Read' },
  ];

  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
    }
    getBooks();
  }, [])

  const changeShelf = (book, shelfName) => {
    BooksAPI.update(book, shelfName);
    if (shelfName === 'none') {
      setBooks(books.filter((bookItem) => bookItem.id !== book.id));
    } else {
      book.shelf = shelfName;
      setBooks(books.filter((bookItem) => bookItem.id !== book.id).concat(book));
    }
  };
  
  return (
    <Routes>
      <Route exact path="/" element={
        <Wall books={books} shelfsName={shelfsName} changeShelf={changeShelf}/>
      }/>
      <Route exact path="/search" element={
        <Search books={books} shelfsName={shelfsName} changeShelf={changeShelf}/>
      }/>
    </Routes>
  );
};

export default App;
