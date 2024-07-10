import { useState } from "react";

function BookCard({ book, faveHandler }) {
  const { title, author, language, pages, image } = book;

  const [redLike, setRedLike] = useState(false);

  const likeHandler = () => {
    setRedLike(!redLike);
    faveHandler(book, redLike);
  };

  return (
    <div className="flex bg-zinc-800 rounded-lg py-3 px-2 mb-2">
      <div className="w-[7%]">
        <img className="w-16 h-24 rounded-lg" src={image} alt="" />
      </div>
      <div className="text-white mx-5 w-[85%]">
        <div className="text-2xl font-bold">{title}</div>
        <div className="my-2">{author}</div>
        <div className="flex gap-x-5 text-zinc-400">
          <div>{language}</div>
          <div>{pages}pages</div>
        </div>
      </div>
      <button
        className="pr-10 text-2xl h-1 w-7 transition-all hover:scale-125"
        onClick={likeHandler}
      >
        {redLike ? "❤️" : "🤍"}
      </button>
    </div>
  );
}

export default BookCard;
