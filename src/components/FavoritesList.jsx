import books from "./books";

function FavoritesList() {
  return (
    <div className="rounded-lg bg-blue-700 w-[23%] ml-5 h-fit pb-3 text-white">
      <div className="font-bold text-xl px-3 pt-3">Favorites</div>
      <div>
        {books.map((book) => (
          <div
            key={book.id}
            className="flex items-center bg-blue-500 mx-3 my-2 rounded-lg"
          >
            <img
              className="w-10 h-14 m-2 mr-3 rounded-lg"
              src={book.bookPic}
              alt=""
            />
            <div>{book.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FavoritesList;
