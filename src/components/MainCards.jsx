import BooksList from "./BooksList";
import FavoritesList from "./FavoritesList";

function MainCards() {
  return (
    <div className="flex mt-7">
      <BooksList />
      <FavoritesList />
    </div>
  );
}

export default MainCards;
