import { useState } from "react";

import BooksList from "./BooksList";
import FavoritesList from "./FavoritesList";
import SearchBox from "./SearchBox";

import { books as bookData } from "../constants/books";

function MainCards() {
  const [faveBooks, setFaveBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState(bookData);

  const searchHandler = (e) => {
    e.preventDefault();
    if (search) {
      const newBooks = bookData.filter((book) =>
        book.title.toLowerCase().includes(search)
      );
      setBooks(newBooks);
    } else {
      setBooks(bookData);
    }
  };

  return (
    <>
      <SearchBox
        search={search}
        setSearch={setSearch}
        searchHandler={searchHandler}
      />
      <div className="flex mt-7">
        <BooksList
          faveBooks={faveBooks}
          setFaveBooks={setFaveBooks}
          books={books}
        />
        {!!faveBooks.length && <FavoritesList faveBooks={faveBooks} />}
      </div>
    </>
  );
}

export default MainCards;
