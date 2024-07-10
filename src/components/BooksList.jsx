import BookCard from "./BookCard";
import books from "./books";

function BooksList() {
  return (
    <div className="w-[75%]">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}

export default BooksList;
