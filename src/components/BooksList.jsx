import { useState } from "react";
import BookCard from "./BookCard";
import books from "../constants/books";

function BooksList({ faveBooks, setFaveBooks }) {
  const faveHandler = (book, status) => {
    if (status) {
      const newBookList = faveBooks.filter((i) => i.id !== book.id);
      setFaveBooks(newBookList);
    } else {
      setFaveBooks((faveBooks) => [...faveBooks, book]);
    }
  };
  return (
    <div className="w-full">
      {books.map((book) => (
        <BookCard key={book.id} book={book} faveHandler={faveHandler} />
      ))}
    </div>
  );
}

export default BooksList;
