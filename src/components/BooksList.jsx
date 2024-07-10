import React from "react";
import BookCard from "./BookCard";
import books from "./books";

function BooksList() {
  return (
    <div className="mx-64 mt-20">
      {books.map((book) => (
        <BookCard book={book} />
      ))}
    </div>
  );
}

export default BooksList;
