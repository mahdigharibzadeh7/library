function BookCard({ book: { id, name, author, lang, numOfPages, bookPic } }) {
  return (
    <div key={id} className="flex bg-zinc-800 rounded-lg py-3 px-2 mb-2">
      <div className="w-[7%]">
        <img className="w-16 h-24 rounded-lg" src={bookPic} alt="" />
      </div>
      <div className="text-white mx-5 w-[85%]">
        <div className="text-2xl font-bold">{name}</div>
        <div className="my-2">{author}</div>
        <div className="flex gap-x-5 text-zinc-400">
          <div>{lang}</div>
          <div>{numOfPages}pages</div>
        </div>
      </div>
      <button className="-mt-16 pr-5 text-2xl">🤍</button>
    </div>
  );
}

export default BookCard;
