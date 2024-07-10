import { useState } from "react";
import BooksList from "./BooksList";
import FavoritesList from "./FavoritesList";

function MainCards() {
  const [faveBooks, setFaveBooks] = useState([]);
  return (
    <div className="flex mt-7">
      <BooksList faveBooks={faveBooks} setFaveBooks={setFaveBooks} />
      {!!faveBooks.length && <FavoritesList faveBooks={faveBooks} />}
    </div>
  );
}

export default MainCards;
